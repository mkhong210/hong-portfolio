import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../style/detail_project.scss'
import projectData from '../data/project.json'
import { MyContext } from '../Context';

function DetailProject() {
	const { headSatus, SetHeadSatus } = useContext(MyContext) || {};
	const [project, setProject] = useState(projectData);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();


	useEffect(() => {
		const filterData = projectData.project.find(item => item.id === id);
		setProject(filterData);
		setLoading(false);
		// console.log(id, filterData);
	}, [])

	useEffect(() => {
		SetHeadSatus(false);
		// console.log(headSatus);
	}, [headSatus])

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
					<div className='inner img_wrap'>
						<img src={project.image} alt={`${project.title2} 이미지`} />
					</div>
					<div className='about_wrap inner'>
						<div className='about_title'>
							<p className='lang_en'>About <br />the Project</p>
							<div className='look_wrap'>
								<div className='look'>
									<a href={project.site} className='site' target='_blank'>Go to Site</a>
								</div>
								<div className='look'>
									<a href={project.giturl} className='git' target='_blank'>Go to Git Hub</a>
								</div>
							</div>
						</div>

						<div className='about_detail'>
							<div className='about_plan'>
								<p className='plan_desc'>{project.about_plan_1}</p>
								{project.about_plan_2 &&
									<p className='plan_desc'>{project.about_plan_2}</p>
								}
								{project.about_plan_3 &&
									<p className='plan_desc'>{project.about_plan_3}</p>
								}
							</div>
							<div className='about_date'>
								<p className='subdesc_title'>제작 기한 :</p>
								<p className='date'>{project.about_date}</p>
							</div>
							<div className='about_people'>
								<p className='subdesc_title'>제작 인원 :</p>
								<p className='number'>{project.about_people}</p>
							</div>
							<div className='about_color'>
								<p className='subdesc_title'>메인 색상</p>
								<div className='color_wrap'>
									{project.color && project.color.map((item, k) => (
										<div style={{ backgroundColor: `${item}` }} className='color' key={k}><p>{item}</p></div>
									))
									}
								</div>
							</div>
							{/* 
							<div className='about_contribution'>
								<p className='subdesc_title'>기여도</p>
								<div className='contri_wrap'>
									{project.contribution && project.contribution.map((item, k) => (
										<p key={k}>{item}</p>
									))
									}
								</div>
							</div> */}
						</div>
					</div>
					<div className='about_wrap inner'>
						<div className='about_title'>
							<p className='lang_kr'>제작 구현</p>
						</div>
						<div className='about_detail'>
							<div className='about_plan'>
								<p className='plan_desc'>{project.function_1}</p>
								<p className='plan_desc_plus'>{project.function_1_plus}</p>
							</div>
							{project.function_2 &&
								<div className='about_plan'>
									<p className='plan_desc'>{project.function_2}</p>
									<p className='plan_desc'>{project.function_2_plus}</p>
								</div>
							}
							{project.function_3 &&
								<div className='about_plan'>
									<p className='plan_desc'>{project.function_3}</p>
									<p className='plan_desc'>{project.function_3_plus}</p>
								</div>
							}
							{project.function_4 &&
								<div className='about_plan'>
									<p className='plan_desc'>{project.function_4}</p>
									<p className='plan_desc'>{project.function_4_plus}</p>
								</div>
							}
							{project.function_5 &&
								<div className='about_plan'>
									<p className='plan_desc'>{project.function_5}</p>
									<p className='plan_desc'>{project.function_5_plus}</p>
								</div>
							}
							{project.function_6 &&
								<div className='about_plan'>
									<p className='plan_desc'>{project.function_6}</p>
									<p className='plan_desc'>{project.function_6_plus}</p>
								</div>
							}
							{project.function_7 &&
								<div className='about_plan'>
									<p className='plan_desc'>{project.function_7}</p>
									<p className='plan_desc'>{project.function_7_plus}</p>
								</div>
							}
						</div>
					</div>
					{/* trouble */}
					<div className='about_wrap inner'>
						<div className='about_title'>
							{project.review ?
								<p className='lang_en'>Issue <br />& Review</p>
								:
								<p className='lang_en'>Trouble <br />Issue</p>
							}
						</div>
						<div className='issue_detail'>
							<div className='issue_wrap'>
								{project.review &&
									<p className='subdesc_title lang_en'>Trouble Issue</p>
								}
								<div className='issue_item'>
									<h3>문제점 1</h3>
									<p className='plan_desc'>{project.trouble_1}</p>
									<h3>해결방안 1</h3>
									<p className='plan_desc'>{project.answer_1}</p>
								</div>
								{project.trouble_2 &&
									<div className='issue_item'>
										<h3>문제점 2</h3>
										<p className='plan_desc'>{project.trouble_2}</p>
										<h3>해결방안 2</h3>
										<p className='plan_desc'>{project.answer_2}</p>
									</div>
								}
							</div>
							{project.review &&
								<div className='review_wrap'>
									<p className='subdesc_title lang_en'>REVIEW</p>
									<div className='review_item'>
										<p className='plan_desc'>{project.review}</p>
									</div>
								</div>
							}
						</div>
					</div>
				</div>
			}
		</>
	)
}

export default DetailProject