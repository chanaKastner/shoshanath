import { useParams } from 'react-router-dom';
import '../style/subCategories.css'
import componentsData from '../data.json'
import { useState } from 'react';


export const Sub_Categories = () => {
    const { category } = useParams();
    // const [setDialogOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const pageData = componentsData.find((data) => {
        return data.categories.some((subcategory) => subcategory.componentName === category);
    });
    console.log({})

    const images = pageData.categories.find((subcategory) => subcategory.componentName === category).images;
    const nameImages = pageData.categories.find((subcategory) => subcategory.componentName === category).namesImg;

    console.log({ images })

    const openDialog = (index) => {
        debugger
        setSelectedImageIndex(index);
        // setDialogOpen(true);
    };


    return <>
        <p className='p_zerim'>{category}</p>
        <div className="grid_lexi">
            {images &&
                images.map((image, imageIndex) => (
                    <>
                        <a href={`#pic${imageIndex}`} onClick={() => openDialog(imageIndex)} >
                            <figure className="effect-lexi" key={imageIndex}>
                                <img key={imageIndex} src={image} alt={nameImages[imageIndex]} id={imageIndex + 1}
                                style={{scrollMarginTop: "30px"}} />
                                <figcaption>
                                    <p>{nameImages[imageIndex]}</p>
                                </figcaption>
                            </figure>
                        </a>
                    </>
                ))}
        </div>
        <div className="lightbox-target" id={`pic${selectedImageIndex}`} >
            {selectedImageIndex != 0 &&
                <a href={`#pic${selectedImageIndex}`} onClick={() => openDialog(selectedImageIndex - 1)}>
                    <i className="fa-solid fa-angle-left"></i>
                </a>
            }
            <img key={selectedImageIndex} src={images[selectedImageIndex]} alt={nameImages[selectedImageIndex]} />
            <div id = "div_nameImg">
                <p>{nameImages[selectedImageIndex]}</p>
            </div>
            {selectedImageIndex != images.length - 1 &&
                <a href={`#pic${selectedImageIndex}`} onClick={() => openDialog(selectedImageIndex + 1)}>
                    <i className="fa-solid fa-angle-right"></i>
                </a>
            }
            <div className="controls">           
            </div>
            <a className="lightbox-close" href={`#${selectedImageIndex+1}`}></a>
        </div>
    </>
}