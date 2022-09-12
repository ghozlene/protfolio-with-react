import React from 'react';
import './Testimonial.scss';
import data from './testimonial-data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper';

const Testimonial = () => {
	return (
		<section id='testimonials'>
			<h5>Reviews from clients</h5>
			<h2>testimonials</h2>
			<Swiper
				className='container testimonials__container'
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				autoplay={{
					delay: 1500,
					disableOnInteraction: false,
				}}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination, Autoplay]}>
				{data.map(({ id, name, review, image }) => {
					return (
						<SwiperSlide className='testimonial' key={id}>
							<div className='client__avatar'>
								<img src={image} alt={name} />
							</div>
							<h5 className='client__name'>{name}</h5>
							<small className='client__review'>{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonial;
