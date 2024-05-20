import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import leftImg from '../assets/logo.svg';
import logo from '../assets/leftPics.svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/add');
    }
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      console.log('Submitting form with values:', values); // Log the values being submitted

      try {
        const response = await axios.post('https://exprosys-backend.onrender.com/api/v1/login/', {
          username: values.username,
          password: values.password,
        });

        console.log('API response:', response); // Log the API response

        if (response.status === 200) {
          localStorage.setItem('user-info', JSON.stringify(response.data));
          navigate('/dashboard');
        } else {
          // Handle unexpected response status
          toast.error('Login failed. Please check your username and password.');
        }
      } catch (error) {
        // Handle server errors
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Error response data:', error.response.data);
          console.error('Error response status:', error.response.status);
          console.error('Error response headers:', error.response.headers);
          if (error.response.status === 400) {
            toast.error('Bad Request: Please check the data you entered.');
          } else if (error.response.status === 401) {
            toast.error('Unauthorized: Invalid username or password.');
          } else {
            toast.error('An error occurred. Please try again.');
          }
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Error request data:', error.request);
          toast.error('No response from the server. Please try again later.');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error message:', error.message);
          toast.error('An error occurred. Please try again.');
        }
      }
    },
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="flex">
      <div className="flex justify-center p-10 items-center w-[500px] bg-[#045985]">
        <img src={leftImg} alt="" className='w-[300px]' />
      </div>

      <div className='signin flex roboto mt-12'>
        <div className="head absolute right-10 flex col-span-1 flex-col gap-8 justify-center items-center">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="px-20 py-10 ml-24 rounded-xl col-span-2">
          <div className="mb-10">
            <h3 className='font-bold text-4xl text-[#045985]'>Login your account</h3>
            <p>Welcome back. You can select your choice of logging in. </p>
          </div>
          <form onSubmit={formik.handleSubmit} className='flex flex-col gap-[20px]'>
            <div className="">
              <label htmlFor="username" className='text-semibold'>Username:</label>
              <div className="">
                <div className={`flex items-center gap-2 w-[360px] p-3 rounded border-[1px] border-[#828282] ${formik.errors.username ? 'border-red-500' : 'border-[#828282]'} bg-transparent`}>
                  <FontAwesomeIcon icon={faUserCircle} className='text-[#828282] text-xl'/>
                  <input
                  type="text"
                  id="username"
                  name="username"
                  className='w-full outline-none'
                  placeholder='Enter username'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  />
                </div>
                {formik.touched.username && formik.errors.username && (
                <div className="text-red-500">{formik.errors.username}</div>
              )}
              </div>
            </div>
            <div className="">
              <label htmlFor="password" className='text-semibold'>Password:</label>
              <div className="relative">
                <div className={`w-[360px] p-3 rounded border-[1px] flex gap-3 border-[#828282] ${formik.errors.password ? 'border-red-500' : 'border-[#828282]'} bg-transparent`}>
                  <FontAwesomeIcon icon={faLock} className='text-[#828282] text-xl'/>
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className='w-full'
                    placeholder='Enter password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  <button
                    type="button"
                    className=" cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                  </button>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500">{formik.errors.password}</div>
                )}
              </div>
              <Link to='/forgotten-password'>
                <div className="forgotPaasword cursor-pointer">
                  <p className='text-sm text-[#4E9352] mt-1'>Forgotten Password</p>
                </div>
              </Link>
            </div>
            <button type="submit" className='rounded bg-[#4E9352] px-[34px] py-[15px] text-white font-semibold w-full'>Sign in</button>
            <Link to='/create-account'> 
              <button type="button" className='rounded border border-[#4E9352] text-[#4E9352] px-[34px] py-[15px] font-semibold w-full'>Create Account</button>
            </Link>
            <p className='text-[#4E9352] text-center'>OR</p>
            <button type="button" className='rounded border border-[#4E9352] relative px-[34px] py-[15px] font-semibold w-full'>Facebook</button>
            <button type="button" className='rounded border border-[#4E9352] relative px-[34px] py-[15px] font-semibold w-full'>Google</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signin;
