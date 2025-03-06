import secondaryImage from '../../assets/images/others/secondary-header.jpg';
import './secondary-header-image.scss';

export const SecondaryHeaderImage = () => {
	return (
		<div className='side-image'>
			<img src={secondaryImage} />
		</div>
	);
};
