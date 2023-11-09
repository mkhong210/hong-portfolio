import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

function Sec3Project() {
	return (
		<div className='inner'>
			<div className='sub_title'>
				<h3>PROJECT</h3>
			</div>
			<div className='cont_wrap'>
			<Swiper 
				navigation={true}
				slidesPerView={1}
        spaceBetween={20}
				modules={[Navigation]} 
				className="mySwiper">
        <SwiperSlide className='swiper_item'>
					<img src='/asset/work/jejepick_splash.jpg' alt='제제픽' />
					<p>Slide 1</p>
				</SwiperSlide>
        <SwiperSlide className='swiper_item'>
					<p>Slide 2</p>
				</SwiperSlide>
        <SwiperSlide className='swiper_item'>
					<p>Slide 3</p>
				</SwiperSlide>
        <SwiperSlide className='swiper_item'>
					<p>Slide 4</p>
				</SwiperSlide>
				
      </Swiper>
			</div>
		</div>
	)
}

export default Sec3Project