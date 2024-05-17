import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Credentials({ onUpdate, next }) {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log('Form values:', values);
      onUpdate(values); // Call onUpdate with updated form data
      next(); // Navigate to the next page
    },
  });

  useEffect(() => {
    // Load form data from local storage when the component mounts
    const storedFormData = JSON.parse(localStorage.getItem('credentialsFormData'));
    if (storedFormData) {
      formik.setValues(storedFormData);
    }
  }, []);

  // Function to call onUpdate with updated form data
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    formik.handleChange(event);
    onUpdate(formik.values); 
    localStorage.setItem('credentialsFormData', JSON.stringify(formik.values));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility(!confirmPasswordVisibility);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className=''>
        <div className="flex flex-col roboto gap-y-5 ">
          {/* Username Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className='font-semibold'>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className={`border-[1px] outline-none rounded p-1 px-3 border-[#828282] w-[357px] h-[44px] ${formik.errors.username && 'border-red-500'}`}
              placeholder='Enter your Username'
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500">{formik.errors.username}</div>
            )}
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className='font-semibold'>Password</label>
            <div className="relative">
              <input
                type={passwordVisibility ? 'text' : 'password'}
                id="password"
                name="password"
                className={`border-[1px] outline-none rounded p-1 px-3 border-[#828282] w-[357px] h-[44px] ${formik.errors.password && 'border-red-500'}`}
                placeholder='Enter your Password'
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <span
                className="ml-[-30px] cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={passwordVisibility ? faEyeSlash : faEye} />
              </span>
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className='font-semibold'>Confirm Password</label>
            <div className="relative">
              <input
                type={confirmPasswordVisibility ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                className={`border-[1px] outline-none rounded p-1 px-3 border-[#828282] w-[357px] h-[44px] ${formik.errors.confirmPassword && 'border-red-500'}`}
                placeholder='Confirm your Password'
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              <span
                className="ml-[-30px] cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                <FontAwesomeIcon icon={confirmPasswordVisibility ? faEyeSlash : faEye} />
              </span>
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="text-red-500">{formik.errors.confirmPassword}</div>
            )}
          </div>

        </div>
        <button type="submit" className="bg-[#4e9352] hover:bg-[#305a32] text-white font-bold py-2 px-4 rounded mt-4">
          Next
        </button>
      </form>
    </div>
  );
}

export default Credentials;
