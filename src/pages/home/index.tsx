import { CountryCarousel } from '../../components/country-carousel';
import { CountryList } from '../../components/country-list';
import { Navigation } from '../../components/navigation';
import { Col, Container, Row } from 'react-bootstrap';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { SecondaryHeaderImage } from '../../components/secondary-header-image';
import './home.scss';

export const Home = () => {
	return (
		<div className='home-container'>
			<Navigation />
			<Container>
				<Header />
				<Row>
					<Col>
						<div className='d-block d-md-none'>
							<SecondaryHeaderImage />
						</div>
					</Col>
				</Row>
				<Row className='mt-2'>
					<Col md={10}>
						<CountryCarousel />
					</Col>
					<Col md={2}>
						<div className='d-none d-md-block'>
							<SecondaryHeaderImage />
						</div>
					</Col>
				</Row>
				<Row className='mt-5'>
					<CountryList />
				</Row>
				<Row>
					<Footer />
				</Row>
			</Container>
		</div>
	);
};
