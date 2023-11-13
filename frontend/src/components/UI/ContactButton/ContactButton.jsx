import React from 'react';
import './ContactButton.css';

const ContactButton = () => {
	return (
		<a href='' className='contact-us'>
			Contact with us
			<span><img className='contact-us__arrow' src="img/arrow-right.svg" alt="" /></span>
		</a>
	);
};

export default ContactButton;