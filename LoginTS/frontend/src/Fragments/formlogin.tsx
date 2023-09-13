import React from "react";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import AuthService from "../helpers/auth";
import InputForm from "../component/moleculecomponent/Forms/inputform";
import Button from "../component/atomcomponent/button/button";
import Texts from "../component/moleculecomponent/Forms/formheadertext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const FormLogin: React.FC= () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(30, "Password can't be longer than 30 characters")
      .required("Password is required"),
  });

  const navigate = useNavigate(); // Use the useNavigate hook to get the navigation function

  const handleLogin = async (formValues: { email: string; password: string }) => {
    const { email, password } = formValues;
    
    AuthService.login(email, password)
    .then(() => {
      // toast alert ketika sudah berhasil login
      toast.success("Login successful!");
      navigate("/")
    })
    .catch((error) => {
      const resMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      // toast alert ketika response data error
      toast.error("Login failed. " + resMessage);
    }); 

  };

  return (
    <div>
      <ToastContainer />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleLogin(values)}
      >
        <Form className="flex flex-col p-10 lg:flex lg:flex-col space-y-3 lg:p-0 md:mx-10 justify-center lg:px-20 xl:px-40">
          <Texts
            title="Sign In"
            Paragraphtext="New to sagara?" 
            Linktext="Sign Up" 
            Linkhref="/register" 
          />

          <InputForm
            type="email"
            id="email"
            placeholder="Email"
            name="email"
          />

          <InputForm
            type="password"
            id="password"
            placeholder="Password"
            name="password"
          />

          <Button
            type="submit"
            className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            title="Login" 
          />

          <Button
            type="button"
            className="bg-white-200 border text-black py-2 rounded-md hover:bg-red-500"
            title="Sign In with Google"
            // iconSrc={googleIcon} 
           />
          <Button
            type="button"
            className="bg-white-200 border text-black py-2 rounded-md hover:bg-blue-500"
            title="Sign In with Linkedin"
            // iconSrc={linkedinIcon} 
          />

        </Form>
      </Formik>
    </div>
  );
};

export default FormLogin;
