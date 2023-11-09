import React from 'react'
import Sec3Study from './Sec3Study'
import Sec3Project from './Sec3Project'

function Section3() {
	return (
		<>
			<div className='title inner_t'>
				<h2>WORK</h2>
			</div>
			<div className='project_wrap'>
				<Sec3Project />
			</div>
			<div className='study_wrap'>
				<Sec3Study />
			</div>
			<div className='title design inner_t'>
				<h2>WORK</h2>
			</div>
		</>
	)
}

export default Section3