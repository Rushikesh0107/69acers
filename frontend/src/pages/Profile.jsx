import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion'

const Profile = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user} = useSelector(state => state.profile) 

    //console.log(address);



  return (
    <>
    <div className='w-full flex justify-center items-center flex-col pb-10 pt-10'
    //style={{height: 'calc(100vh - 64px)'}}
    >
        
        {/* AVATAR */}

        <motion.div
        className='flex flex-col items-center justify-center gap-3 mb-10'
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
        >
            <Avatar 
            alt={user.fullname} 
            src={user.avatar} 
            sx={{ width: 150, height: 150 }} 
            />
            <span
            className='font-semibold text-white cursor-pointer'
            onClick={() => navigate("/profile/edit")}
            >
              {user.avatar && "Edit Avatar"}
            </span>
        </motion.div>

        {/* USER INFO */}

        <motion.div 
        className='flex flex-col items-center justify-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 rounded-md bg-white w-[85%] md:w-1/4 mb-10'
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
        >

          <div
          className='flex justify-between items-center'
          style={{width: '100%'}}
          >
            <span
            className='font-semibold text-xl'
            >Personal Details</span>
            <button
            className='bg-green-500 text-white px-4 py-1 font-semibold rounded-md'
            onClick={() => navigate("/profile/edit")}
            >
              Edit
            </button>
            </div>    

            <div
            className='flex font-semibold flex-col gap-3 text-lg w-full'
            >
              <div>
                <span className='font-semibold'>Full Name: </span>
                <span>{user.fullname}</span>
              </div>

              <div>
                <span>Email: </span>
                <span>{user.email}</span>
              </div>

              <div>
                <span>Phone: </span>
                <span>{user.phone}</span>
              </div>

              <div>
                <span>Username: </span>
                <span>{user.username}</span>
                </div>
            </div>


        </motion.div>

        <motion.div
        className='flex flex-col items-center justify-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 rounded-md bg-white w-[85%] md:w-1/4 mb-10'
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
        >

          <form>
            <input 
            type="text" 
            placeholder=''
            />
          </form>

        </motion.div>
    </div>
    </>
  )
}

export default Profile