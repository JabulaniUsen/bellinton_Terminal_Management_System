import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function PersonalInfo({ onUpdate, next }) {
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      emailAddress: '',
      phone_number: '',
      job_title: '',
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required('First Name is required'),
      last_name: Yup.string().required('Last Name is required'),
      emailAddress: Yup.string().email('Invalid email address').required('Email Address is required'),
      phone_number: Yup.number().required('Phone Number is required'),
      job_title: Yup.string().required('Job Title is required'),
    }),
    onSubmit: (values) => {
      console.log('Form values:', values);
    },
  });
  useEffect(() => {
    onUpdate(formik.values); 
  }, [formik.values, onUpdate]);
  

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('personalInfoFormData'));
    if (storedFormData) {
      formik.setValues(storedFormData);
    }
  }, []);

  // Function to call onUpdate with updated form data
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    formik.handleChange(event); // Handle input change with Formik
    onUpdate(formik.values); // Call onUpdate with updated form data

    // Save form data to local storage
    localStorage.setItem('personalInfoFormData', JSON.stringify(formik.values));
  };


  return (
    <div>
      <form onSubmit={formik.handleSubmit} className=''>
        <div className="flex flex-wrap gap-10 roboto gap-y-3 ">
          <div className="flex flex-col gap-2">
            <label htmlFor="first_name" className='font-semibold'>First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              className={`border-[1px] outline-none rounded p-1 px-3 border-[#828282] w-[347px] h-[44px] ${formik.errors.first_name && 'border-red-500'}`}
              placeholder='Enter your first name'
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
            />
            {formik.touched.first_name && formik.errors.first_name && (
              <div className="text-red-500">{formik.errors.first_name}</div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="last_name" className='font-semibold'>Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              className={`border-[1px] outline-none rounded p-1 px-3 border-[#828282] w-[347px] h-[44px] ${formik.errors.last_name && 'border-red-500'}`}
              placeholder='Enter your last name'
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
            />
            {formik.touched.last_name && formik.errors.last_name && (
              <div className="text-red-500">{formik.errors.last_name}</div>
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
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              value={formik.values.emailAddress}
            />
            {formik.touched.emailAddress && formik.errors.emailAddress && (
              <div className="text-red-500">{formik.errors.emailAddress}</div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone_number" className='font-semibold'>Phone Number</label>
            <input
              type="number"
              id="phone_number"
              name="phone_number"
              className={`border-[1px] outline-none rounded p-1 px-3 border-[#828282] w-[347px] h-[44px] ${formik.errors.phone_number && 'border-red-500'}`}
              placeholder='Enter your phone number'
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone_number}
            />
            {formik.touched.phone_number && formik.errors.phone_number && (
              <div className="text-red-500">{formik.errors.phone_number}</div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="job_title" className='font-semibold'>Job Title</label>
            <input
              type="text"
              id="job_title"
              name="job_title"
              className={`border-[1px] outline-none rounded p-1 px-3 border-[#828282] w-[347px] h-[44px] ${formik.errors.job_title && 'border-red-500'}`}
              placeholder='Enter your designation'
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              value={formik.values.job_title}
            />
            <small>Designation within the company</small>
            {formik.touched.job_title && formik.errors.job_title && (
              <div className="text-red-500">{formik.errors.job_title}</div>
            )}
          </div>
        </div>
        <button type="submit" onClick={next} className="bg-[#4e9352] hover:bg-[#305a32] text-white font-bold py-2 px-4 rounded mt-4">
          Next
        </button>
      </form>
    </div>
  );
}

export default PersonalInfo;
