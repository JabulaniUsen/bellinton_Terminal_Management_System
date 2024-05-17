import React, { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

function Security({ onSubmit, next }) {
  // Clear data from local storage when leaving the page or when it disappears
  useEffect(() => {
    const cleanup = () => {
      localStorage.removeItem('securityFormData');
    };

    window.addEventListener('beforeunload', cleanup);

    return () => {
      cleanup();
      window.removeEventListener('beforeunload', cleanup);
    };
  }, []);

  // Clear form data in local storage
  const clearLocalStorage = () => {
    localStorage.removeItem('securityFormData');
  };

  return (
    <div className=''>
      <Formik
        initialValues={{
          account_recovery_question: '',
          account_recovery_answer: '',
          account_recovery_email: '',
          account_recovery_phone: '',
        }}
        validate={(values) => {
          const errors = {};

          if (!values.account_recovery_question) {
            errors.account_recovery_question = 'Please choose a security question';
          }

          // You can add more validation rules as needed

          return errors;
        }}
        onSubmit={(values) => {
          // Call the onSubmit function provided by the parent component
          onSubmit(values);
          // Navigate to the next page
          next();
        }}
      >
        <Form className='flex flex-col gap-10'>
          {/* Security Questions */}
          <div className="flex items-center justify-between">
            <p className='text-[18px] font-semibold'>Security Questions:</p>
            <div className="">
              <Field
                as="select"
                name="account_recovery_question"
                className='py-3 px-2 rounded border-[1px] border-black w-[346px] outline-none'
              >
                <option value="">Choose security question</option>
                <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                <option value="In which city were you born?">In which city were you born?</option>
                <option value="What is the name of your first pet?">What is the name of your first pet?</option>
                <option value="What is the last name of your favorite teacher?">What is the last name of your favorite teacher?</option>
                <option value="What is your favorite childhood book?">What is your favorite childhood book?</option>
              </Field>
              <ErrorMessage name="account_recovery_question" component="div" className="text-red-500" />
            </div>
            <div className="">
              <Field
                type="text"
                name="account_recovery_answer"
                className='account_recovery_answer py-3 px-2 rounded border-[1px] border-black w-[347px] outline-none'
                placeholder='Enter account_recovery_answer to the question'
              />
              <ErrorMessage name="account_recovery_answer" component="div" className="text-red-500" />
            </div>
          </div>

          {/* Account Recovery Email */}
          <div className="grid grid-cols-3 items-center justify-between">
            <p className='text-[18px] font-semibold'>Account Recovery Email:</p>
            <div className="">
              <Field
                type="email"
                name="account_recovery_email"
                className='py-3 px-2 rounded border-[1px] border-black w-[347px] outline-none'
                placeholder='Enter recovery email'
              />
              <ErrorMessage name="account_recovery_email" component="div" className="text-red-500" />
            </div>
          </div>

          {/* Account Recovery Phone Number */}
          <div className="grid grid-cols-3 items-center justify-between gap-1">
            <p className='text-[18px] font-semibold'>Account Recovery Phone Number:</p>
              <div className="">
              <Field
                type='number'
                name="account_recovery_phone"
                className='py-3 px-2 rounded border-[1px] border-black w-[347px] outline-none'
                placeholder='Enter recovery phone number'
              />
              <ErrorMessage name="account_recovery_phone" component="div" className="text-red-500" />
            </div>
          </div>

          {/* Next Button */}
          <div className="flex ">
            <button
              type="submit"
              onClick={() => {
                clearLocalStorage();
                next();
              }}
              className="bg-[#4e9352] hover:bg-[#305a32] text-white font-bold py-2 px-4 rounded mt-4"
            >
              Next
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Security;
