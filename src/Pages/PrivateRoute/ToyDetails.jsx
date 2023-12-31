import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useTitle from '../../hooks/useTitle'

const ToyDetails = () => {
    useTitle('Toy Details')

    const {id} = useParams()
    const [toy, setToy] = useState([]);

    useEffect(()=>{
        fetch(`https://server-a11.vercel.app/storedata`)
        .then((res)=>res.json())
        .then((data)=> setToy(data))
        .catch((err)=>console.log(err.message))
    },[])
        
    const singleToy = toy?.find((item)=> item._id == id);
    return (
      <>
        <h1 className='text-2xl md:text-5xl font-bold text-center mt-16 underline'>TOY DETAILS</h1>
        { toy && <div className='toy-details-container flex flex-col md:flex-row items-center mt-8 mb-14 w-[90%] mx-auto'>
              <img src={singleToy?.picture} alt={singleToy?.toyName} />
              <div className="details md:ms-16">
                  <h1 className='font-bold text-2xl md:text-3xl text-teal-400'>Toy Name: {singleToy?.toyName}</h1>
                  <h3 className='font-semibold text-1xl md:text-2xl mt-2 text-rose-500'>Seller Name: {singleToy?.sellerName}</h3>
                  <h5 className='font-semibold text-blue-700'>Email: {singleToy?.sellerEmail}</h5>
                  <h5 className='mt-5 font-semibold'>Price: ${singleToy?.price}</h5>
                  <h5 className='font-semibold'>Rating: {singleToy?.rating}</h5>
                  <h5 className='font-semibold'>Available quantity: {singleToy?.quantity}</h5>
                  <p className='font-semibold w-full md:w-4/5 mt-3'>Description: {singleToy?.description}</p>
              </div>
        </div>

        }
      </>
    )
}

export default ToyDetails