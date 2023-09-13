import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AuthService from "../helpers/auth";
import InputForm from "../component/moleculecomponent/Forms/inputform";
import Button from "../component/atomcomponent/button/button";
import Texts from "../component/moleculecomponent/Forms/formheadertext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import googleIcon from "../assets/images/google icon.svg";
// import linkedinIcon from "../assets/images/linkedin icon.svg";

const FormRegistration: React.FC = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(5, "Full name must be at least 5 characters")
      .max(20, "Full name can't be longer than 20 characters")
      .required("Full name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(30, "Password can't be longer than 30 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleRegister = (formValues: {
    fullname: string;
    email: string;
    password: string;
  }) => {
    const { fullname, email, password } = formValues;

    AuthService.register(fullname, email, password)
      .then(() => {
        // toast alert ketika sudah berhasil login
        toast.success("Registration successful!");
      })
      .catch((error) => {
        const resMessage =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();

        // toast alert ketika response data error
        toast.error("Registration failed. " + resMessage);
      });
  };

  return (
    <div>
      <ToastContainer />

      <Formik
        initialValues={{
          fullname: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleRegister(values)}
      >
        <Form className="flex flex-col p-10 lg:flex lg:flex-col space-y-1 lg:p-0 md:mx-10 justify-center lg:px-20 xl:px-40">
          <Texts
            title="Sign Up"
            Paragraphtext="Have an account?"
            Linktext="Sign In"
            Linkhref="/login"
          />

          <InputForm
            type="text"
            id="fullname"
            placeholder="Full Name"
            name="fullname"
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

          <InputForm 
            type="password" 
            id="confirmPassword" 
            placeholder="Confirm Password"
            name="confirmPassword"
          />
          
          <Button
            type="submit"
            className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            title="Sign Up"
          />
          <Button
            type="button"
            className="bg-white-200 border text-black py-2 rounded-md hover:bg-red-500"
            title="Sign Up with Google"
            // iconSrc={googleIcon} 
          />
          <Button
            type="button"
            className="bg-white-200 border text-black py-2 rounded-md hover:bg-blue-500"
            title="Sign Up with Linkedin"
            // iconSrc={linkedinIcon} 
          />
        </Form>
      </Formik>
    </div>
  );
};

export default FormRegistration;
