import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Leagues = (props) => {
	const url =
		`https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=${props.league}&APIkey=e49388aaf51b9ca2a9d81095fc9eb0a17b1c2fed7b621c890b7e1d1ec81d5c8b`

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
		<div className='md:w-[90%] h-full bg-gray-900 py-10  rounded-xl mx-auto'>
			<div className='block'>
				
			</div>
			<div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-4 w-[90%] mx-auto'>
                
				<table class='w-full h-60 border border-black text-center  shadow-2xl '>
					<thead className='border border-black bg-gray-400 ' >
						<tr>
							<th className=''>nb.</th>
							<th className='w-[50%] text-center'>Name</th>
							<th className='w-[35%] text-center'>Club</th>
							<th className='text-center'>G</th>
						</tr>
					</thead>
					<tbody  className='bg-gray-800 text-white'>
						<tr>
							<td className='font-bold'>{data?.result[0]?.player_place}</td>
							<td className='w-[50%]'>{data?.result[0]?.player_name}</td>
							<td className='w-[35%]'>{data?.result[0]?.team_name}</td>
							<td className=''>{data?.result[0]?.goals}</td>
						</tr>
						<tr>
							<td className='font-bold'>{data?.result[1]?.player_place}</td>
							<td className='w-[50%]'>{data?.result[1]?.player_name}</td>
							<td className='w-[35%]'>{data?.result[1]?.team_name}</td>
							<td className=''>{data?.result[1]?.goals}</td>
						</tr>
						<tr>
							<td class='font-bold'>{data?.result[2]?.player_place}</td>
							<td class='w-[50%]'>{data?.result[2]?.player_name}</td>
							<td class='w-[35%]'>{data?.result[2]?.team_name}</td>
							<td class=''>{data?.result[2]?.goals}</td>
						</tr>
						<tr>
							<td className='font-bold'>{data?.result[3]?.player_place}</td>
							<td className='w-[50%]'>{data?.result[3]?.player_name}</td>
							<td className='w-[35%]'>{data?.result[3]?.team_name}</td>
							<td className=''>{data?.result[3]?.goals}</td>
						</tr>
						<tr>
							<td className='font-bold'>{data?.result[4]?.player_place}</td>
							<td className='w-[50%]'>{data?.result[4]?.player_name}</td>
							<td className='w-[35%]'>{data?.result[4]?.team_name}</td>
							<td className=''>{data?.result[4]?.goals}</td>
						</tr>
					</tbody>
				</table>
                
				<img src={props.logo} alt='' className=' md:h-60 h-[500px] w-30 sm:w-25 lg::w-auto px-auto' />
                
			</div>
		</div>
	)
}

export default Leagues
