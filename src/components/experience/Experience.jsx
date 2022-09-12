import React from 'react';
import './Experience.scss';
import { BsFillCheckCircleFill } from 'react-icons/bs';
const Experience = () => {
	return (
		<section id='experience'>
			<h5>What Skills i Have</h5>
			<h2>My Experience</h2>
			<div className='container experience__container'>
				<div className='experience__frontend'>
					<h3>frontEnd Development</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<BsFillCheckCircleFill className='experience__details-icon' />
							<div>
								<h4>HTML</h4>
							</div>

							<small className='text-light'>Experienced</small>
						</article>

						<article className='experience__details'>
							<BsFillCheckCircleFill className='experience__details-icon' />
							<div>
								{' '}
								<h4>CSS</h4>
							</div>
							<small className='text-light'>Experienced</small>
						</article>

						<article className='experience__details'>
							<BsFillCheckCircleFill className='experience__details-icon' />
							<div>
								<h4>JavaScript</h4>
							</div>

							<small className='text-light'>Experienced</small>
						</article>

						<article className='experience__details'>
							<BsFillCheckCircleFill className='experience__details-icon' />
							<div>
								<h4>Bootstap</h4>
							</div>

							<small className='text-light'>Experienced</small>
						</article>

						<article className='experience__details'>
							<BsFillCheckCircleFill className='experience__details-icon' />
							<div>
								<h4>Tailwind</h4>
							</div>

							<small className='text-light'>Experienced</small>
						</article>

						<article className='experience__details'>
							<BsFillCheckCircleFill className='experience__details-icon' />
							<div>
								<h4>React</h4>
							</div>

							<small className='text-light'>Experienced</small>
						</article>
					</div>
				</div>
				<div className='experience__backend'>
					<h3>Backend Development</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<BsFillCheckCircleFill className='experience__details-icon' />
							<div>
								{' '}
								<h4>NodeJs</h4>
							</div>

							<small className='text-light'>Experienced</small>
						</article>

						<article className='experience__details'>
							<BsFillCheckCircleFill className='experience__details-icon' />
							<div>
								{' '}
								<h4>MongoDB</h4>
							</div>

							<small className='text-light'>Experienced</small>
						</article>

						<article className='experience__details'>
							<BsFillCheckCircleFill className='experience__details-icon' />
							<div>
								{' '}
								<h4>Java</h4>
							</div>

							<small className='text-light'>intermediate</small>
						</article>

						<article className='experience__details'>
							<BsFillCheckCircleFill className='experience__details-icon' />
							<div>
								{' '}
								<h4>MYSQL</h4>
							</div>

							<small className='text-light'>Experienced</small>
						</article>

						<article className='experience__details'>
							<BsFillCheckCircleFill className='experience__details-icon' />
							<div>
								{' '}
								<h4>Python</h4>
							</div>

							<small className='text-light'>beginner</small>
						</article>

						<article className='experience__details'>
							<BsFillCheckCircleFill className='experience__details-icon' />
							<div>
								{' '}
								<h4>React</h4>
							</div>

							<small className='text-light'>Experienced</small>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
