import React from 'react'
import { SlCalender } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import 'aos/dist/aos.css'; 
import Aos from 'aos';

const Blog = ({ blog }) => {
    useEffect(()=>{
        Aos.init({duration : 1000});
      },[])
    const {id, post_title, description, image, publishing_date } = blog

    return (
        <div>
            <div data-aos="fade-up" className='flex flex-col md:flex-row lg:h-60'>

                <div className='w-full md:w-52 lg:w-72'>
                    <img className='rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:rounded-l-lg h-full w-full' src={image} alt="" />
                </div>
                
                <div className='bg-graybg py-4 px-5 flex-1 rounded-b-lg md:rounded-b-none md:rounded-tr-lg md:rounded-r-lg'>
                    <span className='text-base text-gray-500 font-normal flex items-center gap-2'> <SlCalender> </SlCalender> {publishing_date}</span>
                    <h1 className='text-2xl text-black1 font-medium py-2'>{post_title}</h1>
                    <p className='text-xl text-gray1 font-normal pb-2'>{description.slice(0, 60)}</p>
                    <Link to={`/blogDetails/${id}`} > <button className='text-xl text-[#499afa] font-medium flex items-center pb-0 gap-2 hover:border-b-2 border-[#499afa] '> Read More</button> </Link>
                </div>

            </div>
        </div>
    )
}

export default Blog