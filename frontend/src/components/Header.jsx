import React from 'react';
import Menu from './UI/navigation/Menu';
import '../styles/Header.css';
import {Link} from 'react-router-dom';

const Header = ({theme}) => {
	return (
		<header className={'header' + ' header__' + theme}>
			<div className="header__container">
				<Link to='/' className="header__logo">
					{theme === 'transparent'
						?<img src="/img/logo.svg" alt="logo" />
						:<img src="/img/logo_white.svg" alt="logo" />
					}
					
				</Link>
				<Menu/>
			</div>
		</header>
	);
};

export default Header;