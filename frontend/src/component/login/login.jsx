import React,{useState,useEffect} from "react";
// import {Link} from "react-router-dom"
import sagaraLogo from '../../assets/images/sagara-logo.png'; 
import sagaraLogo1 from '../../assets/images/Rectangle 64.svg'; 
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom"


function Login (){
 const navigate = useNavigate();
 const [email,setEmail] = useState ("");
 const [password,setPassword] = useState ("");
 const [isAuthenticated,setIsAuthenticated] = useState(Boolean(localStorage.getItem('isAuthenticated')));
    
    useEffect(() => {
        const isAuthenticatedFromLocalStorage = Boolean(localStorage.getItem('isAuthenticated'));
        setIsAuthenticated(isAuthenticatedFromLocalStorage);
    }, []);

    const handleSignIn = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post("http://127.0.0.1:8000/api/login/",{
                username,
                password,
            });

            if (response.status === 200){
                localStorage.setItem('isAuthenticated',true)
                setIsAuthenticated(true); 
                toast.success("Login successful!"); 
                navigate("/");
            } else {
                toast.error("Login failed!"); 
            }
        } catch (error){
            toast.error("An error occurred while logging in.");
        }
    };
 

  return(       
    <div className="md:flex lg:flex p-0 m-0 h-screen w-full">
        {/* logo */}
      <div className="lg:w-2/4 md:w-2/4 sm:w-full lg:h-screen">
        <header className="flex justify-between p-2.5 items-center">
        <img
          src={sagaraLogo}
          alt="Logo"
          className="w-18 h-12"
        />
        < a href ="" 
          className="text-blue-700 hover:text-blue-900">
          Learn more 
        </a>  
      </header>
      {/* form */}
    {isAuthenticated ? (
        navigate ("/")
     ) : (
      <form className=" flex flex-col w-3/5 mt-7 ml-20 -bottom-10 sm:left-12 lg:flex lg:flex-col space-y-4 lg:w-2/5 relative lg:ml-52 lg:-bottom-10 md:-left-6  " >
        <h1 
          className="font-bold text-4xl text-red-700">
          Sign In
        </h1>
        <p 
          className="text-gray-500 text-sm top-52">New to sagara? 
          <a href="/register" className='text-blue-600'>Sign Up</a>
        </p>
        <input
          type="email"
          placeholder="Email"
          className="border-b-2 border-gray-300 rounded-md p-2"
          value={email}
          onChange={(e) => setEmail (e.target.value) }
        />
        <input
          type="password"
          placeholder="Password"
          className="border-b-2 border-gray-300 rounded-md p-2"
          value={password}
          onChange={(e) => setPassword (e.target.value)}
        />
        <button 
          className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600" 
          onClick={handleSignIn}>
          Sign In
        </button>
        <button 
          className="bg-white-200 border  text-black py-2 rounded-md hover:bg-red-500" >
          Sign in with Google
        </button>
        <button className="bg-white-200 border  text-black py-2 rounded-md hover:bg-blue-500"> 
          Sign in with Linkedin
        </button> 
      </form>
        )}
      <div>
      < a href ="" className='relative left-3
      -bottom-36 lg:-bottom-36 text-blue-700 hover:text-blue-900 md:flex '>English (United KIngdom) </a>
      </div>
      </div>

      {/* image */}
      <div className='w-2/4 h-screen hidden md:flex'>
        <img 
          src={sagaraLogo1}
          alt='image'
          className='lg:h-full lg:w-screen object-cover '
        />
      </div>
      <ToastContainer />
    </div>
    );
};

export default Login;