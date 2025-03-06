import { Spinner, Stack } from 'react-bootstrap';
import { ApiStatus } from '../../types/types';
import { BiSolidError } from 'react-icons/bi';
import './loader.scss';

type LoaderProps = {
	status: ApiStatus;
};

export const Loader = ({ status }: LoaderProps) => {
	return (
		<div className='loader-container d-flex align-items-center justify-content-center'>
			{status === ApiStatus.Pending && (
				<Stack direction='horizontal' gap={3} className='align-items-center justify-content-center '>
					<Spinner animation='border' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</Spinner>
					<h2>Loading...</h2>
				</Stack>
			)}
			{status === ApiStatus.Rejected && (
				<Stack direction='horizontal' gap={3} className='align-items-center justify-content-center '>
					<BiSolidError size={40} />
					<h2>Error loading country data.</h2>
				</Stack>
			)}
		</div>
	);
};
