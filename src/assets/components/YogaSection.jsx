import React from 'react'
import yogaImage from '../../../public/images/Layer-44.png'
import { IoFitnessSharp, IoBodyOutline } from 'react-icons/io5';
import { GiBodyBalance } from 'react-icons/gi';
import { RiBodyScanLine } from 'react-icons/ri';
import { useEffect } from 'react'
import 'aos/dist/aos.css'; 
import Aos from 'aos';

const YogaSection = () => {
  useEffect(()=>{
    Aos.init({duration : 1000});
  },[])
  return (
    <div className='container mx-auto px-6 my-10 md:my-10 lg:my-16'>
        <h1 data-aos="fade-up" className='text-5xl text-black1 font-medium text-center'>The Main Reasons to PracticeYoga:</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 mt-16'>

          <div>
          <div data-aos="fade-down" className='flex gap-x-4 mb-4'>
                <div>
                    <h1 className='text-3xl mb-2 text-black1 font-medium text-right'>Good for <span className='text-secondary'>Health</span></h1>
                    <p className='text-lg text-text font-normal text-right'>Yoga Fit is where you can find balance, harmony and energy. Yoga Fit is where you can find balance, harmony and energy.</p>
                    </div>
                    <div className='w-16 h-16 p-2 !text-white  border  bg-secondary rounded-full flex justify-center '>
                <IoFitnessSharp className='lg:!text-white cursor-pointer text-5xl '> </IoFitnessSharp>
                </div>
            </div>

          <div data-aos="fade-up" className='flex gap-x-4 mb-4'>
                <div>
                    <h1 className='text-3xl mb-2 text-black1 font-medium text-right'>Good for <span className='text-secondary'>Body</span></h1>
                    <p className='text-lg text-text font-normal text-right'>Yoga Fit is where you can find balance, harmony and energy. Yoga Fit is where you can find balance, harmony and energy.</p>
                    </div>
                    <div className='w-16 h-16 p-2 !text-white  border  bg-secondary rounded-full flex justify-center '>
                <GiBodyBalance className='lg:!text-white cursor-pointer text-5xl '> </GiBodyBalance>
                </div>
            </div>

      

          </div>


            <div data-aos="fade-up" className='block md:hidden lg:block mb-5'>
                <img src={yogaImage} alt="" />
            </div>


            <div>
          <div data-aos="fade-down" className='flex gap-x-4 mb-4'>
          <div className='w-16 h-16 p-2 !text-white  border  bg-secondary rounded-full flex justify-center '>
                <IoBodyOutline className='lg:!text-white cursor-pointer text-5xl '> </IoBodyOutline>
                </div>
                <div>
                    <h1 className='text-3xl mb-2 text-black1 font-medium text-left'>Good for <span className='text-secondary'>Cardio</span></h1>
                    <p className='text-lg text-text font-normal text-left'>Yoga Fit is where you can find balance, harmony and energy. Yoga Fit is where you can find balance, harmony and energy.</p>
                    </div>
                   
            </div>

          <div data-aos="fade-up" className='flex gap-x-4 mb-4'>
          <div className='w-16 h-16 p-2 !text-white  border  bg-secondary rounded-full flex justify-center '>
                <RiBodyScanLine className='lg:!text-white cursor-pointer text-5xl '> </RiBodyScanLine>
                </div>
                <div>
                    <h1 className='text-3xl mb-2 text-black1 font-medium text-left'>Good for <span className='text-secondary'>Breathing</span></h1>
                    <p className='text-lg text-text font-normal text-left'>Yoga Fit is where you can find balance, harmony and energy. Yoga Fit is where you can find balance, harmony and energy.</p>
                    </div>
                    
            </div>

          </div>
        </div>

    </div>
  )
}

export default YogaSection