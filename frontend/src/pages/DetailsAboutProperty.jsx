import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const DetailsAboutProperty = () => {

    const {id} = useParams()
    console.log("Id is : ",id)
    const [property, setProperty] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const propertyData = await axios.get() 
        }
     })
  return (
    <div>
        <div className="flex justify-center">
            <img
            src=""
            alt="food"
            className="rounded-md h-40 w-40 object-cover" 
            />
        </div>
        <div className="mt-2 w-1/2 md:w-full flex-col gap-2 flex">
            <span className="text-lg font-semibold text-center text-gray-700">
            City, State
            </span>
            <div className="flex justify-center mt-2">
            <p className="text-lg font-semibold text-center text-gray-700">
                ₹Price
            </p>
            </div>
            <div className="flex justify-center mt-2">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Read Details
            </button>
            </div>
        </div>
    </div>
  )
}

export default DetailsAboutProperty