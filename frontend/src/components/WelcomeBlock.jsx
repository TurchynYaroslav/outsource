import React from 'react';
import '../styles/Main.css'
import { TypeAnimation } from 'react-type-animation';

const WelcomeBlock = () => {

	const time = new Date();
	let dayTime = '';
	if (time.getHours() > 5 & time.getHours() < 12) {
		dayTime = 'morning'
	} else if (time.getHours() > 12 & time.getHours() < 18) {
		dayTime = 'afternoon'
	} else {
		dayTime = 'evening'
	}

	return (
		<div className="main__welcome welcome">
			<div className="welcome__container">
				<div className="welcome__text">Welcome to</div>
				<h1 className="welcome__title">Unknow team</h1>
				<TypeAnimation
					sequence={`Good ${dayTime}, guest`}
					wrapper="span"
					speed={30}
					style={{ fontSize: '40px', display: 'inline-block', fontWeight: 400 }}
					repeat={0}
				/>
				<h6 className='welcome__sub-title'>Let's explore</h6>
			</div>
		</div>
	);
};

export default WelcomeBlock;