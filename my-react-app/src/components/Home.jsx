import '../style/home.css'

export const Home = () => {
	const bucketUrl = "https://storage.googleapis.com/shoshanat-images/public/homePage";

	return (
		<>
			<h1 id="header_p">ברוכים הבאים לשושנת העמקים</h1>
			<div id="wrapper">
				<div id="image">
					<div className="image i1"><img src={`${bucketUrl}/pic1.webp`} className="img1" /></div>
					<div className="image i2"><img src={`${bucketUrl}/pic2.webp`} className="img1" /></div>
					<div className="image i3"><img src={`${bucketUrl}/pic3.webp`} className="img1" /></div>
					<div className="image i4"><img src={`${bucketUrl}/pic4.webp`} className="img1" /></div>
					<div className="image i5"><img src={`${bucketUrl}/pic5.webp`} className="img1" /></div>
					<div className="image i6"><img src={`${bucketUrl}/pic6.webp`} className="img1" /></div>
					<div className="image i7"><img src={`${bucketUrl}/pic7.webp`} className="img1" /></div>
					<div className="image i8"><img src={`${bucketUrl}/pic8.webp`} className="img1" /></div>
				</div>
			</div>
		</>
	);
}
