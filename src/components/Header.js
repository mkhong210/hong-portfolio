import React from 'react'
import '../style/common.scss'

function Header() {
	return (
		<header>
			<div className='inner'>
				<div className='logo'>
					<img src='/asset/Hong_logo.svg' alt='hong 로고' />
				</div>
				<div className='menu'>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Work</li>
						<li>Contact</li>
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header