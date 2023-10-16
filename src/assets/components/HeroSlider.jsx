import React, { useEffect } from 'react'
import 'aos/dist/aos.css'; 
import Aos from 'aos';

const HeroSlider = () => {
    useEffect(()=>{
        Aos.init({duration : 1000});
      },[])
    return (
        <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full ">
                <div className='bg-slider2 bg-no-repeat bg-cover w-full relative'>
                    <div className='w-full bg-black opacity-20 h-screen flex items-center justify-start  z-0 '>
                    </div>
                    <div className='w-full md:w-10/12 lg:w-1/2 z-10 absolute top-0 left-16 md:left-24 h-screen flex items-center'>
                        <div className=''>
                            <h1 data-aos="fade-down" className='text-xl text-whiteC font-normal uppercase'>join the community</h1>
                            <h1 data-aos="fade-up" className='text-4xl md:text-6xl font-medium text-white'>We're Building a Better World Together</h1>

                            <button data-aos="fade-down" className=" bg-white text-xl px-8 py-3 font-medium uppercase text-black mt-7 justify-center items-center cursor-pointer block rounded-md"> make an appointment </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='bg-slider1 bg-no-repeat bg-cover w-full relative'>
                    <div className='w-full bg-black opacity-20 h-screen flex items-center justify-start  z-0 '>
                    </div>
                    <div className='w-full md:w-10/12 lg:w-1/2 z-10 absolute top-0 left-16 md:left-24 h-screen flex items-center'>
                        <div>
                            <h1 data-aos="fade-down" className='text-xl text-whiteC font-normal uppercase'>learning blble</h1>
                            <h1 data-aos="fade-up" className='text-4xl md:text-6xl font-medium text-white'>We Aim to Be Guided  by God's Word</h1>
                            <button data-aos="fade-down" className=" bg-white text-xl px-8 py-3 font-medium uppercase text-black mt-7 justify-center items-center cursor-pointer block rounded-md"> make an appointment </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='bg-slider3 bg-no-repeat bg-cover w-full relative'>
                    <div className='w-full bg-black opacity-20 h-screen flex items-center justify-start  z-0 '>
                    </div>
                    <div className='w-full md:w-10/12 lg:w-1/2 z-10 absolute top-0 left-16 md:left-24 h-screen flex items-center'>
                        <div>
                            <h1 data-aos="fade-down" className='text-xl text-whiteC font-normal uppercase'>teanquility and peage</h1>
                            <h1 data-aos="fade-up" className='text-4xl md:text-6xl font-medium text-white'>Harmony Inside Brings Joy to the World</h1>
                            <button data-aos="fade-down" className=" bg-white text-xl px-8 py-3 font-medium uppercase text-black mt-7 justify-center items-center cursor-pointer block rounded-md"> make an appointment </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}
export default HeroSlider