import React, { useEffect } from 'react'
import Sec2Skill from './Sec2Skill'

function Section2() {
	useEffect(() => {
		const text = document.getElementsByClassName("script_text")[0];
		// 글자 모음
		const letters = [
			"프론트엔드",
			"퍼블리셔",
			"원활한 소통을 하는",
		];
		// 글자 입력 속도
		const speed = 200;
		let num = 0;

		// 타이핑 효과
		const typing = async () => {
			const letter = letters[num].split("");
			// console.log(letter)
			while (letter.length) {
				await wait(speed);
				text.innerHTML += letter.shift();
			}

			// 잠시 대기
			await wait(1000);
			// 지우는 효과
			remove();
			// if (letters[i + 1]) remove();
		}

		// 글자 지우는 효과
		const remove = async () => {
			const letter = letters[num].split("");
			while (letter.length) {
				await wait(speed);
				letter.pop();
				text.innerHTML = letter.join("");
			}

			// 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
			num = !letters[num + 1] ? 0 : num + 1;
			typing();
		}

		// 딜레이 기능 ( 마이크로초 )
		function wait(ms) {
			return new Promise(res => setTimeout(res, ms))
		}

		// 초기 실행
		setTimeout(typing, 100);
	}, [])

	return (
		<>
			<div className='title inner_t'>
				<h2>ABOUT</h2>
			</div>
			<div className='cont_wrap inner_c'>
				<div className='img_wrap'>
					<img src='/asset/sec2_hong.png' alt='' />
				</div>
				<div className='text_wrap'>
					<div className='sub_title'>
						<p>저는 <br/><span className='script_text'></span></p>
						<p>개발자 홍민경입니다.</p>
					</div>
					<div className='introduce'>
						<p>기존에 전공으로 배웠던 html, css, javascript, jquery에 React, next 와 같은 프레임워크를 배우고 경험해 보면서 더욱 </p>
						<p>소통과 협업을 중요시하며 혼자 하는 것이 아닌 같이 작업하는 개발자, 변화하는 기술에 발맞춰 꾸준히 발전하는 프론트엔드 개발자가 되도록 노력할 것입니다.</p>
					</div>
					<div className='skill_wrap'>
						<Sec2Skill />
					</div>
				</div>
			</div>
		</>
	)
}

export default Section2