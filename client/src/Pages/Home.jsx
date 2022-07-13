import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Containers/Navbar'
// import { HotTable } from '@handsontable/react'
import { registerAllModules } from 'handsontable/registry'
import Handsontable from 'handsontable'
import Button from '../Components/Button'

registerAllModules();

const Home = () => {
	const [globalData, setGlobalData] = useState([])
	// const [colHeaders, setColHeaders] = useState([])
	const [hot, setHot] = useState(Object)

	useEffect(() => {
		axios.get('http://localhost:3333/students')
		.then(response => parseDataToTable(response.data.students))
		.then(({parsedArray, keys}) => {
			console.log(parsedArray)
			const container = document.querySelector('#data')
			const hot_elem = new Handsontable(container, {
				data: parsedArray,
				colHeaders: keys,
				height: '80vh',
				width: '80vw',
				rowHeaders: true,
				columnSorting: true,
				dropdownMenu: true,
				filters: true,
				licenseKey: 'non-commercial-and-evaluation'
			})
			setHot(hot_elem)
		})
	}, [])

	const parseDataToTable = async (data) => {
		console.log(data)
		const parsed = await data.map(item => {
			return {
				name: item.name,
				department: item.department,
				year: item.year,
				joined: item.joined ? 'Gabung' : 'Tidak',
				status: item.status,
				parents_income: item.parents_income,
				parents_expense: item.parents_expense,
				rank: item.rank || null
			}
		})
		setGlobalData(data)

		const parsedArray = parsed.map(({
			name,
			department,
			year,
			joined,
			status,
			parents_income,
			parents_expense,
			rank
		}) => [
			name,
			department,
			year,
			joined,
			status,
			parents_income,
			parents_expense,
			rank
		])
		console.log(parsedArray)
		const keys = Object.keys(parsed[0])
		return {parsedArray, keys}
	}

	const handleExport = () => {
		const exportPlugin = hot.getPlugin('exportFile');

		exportPlugin.downloadFile('csv', {
			bom: false,
			columnDelimiter: ',',
			columnHeaders: false,
			exportHiddenColumns: true,
			exportHiddenRows: true,
			fileExtension: 'csv',
			filename: 'Handsontable-CSV-file_[YYYY]-[MM]-[DD]',
			mimeType: 'text/csv',
			rowDelimiter: '\r\n',
			rowHeaders: true
		  });	
	}

	const handleCalculate = async () => {
		const data = globalData

		axios.post('http://localhost:5000/topsis', data)
		.then(res => console.log(res.data))
	}

	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className='min-h-screen py-20 bg-primary flex flex-col items-center justify-center'>
				<div className="mb-3">
					<Button onClick={handleExport}>Export and Download</Button>
					<Button onClick={handleCalculate}>Calculate Rank</Button>
				</div>
				<div id='data'></div>
			</main>
			
		</>
	)
}

export default Home