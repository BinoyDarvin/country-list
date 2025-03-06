import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router';
import './auth-layout.scss';

export const AuthLayout = () => {
	return (
		<div className='h-100 auth-layout-container'>
		<Container className='h-100 align-center'>
			<Row className='h-100 align-items-center'>
				<Col md={6}>
					<Outlet />
				</Col>
				<Col md={6} className='h-100'>
					<div className='auth-background h-100'></div>
				</Col>
			</Row>
		</Container>
		</div>
	);
};
