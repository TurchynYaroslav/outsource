import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Main = () => {
	return (
		<div className="wrapper">
			<Header/>
			<main className='main'></main>
			<Footer />
		</div>
	);
};

export default Main;