import { useParams } from 'react-router-dom';
import '../style/subCategories.css';
import { useState } from 'react';
import componentsData from '../data.json';
import LazyLoad from 'react-lazyload';

export const Sub_Categories = () => {
    const { category } = useParams();
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const pageData = componentsData.find((data) => {
        return data.categories.some((subcategory) => subcategory.componentName === category);
    });

    if (!pageData) {
        console.error(`No page data found for category: ${category}`);
        return <div>Category not found</div>;
    }

    const images = pageData.categories.find((subcategory) => subcategory.componentName === category).images;
    const nameImages = pageData.categories.find((subcategory) => subcategory.componentName === category).namesImg;

    const openDialog = (index) => {
        setSelectedImageIndex(index);
    };
    const closeDialog = () => {
        setSelectedImageIndex(null);
    };

    return (
        <>
            <p className='p_zerim'>{category}</p>
            <div className="grid_lexi">
                {images && images.map((image, imageIndex) => {
                    // Remove leading slash if it exists
                    const sanitizedImage = image.startsWith('/') ? image.substring(1) : image;
                    const imageUrl = `https://storage.googleapis.com/shoshanat-images/public/${sanitizedImage}`;
                    console.log(`Image URL: ${imageUrl}`);
                    return (
                        <a key={imageIndex} href={`#pic${imageIndex}`} onClick={() => { openDialog(imageIndex) }}>
                            <LazyLoad height={200} once>
                                <figure className="effect-lexi">
                                    <img src={imageUrl} alt={nameImages[imageIndex]} onError={() => console.error(`Failed to load image: ${imageUrl}`)} />
                                    <figcaption>
                                        <p>{nameImages[imageIndex]}</p>
                                    </figcaption>
                                </figure>
                            </LazyLoad>

                        </a>
                    );
                })}
            </div>
            <div className="lightbox-target" id={`pic${selectedImageIndex}`} >
                <a href="#" onClick={closeDialog} className="close-button"> <button class="item-1">
                    <span class="inner">
                        <span class="label">Close</span>
                    </span>
                </button></a>
                {selectedImageIndex !== 0 &&
                    <a href={`#pic${selectedImageIndex}`} onClick={() => openDialog(selectedImageIndex - 1)}>
                        <i className="fa-solid fa-angle-left"></i>
                    </a>
                }
                {selectedImageIndex !== null &&
                    <img src={`https://storage.googleapis.com/shoshanat-images/public/${images[selectedImageIndex].startsWith('/') ? images[selectedImageIndex].substring(1) : images[selectedImageIndex]}`} alt={nameImages[selectedImageIndex]} />
                }
                <div id="div_nameImg">
                    <p>{nameImages[selectedImageIndex]}</p>
                </div>
                {selectedImageIndex !== images.length - 1 &&
                    <a href={`#pic${selectedImageIndex}`} onClick={() => openDialog(selectedImageIndex + 1)}>
                        <i className="fa-solid fa-angle-right"></i>
                    </a>
                }
            </div>
        </>
    );
};
