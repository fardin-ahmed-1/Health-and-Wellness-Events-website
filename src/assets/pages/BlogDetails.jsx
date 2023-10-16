import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { SlCalender } from 'react-icons/sl';
import userProfile from '../../../public/images/user.png'
import { useEffect } from 'react'
import 'aos/dist/aos.css'; 
import Aos from 'aos';

const BlogDetails = () => {
    useEffect(()=>{
        Aos.init({duration : 1000});
      },[])
    const blogsData = useLoaderData()
    const { id } = useParams()
    const idNumber = parseInt(id)
    const singleBlog = blogsData.find(blog => blog.id == idNumber)
    const { post_title, description, image, publishing_date, category, tags, authInfo } = singleBlog
    return (
        <div className='container lg:w-4/5 px-6 mx-auto my-12'>
            <div>
                <img data-aos="zoom-out" className='w-full' src={image} alt="" />

                <div data-aos="fade-down" className='flex gap-x-6 my-7'>

                    <h1 className='py-1 px-6 bg-primery rounded-full text-white text-center text-xl font-medium border-2 border-transparent hover:bg-transparent hover:text-primery hover:border-primery duration-300 '>{category}</h1>

                    <span className='text-2xl  text-gray-500 font-normal flex items-center gap-3'> <SlCalender> </SlCalender> {publishing_date}</span>
                </div>

                <div className='my-7'>
                    <h1 data-aos="fade-up" className='text-4xl text-black1 font-medium'>{post_title}</h1>
                    <p data-aos="fade-up" className='text-lg text-text font-normal my-4'>{description}</p>
                </div>

                <div className='flex gap-x-6 my-7'>
                    <span className='text-3xl  text-gray-500 font-medium flex items-center gap-3'> Tags:</span>

                    <div className='flex flex-wrap  gap-x-4 gap-y-2'>
                        {
                            tags.map(tag=>  <h1 className='py-1 px-6 bg-primery rounded-full text-white text-center text-lg font-medium border-2 border-transparent hover:bg-transparent hover:text-primery hover:border-primery duration-300 '>{tag}</h1>)
                        }
                    </div>

                </div>

                <div className='my-10'>
                    <h1 data-aos="fade-down" className='text-4xl lg:text-5xl text-black1 font-medium'>Meet the Author</h1>

                    <div  data-aos="fade-up" className='w-full lg:w-8/12 mt-4 rounded-lg bg-graybg py-1 px-6 flex gap-5 items-start '>

                          <img className='h-12 w-12 mt-4 rounded-full' src={userProfile} alt="" />

                        <div>
                        <p className='text-3xl text-black1 font-normal mt-4 '> {authInfo.auth_name} </p>
                        <p className='text-lg text-text font-normal my-2 pb-3'>
                        Cmsmasters Studio is a union of 15 people who are completely into innovative website design and progressive website development. Yes, we believe we can make the world be more beautiful. And as we specialize on WordPress themes, we do our job the best way it can be done.
                        </p>
                        </div>
                     
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogDetails