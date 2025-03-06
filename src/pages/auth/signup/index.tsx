import { FormEvent, useState } from 'react';
import { NavLink } from 'react-router';
import { Form, Button, Card } from 'react-bootstrap';
import { SocialIconsStack } from '../../../components/social-icons-stack';

export const Signup = () => {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleOnChange = (name: string, value: string) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className='login-container'>
			<Card className='login-card p-5'>
				<h2>Sign Up</h2>
				<div>
					Already have an account? <NavLink to='/auth/login'>Login</NavLink>
				</div>
				<Form className='mt-4' onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='formFullName'>
						<Form.Control
							type='text'
							name='fullName'
							placeholder='Full Name'
							value={formData.fullName}
							onChange={(e) => handleOnChange('fullName', e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formEmail'>
						<Form.Control
							type='text'
							name='email'
							placeholder='Email'
							value={formData.email}
							onChange={(e) => handleOnChange('email', e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formPassword'>
						<Form.Control
							type='password'
							name='password'
							placeholder='Password'
							value={formData.password}
							onChange={(e) => handleOnChange('password', e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formConfirmPassword'>
						<Form.Control
							type='password'
							name='confirmPassword'
							placeholder='Confirm Password'
							value={formData.confirmPassword}
							onChange={(e) => handleOnChange('confirmPassword', e.target.value)}
						/>
					</Form.Group>

					<Button variant='primary' type='submit' className='mt-3 w-100'>
						Sign Up
					</Button>
				</Form>
				<div className='divider mt-4'>
					<span>Or Sign Up With</span>
				</div>
				<div className='d-flex align-items-center justify-content-center mt-4'>
					<SocialIconsStack />
				</div>
			</Card>
		</div>
	);
};
