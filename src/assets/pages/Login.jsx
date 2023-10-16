import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BsEye, BsEyeSlashFill } from 'react-icons/bs';
import { VscGithubAlt } from 'react-icons/vsc';
import { FcGoogle } from 'react-icons/fc';
import { contextProvider } from '../components/ContextApp';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import swal from 'sweetalert';
const Login = () => {
     const location=useLocation()
     const navigate=useNavigate()
     
    const { login, googleSingUp, gitHubLogin } = useContext(contextProvider)
    const [showPass, setShowpass] = useState(false)
    const googleProvider = new GoogleAuthProvider
    const gitHubProvider = new GithubAuthProvider;
    const singUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password)
            .then(() => {
                swal("Welcome", "Login successful.", "success");
                navigate(location?.state ? location.state: '/')
                return
            })
            .catch(() => {
                swal("Login failed", "Please check your credentials. Email doesn't match", "error");
                return
            })
    }

    const haldelGoogle = () => {
        googleSingUp(googleProvider)
            .then(() => {
                swal("Welcome", "Login successful.", "success");
                navigate(location?.state ? location.state: '/')
                return
            })
            .catch(() => {
                swal("Login failed", "Please check your credentials.", "error");
                return
            })
    }
    const haldelGitHub = () => {
        gitHubLogin(gitHubProvider)
            .then(() => {
                swal("Welcome", "Login successful.", "success");
                navigate(location?.state ? location.state: '/')
                return
            })
            .catch(() => {
                swal("Login failed", "Please check your credentials.", "error");
                return
            })
    }

    return (
       <div className='bg-graybg'>
         <div className='py-16 container px-6 mx-auto '>
            <form onSubmit={singUp}>
                <div className=' md:w-full lg:w-[600px] mx-auto bg-white p-10 rounded-lg'>
                    <div className='border p-10 rounded-md'>
                        <h1 className='text-2xl font-bold text-black mb-4'>Login your account</h1>
                        <div class="flex flex-col gap-6">
                            <div class="relative h-[50px] w-full">
                                <input required type='email' name='email'
                                    placeholder="Enter your email address"
                                    class=" h-full w-full border-b border-[#C5C5C5] pt-4 pb-2 font-sans text-base  font-medium  outline-0  focus:border-secondary placeholder:text-gray1" />
                            </div>
                            <div class="relative h-[50px] w-full">
                                <input required type={showPass ? 'text' : 'password'} name='password'
                                    placeholder="Password"
                                    class=" h-full w-full border-b border-[#C5C5C5] pt-4 pb-2 font-sans text-base  font-medium  outline-0  focus:border-secondary placeholder:text-gray1" />
                                <span onClick={() => setShowpass(!showPass)} className='text-2xl absolute top-3 right-3'>
                                    {showPass ? <BsEye></BsEye> : <BsEyeSlashFill></BsEyeSlashFill>}
                                </span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <input type="checkbox" name="RememberMe" id="RememberMe" className='w-4 h-4' />
                                    <label htmlFor="RememberMe" className='ml-2 text-base font-medium'>Remember Me</label>
                                </div>
                                <Link to='/forgote_password' className='text-base font-medium text-secondary hover:underline'> Forgot Password</Link>
                            </div>
                        </div>
                        <button className=" bg-secondary text-lg px-8 py-3 font-semibold text-white mt-7 justify-center items-center cursor-pointer w-full block hover:bg-primery  duration-300"> Sign up </button>
                        <h1 className='text-base text-black font-medium text-center mt-3'>
                            Don't have an account? <Link to='/register' className='text-secondary'>Sign Up</Link> </h1>
                    </div>
                    <div className='p-x-10'>
                        <div class="relative flex  items-center  my-6 ">
                            <div class="flex-grow border-t border"></div>
                            <span class="flex-shrink mx-4 text-black1 text-xl font-semibold">OR</span>
                            <div class="flex-grow border-t border"></div>
                        </div>
                        <div onClick={haldelGoogle} className='border rounded-full cursor-pointer px-3 py-3 grid grid-cols-6 items-center'>
                            <div className='justify-center items-center bg-none'>
                                <FcGoogle className='text-secondary text-4xl '></FcGoogle>
                            </div>
                            <h1 className='text-xl font-medium col-span-4 text-center text-gray1'> Continue with Google</h1>
                        </div>
                        <div onClick={haldelGitHub} className='border rounded-full cursor-pointer px-2  py-2 grid grid-cols-6 mt-4 items-center'>
                            <div className=' w-12 h-12 rounded-full bg-primery flex justify-center items-center'>
                                <VscGithubAlt className='text-white text-2xl '></VscGithubAlt>
                            </div>
                            <h1 className='text-xl font-medium col-span-4 text-center text-gray1'> Continue with Github</h1>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <hr className="h-px bg-[#CECECE] border-none" />
       </div>
    )
}

export default Login



