import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import studyData from '../../data/study.json'

function Sec3Study() {
	const [data, setData] = useState(studyData);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		setData(studyData)
		setLoading(false);
	}, [])
	// console.log(data.project);

	if(loading){
		return(<p>로딩중</p>)
	}

	return (
		<div className='inner'>
			<div className='sub_title'>
				<h3>STUDY</h3>
			</div>
			<div className='cont_wrap'>
				{
					<ul>
						{ data.study && data.study.map((obj, k) => (
							<li className='study_item'>
								<Link to={obj.giturl} className='item'>
									<div className='item_title'>
										<p>0{k+1}</p>
										<p>{obj.title}</p>
									</div>
									<p>{obj.about_desc}</p>
								</Link>
							</li>
						))
						}
					</ul>
				}
			</div>
		</div>
	)
}

export default Sec3Study