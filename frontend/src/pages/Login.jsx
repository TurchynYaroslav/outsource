import React from 'react';
import '../styles/Registration.css'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import LoginForm from '../components/LoginForm';
import GoToButton from '../components/UI/GoToButton/GoToButton';

const Login = () => {
	return (
		<div className="wrapper">
			<Header/>
			<main className='main'>
				<GoToButton text={'Sign up'} path={'/registration'} direction={'left'}/>
				<div className="main__registration registration">
					<div className="registration__container">
						<h1 className="registration__title">Welcome back!</h1>
						<h3 className="registration__sub-title">We are happy to see you again.</h3>
						<div className="registration__form form">
							<LoginForm/>
						</div>
					</div>
					<div className="main__background">
						<img src="./img/registration/loginBackground.png" alt="cover" />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Login;