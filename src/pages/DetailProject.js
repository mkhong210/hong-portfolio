import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../style/detail_project.scss'
import projectData from '../data/project.json'

function DetailProject() {
	const [project, setProject] = useState(projectData);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		const filterData = projectData.project.find(item => item.id === id);
		setProject(filterData);
		setLoading(false);
		console.log(id, filterData);
	}, [])

	if(loading){
		return(<p>로딩중</p>)
	}
	
	return (
		<>
			{
				<div className='detail_main'>
					<div className='title inner'>
						<h2>{project.title2}</h2>
					</div>
					<div className='sub_title_wrap inner'>
						<div className='tag_wrap'>
							{project && project.tags.map((item, k)=>(
								<p className='tag_item' key={k}>{item}</p>
							))}
						</div>
						<p className='sub_title'>{project.sub_title}</p>
					</div>
					<img src={project.image} alt={`${project.title2} 이미지`} />
				</div>
			}
		</>
	)
}

export default DetailProject