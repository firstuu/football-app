import React from 'react'

import laLiga from '../assets/laLiga.png'
import serieA from '../assets/serie-a.png'
import premLeague from '../assets/premier-league-2-logo.png'

import TeamsComponent from './TeamsComponent'
import Leagues from './Leagues'
import News from './News'

const Content = () => {
	return (
		<div className=''>
			<div className='text-center flex w-full lg:mx-5'>
				<h1 className='lg:w-3/4 mx-auto text-2xl font-bold'>Teams</h1>
				<h1 className=' w-1/4 text-center font-bold text-2xl hidden lg:block'>
					Popular News
				</h1>
			</div>
			<div className='flex justify-between flex-col lg:flex-row'>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6  m-2 gap-y-3 gap-x-3 w-3/4 mx-auto'>
					<TeamsComponent id='80' />
					<TeamsComponent id='81' />
					<TeamsComponent id='82' />
					<TeamsComponent id='83' />
					<TeamsComponent id='84' />
					<TeamsComponent id='85' />
					<TeamsComponent id='86' />
					<TeamsComponent id='87' />
					<TeamsComponent id='88' />
					<TeamsComponent id='89' />
					<TeamsComponent id='90' />
					<TeamsComponent id='91' />
					<TeamsComponent id='92' />
					<TeamsComponent id='93' />
					<TeamsComponent id='94' />
					<TeamsComponent id='95' />
					<TeamsComponent id='96' />
					<TeamsComponent id='97' />
					<TeamsComponent id='98' />
					<TeamsComponent id='102' />
					<TeamsComponent id='100' />
					<TeamsComponent id='103' />
					<TeamsComponent id='104' />
					<TeamsComponent id='105' />
				</div>
				<h1 className='text-center font-bold text-2xl lg:hidden block mt-2'>
					Popular News
				</h1>
				<div className='mx-auto'>
					<News />
				</div>
			</div>
			<div className='m-4 mx-auto'>
				<div className=''>
					<h1 className='text-4xl font-bold text-center text-red-300 w-3/4 rounded-xl mx-auto'>
						Top 3 Leagues Top Scorers
					</h1>
					<h1 className='text-3xl text-center text-green-500 w-3/4 pt-5 rounded-xl mx-auto mt-4'>
						Serie A
					</h1>
					<Leagues league='207' logo={serieA} />
					<h1 className='text-3xl text-center text-orange-500  w-3/4 rounded-xl mx-auto pt-5 mt-4'>
						La Liga
					</h1>
					<Leagues league='1' logo={laLiga} />
					<h1 className='text-3xl text-center text-blue-500 w-3/4 rounded-xl mx-auto mt-4 pt-5'>
						Premier League
					</h1>
					<Leagues league='1' logo={premLeague} />
				</div>
			</div>
		</div>
	)
}

export default Content
