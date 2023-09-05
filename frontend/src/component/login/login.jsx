import React from "react";
// import {Link} from "react-router-dom"
import sagaraLogo from '../../assets/images/sagara-logo.png'; 


function Login (){
    return(       
    <>
     {/* logo */}
     <div className="flex ml-10 mt-3 w-[572px] items-center justify-between relative  ">
        <img
          src={sagaraLogo}
          alt="Logo"
          className="w-18 h-12"
        />
        < a href ="" className=' text-blue-700 hover:text-blue-900'>Learn more </a>
         
      </div>
      {/* form */}
      <div className='w-1/4 ml-40 mt-30 p-10 '> 
        <form className='flex flex-col space-y-4 mt-20'>
          <h1 className='font-bold text-4xl text-red-700'>Sign In</h1>
          <p className="text-gray-500 text-sm top-52">New to Sagara? <a href="#" className='text-blue-600'>Sign Up</a></p>
          <input type="email" placeholder='Email' className='border-b-2 border-gray-300 rounded-md p-2'/>
          <input type="password" placeholder='Password' className='border-b-2 border-gray-300 rounded-md p-2'/>
          <button className='bg-red-500 text-white py-2 rounded-md hover:bg-red-600'>Sign In</button>
          <button className="bg-white-200 border  text-black py-2 rounded-md hover:bg-red-500">
              Sign in with Google
            </button>
           <button className="bg-white-200 border  text-black py-2 rounded-md hover:bg-blue-500"> 
              Sign in with Linkedin
            </button> 
        </form>
      </div>
      <div>
      < a href ="" className='relative left-3 -bottom-5 text-blue-700 hover:text-blue-900'>English (United KIngdom) </a>
      </div>

      {/* image */}
      <div className='h-3/5 bg-indigo-500'>
        <img 
          src='https://via.placeholder.com/500x500'
          alt='image'
          className='h-full w-1/2 object-cover absolute right-0 top-0'
        />
      </div>
    </>
    );
};

export default Login;