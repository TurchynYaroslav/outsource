import React from 'react';
import '../styles/Footer.css';
import ContactButton from './UI/ContactButton/ContactButton';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className="footer__container">
				<div className="footer__header">
					<h1 className="footer__title">
						<a href="">
							<div className="footer__logo"><img src="img/logo.svg" alt="logo" /></div>
							UnknownSigma
						</a>
					</h1>
				</div>
				<div className="footer__body">
					<div className="footer__socials socials-footer">
						<div className="socials-footer__title">Follow us</div>
						<ul className="socials-footer__list">
							<li className="socials-footer__item"><img src="img/social/telegram.svg" alt=""/><a href="" className='socials-footer__link'>Telegram</a></li>
							<li className="socials-footer__item"><img src="img/social/instagram.svg" alt=""/><a href="" className='socials-footer__link'>Instagram</a></li>
							<li className="socials-footer__item"><img src="img/social/facebook.svg" alt=""/><a href="" className='socials-footer__link'>Facebook</a></li>
						</ul>
					</div>
					<ContactButton/>
				</div>
				<div className="footer__copyright">
					2023 © UnknownSigma, Sigma Inc.
				</div>
			</div>
		</footer>
	);
};

export default Footer;