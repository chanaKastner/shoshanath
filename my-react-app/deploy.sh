#!/bin/bash

# Set variables
project_id="shoshanat"
image_name="shoshanat-img"
region="me-west1"
bucket_name="shoshanat-images"
images_path="./public"  # Specify the path to your local images directory

# Function to handle errors and exit gracefully
handle_error() {
  local code="$1"
  local msg="$2"
  echo "Error: $msg" >&2
  exit "$code"
}

# Function to authenticate with GCP
gcp_auth() {
  if ! gcloud auth application-default login; then
    handle_error 1 "Failed to authenticate with GCP"
  fi
}

# Function to get the version from Git
get_version() {
  version=$(git describe --abbrev=0 --tags 2>/dev/null)
  if [[ -z "$version" ]]; then
    echo "Warning: Could not determine version from Git. Using 'latest'."
    version="latest"
  fi
}

# Function to build and push the Docker image to GCR
build_and_push_image() {
  get_version
  docker build -t "gcr.io/$project_id/$image_name:$version" .
  if ! docker push "gcr.io/$project_id/$image_name:$version"; then
    handle_error 1 "Failed to push image to GCR"
  fi
}

# Function to upload images to the bucket
upload_images_to_bucket() {
  echo "Uploading images to the bucket..."
  if ! gsutil -m cp -r "$images_path/*" "gs://$bucket_name"; then
    handle_error 1 "Failed to upload images to the bucket"
  fi
}

# Function to deploy the image to Cloud Run
deploy_to_cloud_run() {
  gcloud run deploy "$image_name" \
    --image "gcr.io/$project_id/$image_name:$version" \
    --platform managed \
    --region "$region" \
    --min-instances=1 \
    --max-instances=5 \
    --memory=512Mi \
    --cpu=1 \
    --allow-unauthenticated \
    --timeout=1200s \
    --verbosity=debug
}

# Main script execution flow
echo "Starting deployment process..."

# Authenticate with GCP
# gcp_auth

# Get the version from Git (if available)
get_version
echo "Using version: $version"

# Build and push Docker image
build_and_push_image

# Upload images to the bucket
# upload_images_to_bucket

# Deploy to Cloud Run
deploy_to_cloud_run

echo "Deployment complete! App is live and images are uploaded to the bucket."
