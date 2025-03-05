import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, useNavigate } from 'react-router';
import './navigation.scss';

export const Navigation = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [active, setActive] = useState(location.hash || '#all');

	useEffect(() => {
		if (!location.hash) {
			navigate('#all', { replace: true });
		} else {
			setActive(location.hash);
		}
	}, [location.hash, navigate]);

	return (
		<Navbar expand='lg' className='bg-body-tertiary'>
			<Container>
				<Navbar.Brand href='#home'>Countries</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto'>
						<Nav.Link href='#all' className={active === '#all' ? 'active-link' : ''}>
							All
						</Nav.Link>
						<Nav.Link href='#asia' className={active === '#asia' ? 'active-link' : ''}>
							Asia
						</Nav.Link>
						<Nav.Link href='#europe' className={active === '#europe' ? 'active-link' : ''}>
							Europe
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
