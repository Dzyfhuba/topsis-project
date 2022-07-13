import axios from 'axios'
import React, { useEffect, /*useState*/ } from 'react'
import Navbar from '../Containers/Navbar'
// import { HotTable } from '@handsontable/react'
import { registerAllModules } from 'handsontable/registry'
import Handsontable from 'handsontable'

registerAllModules();

const Home = () => {
	// const [data, setData] = useState([])
	// const [colHeaders, setColHeaders] = useState([])
	// const [hot, setHot] = useState(Object)

	useEffect(() => {
		axios.get('http://localhost:3333/students')
		.then(response => parseDataToTable(response.data.students))
		.then(({parsedArray, keys}) => {
			console.log(parsedArray)
			const container = document.querySelector('#data')
			const hot = new Handsontable(container, {
				data: parsedArray,
				colHeaders: keys,
				height: '80vh',
				rowHeaders: true,
				columnSorting: true,
				dropdownMenu: true,
				filters: true,
				licenseKey: 'non-commercial-and-evaluation'
			})
			hot.render()
		})
	}, [])

	const parseDataToTable = async (data) => {
		const parsed = await data.map(item => {
			return {
				name: item.name,
				department: item.department,
				year: item.year,
				joined: item.joined ? 'Gabung' : 'Tidak',
				status: item.status,
				parents_income: item.parents_income,
				parents_expense: item.parents_expense
			}
		})
		console.log(parsed)

		const parsedArray = parsed.map(({
			name,
			department,
			year,
			joined,
			status,
			parents_income,
			parents_expense,
		}) => [
			name,
			department,
			year,
			joined,
			status,
			parents_income,
			parents_expense,
		])
		console.log(parsedArray)
		const keys = Object.keys(parsed[0])
		return {parsedArray, keys}
	}

	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className='min-h-screen py-20 bg-primary flex justify-center'>
				<div id='data'></div>
			</main>
			
		</>
	)
}

export default Home