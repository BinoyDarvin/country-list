import { Stack } from 'react-bootstrap';
import { SocialIconsStack } from '../social-icons-stack';
import './footer.scss';

export const Footer = () => {
	return (
		<div className='footer-container mt-5'>
			<Stack gap={3} className='align-items-center justify-content-center'>
				<div className='social-icons'>
					<SocialIconsStack />
				</div>
				<div className='mt-3'>Example@email.com</div>
				<div>Copyright © 2020 Name. All rights reserved.</div>
			</Stack>
		</div>
	);
};
