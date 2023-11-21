import React from 'react';
import Menu from './UI/navigation/Menu';
import '../styles/Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<header className='header'>
			<div className="header__container">
				<Link to='/' className="header__logo">
					<img src="/img/logo.svg" alt="logo" />
				</Link>
				<Menu/>
			</div>
		</header>
	);
};

export default Header;