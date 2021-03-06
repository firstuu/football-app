import React from 'react'
import Ball from '../assets/ball.png'

const Navbar = () => {
	return (
		<div className='w-full flex h-20 justify-center items-center py-16'>
		
			<img src={Ball} alt='' className='w-20 mr-20' />
			<h1 className='text-3xl font-bold'>FootBall APP</h1>
			<img src={Ball} alt='' className='w-20 ml-20' />
		
		</div>
	)
}

export default Navbar
