import React from 'react'
import { Link } from 'react-router-dom'

function Sec3Study() {
	return (
		<div className='inner'>
			<div className='sub_title'>
				<h3>STUDY</h3>
			</div>
			<div className='cont_wrap'>
				<ul>
					<li className='study_item'>
						{/* <Link to='/'> */}
						<a href='javascrip:;' className='item'>
							<div className='item_title'>
								<p>01</p>
								<p>클론 프로젝트</p>
							</div>
							<p>기존의 smdecor 사이트를 클론 프로젝트로 똑같이 구현하는 과정을 진행하였습니다.기존의 smdecor 사이트를 클론 프로젝트로 똑같이 구현하는 과정을 진행하였습니다.</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Sec3Study