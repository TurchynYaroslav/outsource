import React from 'react';
import { Link } from 'react-router-dom';
import './GoToButton.css'

const GoToButton = ({path, text, direction}) => {
	return (
		<Link className={'go-to-button' + ' go-to-button-' + direction} to={path}>
			<span><img className={direction} src="img/arrow-forward.svg" alt="arrow" /></span>
			<span className='go-to-button__text'>{text}</span>
			<span><img className={direction} src="img/arrow-forward.svg" alt="arrow" /></span>
		</Link>
	);
};

export default GoToButton;