import React from 'react'
import '../style/main.scss'
import Section2 from '../components/main/Section2'
import Section3 from '../components/main/Section3'
import Section4 from '../components/main/Section4'

function Main() {
	return (
		<>
			<section className='sec1_home inner'>
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
			<section className='sec2_about'>
				<Section2 />
			</section>
			<section className='sec3_work'>
				<Section3 />
			</section>
			<section className='sec4_contact'>
				<Section4 />
			</section>
		</>
	)
}

export default Main