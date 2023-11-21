import React from 'react';
import DefaultButton from './UI/DefaultButton/DefaultButton';

const LoginForm = () => {
	return (
		<form action="">
			<div className="form__inputs">
				<input type="text" className='form__input' placeholder='Your Name' />
				<input type="password" className='form__input' placeholder='Your Password' />
				<input type="email" className='form__input' placeholder='Your Email' />
			</div>
			<div className='form__decoration' />
			<div className="form__social-connect social-connect">
				<div className="social-connect__description">You can fill in faster with:</div>
				<button className="social-connect__button"><img src="./img/registration/google.svg" alt="" /></button>
				<button className="social-connect__button"><img src="./img/registration/gitHub.svg" alt="" /></button>
				<button className="social-connect__button"><img src="./img/registration/microsoft.svg" alt="" /></button>
			</div>
			<DefaultButton text={'Log in'} />
		</form>
	);
};

export default LoginForm;