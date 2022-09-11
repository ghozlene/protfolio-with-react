import React from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { RiServiceFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import './Nav.css';
import { useState } from 'react';
const Nav = () => {
	const [activeNow, setActiveNow] = useState('#');
	return (
		<nav>
			<a
				href='#'
				onClick={() => setActiveNow(() => '#')}
				className={activeNow === '#' ? 'active' : ''}>
				<AiTwotoneHome />
			</a>
			<a
				href='#about'
				onClick={() => setActiveNow(() => '#about')}
				className={activeNow === '#about' ? 'active' : ''}>
				<BsFillPersonFill />
			</a>
			<a
				href='#experience'
				onClick={() => setActiveNow(() => '#experience')}
				className={activeNow === '#experience' ? 'active' : ''}>
				<MdWork />
			</a>
			<a
				href='#service'
				onClick={() => setActiveNow(() => '#service')}
				className={activeNow === '#service' ? 'active' : ''}>
				<RiServiceFill />
			</a>
			<a
				href='#contact'
				onClick={() => setActiveNow(() => '#contact')}
				className={activeNow === '#contact' ? 'active' : ''}>
				<MdEmail />
			</a>
		</nav>
	);
};

export default Nav;
