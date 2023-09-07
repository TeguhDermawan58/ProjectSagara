import React,{useState} from "react";
import sagaraLogo from '../../assets/images/sagara-logo.png'; 
import sagaralogo1 from '../../assets/images/Rectangle 64.svg'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Registration (){
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true); 
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      toast.error("Passwords do not match!");
      return; 
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", {
        fullName,
        email,
        password,
      });
      if (response.status === 201) {
        toast.success("Registration successful!");
        navigate("/login");
      } else {
        toast.error("Registration failed!");
      }
    } catch (error) {
      toast.error("An error occurred while registering.");
    }
  };



  return(
    <div className="md:flex lg:flex p-0 m-0 h-screen w-full">
      <div className="lg:w-2/4 md:w-2/4 h-screen lg:h-screen">
      {/* logo */}
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
      {/* ... */}
      {/* form */}
      <form className=" flex flex-col w-3/5 mt-7 ml-20 md:-left-6 lg:flex lg:flex-col space-y-4 lg:w-2/5 relative lg:ml-48 lg:bottom-2 " >
        <h1 
          className="font-bold text-4xl text-red-700">
          Sign Up
        </h1>
        <p 
          className="text-gray-500 text-sm top-52">Have an account? 
          <a href="/login" className='text-blue-600'>Sign In</a>
        </p>
        <input
          type="text"
          placeholder="Full Name"
          className=" border-b-2 border-gray-300 rounded-md p-2"
          value={fullName}
          onChange={(e) => setFullName (e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          className={`border-b-2 border-gray-300 rounded-md p-2 ${
            !passwordsMatch ? "border-red-500" : ""
          }`}
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setPasswordsMatch(true); // Reset password match state on change
          }}
        />
          {passwordsMatch || (
           <p className="text-red-500">Passwords do not match</p>
          )}

        {/* button */}
        <button 
          className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600" 
          onClick={handleSignUp}>
          Sign Up
        </button>
        <button 
          className="bg-white-200 border  text-black py-2 rounded-md hover:bg-red-500" >
          Sign Up with Google
        </button>
        <button className="bg-white-200 border  text-black py-2 rounded-md hover:bg-blue-500"> 
          Sign Up with Linkedin
        </button> 
        {/* ... */}
      </form>
      {/* bawah */}
      <div className="w-3/5 flex mt-8 ml-3">
        <footer className=" items-center">
      < a href ="" className='text-blue-700 hover:text-blue-900 '>English (United KIngdom) </a>
        </footer>
      </div>
      {/* ... */}
      </div>

      {/* image */}
      <div className='w-2/4 h-screen hidden md:flex'>
        <img 
          src={sagaralogo1}
          alt='image'
          className='lg:h-full lg:w-screen object-cover '
        />
      </div>
      {/* ... */}
      <ToastContainer/>
   </div>
    );
};

export default Registration;