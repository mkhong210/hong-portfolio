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

	const color='#6DAD9C'

	if (loading) {
		return (<p>로딩중</p>)
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
							{project && project.tags.map((item, k) => (
								<p className='tag_item' key={k}>{item}</p>
							))}
						</div>
						<p className='sub_title'>{project.sub_title}</p>
					</div>
					<div className='inner'>
						<img src={project.image} alt={`${project.title2} 이미지`} />
					</div>
					<div className='about_wrap inner'>
						<div className='about_title'>
							<p className='lang_en'>About<br />the Project</p>
							<button>보러가기</button>
						</div>
						<div className='about_detail'>
							<div className='about_plan'>
								<p className='plan_desc'>{project.about_plan_1}</p>
								<p className='plan_desc'>{project.about_plan_2}</p>
								{project.about_plan_3&&
									<p className='plan_desc'>{project.about_plan_3}</p>
								}
							</div>
							<div className='about_date'>
								<p className='subdesc_title'>제작 기한 :</p>
								<p className='date'>{project.about_date}</p>
							</div>
							<div className='about_color'>
								<p className='subdesc_title'>메인 색상</p>
								{/* <p className='date'>2023.10 / 3주간</p> */}
								<div className='color_wrap'>
									{project.color && project.color.map((item,k)=>(
										<div style={{ backgroundColor: `${item}` }}className='color' key={k}><p>#6DAD9C</p></div>
										))
									}
								</div>
							</div>
							<div className='about_contribution'>
								<p className='subdesc_title'>기여도</p>
								{/* <p className='date'>2023.10 / 3주간</p> */}
								<div className='contri_wrap'>
									{project.contribution && project.contribution.map((item,k)=>(
										<p key={k}>{item}</p>
										))
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</>
	)
}

export default DetailProject