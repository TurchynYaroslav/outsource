import React from 'react';
import AboutColumns from './UI/AboutColumns/AboutColumns';
import AboutContracts from './UI/AboutContracts/AboutContracts';

const AboutBlock = () => {
	return (
		<div className="main__about about">
			<div className="about__container">
				<div className="about__body">
					<AboutColumns/>
					<AboutContracts/>
				</div>
			</div>
		</div>
	);
};

export default AboutBlock;