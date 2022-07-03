import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TeamsComponent = props => {
	const url = `https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${props.id}&APIkey=e49388aaf51b9ca2a9d81095fc9eb0a17b1c2fed7b621c890b7e1d1ec81d5c8b`

	const [info, setInfo] = useState(false)

	const infoHandler = () => {
		setInfo(!info)
	}

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

	return (
		<div className='hover:bg-slate-200/40 group relative'>
			<div className='border-2 border-black shadow-xl rounded-md flex flex-col items-center p-2 h-60'>
				<div className='bg-gray-600'></div>
				<h1 className=' text-lg font-bold text-center mb-2'>
					{data?.result[0]?.team_name}
				</h1>
				<img className='' src={data?.result[0]?.team_logo} alt='/' />

				<div
					className='bg-black/70 left-0 bottom-0 top-0 right-0 text-center hidden group-hover:block absolute rounded-md cursor-pointer '
					onClick={infoHandler}>
					{!info ? (
						<div className='mt-24 text-md font-bold text-white'>
							Click For More Info!
						</div>
					) : (
						<div
							onClick={infoHandler}
							className='mx-auto text-white font bold text-md flex  flex-col justify-center'>
							<span>Coach:</span>
							<span className=''>
								{data?.result[0]?.coaches[0]?.coach_name}
							</span>
							<span className='mt-5'>Top 3 players:</span>
							<span>{data?.result[0].players[0].player_name}</span>
							<span>{data?.result[0].players[1].player_name}</span>
							<span>{data?.result[0].players[2].player_name}</span>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default TeamsComponent
