import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import PersonalInfo from './CreateAccount/PersonalInfo';
import Permissions from './CreateAccount/Permissions';
import AdditionalDetails from './CreateAccount/AdditionalDetails';
import Security from './CreateAccount/Security';
import TermsAndConditions from './CreateAccount/TermsAndConditions';
import Credentials from './CreateAccount/Credentials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faComment, faFile, faLockOpen, faPenToSquare, faShieldHalved, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreateAccount() {
  const [activeTab, setActiveTab] = useState('personalInfo'); // Initial active tab
  const [formData, setFormData] = useState({
    personalInfo: {},
    credentials: {},
    permissions: {},
    additionalDetails: {},
    security: {},
    termsAndConditions: {},
  });

  useEffect(() => {
    // Load form data from local storage when the component mounts
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleFormUpdate = (tabName, data) => {
    // Update form data state
    setFormData((prevFormData) => ({
      ...prevFormData,
      [tabName]: data,
    }));

    // Save form data to local storage
    localStorage.setItem('formData', JSON.stringify({
      ...formData,
      [tabName]: data,
    }));
  };

  const handleNextButtonClick = () => {
    switch (activeTab) {
      case 'personalInfo':
        setActiveTab('credentials');
        break;
      case 'credentials':
        setActiveTab('permissions');
        break;
      case 'permissions':
        setActiveTab('additionalDetails');
        break;
      case 'additionalDetails':
        setActiveTab('security');
        break;
      case 'security':
        setActiveTab('termsAndConditions');
        break;
      case 'termsAndConditions':
        console.log('User agreed to terms and conditions');
        handleSubmitAllForms(); 
        break;
      default:
        break;
    }
  };
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'personalInfo':
        return <PersonalInfo onUpdate={(data) => handleFormUpdate('personalInfo', data)} next={handleNextButtonClick}/>;
      case 'credentials':
        return <Credentials onUpdate={(data) => handleFormUpdate('credentials', data)} next={handleNextButtonClick}/>;
      case 'permissions':
        return <Permissions onUpdate={(data) => handleFormUpdate('permissions', data)} next={handleNextButtonClick}/>;
      case 'additionalDetails':
        return <AdditionalDetails onUpdate={(data) => handleFormUpdate('additionalDetails', data)} next={handleNextButtonClick}/>;
      case 'security':
        return <Security onUpdate={(data) => handleFormUpdate('security', data)} next={handleNextButtonClick}/>;
      case 'termsAndConditions':
        return <TermsAndConditions />;
      default:
        return null;
    }
  };

  // const handleSubmitAllForms = async () => {
  //   try {
  //     const response = await axios.post(
  //       'https://exprosys-backend.onrender.com/api/v1/register/',
  //       formData,
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );
  
  //     console.log('User registered successfully:', response.data);
  //     toast.success('User registered successfully');
  //     localStorage.removeItem('formData');
  //   } catch (error) {
  //     console.error('Error registering user:', error.message);
  //     toast.error('Error registering user');
  //   }
  // };

  const handleSubmitAllForms = (e) => {
    fetch("https://exprosys-backend.onrender.com/api/v1/register/", {
      method: "POST",
      headers: {'content-type':'application/json'},
      body:JSON.stringify(formData)
    }).then((res) => {
      toast.success('Registered successfully')
    }).catch((err) => {
      toast.error('Failed:' +err.message)
    })
  }
  
  

  return (
    <div >
      <Header />

      <div className="my-8 mx-[10rem]">
        <div className=" roboto">
          <h2 className='text-3xl font-bold text-[#045985]'>
            {activeTab === 'permissions'
              ? 'Tick in agreement to this permission'
              : 'Create a user account to use'}
          </h2>
          <p className=' text-xl my-2 w-[700px]'>
          Make sure you enter the right information to avoid errors
          </p>
        </div>

        <div className="tabSwitch flex gap-2 my-10 w-[1100px]">
          <p className={`tabs py-3 px-5 flex gap-2 items-center cursor-pointer rounded-full  ${activeTab === 'personalInfo' ? 'activeTab bg-[#045985] border-0 text-white' : 'text-[#045985]'}`} onClick={() => handleTabClick('personalInfo')}>
            <FontAwesomeIcon icon={faUser} />
            Personal info
          </p>
          <p className={`tabs py-3 px-5 flex gap-2 items-center cursor-pointer rounded-full  ${activeTab === 'credentials' ? 'activeTab bg-[#045985] border-0 text-white' : 'text-[#045985]'}`} onClick={() => handleTabClick('credentials')}>
            <FontAwesomeIcon icon={faComment} />
            Credentials
          </p>
          <p className={`tabs py-3 px-5 flex gap-2 items-center cursor-pointer rounded-full  ${activeTab === 'permissions' ? 'activeTab bg-[#045985] border-0 text-white' : 'text-[#045985]'}`} onClick={() => handleTabClick('permissions')}>
            <FontAwesomeIcon icon={faLockOpen} />
            Permissions
          </p>
          <p className={`tabs py-3 px-5 flex gap-2 items-center cursor-pointer rounded-full  ${activeTab === 'additionalDetails' ? 'activeTab bg-[#045985] border-0 text-white' : 'text-[#045985]'}`} onClick={() => handleTabClick('additionalDetails')}>
          <FontAwesomeIcon icon={faPenToSquare} />
            Additional Details
          </p>
          <p className={`tabs py-3 px-5 flex gap-2 items-center cursor-pointer rounded-full  ${activeTab === 'security' ? 'activeTab bg-[#045985] border-0 text-white' : 'text-[#045985]'}`} onClick={() => handleTabClick('security')}>
          <FontAwesomeIcon icon={faShieldHalved} />
            Security
          </p>
          <p className={`tabs py-3 px-5 flex gap-2 items-center cursor-pointer rounded-full  ${activeTab === 'termsAndConditions' ? 'activeTab bg-[#045985] border-0 text-white' : 'text-[#045985]'}`} onClick={() => handleTabClick('termsAndConditions')}>
          <FontAwesomeIcon icon={faFile} />
            Terms and Conditions
          </p>
        </div>

        <div className=" mt-16">
          {renderTabContent()}
        </div>

        <div className="footer flex my-10">
          {activeTab !== 'termsAndConditions' ? (
            <button className='bg-[#4e9352] hidden py-3 px-5 w-[400px] justify-between rounded-xl text-white roboto' onClick={handleNextButtonClick}>
              Next <FontAwesomeIcon icon={faAngleRight} className='px-2 py-[0.3rem] rounded-full border-[4px] font-bold' />
            </button>
          ) : (
              <button className='bg-[#4e9352] py-3 px-5 w-[400px] justify-between rounded-xl text-white roboto' onClick={handleSubmitAllForms}>
                Agree, Next <FontAwesomeIcon icon={faAngleRight} className='px-2 py-[0.3rem] rounded-full border-[4px] font-bold' />
              </button>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CreateAccount;