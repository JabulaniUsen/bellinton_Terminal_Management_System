import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

function Security() {
  return (
    <div className=''>
      <Formik
        initialValues={{
          securityQuestion: '',
          answer: '',
          recoveryEmail: '',
          recoveryPhoneNumber: '',
        }}
        validate={(values) => {
          const errors = {};

          if (!values.securityQuestion) {
            errors.securityQuestion = 'Please choose a security question';
          }

          // Add more validation as needed

          return errors;
        }}
        onSubmit={(values) => {
          // Handle form submission here
          console.log(values);
        }}
      >
        <Form className='flex flex-col gap-10'>
          <div className="flex items-center justify-between">
            <p className='text-[18px] font-semibold'>Security Questions:</p>
            <div className="">
              <Field
                as="select"
                name="securityQuestion"
                className='py-3 px-2 rounded border-[1px] border-black w-[346px] outline-none'
              >
                <option value="">Choose security question</option>
                <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                <option value="In which city were you born?">In which city were you born?</option>
                <option value="What is the name of your first pet?">What is the name of your first pet?</option>
                <option value="What is the last name of your favorite teacher?">What is the last name of your favorite teacher?</option>
                <option value="What is your favorite childhood book?">What is your favorite childhood book?</option>
              </Field>
              <ErrorMessage name="securityQuestion" component="div" className="text-red-500" />
            </div>
            <div className="">
              <Field
                type="text"
                name="answer"
                className='answer py-3 px-2 rounded border-[1px] border-black w-[347px] outline-none'
                placeholder='Enter answer to the question'
              />
              <ErrorMessage name="answer" component="div" className="text-red-500" />
            </div>
          </div>

          <div className="grid grid-cols-3 items-center justify-between">
            <p className='text-[18px] font-semibold'>Account Recovery Email:</p>
            <div className="">
              <Field
                type="email"
                name="recoveryEmail"
                className='py-3 px-2 rounded border-[1px] border-black w-[347px] outline-none'
                placeholder='Enter recovery email'
              />
              <ErrorMessage name="recoveryEmail" component="div" className="text-red-500" />
            </div>
          </div>

          <div className="grid grid-cols-3 items-center justify-between gap-1">
            <p className='text-[18px] font-semibold'>Account Recovery Phone Number:</p>
              <div className="">
              <Field
                type='number'
                name="recoveryPhoneNumber"
                className='py-3 px-2 rounded border-[1px] border-black w-[347px] outline-none'
                placeholder='Enter recovery phone number'
              />
              <ErrorMessage name="recoveryPhoneNumber" component="div" className="text-red-500" />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Security;
