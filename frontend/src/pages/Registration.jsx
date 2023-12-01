import React from 'react';
import '../styles/Registration.css'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import RegistrationForm from '../components/RegistrationForm';
import GoToButton from '../components/UI/GoToButton/GoToButton';

const Registration = () => {
	return (
		<div className="wrapper">
			<Header theme={'transparent'}/>
			<main className='main'>
				<GoToButton text={'Log in'} path={'/login'} direction={'right'}/>
				<div className="main__registration registration">
					<div className="registration__container">
						<h1 className="registration__title">Welcome to the registration page!</h1>
						<h3 className="registration__sub-title">Register and explore!</h3>
						<div className="registration__form form">
							<RegistrationForm/>
						</div>
					</div>
					<div className="main__background">
						<img src="./img/registration/registrationBackground.png" alt="cover" />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Registration;