import React from 'react';
import './Footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
const Footer = () => {
	return (
		<footer>
			<a href='#home' className='footer__logo'>
				GHOZLENE
			</a>
			<ul className='premalinks'>
				<li>
					<a href='#home'>Home</a>
				</li>

				<li>
					<a href='#about'>About</a>
				</li>

				<li>
					<a href='#experience'>Experience</a>
				</li>

				<li>
					<a href='#services'>Services</a>
				</li>

				<li>
					<a href='#protfolio'>Protfolio</a>
				</li>

				<li>
					<a href='#testimonials'>Testimonials</a>
				</li>

				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
			<div className='footer__socials'>
				<a href='https://linkedin.com' target='_blank' rel='noreferrer'>
					<BsLinkedin />
				</a>
				<a href='https://github.com' target='_blank' rel='noreferrer'>
					<BsGithub />
				</a>
				<a href='https://facebook.com' target='_blank' rel='noreferrer'>
					<BsFacebook />
				</a>
			</div>
			<div className='footer__copyRight'>
				<small>&copy;GHOZLENE med Achref all rights Reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
