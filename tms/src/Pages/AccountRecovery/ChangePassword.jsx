import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header from '../../Components/Header';

function ChangePassword() {
  const initialValues = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required('Current password is required'),
    newPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        'Must contain at least one uppercase letter, one lowercase letter, one number and one special character'
      )
      .required('New password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle password change logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div>
      <Header />
      <div className="roboto h-[100vh] flex items-center flex-col gap-[50px]">
        <div className="head flex flex-col gap-8 justify-center items-center">
          <div className="">
            <h3 className='font-bold text-3xl'>Change Password</h3>
          </div>
          <div className="lg:w-[650px] text-center">
            <p className='lg:text-lg'>
              To enhance the security of your account, please update your password by providing the following information:
            </p>
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className='flex flex-col items-center gap-10'>
            <div className="flex gap-3 items-center">
              <label htmlFor="currentPassword" className='text-[20px]'>Current Password:</label>
              <div className="">
                <Field
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  className="w-[347px] p-3 rounded-lg border-[1px] border-black bg-transparent"
                  placeholder='Enter current password'
                />
                <ErrorMessage name="currentPassword" component="div" className="text-red-500" />
              </div>
            </div>

            <div className="flex gap-8 items-center">
              <label htmlFor="newPassword" className='text-[20px]'>New Password:</label>
              <div className="">
                <Field
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  className="w-[347px] p-3 rounded-lg border-[1px] border-black bg-transparent"
                  placeholder='Enter new password'
                />
                <ErrorMessage name="newPassword" component="div" className="text-red-500" />
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <label htmlFor="confirmPassword" className='text-[20px]'>Confirm Password:</label>
              <div className="">
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-[347px] p-3 rounded-lg border-[1px] border-black bg-transparent"
                  placeholder='Confirm new password'
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
              </div>
            </div>

            <div className="">
              <strong>PASSWORD REQUIREMENTS</strong>
              <p className='lg:w-[450px] text-sm'>Your new password must be at least 8 characters long and include a mix of uppercase and lowercase letters, numbers, and special characters.</p>
            </div>

            <button type="submit" className='rounded-lg bg-[#20007F] px-[34px] py-[15px] text-white font-semibold w-[200px]'>Change Password</button>

            <div className="lg:w-[1200px] flex justify-between items-center my-10">
              <div className="">
                <strong>Tips for a Secure Password</strong>
                <ul className='list-disc ml-4 text-sm'>
                  <li>Choose a password that is unique and not easily guessable.</li>
                  <li>Avoid using easily accessible information, such as birthdays or names.</li>
                  <li>Consider using a passphrase or a combination of random words for added security.</li>
                </ul>
              </div>
              <div className="">
                <strong>Having trouble?</strong>
                <ul className='list-disc ml-4 text-sm'>
                  <li>Contact Support: <a href="" className='underline text-blue-700'>Shenor Systems Technologies</a></li>
                </ul>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ChangePassword;
