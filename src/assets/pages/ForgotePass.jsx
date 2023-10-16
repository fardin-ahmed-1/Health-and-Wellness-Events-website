import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineLeft } from 'react-icons/ai';
import { useState } from 'react';
import { useContext } from 'react';
import { contextProvider } from '../components/ContextApp';



const ForgotePass = () => {

    const { forgotePassword } = useContext(contextProvider)

    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSucessMessage] = useState('')
  


    const forgotPass = (e) => {
        e.preventDefault();
        const emailaddress = e.target.email.value;
        setSucessMessage('')
        setErrorMessage('')

        forgotePassword(emailaddress)
            .then(() => {
                setSucessMessage('Password reset instructions sent to your email.')
                return

            })
            .catch(() => {
                setErrorMessage('Password reset failed. Please check your email')
                return
            })

    }

    return (
        <div>
            
            <div className='pt-16 bg-graybg pb-16 '>
            
                <div className='w-[600px] mx-auto border bg-white rounded-md'>
                    <div className='p-16'>
                        <h1 className='text-3xl text-center font-semibold pb-10 border-[#E7E7E7] border-b'>Forgot your account password</h1>

                        {/* Form */}

                        <form onSubmit={forgotPass} class="mt-10">
                            <div class="w-full">
                                <label class="text-xl font-semibold text-black1  pl-1"> Email </label>
                                <input type="email" placeholder="Enter your account email address" class="px-5 py-4 w-full mt-1 text-base  font-medium  outline-0  focus:border-secondary placeholder:text-gray1 bg-[#F3F3F3]" name='email' required />

                            </div>

                            <div class="form-control mt-6">
                                <button class="bg-secondary py-[15px] hover:bg-primery  duration-300 text-white font-semibold text-xl">Submit</button>

                                <div>
                                    {
                                        errorMessage && <p class='text-lg pt-2 text-red-500 font-medium'> {errorMessage} </p>
                                    }
                                    {
                                        successMessage && <p class='text-lg pt-2 text-green-400 font-medium'> {successMessage} </p>
                                    }
                                </div>
                                <h1 className='text-center mt-7 text-lg text-gray1 font-semibold'> <Link className='text-[#F75B5F] flex gap-1 items-center justify-center' to='/login'> <AiOutlineLeft> </AiOutlineLeft> Back to Login  </Link></h1>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <hr className="h-px bg-[#CECECE] border-none" />

        </div>


    )
}

export default ForgotePass