import React, { useContext, useState } from 'react';
import Logo from '../../../public/images/logo.png'
import { Link, NavLink } from "react-router-dom";
import { contextProvider } from './ContextApp';
import { FiLogOut,FiLogIn } from 'react-icons/fi';


const Header = () => {
    const { user, logOut } = useContext(contextProvider)

    const signOut=()=>{
        logOut()
        .then(()=>{
            console.log('you log out')
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const navLink = <>
        <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "!text-secondary text-lg font-semibold" : isActive ? "!text-secondary text-lg font-semibold" : "text-black lg:text-whiteC text-lg font-semibold"}>  Home  </NavLink>
      
        <NavLink to="/teams" className={({ isActive, isPending }) =>
            isPending ? "!text-secondary text-lg font-semibold" : isActive ? "!text-secondary text-lg font-semibold" : "text-black lg:text-whiteC text-lg font-semibold"}>  Our Team  </NavLink>
        <NavLink to="/blogs" className={({ isActive, isPending }) =>
            isPending ? "!text-secondary text-lg font-semibold" : isActive ? "!text-secondary text-lg font-semibold" : "text-black lg:text-whiteC text-lg font-semibold"}>  Blog  </NavLink>
        <NavLink to="/contact" className={({ isActive, isPending }) =>
            isPending ? "!text-secondary text-lg font-semibold" : isActive ? "!text-secondary text-lg font-semibold" : "text-black lg:text-whiteC text-lg font-semibold dark:text-black"}>  Contact  </NavLink>

    </>

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="bg-primery z-0">
            <nav className=" container px-4 py-6 mx-auto lg:flex lg:justify-between lg:items-center">

                <div className="flex items-center justify-between">
                    <Link to="/" className='z-10'>
                        <img className="w-[150px]  object-cover	  sm:h-7" src={Logo} alt="" />
                    </Link>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-whiteC focus:outline-none focus:text-white "
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex mt-6 lg:items-center !text-black`}
                >
                    <div className="flex lg:items-center  gap-x-6 flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0 !text-black">
                        {navLink}

                        <div className='flex lg:items-center flex-col lg:flex-row justify-start  gap-x-5 lg:ml-10'>

                          {
                            user?.photoURL &&   <img className='w-11 h-11 rounded-full' src={user?.photoURL} alt="" />
                          }
                            
                        <h1 className='text-black md:text-black lg:text-white text-lg font-semibold hover:text-secondary duration-300'>{user?.displayName} </h1>

                        {
                            user ? <div>
                                <button onClick={signOut} className='text-black md:text-black lg:text-white text-lg font-semibold flex gap-x-1 items-center'>  Log Out <FiLogOut className='text-xl'> </FiLogOut> </button>
                                </div>
                                :
                             <div>
                                <NavLink to="/login" className={({ isActive, isPending }) =>
                                isPending ? "text-black" : isActive ? "!text-secondary text-lg flex gap-x-1 items-center font-semibold" : "text-black flex gap-x-1 items-center lg:text-whiteC text-lg font-semibold"}>  Login <FiLogIn className='text-xl'> </FiLogIn>  </NavLink>
                                </div>
                                
                        }
                        </div>

                    </div>
                </div>
            </nav>

        </section>
    );
};

export default Header;
