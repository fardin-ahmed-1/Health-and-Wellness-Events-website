import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import 'aos/dist/aos.css'; 
import Aos from 'aos';

const Team = ({team}) => {
  useEffect(()=>{
    Aos.init({duration : 1000});
  },[])

  const {id, name, job_title, profile_url, about}=team
  return (
    <div data-aos="fade-down" className='bg-graybg rounded-lg'>
      <img className='rounded-t-lg' src={profile_url} alt={name} />
      <div className='px-10 pt-6 pb-6 '>
        <h2 data-aos="fade-down" className='text-xl text-black2 font-medium'>{job_title}</h2>
        <h2 data-aos="fade-down" className='text-2xl text-black font-semibold py-1'>{name}</h2>
        <p data-aos="fade-up" className='text-base text-gray1 font-normal'>{about.slice(0,140)}</p>

     
       <Link data-aos="zoom-up" to={`/teamProfile/${id}`} className='text-xl block text-center w-full mt-5 font-normal text-white rounded-lg py-3 px-8  hover:bg-primery  duration-300 bg-secondary'> Read More </Link>
      
      </div>
    </div>
  )
}
export default Team