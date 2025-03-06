import Carousel from 'react-bootstrap/Carousel';
import img1Url from '../../assets/images/others/1.jpg';
import img2Url from '../../assets/images/others/2.jpg';
import img3Url from '../../assets/images/others/3.jpg';
import './country-carousel.scss';

export const CountryCarousel = () => {
	return (
		<div className='carousel-container'>
			<Carousel>
				<Carousel.Item>
					<img className='d-block w-100' src={img1Url} alt='First slide' />
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={img2Url} alt='First slide' />
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={img3Url} alt='First slide' />
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
