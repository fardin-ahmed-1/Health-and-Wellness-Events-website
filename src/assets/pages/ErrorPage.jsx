import React from 'react'
import errorImage from '../../../public/images/404error.png'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='flex justify-center items-center  py-6 px-6'>
        <div className='text-center'>
        <h1 className='text-4xl lg:text-5xl font-bold text-black1 text-center'>Sorry</h1>
        <p className='text-2xl lg:text-3xl font-normal text-gray1 text-center mt-2'>This page is not found.</p>
        <img src={errorImage} alt="" />
        <Link to='/' className='text-white py-3 px-12 block text-xl bg-secondary lg:inline-block mt-4  text-center rounded-lg'>Back to home</Link>
        </div>
    </div>
  )
}

export default ErrorPage