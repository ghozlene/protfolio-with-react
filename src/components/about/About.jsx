import React from 'react';
import ME from '../../assets/me-about.jpg';
import './About.scss';
import { BsAwardFill } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';
import { HiLibrary } from 'react-icons/hi';
const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt='About me' />
					</div>
				</div>

				<div className='about_content'>
					<div className='about__cards'>
						<article className='about__card'>
							<BsAwardFill className='about__item' />
							<h5>experience</h5>
							<small>1+years working</small>
						</article>

						<article className='about__card'>
							<HiUsers className='about__item' />
							<h5>Clients</h5>
							<small>Many clients</small>
						</article>

						<article className='about__card'>
							<HiLibrary className='about__item' />
							<h5>Projects</h5>
							<small>20 projects completed</small>
						</article>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
						praesentium, commodi odit voluptatem quod officia accusamus
						quibusdam modi, odio consequuntur labore voluptatum aperiam rerum
						illo!
					</p>
					<a href='#contact' className='btn btn-primary'>
						let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
