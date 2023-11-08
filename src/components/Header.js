import React, { useEffect } from 'react'
import '../style/common.scss'

function Header() {
	// header scroll down 
	
	useEffect(()=>{
		const home_btn = document.querySelector('.header_home');
		const homeScroll = document.querySelector('.sec1_home');
		const about_btn = document.querySelector('.header_about');
		const aboutScroll = document.querySelector('.sec2_about');
		const work_btn = document.querySelector('.header_work');
		const workScroll = document.querySelector('.sec3_work');
		const contact_btn = document.querySelector('.header_contact');
		const contactScroll = document.querySelector('.sec4_contact');
		
		// home_btn.addEventListener('click', function(){
		// 	homeScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
		// })
		// about_btn.addEventListener('click', function(){
		// 	aboutScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
		// })
		// work_btn.addEventListener('click', function(){
		// 	workScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
		// })
		// contact_btn.addEventListener('click', function(){
		// 	contactScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
		// })

		// console.log(home_btn. homeScroll, about_btn, aboutScroll, work_btn, workScroll, contact_btn, contactScroll)

		const scrollToElement = (btn, target) => {
			btn.addEventListener('click', function () {
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			});
		}
	
		if (home_btn && homeScroll) {
			scrollToElement(home_btn, homeScroll);
		}
		if (about_btn && aboutScroll) {
			scrollToElement(about_btn, aboutScroll);
		}
		if (work_btn && workScroll) {
			scrollToElement(work_btn, workScroll);
		}
		if (contact_btn && contactScroll) {
			scrollToElement(contact_btn, contactScroll);
		}
	},[])

	return (
		<header>
			<div className='inner'>
				<div className='logo'>
					<img src='/asset/Hong_logo.svg' alt='hong 로고' />
				</div>
				<div className='menu'>
					<ul>
						<li className='header_home'>Home</li>
						<li className='header_about'>About</li>
						<li className='header_work'>Work</li>
						<li className='header_contact'>Contact</li>
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header