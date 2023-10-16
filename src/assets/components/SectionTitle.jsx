import React from 'react'
import { useEffect } from 'react'
import 'aos/dist/aos.css'; 
import Aos from 'aos';

const SectionTitle = ({title, subTitle}) => {
  useEffect(()=>{
    Aos.init({duration : 1000});
  },[])
  return (
    <div className='overflow-hidden'>
         <h1 data-aos="fade-left" className='text-xl font-medium text-whiteC'>{subTitle}</h1>
            <h1 data-aos="fade-up" className='text-4xl font-semibold text-whiteC mt-4 w-full lg:w-[30%] md:w-[70%]'>{title}</h1>
    </div>
  )
}

export default SectionTitle