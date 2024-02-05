import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../assets/logo.png'

function Signin() {

    const [passwordVisible, setPasswordVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    // onSubmit: (values) => {
    //   console.log('Form data submitted:', values);
    // },
  });
  
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className='signin roboto h-[100vh] flex py-[5rem] items-center flex-col gap-[100px]'>
      <div className="head flex flex-col gap-8 justify-center items-center">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="">
          <h3 className='font-bold text-3xl'>Login your account</h3>
        </div>
      </div>

      <div className="form">
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-[20px]'>
          <div className="flex gap-5 items-center">
            <label htmlFor="username" className='text-[20px] font-semibold'>Username:</label>
            <div className="">
                <input
                type="text"
                id="username"
                name="username"
                className={`w-[347px] p-2 rounded-md border-[1px] ${formik.errors.username ? 'border-red-500' : 'border-black'} bg-transparent`}
                placeholder='Enter username'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                />
            {formik.touched.username && formik.errors.username && (
                <div className="text-red-500">{formik.errors.username}</div>
            )}
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <label htmlFor="password" className='text-[20px] font-semibold'>Password:</label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                className={`w-[347px] p-2 rounded-md border-[1px] ${formik.errors.password ? 'border-red-500' : 'border-black'} bg-transparent`}
                placeholder='Enter password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </button>
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500">{formik.errors.password}</div>
              )}
            </div>
          </div>
          <div className="btns flex gap-7 items-center justify-center my-2">
            <button type="submit" className='rounded-lg bg-[#20007F] px-[34px] py-[15px] text-white font-semibold'>Sign in</button>
            <button className='rounded-lg bg-[#20007F] px-[34px] py-[15px] text-white font-semibold'>Create Account</button>
          </div>
          <Link to='/forgotten-password'>
            <div className="forgotPaasword flex gap-2 items-center justify-center cursor-pointer">
              <FontAwesomeIcon icon={faLock} className='text-[#929292]' />
              <p>Forgotten Password</p>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signin;
