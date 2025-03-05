import './country-card.scss';

type CountryCardProps = {
    image: string,
    country: string,
    region: string
}

export const CountryCard = ({image, country, region}: CountryCardProps) => {
    return (
        <div className='country-card-container'>
            <div className="flag">
                <img src={image} />
            </div>
            <div>
                <h3>{country}</h3>
                <h5>{region}</h5>
            </div>
        </div>
    );
}