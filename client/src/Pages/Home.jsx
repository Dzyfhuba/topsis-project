import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Containers/Navbar'
import { HotTable } from '@handsontable/react'
import { registerAllModules } from 'handsontable/registry'

registerAllModules();

const Home = () => {
	const [data, setData] = useState([])
	const [colHeaders, setColHeaders] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3333/students').then(response => parseDataToTable(response.data.students))
	}, [])

	const parseDataToTable = async (data) => {
		const parsed = await data.map(item => {
			return [
				item.name,
				item.department,
				item.year,
				item.joined ? 'Gabung' : 'Tidak',
				item.status,
				item.parents_income,
				item.parents_expense
			]
		})
		// parsed.pre
		setData(parsed)
		setColHeaders(Object.keys(data[0]))
	}

	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className='min-h-screen py-20 bg-primary'>
				<HotTable
				data={data}
				colHeaders={colHeaders}
				width='600'
		        height='300'

				/>
			</main>
			
		</>
	)
}

export default Home