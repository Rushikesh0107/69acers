import React from 'react'
import Login_Form from '../components/core/Auth/Login_Form'
import realestate from "../assets/realestate.jpg"

const Login_Page = () => {
  return (
    <div
    className='flex bg-red-500 h-screen justify-between'
    >
      <div
      className=' bg-gradient-to-b from-blue-700 to-blue-400 md:w-full'
      >
        <div
        className='w-full h-full flex justify-center items-center'
        >
          <Login_Form />
        </div>
      </div>
      <div className='w-full '>
        <img 
        src={realestate} 
        alt=""
        className='object-cover w-full h-full'
        />
      </div>
    </div>
  )
}

export default Login_Page