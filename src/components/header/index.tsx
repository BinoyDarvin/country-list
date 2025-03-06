import { Col, Row } from 'react-bootstrap';
import './header.scss';

export const Header = () => {
	return (
		<>
			<Row>
				<Col md={6}>
					<hr className='hr' />
				</Col>
			</Row>
			<Row>
				<Col className='text-center'>
					<h2>WELCOME</h2>
				</Col>
			</Row>
			<Row>
				<Col md={6}></Col>
				<Col md={6}>
					<hr className='hr' />
				</Col>
			</Row>
		</>
	);
};
