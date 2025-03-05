import { FormEvent, useState } from "react"
import { emailRegex } from "../../../util/constants";
import { useNavigate } from "react-router";

export const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({email: '', password: ''});
    const [formErrors, setFormErrors] = useState({email: '', password: ''});

    const handleOnChange = (name: string, value: string) => {
        setFormData({...formData, [name]: value});
        setFormErrors({...formErrors, [name]: ''});
    }

    const validate = () => {
        const errors = {email: '', password: ''}

        if (formData.email === '') {
            errors.email = 'Please enter the email';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Invalid email';
        }

        if (formData.password === '') {
            errors.password = 'Please enter the password';
        }

        if (errors.email !== '' || errors.password !== '') {
            setFormErrors(errors);
            return false;
        }

        return true;
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            navigate('/home', { replace: true });
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="email"
                value={formData.email} 
                onChange={(e) => handleOnChange("email", e.target.value)}
            />
            {
                formErrors.email !== '' && <p>{formErrors.email}</p>
            }
            <p></p>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) => handleOnChange("password", e.target.value)}
            />
            {
                formErrors.password !== '' && <p>{formErrors.password}</p>
            }
            <button type="submit">Login</button>
            </form>
        </div>
    );
}