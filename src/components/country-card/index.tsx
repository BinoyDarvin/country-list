import Card from 'react-bootstrap/Card';
import './country-card.scss';

type CountryCardProps = {
	flag: string;
	country: string;
	region: string;
};

export const CountryCard = ({ flag, country, region }: CountryCardProps) => {
	return (
		<div className='country-card-container'>
			<Card className='country-card w-100 d-flex flex-row align-items-center p-3'>
				<Card.Img
					src={flag}
					className='flag-img me-3 img-fluid flex-shrink-0'
				/>
				<Card.Body>
					<Card.Title>{country}</Card.Title>
					<Card.Text>{region}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};
