import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header from '../../Components/Header';

function ForgottenPassword() {
  // Declare state for the email field
  const [email, setEmail] = useState('');

  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle password reset logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div>
      <Header />
      <div className="roboto h-[100vh] flex items-center flex-col gap-[50px]">
        <div className="head flex flex-col gap-8 justify-center items-center">
          <div className="">
            <h3 className='font-bold text-3xl'>Login your account</h3>
          </div>
          <div className="lg:w-[650px] text-center">
            <p className='lg:text-lg'>
              Oh no! It happens to the best of us. If you've 
              forgotten your password, don't worry – we've got 
              you covered. Please enter the email address 
              associated with your account, and we'll help 
              you reset your password.
            </p>
          </div>
        </div>

        <Formik
          initialValues={{
            email: '', // Set initial value from state
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className='flex flex-col items-center gap-10'>
            <div className="flex gap-3 items-center">
              <label htmlFor="email" className='text-[20px] font-semibold'>Email Address:</label>
              <div className="">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  value={email} // Set value from state
                  onChange={(e) => setEmail(e.target.value)} // Update state on change
                  className="w-[347px] p-3 rounded-lg border-[1px] border-black bg-transparent"
                  placeholder='Enter email address'
                />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>
            </div>

            <Link to='/reset-password-instructions'>
              <button type="submit" className='rounded-lg bg-[#20007F] px-[34px] py-[15px] text-white font-semibold w-[200px]'>Send Reset</button>
            </Link>          
          </Form>
        </Formik>

        <div className="instructions my-8">
          <strong className='text-lg'>Instructions</strong>
          <ul className='list-decimal ml-4'>
            <li>Enter Email: Provide the email address associated with your account.</li>
            <li>Receive Email: Check your inbox for a message from us.</li>
            <li>Click Link: Click the password reset link in the email.</li>
            <li>Reset Password: Follow the instructions to set a new password.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ForgottenPassword;
