import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import ButtonAnchor from '../Components/ButtonAnchor'
import Button from '../Components/Button'
import anime from 'animejs'

const Navbar = () => {
	const [sidebarShow, setSidebarShow] = useState(false)

	// const sidebarShowToggle = async (show) => {
	// 	if (show)
	// 		await setSidebarShow(false)
	// 	else 
	// 		await setSidebarShow(true)
	// }

	// const sidebarShow = () => {
		
	// }

	const handleSidebarShow = (show) => {
		// const sidebar = document.querySelector('#sidebar_body')
		if (show) {
			anime({
				targets: '#sidebar_body',
				translateX: '-200%',
				easing: 'linear',
				duration: 500
			})
			setSidebarShow(show)
		} else {
			anime({
				targets: '#sidebar_body',
				translateX: '200%',
				easing: 'linear',
				duration: 500
			})
			setTimeout(() => {
				setSidebarShow(show)
			}, 500);
		}
		console.log(sidebarShow)
	}
	
	return (
		<nav className='h-16 py-1 px-8 flex justify-between fixed w-full bg-secondary text-neutral-100'>
			<div className="h-full">
				<Link to={'/'} className='h-full flex items-center'>
					<span className='text-4xl font-black'>TOPSIS</span>
				</Link>
			</div>

			{/* <div className='hidden items-center gap-3 md:flex' id='nav_body'>
				<NavLink to={'/service'} className='h-full flex justify-center items-center font-black w-[120px]
            	hover:text-neutral-700 transition duration-300 ease-in-out
            	'>Jasa</NavLink>
				<NavLink to={'/article'} className='h-full flex justify-center items-center font-black w-[120px]
            	hover:text-neutral-700 transition duration-300 ease-in-out
            	'>Artikel</NavLink>
				<NavLink to={'/about'} className='h-full flex justify-center items-center font-black w-[120px]
            	hover:text-neutral-700 transition duration-300 ease-in-out
            	'>Kontak Kami</NavLink>
			</div> */}
			{/* <ButtonAnchor to={'/login'}>Login</ButtonAnchor> */}
			<Button onClick={() => handleSidebarShow(true)} className={`block md:hidden`}>
				<span className="material-symbols-rounded">
					menu
				</span>
			</Button>
			
			<div id="sidebar_container" className={`fixed top-0 left-0 h-screen w-screen bg-neutral-900 bg-opacity-50
			${sidebarShow ? 'visible' : 'invisible'} md:invisible
			`}>
				<div id="sidebar_body" className='bg-primary fixed top-0 -right-full w-1/2 h-screen opacity-100'>
					<div id="sidebar_head" className='bg-secondary h-16 flex'>
						<Button className='w-full bg-transparent'
							onClick={() => handleSidebarShow(false)}
						>
							<span className="material-symbols-rounded">
								close
							</span>
						</Button>
					</div>
					{/* <div className='flex flex-col items-center gap-3'>
						<NavLink to={'/service'} className='h-full flex justify-center items-center font-black w-full
						leading-8
						text-neutral-900 hover:text-neutral-500 hover:shadow-lg transition duration-300 ease-in-out
						'>Jasa</NavLink>
						<NavLink to={'/article'} className='h-full flex justify-center items-center font-black w-full
						leading-8
						text-neutral-900 hover:text-neutral-500 hover:shadow-lg transition duration-300 ease-in-out
						'>Artikel</NavLink>
						<NavLink to={'/about'} className='h-full flex justify-center items-center font-black w-full
						leading-8
						text-neutral-900 hover:text-neutral-500 hover:shadow-lg transition duration-300 ease-in-out
						'>Kontak Kami</NavLink>
					</div> */}
				</div>
			</div>
		</nav>
	)
}

export default Navbar