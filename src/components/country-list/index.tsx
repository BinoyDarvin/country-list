import { useDispatch, useSelector } from 'react-redux';
import { CountryCard } from '../country-card';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import { fetchCountryList } from '../../services/country-list/country-list.service';
import { Button } from 'react-bootstrap';
import { ApiStatus } from '../../types/types';
import { Loader } from '../loader';
import './country-list.scss';

export const CountryList = () => {
	const dispatch = useDispatch<AppDispatch>();
	const countryList = useSelector((state: RootState) => state.countryList);

	const [index, setIndex] = useState(1);

	useEffect(() => {
		dispatch(fetchCountryList());
	}, []);

	const handleLoadMore = () => {
		if (index * 10 < countryList.data.length) {
			setIndex((prev) => prev + 1);
		}
	};

	return (
		<>
			{(countryList.status === ApiStatus.Pending || countryList.status === ApiStatus.Rejected) && (
				<Loader status={countryList.status} />
			)}

			{countryList.status === ApiStatus.Fulfilled && (
				<>
					<div className='country-list-container'>
						{countryList.data.slice(0, index * 10).map((country) => (
							<CountryCard key={country.name} flag={country.flag} country={country.name} region={country.region} />
						))}
					</div>
					<Button variant='outline-secondary' className='mt-5' onClick={handleLoadMore}>
						Load More
					</Button>
				</>
			)}
		</>
	);
};
