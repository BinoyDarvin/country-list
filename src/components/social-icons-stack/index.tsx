import { Stack } from 'react-bootstrap';
import { FiTwitter, FiFacebook, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { RoundedIcon } from '../rounded-icon';

export const SocialIconsStack = () => {
	return (
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
	);
};
