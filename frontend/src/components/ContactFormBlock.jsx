import React from 'react';
import DefaultButton from './UI/DefaultButton/DefaultButton.jsx';
import ContactCheckboxes from './UI/ContactCheckboxes/ContactCheckboxes.jsx';
import ContactInputs from './UI/ContactInputs/ContactInputs.jsx';

const ContactFormBlock = () => {
	return (
		<div className="main__contact contact">
			<div className="contact__background">
				<img src="./img/main/formBackground.png" alt="" />
			</div>
			<div className="contact__wrapper">
				<div className="contact__container">
					<h2 className="contact__title">Contact us by this form</h2>
					<div className="contact__form form-contact">
						<form action="">
							<h3 className="form-contact__sub-title">Select a service you need</h3>
							<ContactCheckboxes/>
							<h3 className="form-contact__sub-title sub-title-bold">Tell us about your idea</h3>
							<ContactInputs/>
							<DefaultButton text={'Contact us'} />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactFormBlock;