import React from 'react';
import { useFormik } from 'formik';

function Permissions() {
  const formik = useFormik({
    initialValues: {
      locationInformation: false,
      dataSharing: false,
      storage: false,
      usageAnalytics: false,
      dataRetention: false,
      paymentInformation: false,
    },
    onSubmit: (values) => {
      // Handle form submission here
      console.log('Form values:', values);
    },
  });

  return (
    <div className='lg:mx-[320px] mx-10 roboto'>
      <form onSubmit={formik.handleSubmit} className="permissions-form">
        <div className="checkbox">
          <input
            type="checkbox"
            id="Location information"
            name="Location information"
            checked={formik.values.locationInformation}
            onChange={formik.handleChange}
          />
          <label htmlFor="Location information">Location information</label>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            id="Data Retention"
            name="Data Retention"
            checked={formik.values.dataRetention}
            onChange={formik.handleChange}
          />
          <label htmlFor="Data Retention">Data Retention</label>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            id="Data Sharing"
            name="Data Sharing"
            checked={formik.values.dataSharing}
            onChange={formik.handleChange}
          />
          <label htmlFor="Data Sharing">Data Sharing</label>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            id="Storage"
            name="Storage"
            checked={formik.values.storage}
            onChange={formik.handleChange}
          />
          <label htmlFor="Storage">Option 3</label>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            id="Usage Analytics"
            name="Usage Analytics"
            checked={formik.values.usageAnalytics}
            onChange={formik.handleChange}
          />
          <label htmlFor="Usage Analytics">Usage Analytics</label>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            id="Payment Information"
            name="Payment Information"
            checked={formik.values.paymentInformation}
            onChange={formik.handleChange}
          />
          <label htmlFor="Payment Information">Payment Information</label>
        </div>

        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

export default Permissions;
