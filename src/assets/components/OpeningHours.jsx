import React from 'react'

const OpeningHours = () => {
  return (
    <div className='bg-primery p-10 rounded-lg text-whiteC'>
          <div>
                <h3 className="text-white font-semibold text-3xl lg:text-4xl"> Working Hours </h3>
                <p className='text-base lg:text-lg mt-4 mb-2 font-normal text-whiteC'>I enjoy getting to know my patients and building meaningful relationships</p>
                <span className="block text-[22px] text-whiteC font-normal pb-3  pt-3 border-b">Saturday - 10 am to 7 pm </span>
                <span className="block text-[22px] text-whiteC font-normal pb-3  pt-3 border-b"> Sunday - 10 am to 7 pm </span>
                <span className="block text-[22px] text-whiteC font-normal pb-3  pt-3 border-b"> Monday - 10 am to 7 pm</span>
                <span className="block text-[22px] text-whiteC font-normal pb-3  pt-3 border-b">Tuesday - 10 am to 7 pm</span>
                <span className="block text-[22px] text-whiteC font-normal pb-3  pt-3 border-b"> Wednesday - 10 am to 7 pm </span>
                <span className="block text-[22px] text-whiteC font-normal pb-3  pt-3 border-b">
                Thursday - 10 am to 7 pm </span>

                <span className="block text-[22px] text-whiteC font-normal pt-3">
                Friday - Closed </span>
              </div>
    </div>
  )
}

export default OpeningHours