import React from 'react';
import Menu from './UI/navigation/Menu';
import '../styles/Header.css';

const Header = () => {
	return (
		<header className='header'>
			<div className="header__container">
				<a href='#' className="header__logo">
					<img src="/img/logo.svg" alt="logo" />
				</a>
				<Menu/>
			</div>
		</header>
	);
};

export default Header;