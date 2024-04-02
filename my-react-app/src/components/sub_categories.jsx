import { useParams } from 'react-router-dom';
import '../style/subCategories.css'
// import '../style/big_images.css'
import componentsData from '../data.json'
import { useEffect, useState } from 'react';


export const Sub_Categories = () => {
    const { category } = useParams();
    // const [showDialog, setShowDialog] = useState(false);
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const pageData = componentsData.find((data) => {
        return data.categories.some((subcategory) => subcategory.componentName === category);
    });
    console.log({})

    const images = pageData.categories.find((subcategory) => subcategory.componentName === category).images;
    const nameImages = pageData.categories.find((subcategory) => subcategory.componentName === category).namesImg;

    console.log({ images })
    // pageData.categories
    //                 .filter((subcategory) => subcategory.componentName === category)
    //                 .map((subcategory, index) => (
    //                     <>
    //                         {subcategory.images.map((image, imageIndex) => ())}</>))

    const openDialog = (index) => {
        debugger
        setSelectedImageIndex(index);
        setDialogOpen(true);
    };
    const closeDialog = () => {
        setDialogOpen(false);
    };

    // Wait until the transition finished and the dialog opens before scrolling into view.
    // async function handleTransition(index) {
    //     const transition = document.startViewTransition(() => dialog.showModal());
    //     try {
    //         await transition.finished;
    //     } finally {
    //         document.querySelectorAll('#carousel img')[index].scrollIntoView();
    //     }
    // }
    return <>
        <p className='p_zerim'>{category}</p>
        {/* <main>
            <section>
                <div className="imageGallery">
                    <button>
                        <picture>
                            <img
                                width="309"
                                height="309"
                                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/image-gallery/images/img-1.webp"
                                alt="A cute cat"
                                loading="lazy"
                            />
                        </picture>
                    </button>
                </div> */}
        {/* {showDialog &&
                <dialog className="dialog" id="dialog">
                    <div className="dialogContainer">
                        <div className="carousel" id="carousel">
                            <picture>
                                <img
                                    width="309"
                                    height="309"
                                    src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/image-gallery/images/img-1.webp"
                                    alt="A cute cat"
                                    loading="lazy"
                                />
                            </picture>
                        </div> */}
        {/* <div className="controls">
              <button id="prevBtn"
                 onClick={() => carousel.scrollBy(-100, 0) }>
                <i className="ri-arrow-left-circle-fill"></i>
              </button>
              <button id="nextBtn" onclick="carousel.scrollBy(100, 0)">
                <i className="ri-arrow-right-circle-fill"></i>
              </button>
            </div> */}
        {/* </div>
                    <button id="closeDialogBtn" className="closeDialog"
                        onClick={() => closeDialog}>
                        <i className="ri-close-line"></i>
                    </button>
                </dialog>}
            </section></main> */}



        <div className="grid_lexi">
            {images &&
                images.map((image, imageIndex) => (
                    <>
                        <a href={`#pic${imageIndex}`} onClick={() => openDialog(imageIndex)} >
                            <figure className="effect-lexi" key={imageIndex}>
                                <img key={imageIndex} src={image} alt={nameImages[imageIndex]} id={imageIndex + 1}
                                style={{scrollMarginTop: "30px"}} />
                                <figcaption>
                                    {/* <h2>{subcategory.namesImg[imageIndex]}</h2> */}
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
                {/* <button id="prevBtn" onClick={() => setSelectedImageIndex[selectedImageIndex+1]}>
                  <i className="ri-arrow-left-circle-fill"></i>
                </button>
                <button id="nextBtn" onClick={() => setSelectedImageIndex[selectedImageIndex-1]}>
                  <i className="ri-arrow-right-circle-fill"></i>
                </button> */}
            </div>
            <a className="lightbox-close" href={`#${selectedImageIndex+1}`}></a>
        </div>
        {/* 
<div>
      <h2>{category}</h2>
      {pageData &&
        pageData.categories
          .filter((subcategory) => subcategory.componentName === category)
          .map((subcategory, index) => (
            <div key={index}>
              <h3>{subcategory.componentName}</h3>
              {subcategory.images.map((image, index) => (
                <img key={index} src={image} alt="" />
              ))}
            </div>
          ))}
    </div> */}

        {/* {(pageData.categories.map((category, index) => (
                                   <a href="#pic1">
 <figure className="effect-lexi" key={index}>
                    <img src={category.images[index]} alt={category.namesImg[index]} />
                            <figcaption>
                                <h2>פרח ... </h2>
                                <p>פרח יפהפה.</p>
                            </figcaption>
                        </figure></a>
                    <div className="lightbox-target" id="pic1">
                        <img src="wedding-bouquet-wooden-bench_1153-1092.webp" />
                        <a className="lightbox-close" href="#"></a>
                    </div>
                    ))
)} */}


        {/* <div className="grid">
            <a href="#pic1">
                <figure className="effect-lexi">
                    <img src="wedding-bouquet-wooden-bench_1153-1092.webp" alt="img12" />
                    <figcaption>
                        <h2>פרח ... </h2>
                        <p>פרח יפהפה.</p>
                    </figcaption>
                </figure></a>
            <div className="lightbox-target" id="pic1">
                <img src="wedding-bouquet-wooden-bench_1153-1092.webp" />
                <a className="lightbox-close" href="#"></a>
            </div>
            <figure className="effect-lexi">
                <img src="bouquet-fresh-flowers-multi-colored-elegance-generated-by-ai_188544-10140.webp" alt="img03" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="wedding-bouquet-wooden-bench_1153-1092.webp" alt="img12" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="bouquet-fresh-flowers-multi-colored-elegance-generated-by-ai_188544-10140.webp" alt="img03" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="wedding-bouquet-wooden-bench_1153-1092.webp" alt="img12" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="bouquet-fresh-flowers-multi-colored-elegance-generated-by-ai_188544-10140.webp" alt="img03" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="wedding-bouquet-wooden-bench_1153-1092.webp" alt="img12" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="bouquet-fresh-flowers-multi-colored-elegance-generated-by-ai_188544-10140.webp" alt="img03" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="wedding-bouquet-wooden-bench_1153-1092.webp" alt="img12" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="bouquet-fresh-flowers-multi-colored-elegance-generated-by-ai_188544-10140.webp" alt="img03" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="wedding-bouquet-wooden-bench_1153-1092.webp" alt="img12" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="bouquet-fresh-flowers-multi-colored-elegance-generated-by-ai_188544-10140.webp" alt="img03" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="wedding-bouquet-wooden-bench_1153-1092.webp" alt="img12" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="bouquet-fresh-flowers-multi-colored-elegance-generated-by-ai_188544-10140.webp" alt="img03" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="wedding-bouquet-wooden-bench_1153-1092.webp" alt="img12" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="bouquet-fresh-flowers-multi-colored-elegance-generated-by-ai_188544-10140.webp" alt="img03" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="wedding-bouquet-wooden-bench_1153-1092.webp" alt="img12" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="bouquet-fresh-flowers-multi-colored-elegance-generated-by-ai_188544-10140.webp" alt="img03" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="wedding-bouquet-wooden-bench_1153-1092.webp" alt="img12" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="bouquet-fresh-flowers-multi-colored-elegance-generated-by-ai_188544-10140.webp" alt="img03" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="wedding-bouquet-wooden-bench_1153-1092.webp" alt="img12" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure>
            <figure className="effect-lexi">
                <img src="bouquet-fresh-flowers-multi-colored-elegance-generated-by-ai_188544-10140.webp" alt="img03" />
                <figcaption>
                    <h2>Altruistic </h2>
                    <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                </figcaption>
            </figure> */}
        {/* 
                    <h2>Ming</h2>
                    </div>
				<div className="grid">
					<figure className="effect-ming">
						<img src="wedding-bouquet-wooden-bench_1153-1092.webp" alt="img09"/>
						<figcaption>
							<h2>Funny <span>Ming</span></h2>
							<p>Ming sits in the corner the whole day. She's into crochet.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-ming">
						<img src="bouquet-fresh-flowers-multi-colored-elegance-generated-by-ai_188544-10140.webp" alt="img08"/>
						<figcaption>
							<h2>Funny <span>Ming</span></h2>
							<p>Ming sits in the corner the whole day. She's into crochet.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
                <h2>Bubba</h2>
				<div className="grid">
					<figure className="effect-bubba">
						<img src="wedding-bouquet-wooden-bench_1153-1092.webp" alt="img02"/>
						<figcaption>
							<h2>Fresh <span>Bubba</span></h2>
							<p>Bubba likes to appear out of thin air.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-bubba">
						<img src="bouquet-fresh-flowers-multi-colored-elegance-generated-by-ai_188544-10140.webp" alt="img16"/>
						<figcaption>
							<h2>Fresh <span>Bubba</span></h2>
							<p>Bubba likes to appear out of thin air.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure> */}
        {/* </div> */}
    </>
}