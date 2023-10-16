import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { BiCheck } from 'react-icons/bi';
import { useEffect } from 'react'
import 'aos/dist/aos.css'; 
import Aos from 'aos';

const TeamProfile = () => {
    useEffect(()=>{
        Aos.init({duration : 1000});
      },[])

    const TeamDatas = useLoaderData()
    const { id } = useParams()
    const idNumb = parseInt(id)
    const TeamProfile = TeamDatas.find(team => team.id == idNumb)

    const { name, job_title, profile_url, about, phone, address, email, education, board_certification, years_of_expertise, working_shifts } = TeamProfile
    return (
        <div className='container mx-auto px-6 my-10'>
            <div className='flex flex-col lg:flex-row gap-x-10'>
              <div>
              <div data-aos="fade-up" className='bg-primery rounded-lg text-whiteC'>
                    <div className='w-full lg:w-[400px] mb-10 lg:my-0 mx-auto'>
                        <img className='w-full rounded-t-lg' src={profile_url} alt="" />
                        <div className='px-10 pt-6 pb-10 space-y-2'>
                            <h3 className="text-white font-medium text-3xl lg:text-4xl pb-4 border-b border-borderColor"> Personal Info</h3>
                            <div className='py-4 space-y-2'>
                                <p className='text-2xl text-whiteC font-normal '>Phone : {phone}</p>
                                <p className='text-2xl text-whiteC font-normal '>Address : {address}</p>
                                <p className='text-2xl text-whiteC font-normal '>Email : {email}</p>
                            </div>

                            <div className="flex pt-4 gap-x-3">
                                <div className='w-8 h-8 border border-white rounded-full flex justify-center items-center bg-none'>
                                    <FaFacebookF className='text-white cursor-pointer text-lg '></FaFacebookF>
                                </div>
                                <div className='w-8 h-8 border border-white rounded-full flex justify-center items-center bg-none'>
                                    <FaLinkedinIn className='text-white cursor-pointer text-lg '></FaLinkedinIn>
                                </div>
                                <div className='w-8 h-8 border border-white rounded-full flex justify-center items-center bg-none'>
                                    <FaTwitter className='text-white cursor-pointer text-lg '></FaTwitter>
                                </div>
                                <div className='w-8 h-8 border border-white rounded-full flex justify-center items-center bg-none'>
                                    <FaGithub className='text-white cursor-pointer text-lg '></FaGithub>
                                </div>
                            </div>
                        </div>
                        {/* <span className="block text-[22px] text-whiteC font-normal pb-3  pt-3 border-b">Saturday - 10 am to 7 pm </span> */}
                    </div>
                </div>
              </div>

                <div  className='flex-1'>
                    <div data-aos="fade-down" className='space-y-4 bg-graybg p-10 rounded-lg'>
                        <h1 className='text-4xl lg:text-6xl  font-semibold'>{name}</h1>

                        <h1 className='text-2xl lg:text-3xl font-medium  border-b border-gray-300 pb-5'>{job_title}</h1>
                        <p className='text-base lg:text-lg text-text font-medium'>{about}</p>

                    </div>

                    {/* Services section */}
                    <div className='mb-10'>
                        <h1 data-aos="fade-down" className='text-4xl font-semibold mt-10 mb-4 ml-3 '>Education & Experience</h1>

                        <div data-aos="fade-up" className='space-y-4 bg-graybg p-10 rounded-lg flex-row lg:flex items-center gap-x-10 justify-between'>

                            <div className='mt-3'>

                                <div  className='flex flex-col md:flex-row gap-x-4 md:gap-x-10 lg:gap-x-20 itemce pb-6  pt-4 border-b border-gray-300 last:border-b lg:last:border-b-0'>

                                    <span className='text-2xl text-black1 font-medium'>Education </span>
                                    <h1 className=' text-[22px] text-text font-normal'> {education}  </h1>
                                </div>

                                <div className='flex flex-col md:flex-row gap-x-4 lg:gap-x-6 itemce pb-6  pt-4 border-b border-gray-300 last:border-b lg:last:border-b-0'>
                                    <span className='text-2xl text-black1 font-medium'>Board certification </span>
                                    <h1 className=' text-[22px] text-text font-normal'> {board_certification}  </h1>
                                </div>
                                <div className='flex gap-x-6 itemce pb-6  pt-4 border-b border-gray-300 last:border-b lg:last:border-b-0'>
                                    <span className='text-2xl text-black1 font-medium'>Years of practice  </span>
                                    <h1 className=' text-[22px] text-text font-normal'> {years_of_expertise}  </h1>
                                </div>


                            </div>

                        </div>
                    </div>

                    {/* Working Shifts section */}

                    <div className='mb-10'>
                        <h1 data-aos="fade-down" className='text-4xl font-semibold mt-10 mb-4 ml-3 '>Working Shifts</h1>

                        <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                             {
                                working_shifts.map(shift=> <div className=' bg-[#DEEEFE] p-10 rounded-lg'> 
                                    <h1 className='text-2xl text-black1 font-normal text-center'>{shift.day}</h1>
                                    <h1 className='text-xl text-gray1 font-normal text-center'>{shift.time}</h1>
                                     </div>
                                )
                             }

                            

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default TeamProfile