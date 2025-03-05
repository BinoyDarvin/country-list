import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { ChangeEvent, useEffect, useState } from 'react';
import { fetchCountryList } from '../../services/country-list/country-list.service';
import { CountryCarousel } from '../../components/country-carousel';
import { CountryList } from '../../components/country-list';
import { Navigation } from '../../components/navigation';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Header } from '../../components/header';
import './home.scss';
import { Footer } from '../../components/footer';

export const Home = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [selectedOption, setSelectedOption] = useState('');

	const countryList = useSelector((state: RootState) => {
		if (selectedOption !== '') {
			const data = state.countryList.data.filter((d) => d.region === selectedOption);
			return { ...state.countryList, data };
		}
		return state.countryList;
	});

	useEffect(() => {
		dispatch(fetchCountryList());
	}, []);

	const handleTabChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(e.target.value);
	};

	return (
		<div className='home-container'>
			<Navigation />
			<Container>
				<Header />
				<Row>
					<Col>
						<div className='side-image d-block d-md-none'>
							<Image src='https://placehold.co/600x400' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={10}>
						<CountryCarousel />
					</Col>
					<Col md={2}>
						<div className='side-image d-none d-md-block'>
							<Image src='https://placehold.co/600x400' />
						</div>
					</Col>
				</Row>
				<Row>
					<Footer />
				</Row>
			</Container>
		</div>
	);
};
