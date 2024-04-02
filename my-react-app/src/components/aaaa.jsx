import React, { useState, useEffect } from 'react';
import '../style/big_images.css'
import { useParams } from 'react-router-dom';
import componentsData from '../data.json'

export const ImageGallery = () => {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const category = "בר מצווה";

    const pageData = componentsData.find((data) => {
        return data.categories.some((subcategory) => subcategory.componentName === category);
    });
    const images = pageData.categories.find((subcategory) => subcategory.componentName === category).images;

    // Function to open dialog with selected image
    const openDialog = (index) => {
        setSelectedImageIndex(index);
        setDialogOpen(true);
    };

    // Function to close dialog
    const closeDialog = () => {
        setDialogOpen(false);
    };

    // Effect to handle scrolling into the selected image when dialog opens
    useEffect(() => {
        if (isDialogOpen && selectedImageIndex !== null) {
            const carousel = document.querySelector('#carousel');
            if (carousel) {
                const img = carousel.querySelectorAll('img')[selectedImageIndex];
                if (img) {
                    img.scrollIntoView();
                }
            }
        }
    }, [isDialogOpen, selectedImageIndex]);

    return (



        <div>
            {/* Image gallery */}
            {images.map((image, imageIndex) => (
                <>
                    <div className="imageGallery">
                        <button key={imageIndex} onClick={() => openDialog(imageIndex)}>
                            <figure className="effect-lexi" key={imageIndex}>
                                <img key={imageIndex} src={image} alt={image} />
                                <figcaption>
                                    <p>{image}</p>
                                </figcaption>
                            </figure>
                        </button>
                    </div>
                </>
            ))
            }
            {/* {images.map((src, index) => (
          <button key={index} onClick={() => openDialog(index)}>
            <img src={src} alt={`Gallery item ${index + 1}`} />
          </button>
        ))} */}

            {/* Dialog */}
            {isDialogOpen && (
                <dialog id="dialog" open>
                    <div id="carousel">
                        {/* Assuming you want to display only the selected image in the dialog */}
                        {images[selectedImageIndex] && (
                        <img src={images[selectedImageIndex]}  alt={`Selected item ${selectedImageIndex + 1}`} />
                         )} 
                    </div>
                    <button id="closeDialogBtn" onClick={closeDialog}>
                        Close
                    </button>
                </dialog>
            )}

        </div >
    );
};


