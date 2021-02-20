import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
	const initialState = {
		username: '',
		email: '',
		password: '',
		re_password: '',
	};
	const history = useHistory();
	const [formState, setFormState] = useState(initialState);
	const handleSubmit = (event) => {
		event.preventDefault();
		Axios({
			url: 'https://st6.herokuapp.com/users/',
			method: 'POST',
			data: formState,
		}).then(() => {
			history.push('/signin');
		});
		setFormState(initialState);
	};
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};
	return (
		<div>
			<div className='registrationContainer'>
				<div className='registrationTitle'>Register Below:</div>
				<form onSubmit={handleSubmit}>
					<label htmlFor='username' className='usernameLabel'>
						Enter Username:{' '}
					</label>
					<input
						id='username'
						onChange={handleChange}
						value={formState.username}
						placeholder='Username'
						className='usernameInput'
					/>
					<br />
					<label htmlFor='email' className='registrationEmailLabel'>
						Enter Email:{' '}
					</label>
					<input
						id='email'
						onChange={handleChange}
						value={formState.email}
						placeholder='Email'
						className='registrationEmailInput'
					/>
					<br />
					<label htmlFor='password' className='registrationPasswordLabel'>
						Enter Password:{' '}
					</label>
					<input
						id='password'
						onChange={handleChange}
						value={formState.password}
						placeholder='Password'
						className='registrationPasswordInput'
					/>
					<br />
					<label htmlFor='re_password' className='re_passwordLabel'>
						Confirm Password:{' '}
					</label>
					<input
						id='re_password'
						onChange={handleChange}
						value={formState.re_password}
						placeholder='Confirm Password'
						className='re_passwordInput'
					/>
					<button type='submit' className='registrationFormSubmit hvr-grow'>
						Submit
					</button>
				</form>
				<div className='qualification'>Email must be unique</div>
				<br />
				<div className='qualification'>
					Password must be combination of at least 8 letters and numbers
				</div>
			</div>
		</div>
	);
};

export default SignUp;
