import React from 'react';
import './Portfolio.scss';
import data from './data';

const Portfolio = () => {
	return (
		<section>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			<div className='container portfolio__container'>
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article className='portfolio__item' key={id}>
							<div className='portfolio__item-image'>
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<div className='portfolio__item-cta'>
								<a
									href={github}
									className='btn'
									target='_blank'
									rel='noreferrer'>
									Github
								</a>
								<a
									href={demo}
									className='btn btn-primary'
									target='_blank'
									rel='noreferrer'>
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
