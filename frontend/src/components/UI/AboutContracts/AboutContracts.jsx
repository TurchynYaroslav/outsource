import React from 'react';

const AboutContracts = () => {
	return (
		<div className="about__contracts contracts">
			<div className="contracts__title">More than <span className='text-glowing'>30</span> successfully completed contracts and <span className='text-glowing'>5</span> years of work.</div>
			<div className="contracts__logos">
				<div className="contracts__logo"><img src="./img/about/logos/apple.png" alt="" /></div>
				<div className="contracts__logo"><img src="./img/about/logos/volvo.png" alt="" /></div>
				<div className="contracts__logo"><img src="./img/about/logos/microsoft.png" alt="" /></div>
				<div className="contracts__logo"><img src="./img/about/logos/hp.png" alt="" /></div>
			</div>
		</div>
	);
};

export default AboutContracts;