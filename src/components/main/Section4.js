import React from 'react'

function Section4() {
	const CopyClipBoard = async (text) => {
		try {
			await navigator.clipboard.writeText(text);
			alert('클립보드에 복사되었습니다.');
		} catch (e) {
			alert('복사에 실패하였습니다');
		}
	};

	return (
		<>
			<div className='title inner_t'>
				<h2>CONTACT</h2>
				<div className='me'>
					<h2>ME</h2>
				</div>
			</div>
			<div className='cont_wrap'>
				<div className='cont_item'>
					<div className='icon_wrap'>
						<img src='/asset/ICON_phone.png' alt='전화기 아이콘' />
					</div>
					<div className='wrap_title'>
						<p>전화번호</p>
						<button onClick={()=>CopyClipBoard('01090330286')}>
							<img src='/asset/ICON_copy.png' alt='copy 아이콘' />
						</button>
					</div>
					{/* <p className='txt'>010-</p> */}
					<p className='txt'>010-9033-0286</p>
				</div>
				<div className='cont_item inner'>
					<div className='icon_wrap'>
						<img src='/asset/ICON_mail.png' alt='메일 아이콘' />
					</div>
					<div className='wrap_title'>
						<p>이메일</p>
						<button onClick={()=>CopyClipBoard('ghdalsrud0210@naver.com')}>
							<img src='/asset/ICON_copy.png' alt='copy 아이콘' />
						</button>
					</div>
					{/* <p className='txt'>@naver.com</p> */}
					<p className='txt'>ghdalsrud0210 @naver.com</p>
				</div>
			</div>
		</>
	)
}

export default Section4