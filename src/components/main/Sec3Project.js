import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

import projectData from '../../data/project.json'
import { Link } from 'react-router-dom';

function Sec3Project() {
	const [data, setData] = useState(projectData);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		setData(projectData)
		setLoading(false);
	}, [])
	// console.log(data.project);

	if(loading){
		return(<p>로딩중</p>)
	}
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
					{
						data.project && data.project.map((obj, k) => (
							<SwiperSlide className='swiper_item' key={k}>
								<Link to={`/detail/project/${obj.id}`}>
									<img src={obj.image} alt='제제픽' />
									<p>{obj.title1}</p>
								</Link>
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>
		</div>
	)
}

export default Sec3Project