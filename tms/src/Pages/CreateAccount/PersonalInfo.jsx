import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function PersonalInfo() {
  // Formik configuration
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      jobTitle: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      emailAddress: Yup.string().email('Invalid email address').required('Email Address is required'),
      phoneNumber: Yup.number().required('Phone Number is required'),
      jobTitle: Yup.string().required('Job Title is required'),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log('Form values:', values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className=''>
        <div className="flex flex-wrap gap-10 roboto gap-y-3 ">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className='font-semibold'>First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`border-[1px] outline-none rounded p-1 px-3 border-[#828282] w-[347px] h-[44px] ${formik.errors.firstName && 'border-red-500'}`}
              placeholder='Enter your first name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500">{formik.errors.firstName}</div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className='font-semibold'>Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={`border-[1px] outline-none rounded p-1 px-3 border-[#828282] w-[347px] h-[44px] ${formik.errors.lastName && 'border-red-500'}`}
              placeholder='Enter your last name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500">{formik.errors.lastName}</div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="emailAddress" className='font-semibold'>Email Address</label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              className={`border-[1px] outline-none rounded p-1 px-3 border-[#828282] w-[347px] h-[44px] ${formik.errors.emailAddress && 'border-red-500'}`}
              placeholder='Enter your Email Address'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.emailAddress}
            />
            {formik.touched.emailAddress && formik.errors.emailAddress && (
              <div className="text-red-500">{formik.errors.emailAddress}</div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phoneNumber" className='font-semibold'>Phone Number</label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              className={`border-[1px] outline-none rounded p-1 px-3 border-[#828282] w-[347px] h-[44px] ${formik.errors.phoneNumber && 'border-red-500'}`}
              placeholder='Enter your phone number'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div className="text-red-500">{formik.errors.phoneNumber}</div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="jobTitle" className='font-semibold'>Job Title</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              className={`border-[1px] outline-none rounded p-1 px-3 border-[#828282] w-[347px] h-[44px] ${formik.errors.jobTitle && 'border-red-500'}`}
              placeholder='Enter your designation'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.jobTitle}
            />
            <small>Designation within the company</small>
            {formik.touched.jobTitle && formik.errors.jobTitle && (
              <div className="text-red-500">{formik.errors.jobTitle}</div>
            )}
          </div>
        </div>

        {/* <button type="submit" className='bg-[#20007F] py-3 px-5 rounded-lg text-white roboto font-semibold'>
          Submit
        </button> */}
      </form>
    </div>
  );
}

export default PersonalInfo;
