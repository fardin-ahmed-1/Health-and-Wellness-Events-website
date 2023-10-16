import React, { useEffect } from 'react'
import 'aos/dist/aos.css'; 
import Aos from 'aos';


const PageBanner = ({title }) => {
  useEffect(()=>{
    Aos.init({duration : 1000});
  },[])

  return (
    <div className='bg-primery h-40 lg:h-56 flex items-center justify-start'>
       <div className='container mx-auto px-6'>
       <h1 data-aos="fade-up" className='text-4xl text-center text-white font-semibold'>{title }</h1>
       
       </div>
    </div>
  )
}
export default PageBanner