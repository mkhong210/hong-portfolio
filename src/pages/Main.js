import React, { useContext, useEffect } from 'react'
import '../style/main.scss'
import Section2 from '../components/main/Section2'
import Section3 from '../components/main/Section3'
import Section4 from '../components/main/Section4'
import { MyContext } from '../Context'

function Main() {
	const { headSatus, SetHeadSatus } = useContext(MyContext) || {};

	useEffect(()=>{
		SetHeadSatus(true)
		console.log(headSatus)
	}, [headSatus])

	useEffect(()=>{
		// data-scroll=Onscroll
		const secScroll = document.querySelectorAll('section > div');
		const headerOn = document.querySelector('header');
		// secScroll.classList.remove('on');
		const io = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if(entry.isIntersecting) {
					// 화면에 보여짐에 따라 true / false
					entry.target.classList.add('on')
				} else {
					if(window.pageYOffset < entry.target.offsetTop){
						entry.target.classList.remove('on')
					}
				}
			})
		})

		secScroll.forEach((el) => {
			io.observe(el);
		})
		io.observe(headerOn);
	}, [])

	return (
		<>
			<section className='sec1_home inner' name='sec1'>
				<div className='title_wrap'>
					<p className='lang_en'>Portfolio</p>
					<h1 className='lang_en'>FrontEnd Developer</h1>
				</div>
				<div className='sec1_btm'>
					<div className='inner'>
						<div className='name'>
							<p>홍민경</p>
						</div>
						<div className='scroll_down'>
							<p>scroll</p>
							<img src='/asset/ICON_down_arrow.svg' alt='아래 화살표' />
						</div>
					</div>
				</div>
			</section>
			<section className='sec2_about active' name='sec2'>
				<Section2 />
			</section>
			<section className='sec3_work' name='sec3'>
				<Section3 />
			</section>
			<section className='sec4_contact' name='sec4'>
				<Section4 />
			</section>
		</>
	)
}

export default Main