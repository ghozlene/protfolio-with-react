import React, { useRef } from 'react';

import './Contact.css';
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_1nuee9l',
				'template_nvmyw6i',
				form.current,
				'fpqLay7pJWb-owEYG'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};
	return (
		<section id='contact'>
			<h5>Get in touch</h5>
			<h2>Contact Me</h2>
			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdEmail className='contact__icon' />
						<h4>Email</h4>
						<h5>medachrefg@gmail.com</h5>
						<a
							href='mailto:medachrefg@gmail.com'
							target='_blank'
							rel='noreferrer'>
							Send a message
						</a>
					</article>

					<article className='contact__option'>
						<FaFacebookMessenger className='contact__icon' />
						<h4>Messenger</h4>
						<h5>GHOZLENE med Achref</h5>
						<a
							href='https://m.me/achref.ghozlene.56'
							target='_blank'
							rel='noreferrer'>
							Send a message
						</a>
					</article>

					<article className='contact__option'>
						<BsWhatsapp className='contact__icon' />
						<h4>Whatsapp</h4>
						<h5>+216 53211461</h5>
						<a
							href='https://api.whatsapp.com/send?phone=+21653211461'
							target='_blank'
							rel='noreferrer'>
							Send a message
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='subject'
						id=''
						placeholder='Your subject'
						required
					/>
					<input
						type='text'
						name='name'
						id=''
						placeholder='Your full name'
						required
					/>
					<input
						type='email'
						name='email'
						id=''
						placeholder='Your email '
						required
					/>
					<textarea
						name='message'
						placeholder='Your message'
						rows='7'
						required></textarea>
					<button type='submit' className='btn btn-primary'>
						Send message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
