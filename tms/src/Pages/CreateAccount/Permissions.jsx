import React, { useEffect, useState } from 'react';

function Permissions({ onUpdate, next }) {
  const [formData, setFormData] = useState({
    location_information: false,
    data_sharing: false,
    data_storage: false,
    usage_analytics: false,
    data_retention: false,
    payment_information: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  useEffect(() => {
    // Load form data from local data_storage when the component mounts
    const storedFormData = JSON.parse(localStorage.getItem('permissionsFormData'));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  useEffect(() => {
    // Store form data in local data_storage whenever it changes
    localStorage.setItem('permissionsFormData', JSON.stringify(formData));
    onUpdate(formData); // Call onUpdate with updated form data
  }, [formData, onUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form values:', formData);
    // Add any additional logic for form submission here
    next(); // Call next function
  };

  return (
    <div className='roboto'>
      <form onSubmit={handleSubmit} className="permissions-form">
        <div className="checkbox w-[250px] flex items-center justify-between">
          <label htmlFor="location_information">Location information</label>
          <input
            type="checkbox"
            id="location_information"
            name="location_information"
            checked={formData.location_information}
            onChange={handleChange}
          />
        </div>

        <div className="checkbox w-[250px] flex items-center justify-between">
          <label htmlFor="data_retention">Data Retention</label>
          <input
            type="checkbox"
            id="data_retention"
            name="data_retention"
            checked={formData.data_retention}
            onChange={handleChange}
          />
        </div>

        <div className="checkbox w-[250px] flex items-center justify-between">
          <label htmlFor="data_sharing">Data Sharing</label>
          <input
            type="checkbox"
            id="data_sharing"
            name="data_sharing"
            checked={formData.data_sharing}
            onChange={handleChange}
          />
        </div>

        <div className="checkbox w-[250px] flex items-center justify-between">
          <label htmlFor="data_storage">data_storage</label>
          <input
            type="checkbox"
            id="data_storage"
            name="data_storage"
            checked={formData.data_storage}
            onChange={handleChange}
          />
        </div>

        <div className="checkbox w-[250px] flex items-center justify-between">
          <label htmlFor="usage_analytics">Usage Analytics</label>
          <input
            type="checkbox"
            id="usage_analytics"
            name="usage_analytics"
            checked={formData.usage_analytics}
            onChange={handleChange}
          />
        </div>

        <div className="checkbox w-[250px] flex items-center justify-between">
          <label htmlFor="payment_information">Payment Information</label>
          <input
            type="checkbox"
            id="payment_information"
            name="payment_information"
            checked={formData.payment_information}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <button type="submit" className="bg-[#4e9352] hover:bg-[#305a32] text-white font-bold py-2 px-4 rounded mt-4">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Permissions;
