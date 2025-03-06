import './rounded-icon.scss';
import { ReactNode } from 'react';

type RoundedIconProps = {
	children: ReactNode;
};

export const RoundedIcon = ({ children }: RoundedIconProps) => {
	return <div className='rounded-icon'>{children}</div>;
};
