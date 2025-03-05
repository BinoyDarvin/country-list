import { Stack } from 'react-bootstrap';
import { FiFacebook, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';
import { RoundedIcon } from '../rounded-icon';
import './footer.scss';

export const Footer = () => {
	return (
		<div className='footer-container mt-5'>
			<Stack gap={3} className='align-items-center justify-content-center'>
				<div className='social-icons'>
					<Stack direction='horizontal' gap={3}>
						<RoundedIcon>
							<FiTwitter />
						</RoundedIcon>
						<RoundedIcon>
							<FiFacebook />
						</RoundedIcon>
						<RoundedIcon>
							<FiLinkedin />
						</RoundedIcon>
						<RoundedIcon>
							<FiYoutube />
						</RoundedIcon>
					</Stack>
				</div>
				<div className='mt-3'>Example@email.com</div>
				<div>Copyright © 2020 Name. All rights reserved.</div>
			</Stack>
		</div>
	);
};
