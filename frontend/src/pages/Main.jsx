import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import WelcomeBlock from '../components/WelcomeBlock.jsx';
import AboutBlock from '../components/AboutBlock.jsx';
import ContactFormBlock from '../components/ContactFormBlock.jsx';

const Main = () => {
	return (
		<div className="wrapper">
			<Header theme={'dark'}/>
			<main className='main'>
				<div className="main__block-link block-link">
					<div className="block-link__wrapper">
						<WelcomeBlock />
						<AboutBlock />
					</div>
					<div className="block-link__background">
						<img src='./img/main/background.png' alt='bg' />
					</div>
				</div>
				<ContactFormBlock/>
			</main>
			<Footer />
		</div>
	);
};

export default Main;