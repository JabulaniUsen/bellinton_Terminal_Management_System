import React, { useState } from 'react';
import Header from '../Components/Header';
import PersonalInfo from './CreateAccount/PersonalInfo';
import Permissions from './CreateAccount/Permissions';
import AdditionalDetails from './CreateAccount/AdditionalDetails';
import Security from './CreateAccount/Security';
import TermsAndConditions from './CreateAccount/TermsAndConditions';
import Credentials from './CreateAccount/Credentials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

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

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleFormUpdate = (tabName, data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
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
        break;
      default:
        break;
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personalInfo':
        return <PersonalInfo />;
      case 'credentials':
        return <Credentials />;
      case 'permissions':
        return <Permissions />;
      case 'additionalDetails':
        return <AdditionalDetails />;
      case 'security':
        return <Security />;
      case 'termsAndConditions':
        return <TermsAndConditions />;
      default:
        return null;
    }
  };

  const handleSubmitAllForms = () => {
    // Submit all forms using the collected form data
    // (you can send formData to your backend or handle it as needed)
    console.log('Form data to submit:', formData);
  };

  return (
    <div >
      <Header />

      <div className="mb-10">
        <div className="head flex flex-col justify-center items-center text-center gap-2 roboto">
          <h2 className='text-3xl font-bold'>
            {activeTab === 'permissions'
              ? 'Tick in agreement to this permission'
              : 'Create a user account to use'}
          </h2>
          <p className='font-semibold text-xl my-2 w-[700px]'>
            {activeTab === 'permissions'
              ? 'Before you proceed, we need your consent to collect and process certain information for the optimal functioning of our services.'
              : 'Make sure you enter the right information to avoid errors'}
          </p>
        </div>

        <div className="tabSwitch flex items-center justify-center my-10">
          <p className={`tabs py-2 px-5 border-[1px] font-semibold cursor-pointer border-black ${activeTab === 'personalInfo' ? 'activeTab bg-[#20007F] border-0 text-white' : ''}`} onClick={() => handleTabClick('personalInfo')}>
            Personal info
          </p>
          <p className={`tabs py-2 px-5 border-[1px] font-semibold cursor-pointer border-black ${activeTab === 'credentials' ? 'activeTab bg-[#20007F] border-0 text-white' : ''}`} onClick={() => handleTabClick('credentials')}>
            Credentials
          </p>
          <p className={`tabs py-2 px-5 border-[1px] font-semibold cursor-pointer border-black ${activeTab === 'permissions' ? 'activeTab bg-[#20007F] border-0 text-white' : ''}`} onClick={() => handleTabClick('permissions')}>
            Permissions
          </p>
          <p className={`tabs py-2 px-5 border-[1px] font-semibold cursor-pointer border-black ${activeTab === 'additionalDetails' ? 'activeTab bg-[#20007F] border-0 text-white' : ''}`} onClick={() => handleTabClick('additionalDetails')}>
            Additional Details
          </p>
          <p className={`tabs py-2 px-5 border-[1px] font-semibold cursor-pointer border-black ${activeTab === 'security' ? 'activeTab bg-[#20007F] border-0 text-white' : ''}`} onClick={() => handleTabClick('security')}>
            Security
          </p>
          <p className={`tabs py-2 px-5 border-[1px] font-semibold cursor-pointer border-black ${activeTab === 'termsAndConditions' ? 'activeTab bg-[#20007F] border-0 text-white' : ''}`} onClick={() => handleTabClick('termsAndConditions')}>
            Terms and Conditions
          </p>
        </div>

        <div className=" mt-28">
          {renderTabContent()}
        </div>

        <div className="footer flex justify-end mx-[150px]">
          {activeTab !== 'termsAndConditions' ? (
            <button className='bg-[#20007F] py-3 px-5 rounded-xl text-white roboto font-semibold flex items-center gap-10' onClick={handleNextButtonClick}>
              Next <FontAwesomeIcon icon={faAngleRight} className='px-2 py-[0.3rem] rounded-full border-[4px] font-bold' />
            </button>
          ) : (
            <button className='bg-[#20007F] py-3 px-5 rounded-xl text-white roboto font-semibold flex items-center gap-10' onClick={handleNextButtonClick}>
              Agree, Next <FontAwesomeIcon icon={faAngleRight} className='px-2 py-[0.3rem] rounded-full border-[4px] font-bold' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
