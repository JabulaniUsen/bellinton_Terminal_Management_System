import React, { useState } from 'react';
import Header from '../Components/Header';
import PersonalInfo from './CreateAccount/PersonalInfo';
import Permissions from './CreateAccount/Permissions';
import AdditionalDetails from './CreateAccount/AdditionalDetails';
import Security from './CreateAccount/Security';
import TermsAndConditions from './CreateAccount/TermsAndConditions';
import Credentials from './CreateAccount/Credentials';

function CreateAccount() {
  const [activeTab, setActiveTab] = useState('personalInfo'); // Initial active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
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

  return (
    <div >
      <Header />

      <div className="">
        <div className="head text-center roboto">
          <h2 className='text-3xl font-bold'>Create a user account to use  </h2>
          <p className='font-bold text-xl my-2'>Make sure you enter the right information to avoid errors</p>
        </div>

        <div className="tabSwitch flex items-center justify-center my-10">
          <p className={`tabs py-2 px-5 border-[1px] font-semibold border-black ${activeTab === 'personalInfo' ? 'activeTab bg-[#20007F] border-0 text-white' : ''}`} onClick={() => handleTabClick('personalInfo')}>
            Personal info
          </p>
          <p className={`tabs py-2 px-5 border-[1px] font-semibold border-black ${activeTab === 'credentials' ? 'activeTab bg-[#20007F] border-0 text-white' : ''}`} onClick={() => handleTabClick('credentials')}>
            Credentials
          </p>
          <p className={`tabs py-2 px-5 border-[1px] font-semibold border-black ${activeTab === 'permissions' ? 'activeTab bg-[#20007F] border-0 text-white' : ''}`} onClick={() => handleTabClick('permissions')}>
            Permissions
          </p>
          <p className={`tabs py-2 px-5 border-[1px] font-semibold border-black ${activeTab === 'additionalDetails' ? 'activeTab bg-[#20007F] border-0 text-white' : ''}`} onClick={() => handleTabClick('additionalDetails')}>
            Additional Details
          </p>
          <p className={`tabs py-2 px-5 border-[1px] font-semibold border-black ${activeTab === 'security' ? 'activeTab bg-[#20007F] border-0 text-white' : ''}`} onClick={() => handleTabClick('security')}>
            Security
          </p>
          <p className={`tabs py-2 px-5 border-[1px] font-semibold border-black ${activeTab === 'termsAndConditions' ? 'activeTab bg-[#20007F] border-0 text-white' : ''}`} onClick={() => handleTabClick('termsAndConditions')}>
            Terms and Conditions
          </p>
        </div>

        <div className=" my-28">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
