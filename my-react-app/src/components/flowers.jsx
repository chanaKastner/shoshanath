import { useNavigate, useParams } from 'react-router-dom';
import '../style/flowers.css';
import componentsData from '../data.json';

export const Flowers = () => {
    let navigate = useNavigate();
    const { name } = useParams();
    const pageData = componentsData.find((data) => data.componentName === name);

    const bucketUrl = "https://storage.googleapis.com/shoshanat-images/public";

    return (
        <>
            <p className='p_header'>{name}</p>
            <div className="grid">
                {pageData?.categories?.map((category, index) => {
                    // Remove leading slash if it exists
                    const sanitizedImage = pageData.images[index].startsWith('/') ? pageData.images[index].substring(1) : pageData.images[index];
                    const imageUrl = `${bucketUrl}/${sanitizedImage}`;
                    console.log(`Loading image: ${imageUrl}`);
                    return (
                        <figure className="effect-layla" key={index}>
                            <img src={imageUrl} alt={category.componentName} />
                            <figcaption onClick={() => navigate(`../categories/${category.componentName}`)}>
                                <h2 className='nameCat'>{category.componentName}</h2>
                            </figcaption>
                        </figure>
                    );
                }) || <p>Loading categories...</p>}
            </div>
        </>
    );
};
