import { FormEvent, useState } from 'react';
import { emailRegex, passwordRegex } from '../../../util/constants';
import { NavLink, useNavigate } from 'react-router';
import { Form, Button, Container, Row, Col, Stack, Card } from 'react-bootstrap';
import { FiTwitter, FiFacebook, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { RoundedIcon } from '../../../components/rounded-icon';
import './login.scss';
import { SocialIconsStack } from '../../../components/social-icons-stack';

export const Login = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({ email: '', password: '' });
	const [formErrors, setFormErrors] = useState({ email: '', password: '' });

	const handleOnChange = (name: string, value: string) => {
		setFormData({ ...formData, [name]: value });
		setFormErrors({ ...formErrors, [name]: '' });
	};

	const validate = () => {
		const errors = { email: '', password: '' };

		if (formData.email === '') {
			errors.email = 'Please enter the email';
		} else if (!emailRegex.test(formData.email)) {
			errors.email = 'Invalid email';
		}

		if (formData.password === '') {
			errors.password = 'Please enter the password';
		} else if (!passwordRegex.test(formData.password)) {
			errors.password =
				'Password must be minimum 8 characters long  (consist of atleast 1 Capital letter, 1 number & 1 symbol) ';
		}

		if (errors.email || errors.password) {
			setFormErrors(errors);
			return false;
		}
		return true;
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (validate()) {
			navigate('/home', { replace: true });
		}
	};

	return (
		<div className='login-container'>
			<Card className='login-card p-5'>
				<h2>Login</h2>
				<div>
					New user? <NavLink to='/auth/signup'>Create an account</NavLink>
				</div>
				<Form className='mt-4' onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='formEmail'>
						<Form.Control
							type='text'
							name='email'
							placeholder='Username or email'
							value={formData.email}
							onChange={(e) => handleOnChange('email', e.target.value)}
							isInvalid={!!formErrors.email}
						/>
						<Form.Control.Feedback type='invalid'>{formErrors.email}</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formPassword'>
						<Form.Control
							type='password'
							name='password'
							placeholder='Password'
							value={formData.password}
							onChange={(e) => handleOnChange('password', e.target.value)}
							isInvalid={!!formErrors.password}
						/>
						<Form.Control.Feedback type='invalid'>{formErrors.password}</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formKeepSignedIn'>
						<Form.Check type='checkbox' label='Keep me signed in' />
					</Form.Group>

					<Button variant='primary' type='submit' className='mt- 3 w-100'>
						Login
					</Button>
				</Form>
				<div className='divider mt-4'>
					<span>Or Sign In With</span>
				</div>
				<div className='d-flex align-items-center justify-content-center mt-4'>
					<SocialIconsStack />
				</div>
			</Card>
		</div>
	);
};
