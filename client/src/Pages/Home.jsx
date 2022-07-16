import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Containers/Navbar'
// import { HotTable } from '@handsontable/react'
import { registerAllModules } from 'handsontable/registry'
import Handsontable from 'handsontable'
import Button from '../Components/Button'
import Modal from '../Containers/Modal'
import Input from '../Components/Input'
import ButtonAnchor from '../Components/ButtonAnchor'
import Hosts from '../Config/Hosts'

registerAllModules();

const Home = () => {
	const [globalData, setGlobalData] = useState([])
	// const [colHeaders, setColHeaders] = useState([])
	const [hot, setHot] = useState(Object)

	useEffect(() => {
		axios.get(`${Hosts.main}/students`)
		.then(response => parseDataToTable(response.data.students))
		.then(({parsedArray, keys}) => {
			// console.log(parsedArray)
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
				hiddenColumns: {
					columns: [0]
				},
				licenseKey: 'non-commercial-and-evaluation'
			})
			setHot(hot_elem)
		})
	}, [])

	const parseDataToTable = async (data) => {
		// console.log(data)
		const parsed = await data.map(item => {
			return {
				id: item.id,
				name: item.name,
				department: item.department,
				year: item.year,
				joined: item.joined ? 'Gabung' : 'Tidak',
				status: item.status,
				grade_point_average: item.grade_point_average,
				parents_income: item.parents_income,
				parents_expense: item.parents_expense,
				rank: item.rank || null
			}
		})
		setGlobalData(data)

		const parsedArray = parsed.map(({
			id,
			name,
			department,
			year,
			joined,
			status,
			grade_point_average,
			parents_income,
			parents_expense,
			rank
		}) => [
			id,
			name,
			department,
			year,
			joined,
			status,
			grade_point_average,
			parents_income,
			parents_expense,
			rank
		])
		// console.log(parsedArray)
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

	const mergeArray = (arr1 = [], arr2 = []) => {
		let i = -1;
		const copy = arr1.slice();
		copy.forEach(obj => {
		   const helper = [];
		   arr2.forEach(obj2 => {
			   if(obj.id === obj2.id){
				 i++;
				 helper.push(arr2[i]['rank']);
			  };
		   })
		   if(helper.length !== 0){
			  obj.Rank = helper[0];
		   };
		})
		return copy;
	 };

	const handleCalculate = async () => {
		const data = globalData

		axios.post('https://topsispy.hafidzubaidillah.com/topsis', data)
		.then(res => res.data)
		.then(data => {
			data.shift()
			const dataParsed = data.map(item => {
				return {
					id: + item.id,
					rank: item.rank
				}
			})
			const merged = mergeArray(globalData, dataParsed)
			// console.log(merged)
			const keys = Object.keys(merged[0])

			keys[11] = 'parents_status'
			keys[12] = 'organization'

			const container = document.querySelector('#data')
			const hot_elem = new Handsontable(container, {
				data: merged,
				colHeaders: keys,
				height: '80vh',
				width: '80vw',
				rowHeaders: true,
				columnSorting: true,
				dropdownMenu: true,
				filters: true,
				hiddenColumns: {
					columns: [0, 4, 8, 9, 10]
				},
				licenseKey: 'non-commercial-and-evaluation'
			})
			setHot(hot_elem)
		})
	}

	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className='min-h-screen py-20 bg-primary flex flex-col items-center justify-center'>
				<div className="mb-3 w-4/5 flex justify-around gap-5">
					<Button onClick={handleExport}>Export and Download</Button>
					<Button onClick={handleCalculate}>Calculate Rank</Button>
					<ButtonAnchor to={'/create'}>Add New Data</ButtonAnchor>
				</div>
				<div id='data'></div>
			</main>
		</>
	)
}

export default Home