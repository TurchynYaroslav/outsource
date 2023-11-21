import React from 'react';
import './DefaultButton.css';

const DefaultButton = ({action, text}) => {
	return (
		<button type={action} className="menu__link link-button">
			{text}
		</button>
	);
};

export default DefaultButton;