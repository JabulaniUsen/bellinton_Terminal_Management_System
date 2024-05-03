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
    <div className=' roboto'>
      <form onSubmit={handleSubmit} className="permissions-form">
        <div className="checkbox w-[250px] flex items-center justify-between">
          <label htmlFor="locationInformation">Location information</label>
          <input
            type="checkbox"
            id="locationInformation"
            name="locationInformation"
            checked={formData.locationInformation}
            onChange={handleChange}
          />
        </div>

        <div className="checkbox w-[250px] flex items-center justify-between">
          <label htmlFor="dataRetention">Data Retention</label>
          <input
            type="checkbox"
            id="dataRetention"
            name="dataRetention"
            checked={formData.dataRetention}
            onChange={handleChange}
          />
        </div>

        <div className="checkbox w-[250px] flex items-center justify-between">
          <label htmlFor="dataSharing">Data Sharing</label>
          <input
            type="checkbox"
            id="dataSharing"
            name="dataSharing"
            checked={formData.dataSharing}
            onChange={handleChange}
          />
        </div>

        <div className="checkbox w-[250px] flex items-center justify-between">
          <label htmlFor="storage">Storage</label>
          <input
            type="checkbox"
            id="storage"
            name="storage"
            checked={formData.storage}
            onChange={handleChange}
          />
        </div>

        <div className="checkbox w-[250px] flex items-center justify-between">
          <label htmlFor="usageAnalytics">Usage Analytics</label>
          <input
            type="checkbox"
            id="usageAnalytics"
            name="usageAnalytics"
            checked={formData.usageAnalytics}
            onChange={handleChange}
          />
        </div>

        <div className="checkbox w-[250px] flex items-center justify-between">
          <label htmlFor="paymentInformation">Payment Information</label>
          <input
            type="checkbox"
            id="paymentInformation"
            name="paymentInformation"
            checked={formData.paymentInformation}
            onChange={handleChange}
          />
        </div>

        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

export default Permissions;
