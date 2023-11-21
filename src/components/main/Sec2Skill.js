import React, { useEffect, useState } from 'react'
import '../../style/common.scss'

function Sec2Skill() {
	const [state0, setState0] = useState(true);
	const [state1, setState1] = useState(false);
	const [state2, setState2] = useState(false);
	useEffect(()=>{
		const skillWrap = document.querySelectorAll('.skill');
		// console.log(skillWrap)
		skillWrap.forEach(function(item, k){
			item.addEventListener('click',function(v){
				// console.log(item, k)
				// item.ClassList.add(skillActive);
				// console.log(`state`+`${k}`)
				// let status = `setState`+`${k}`;
				// console.log(status);
				// status(true);
				// k = num;
				// let statusFalse = `setState`+`${num}`;
				// statusFalse(false);
				// console.log(k)

				const classActive=item.classList.contains('active')
				if(k===0){
					console.log(classActive)
					if(!classActive){
						setState0(true);
					} else {
						setState0(false);
					}
				} else if(k===1){
					console.log(classActive)
					if(!classActive){
						setState1(true);
					} else {
						setState1(false);
					}
				} else {
					console.log(classActive)
					if(!classActive){
						setState2(true);
					} else {
						setState2(false);
					}
				}
			})
		})
	},[])
	
	return (
		<>
			<div className={`skill skill01`+ `${state0? ' active' : ''}`}>
				<div className='skill_title'>
					<p>DEVELOP</p>
					<p>01</p>
				</div>
				<div className='skill_desc'>
					<ul>
						<li className='skill_item'>
							<p>HTML</p>
							<p>웹 표준성을 중시하여 단단한 마크업 가능</p>
						</li>
						<li className='skill_item'>
							<p>CSS</p>
							<p>시멘틱 태그 활용, css 요소를 이해하고 자유로운 적용 가능</p>
						</li>
						<li className='skill_item'>
							<p>SCSS</p>
							<p>웹 표준성을 중시하여 단단한 마크업을 할 수 있습니다.</p>
						</li>
						<li className='skill_item'>
							<p>JAVASCRIPT</p>
							<p>기본 구문과 구조, DOM, 애니메이션 등 작업 가능</p>
						</li>
						<li className='skill_item'>
							<p>JQUERY</p>
							<p>오픈소스 활용 및 간단한 기능 구현 가능</p>
						</li>
						<li className='skill_item'>
							<p>REACT</p>
							<p>웹 표준성을 중시하여 단단한 마크업을 할 수 있습니다.</p>
						</li>
						<li className='skill_item'>
							<p>NEXT</p>
							<p>웹 표준성을 중시하여 단단한 마크업을 할 수 있습니다.</p>
						</li>
					</ul>
				</div>
			</div>
			<div className={`skill skill02`+ `${state1? ' active' : ''}`}>
				<div className='skill_title'>
					<p>GRAPHIC</p>
					<p>02</p>
				</div>
				<div className='skill_desc'>
					<ul>
						<li className='skill_item'>
							<p>Photoshop</p>
							<p>클리핑마스크, 레이어마스크, 필터 등 자유롭게 사용 가능</p>
						</li>
						<li className='skill_item'>
							<p>Illustration</p>
							<p>프리드로잉, 벡터 이미지 제작,디자인 및 시안 제작 가능</p>
						</li>
						<li className='skill_item'>
							<p>Xd</p>
							<p>웹 표준성을 중시하여 단단한 마크업을 할 수 있습니다.</p>
						</li>
						<li className='skill_item'>
							<p>Premiere Pro</p>
							<p>컷 편집, 효과, 자막 등의 작업 가능</p>
						</li>
						<li className='skill_item'>
							<p>After Effects</p>
							<p>컷 편집, 효과, 3D 등의 작업 가능</p>
						</li>
					</ul>
				</div>
			</div>
			<div className={`skill skill03`+ `${state2? ' active' : ''}`}>
				<div className='skill_title'>
					<p>ETC</p>
					<p>03</p>
				</div>
				<div className='skill_desc'>
					<ul>
						<li className='skill_item'>
							<p>Git hub</p>
							<p>웹 표준성을 중시하여 단단한 마크업을 할 수 있습니다.</p>
						</li>
						<li className='skill_item'>
							<p>Figma</p>
							<p>디자인 및 시안 제작, 프로토타입 구현 가능</p>
						</li>
						<li className='skill_item'>
							<p>Notion</p>
							<p>웹 표준성을 중시하여 단단한 마크업을 할 수 있습니다.</p>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Sec2Skill