import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import 'aos/dist/aos.css'; 
import Aos from 'aos';

const Service = ({service}) => {
  useEffect(()=>{
    Aos.init({duration : 1000});
  },[])

    const {id,title, price, description, image}=service
  return (
    <div data-aos="fade-up" className='p-5 shadow-sm bg-white rounded-xl space-y-3'>
        <img className='rounded-lg' src={image} />
       <h1 className='text-2xl font-semibold text-black1'>{title}</h1>
       <p>{description.slice(0,148)}</p>
       <h1  className='text-xl font-normal text-primery'>Price: ${price}</h1>
       <Link to={`/serviceDetailes/${id}`} className=" bg-secondary text-lg px-10 text-center py-2 mt-3 font-medium text-white justify-center items-center cursor-pointer w-full block rounded-md hover:bg-primery  duration-300"> Show more </Link>
    </div>
  )
}

export default Service