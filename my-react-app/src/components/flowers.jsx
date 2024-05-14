import { useNavigate } from 'react-router-dom'
import '../style/flowers.css'
import componentsData from '../data.json'
import { useParams } from 'react-router-dom';

export const Flowers = () => {
	let navigate = useNavigate();

	const { name } = useParams();
	const pageData = componentsData.find((data) => data.componentName === name);

	console.log('name:', name);
	console.log('pageData:', pageData);
	console.log('pageData.categories:', pageData.categories);
	return <>
		<p className='p_header'>{name}</p>
		<div className="grid">
			{(
				pageData.categories.map((category, index) => (
					<figure className="effect-layla" key={index}>
						<img src={pageData.images[index]} alt="img06" />
						<figcaption onClick={() => navigate(`../categories/${category.componentName}`)}>
							<h2 className='nameCat'>{category.componentName}</h2>
						</figcaption>
					</figure>
				))
			)}
		</div>
	</>
}