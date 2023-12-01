import React from 'react';
import background from '../../../images/checkMark.svg';

const ContactCheckboxes = () => {
	return (
		<div className="form-contact__checkboxes">
			<div className="form-contact__checkbox checkbox">
				<input className='checkbox__input' type="checkbox" name="" id="form-contact__1" />
				<div className='checkbox__image' style={{ background: `center / contain no-repeat url(${background})` }}></div>
				<label htmlFor="form-contact__1">Information Technology</label>
			</div>
			<div className="form-contact__checkbox checkbox">
				<input className='checkbox__input' type="checkbox" name="" id="form-contact__2" />
				<div className='checkbox__image' style={{ background: `center / contain no-repeat url(${background})` }}></div>
				<label htmlFor="form-contact__2">Accounting outsourcing</label>
			</div>
			<div className="form-contact__checkbox checkbox">
				<input className='checkbox__input' type="checkbox" name="" id="form-contact__3" />
				<div className='checkbox__image' style={{ background: `center / contain no-repeat url(${background})` }}></div>
				<label htmlFor="form-contact__3">Marketing service</label>
			</div>
			<div className="form-contact__checkbox checkbox">
				<input className='checkbox__input' type="checkbox" name="" id="form-contact__4" />
				<div className='checkbox__image' style={{ background: `center / contain no-repeat url(${background})` }}></div>
				<label htmlFor="form-contact__4">Working with AI</label>
			</div>
		</div>
	);
};

export default ContactCheckboxes;