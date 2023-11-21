import React, { useContext, useEffect } from 'react'
import '../style/common.scss'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { MyContext } from '../Context';

function Header() {
	// header scroll down 
	// useEffect(() => {
	// 	const home_btn = document.querySelector('.header_home');
	// 	const homeScroll = document.querySelector('.sec1_home');
	// 	const about_btn = document.querySelector('.header_about');
	// 	const aboutScroll = document.querySelector('.sec2_about');
	// 	const work_btn = document.querySelector('.header_work');
	// 	const workScroll = document.querySelector('.sec3_work');
	// 	const contact_btn = document.querySelector('.header_contact');
	// 	const contactScroll = document.querySelector('.sec4_contact');

	// 	const scrollToElement = (btn, target) => {
	// 		btn.addEventListener('click', function () {
	// 			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
	// 		});
	// 	}

	// 	if (home_btn && homeScroll) {
	// 		scrollToElement(home_btn, homeScroll);
	// 	}
	// 	if (about_btn && aboutScroll) {
	// 		scrollToElement(about_btn, aboutScroll);
	// 	}
	// 	if (work_btn && workScroll) {
	// 		scrollToElement(work_btn, workScroll);
	// 	}
	// 	if (contact_btn && contactScroll) {
	// 		scrollToElement(contact_btn, contactScroll);
	// 	}
	// }, [])
	
	const { headSatus, SetHeadSatus } = useContext(MyContext) || {};

	return (
		<header className={headSatus?'':'headerstatus'}>
			<div className='header_wrap inner'>
				<div className='logo'>
					<Link to='/'>
						<img src='/asset/Hong_logo.svg' alt='hong 로고' />
					</Link>
				</div>
				<div className='menu'>
					<ul>
						<li className='header_home'>
							<ScrollLink to='sec1' className='header_item' spy={true} smooth={true} duration={1000}>
								<span>Home</span>
							</ScrollLink>
						</li>
						<li className='header_about'>
							<ScrollLink to='sec2' className='header_item' spy={true} smooth={true} duration={1000}>
								<span>About</span>
							</ScrollLink>
						</li>
						<li className='header_work'>
							<ScrollLink to='sec3' className='header_item' spy={true} smooth={true} duration={1000}>
								<span>Work</span>
							</ScrollLink>
						</li>
						<li className='header_contact'>
							<ScrollLink to='sec4' className='header_item' spy={true} smooth={true} duration={1000}>
								<span>Contact</span>
							</ScrollLink>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header