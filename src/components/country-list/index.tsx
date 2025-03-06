import { useDispatch, useSelector } from 'react-redux';
import { CountryCard } from '../country-card';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import { fetchCountryList } from '../../services/country-list/country-list.service';
import { Button } from 'react-bootstrap';
import { ApiStatus } from '../../types/types';
import { Loader } from '../loader';
import { useLocation } from 'react-router';
import './country-list.scss';

export const CountryList = () => {
	const location = useLocation();
	const dispatch = useDispatch<AppDispatch>();
	const countryList = useSelector((state: RootState) => state.countryList);

	const [indexes, setIndexes] = useState<Record<string, number>>({ all: 1 });
	const [region, setRegion] = useState('');

	useEffect(() => {
		const hashRegionMap: Record<string, string> = {
			'#asia': 'Asia',
			'#europe': 'Europe',
		};
		const newRegion = hashRegionMap[location.hash] || 'all';
		setRegion(newRegion);
	}, [location]);

	useEffect(() => {
		if (!countryList.data.length) {
			dispatch(fetchCountryList());
		}
	}, [dispatch, countryList.data.length]);

	const handleLoadMore = () => {
		setIndexes((prev) => ({
			...prev,
			[region]: (prev[region] || 1) + 1,
		}));
	};

	const currentIndex = indexes[region] || 1;

	const filteredCountries = countryList.data.filter((country) => region === 'all' || country.region === region);

	const displayedCountries = filteredCountries.slice(0, currentIndex * 10);

	return (
		<>
			{(countryList.status === ApiStatus.Pending || countryList.status === ApiStatus.Rejected) && (
				<Loader status={countryList.status} />
			)}

			{countryList.status === ApiStatus.Fulfilled && (
				<>
					<div className='country-list-container'>
						{displayedCountries.map((country) => (
							<CountryCard key={country.name} flag={country.flag} country={country.name} region={country.region} />
						))}
					</div>
					{currentIndex * 10 < filteredCountries.length && (
						<div className='text-center'>
							<Button className='mt-5 px-5' onClick={handleLoadMore}>
								Load more
							</Button>
						</div>
					)}
				</>
			)}
		</>
	);
};
