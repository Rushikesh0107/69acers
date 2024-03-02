import React from 'react'
import Banner from "../assets/Banner.jpeg"
import Cities from '../components/core/Home/Cities'

const Home = () => {
  return (
    <div
    className='flex flex-col'
    >
      <div
      className='flex w-full h-96'
      >
        <img 
        src={Banner} 
        alt="" 
        className='w-full object-cover blur-sm'
        />

      </div>
        
      <div
      className='flex justify-center'
      style={{position: 'relative', bottom: 100}}
      >
        <Cities />
      </div>

    </div>
  )
}

export default Home