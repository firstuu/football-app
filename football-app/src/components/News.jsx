import React, { useState, useEffect } from 'react'
import axios from 'axios'

const News = () => {
	const [data, setData] = useState()
	useEffect(() => {
		axios
			.get(url)
			.then(res => {
				setData(res.data)
			})
			.catch(error => {
				console.log(error)
			})
	}, [])

	console.log(data)

	const url =
		'https://apiv2.allsportsapi.com/football/?&met=Videos&eventId=86392&APIkey=e49388aaf51b9ca2a9d81095fc9eb0a17b1c2fed7b621c890b7e1d1ec81d5c8b'
	return (
		<div className=''>
			<div className=' w-[300px] border border-black bg-black text-white rounded-full p-10 m-5 text-center font-bold'>
				<div>
					<p>
						Fran Kirby, Ellen White, Lauren Hemp and Nikita Parris chat all
						things Women's Euros at England Women media day
					</p>
				</div>
			</div>
			<div className=' w-[300px] border border-black bg-black text-white rounded-full p-10 m-5 text-center font-bold'>
				<div>
					<p>
						Fran Kirby, Ellen White, Lauren Hemp and Nikita Parris chat all
						things Women's Euros at England Women media day
					</p>
				</div>
			</div>
			<div className=' w-[300px] border border-black bg-black text-white rounded-full p-10 m-5 text-center font-bold'>
				<div>
					<p>
						Fran Kirby, Ellen White, Lauren Hemp and Nikita Parris chat all
						things Women's Euros at England Women media day
					</p>
				</div>
			</div>
			<div className=' w-[300px] border border-black bg-black text-white rounded-full p-10 m-5 text-center font-bold'>
				<div>
					<p>
						Fran Kirby, Ellen White, Lauren Hemp and Nikita Parris chat all
						things Women's Euros at England Women media day
					</p>
				</div>
			</div>
		</div>
	)
}

export default News
