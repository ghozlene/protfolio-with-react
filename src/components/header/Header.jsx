import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
const Header = () => {
	return (
		<header>
			<div className='container header__container'>
				<h5>Hello I'm</h5>
				<h1>Ghozlene Mohamed Achref</h1>
				<h5 className='text-light'>Full Stack developer</h5>
				<CTA />
				<img src={ME} alt='me' />
				<a href='#contact' className='scroll__down'>
					scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
