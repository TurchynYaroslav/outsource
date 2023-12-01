import React from 'react';

const ContactInputs = () => {
	return (
		<div className="form-contact__inputs">
			<input type="text" placeholder='Your Name' className="form-contact__input" />
			<input type="email" placeholder='E-mail' className="form-contact__input" />
			<input type="text" placeholder='Phone' className="form-contact__input" />
			<textarea name="" id="" cols="30" rows="3" placeholder='Your message' className='form-contact__input form-contact__textarea'></textarea>
		</div>
	);
};

export default ContactInputs;