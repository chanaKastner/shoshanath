import { useLocation, useNavigate } from 'react-router-dom'
import '../style/flowers.css'
import { useEffect, useState } from 'react';
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
							{/* <p>זרי אירוסין מרהיבים מפרחים חיים בלבד.</p> */}
						</figcaption>
					</figure>
				))
			)}

			{/* <figure className="effect-layla">
				<img src={componentsData[2].images[0]} alt="img03" />
				<figcaption>
					<h2>זרים משולבים</h2>
					<p>זרי אירוסין מרהיבים השזורים משילוב של פרחים חיים ומלאכותיים.</p>
				</figcaption>
			</figure> */}
		</div>
		{/* <h2>Lexi</h2>
				<div className="grid">
					<figure className="effect-lexi">
						<img src="wedding-bouquet-wooden-bench_1153-1092.webp" alt="img12"/>
						<figcaption>
							<h2>Altruistic <span>Lexi</span></h2>
							<p>Each and every friend is special. Lexi won't hide a single cookie.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-lexi">
						<img src="bouquet-fresh-flowers-multi-colored-elegance-generated-by-ai_188544-10140.webp" alt="img03"/>
						<figcaption>
							<h2>Altruistic <span>Lexi</span></h2>
							<p>Each and every friend is special. Lexi won't hide a single cookie.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
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
		{/* </div>    */}
	</>
}