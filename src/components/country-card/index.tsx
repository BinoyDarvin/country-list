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
			<Card className='w-100 d-flex flex-row align-items-start p-3'>
				<Card.Img
					variant='top'
					src={flag}
					className='me-3'
					style={{
						width: '200px',
					}}
				/>
				<Card.Body>
					<Card.Title>{country}</Card.Title>
					<Card.Text>{region}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};
