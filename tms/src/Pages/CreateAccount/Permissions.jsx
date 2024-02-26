import React, { useState } from 'react';

function Permissions() {
  const [formData, setFormData] = useState({
    locationInformation: false,
    dataSharing: false,
    storage: false,
    usageAnalytics: false,
    dataRetention: false,
    paymentInformation: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form values:', formData);
    // Add any additional logic for form submission here
  };

  return (
    <div className='lg:mx-[320px] mx-10 roboto'>
      <form onSubmit={handleSubmit} className="permissions-form">
        <div className="checkbox">
          <input
            type="checkbox"
            id="locationInformation"
            name="locationInformation"
            checked={formData.locationInformation}
            onChange={handleChange}
          />
          <label htmlFor="locationInformation">Location information</label>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            id="dataRetention"
            name="dataRetention"
            checked={formData.dataRetention}
            onChange={handleChange}
          />
          <label htmlFor="dataRetention">Data Retention</label>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            id="dataSharing"
            name="dataSharing"
            checked={formData.dataSharing}
            onChange={handleChange}
          />
          <label htmlFor="dataSharing">Data Sharing</label>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            id="storage"
            name="storage"
            checked={formData.storage}
            onChange={handleChange}
          />
          <label htmlFor="storage">Storage</label>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            id="usageAnalytics"
            name="usageAnalytics"
            checked={formData.usageAnalytics}
            onChange={handleChange}
          />
          <label htmlFor="usageAnalytics">Usage Analytics</label>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            id="paymentInformation"
            name="paymentInformation"
            checked={formData.paymentInformation}
            onChange={handleChange}
          />
          <label htmlFor="paymentInformation">Payment Information</label>
        </div>

        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

export default Permissions;
