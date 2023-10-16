import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { BsEye, BsEyeSlashFill } from 'react-icons/bs';
import { VscGithubAlt } from 'react-icons/vsc';
import { FcGoogle } from 'react-icons/fc';
import { contextProvider } from '../components/ContextApp';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import swal from 'sweetalert';



const Register = () => {

  const {updateUser,createUser, googleSingUp, gitHubLogin } = useContext(contextProvider)

  const [showPass, setShowpass] = useState(false)
  const [registrationError, setRegistrationError]=useState('')
  const googleProvider = new GoogleAuthProvider
  const gitHubProvider = new GithubAuthProvider;


  var validation = {
    'capital' : /[A-Z]/,
    'spacelSymble' : /[\W_]+/,
};

  const singUp = (e) => {

    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const profile = e.target.prifile.value;

    setRegistrationError('')

    console.log(profile)

  
 

    if (password.length < 6) {
      setRegistrationError('password must be at least 6 characters long.')
      return
    } else if (!validation.capital.test(password)) {
      setRegistrationError('At least one uppercase letter')
      return
    }else if (!validation.spacelSymble.test(password)) {
      setRegistrationError('At least one special character')
      return
    }

    createUser(email, password)
      .then((res) => {
        swal("success", "Account successfully created. You can now log in.", "success");
        console.log(res.user)
        updateUser({name, profile})
        .then(()=>{
         window.location.href = '/';
        },6000)
        return

      })
      .catch(() => {
        swal("Account creation failed", `Please check your information and try again.`, "error");
        <Navigate to='/login'> </Navigate>
        return
      })


   

  }
  const haldelGoogle = () => {
  
    googleSingUp(googleProvider)
      .then(() => {
        swal("success", "Account successfully created. You can now log in.", "success");
        return
      })
      .catch(() => {
        swal("Account creation failed", " Please check your information and try again.", "error");
        return
      })
  }
  const haldelGitHub = () => {
    gitHubLogin(gitHubProvider)
      .then(() => {
        swal("success", "Account successfully created. You can now log in.", "success");
        return
      })
      .catch(() => {
        swal("Account creation failed", " Please check your information and try again.", "error");
        return
      })
  }

  return (

<div className='bg-graybg'>
<div className='py-16 container px-6 mx-auto'>
      <form onSubmit={singUp}>
        <div className=' md:w-full lg:w-[600px] mx-auto bg-white p-10 rounded-lg'>
          <div className='border p-10 rounded-md'>
            <h1 className='text-2xl font-bold text-black mb-4'>Create a new Account </h1>
            <div class="flex flex-col gap-6">

              <div class="relative h-[50px] w-full">
                <input type='text' name='name'
                  placeholder="Enter your name"
                  class=" h-full w-full border-b border-[#C5C5C5] pt-4 pb-2 font-sans text-base  font-medium  outline-0  focus:border-secondary placeholder:text-gray1" />
              </div>

              <div class="relative h-[50px] w-full">
                <input type='text' name='prifile'
                  class="h-full w-full border-b border-[#C5C5C5] pt-4 pb-2 font-sans text-base  font-medium  outline-0  focus:border-secondary placeholder:text-gray1" placeholder='Profile Url' />
              </div>

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
              <div>
                {
                  registrationError && <p className='text-lg text-red-400 font-medium'> {registrationError} </p>
                }
              </div>
            </div>
            <button className=" bg-secondary text-lg px-8 py-3 font-semibold text-white mt-7 justify-center items-center cursor-pointer w-full block hover:bg-primery  duration-300"> Sign up </button>
            <h1 className='text-base text-black font-medium text-center mt-3'>Already have an account? <Link to='/login' className='text-secondary'>Sign in</Link> </h1>
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

export default Register

