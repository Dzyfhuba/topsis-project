import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login, Register, Service, Article, About } from '../Pages'

const index = () => {
	return (
		<Router>
			<Routes>
				<Route path={'/'} element={<Home/>} />

				<Route path={'/login'} element={<Login/>} />
				<Route path={'/register'} element={<Register/>} />

				<Route path={'/service'} element={<Service />} />
				<Route path={'/article'} element={<Article/>} />
				<Route path={'/about'} element={<About/>} />
			</Routes>
		</Router>
	)
}

export default index