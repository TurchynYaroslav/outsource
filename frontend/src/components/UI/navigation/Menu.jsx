import React from 'react';
import './Menu.css'

const Menu = () => {

	function menuActive() {
		document.body.classList.toggle('active');
	}

	return (
		<div className="header__menu menu">
			<button onClick={menuActive} type="button" className="menu__icon icon-menu"><span></span></button>
			<nav className="menu__body">
				<ul className="menu__list">
					<li className="menu__item"><a href="" className="menu__link">Main</a></li>
					<li className="menu__item"><a href="" className="menu__link">About us</a></li>
					<li className="menu__item"><a href="" className="menu__link">Log in</a></li>
					<li className="menu__item"><a href="" className="menu__link link-button">Get started</a></li>
				</ul>
			</nav>
		</div>
	);
};

export default Menu;