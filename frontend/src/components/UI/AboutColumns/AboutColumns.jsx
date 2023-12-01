import React from 'react';

const AboutColumns = () => {
	return (
		<div className="about__info">
			<h1 className="about__title"><span className='text-bold'>Outsourcing</span> solutions we can offer:</h1>
			<div className="about__columns">
				<div className="about__column column-about">
					<h1 className="column-about__title"><img src='./img/about/information.svg' />Information Technology</h1>
					<div className="column-about__text">Software Development: A company may hire external developers to create or modify software.</div>
				</div>
				<div className="about__column column-about">
					<h1 className="column-about__title"><img src='./img/about/accounting.svg' />Accounting outsourcing</h1>
					<div className="column-about__text">Software Development: A company may hire external developers to create or modify software.</div>
				</div>
				<div className="about__column column-about">
					<h1 className="column-about__title"><img src='./img/about/market.svg' />Marketing service</h1>
					<div className="column-about__text">Software Development: A company may hire external developers to create or modify software.</div>
				</div>
				<div className="about__column column-about">
					<h1 className="column-about__title"><img src='./img/about/ai.svg' />Working with AI</h1>
					<div className="column-about__text">Software Development: A company may hire external developers to create or modify software.</div>
				</div>
			</div>
		</div>
	);
};

export default AboutColumns;