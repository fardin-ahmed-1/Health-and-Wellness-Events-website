import React from 'react'
import footerLogo from '../../../public/images/FooterLogo.png'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-[#F3F3F3] pt-14">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="#">
                <img className="" src={footerLogo} alt="" />
              </a>
              <p className="max-w-sm mt-3 text-black2 text-base font-normal">
              We bring the years, global experience, and stamina to guide our clients through new and often disruptive realities.
              </p>
              <div className="flex mt-6 gap-x-3">
                <div className='w-8 h-8 border border-secondary rounded-full flex justify-center items-center bg-none'>
                <FaFacebookF className='text-secondary cursor-pointer text-lg '></FaFacebookF>
                </div>
                <div className='w-8 h-8 border border-secondary rounded-full flex justify-center items-center bg-none'>
                <FaLinkedinIn className='text-secondary cursor-pointer text-lg '></FaLinkedinIn>
                </div>
                <div className='w-8 h-8 border border-secondary rounded-full flex justify-center items-center bg-none'>
                <FaTwitter className='text-secondary cursor-pointer text-lg '></FaTwitter>
                </div>
                <div className='w-8 h-8 border border-secondary rounded-full flex justify-center items-center bg-none'>
                <FaGithub className='text-secondary cursor-pointer text-lg '></FaGithub>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              <div>
                <h3 className="text-black1 font-semibold text-2xl">Quick Links</h3>
                <Link to='/' className="block mt-2 text-base text-gray1 font-semibold hover:underline">
                  Home
                </Link>
                <Link to='/about'  className="block mt-2 text-base text-gray1 font-semibold hover:underline">
                  About Us
                </Link>
                <Link to=''  className="block mt-2 text-base text-gray1 font-semibold hover:underline">
                  Our Services
                </Link>
                <Link to='/blog' className="block mt-2 text-base text-gray1 font-semibold hover:underline">
                  Blog
                </Link>
                <Link to='/contact' className="block mt-2 text-base text-gray1 font-semibold hover:underline">
                  Contact Us
                </Link>
              </div>
              <div>
                <h3 className="text-black1 font-semibold text-2xl">Doc Services</h3>
                <Link to='' className="block mt-2 text-base text-gray1 font-semibold hover:underline">
                Primary Care
                </Link>
                <Link to='' className="block mt-2 text-base text-gray1 font-semibold hover:underline">
                Specialty Care
                </Link>
                <Link to='' className="block mt-2 text-base text-gray1 font-semibold hover:underline">
                Emergency Care
                </Link>
                <Link to='' className="block mt-2 text-base text-gray1 font-semibold hover:underline">
                Surgical Services
                </Link>
                <Link to='' className="block mt-2 text-base text-gray1 font-semibold hover:underline">
                Diagnostic Services
                </Link>
              </div>
              <div>
                <h3 className="text-black1 font-semibold text-2xl"> Working Hours </h3>
                <Link to='' className="block mt-2 text-base text-gray1 font-semibold hover:underline">
                Saturday - 10 am to 7 pm
                </Link>
                <Link to='' className="block mt-2 text-base text-gray1 font-semibold hover:underline">
                Sunday - 10 am to 7 pm
                </Link>
                <Link to='' className="block mt-2 text-base text-gray1 font-semibold hover:underline">
                Monday - 10 am to 7 pm
                </Link>
                <Link to='' className="block mt-2 text-base text-gray1 font-semibold hover:underline">
                Tuesday - 10 am to 7 pm
                </Link>
                <Link to='' className="block mt-2 text-base text-gray1 font-semibold hover:underline">
                Wednesday - 10 am to 7 pm
                </Link>
                <Link to='' className="block mt-2 text-base text-gray1 font-semibold hover:underline">
                Thursday - 10 am to 7 pm
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-6 bg-[#CECECE] border-none" />
        <div>
          <p className="text-center text-gray1 text-lg font-normal">Copyright © 2022 - All right reserved by Doc House Ltd</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
