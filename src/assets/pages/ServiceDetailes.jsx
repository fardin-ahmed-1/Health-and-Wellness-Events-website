import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import OpeningHours from '../components/OpeningHours'
import { BiCheck } from 'react-icons/bi';
import { FaMedal, FaUserNurse } from 'react-icons/fa6';
import { useEffect } from 'react'
import 'aos/dist/aos.css'; 
import Aos from 'aos';

const ServiceDetailes = () => {
  useEffect(()=>{
    Aos.init({duration : 1000});
  },[])

  const servicesData = useLoaderData()
  const { id } = useParams()
  const parseInId = parseInt(id)
  const serviceData = servicesData.find(item => item.id == parseInId)
  const { title, price, description, image, approach,experts, subtitle, services } = serviceData

  return (
    <div>
      

      <div className='container mx-auto px-6 mt-10'>
        <div className='flex flex-col-reverse lg:flex-row gap-10'>
          <div className='w-full lg:w-[350px] mb-10 lg:my-0 mx-auto'>

           <div data-aos="fade-down">
           <OpeningHours> </OpeningHours>
           </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-6'>
            <div data-aos="fade-up" className='items-start gap-4 border rounded-lg mt-7 p-6 space-y-2'>
               <FaMedal className='text-5xl'></FaMedal> 
              <h1 className='text-2xl font-semibold'>Approach</h1>
              <p className='text-base lg:text-lg font-normal text-gray1'> {approach}</p>
            </div>

            <div data-aos="fade-up" className='items-start gap-4 border rounded-lg mt-7 p-6 space-y-2'>
               <FaUserNurse className='text-5xl'></FaUserNurse> 
              <h1 className='text-2xl font-semibold'>Experts</h1>
              <p className='text-base lg:text-lg font-normal text-gray1'> {experts}</p>
            </div>
            </div>
          </div>
          
          <div className='flex-1'>
            <div data-aos="fade-up" className='space-y-4 bg-graybg p-10 rounded-lg'>
              <h1 className='text-4xl lg:text-5xl  font-semibold mb-4'>{title}</h1>
              <img data-aos="zoom-out" className='rounded-md w-full' src={image} alt="" />
              <h1 data-aos="fade-up" className='text-2xl lg:text-3xl font-medium'>{subtitle}</h1>
              <p data-aos="fade-up" className='text-base lg:text-lg text-black1 font-medium'>{description}</p>
              <button data-aos="fade-up" className='text-2xl font-medium text-white rounded-lg py-3 px-10  hover:bg-primery  duration-300 bg-secondary'> Appointment: <span>${price}</span></button>
            </div>

            {/* Services section */}
            <div className='mb-10'>
              <h1 data-aos="fade-down" className='text-4xl font-semibold mt-10 mb-4 ml-3 '>Services</h1>
              <div data-aos="fade-up" className='space-y-4 bg-graybg p-10 rounded-lg flex-row lg:flex items-center gap-x-10 justify-between'>
                <div  className='mt-3'>
                  {
                    services.slice(0, 6).map(service => <div className='flex gap-x-2 itemce pb-3  pt-3 border-b last:border-b lg:last:border-b-0'>
                      <BiCheck className='text-3xl text-secondary'></BiCheck>
                      <h1 className='text-xl text-gray1 font-normal'> {service}  </h1>
                    </div>
                    )
                  }
                </div>
                <div>
                  {
                    services.slice(6, 12).map(service => <div className='flex gap-x-2 itemce pb-3  pt-3 border-b last:border-b-0'>
                      <BiCheck className='text-3xl text-secondary'></BiCheck>
                      <h1 className='text-xl text-gray1 font-normal'> {service}  </h1>
                    </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ServiceDetailes