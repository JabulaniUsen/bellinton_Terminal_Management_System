// Dashboard.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartBar,
  faCube,
  faList,
  faShip,
  faWarehouse,
  faDollarSign,
  faCog,
  faSignOutAlt,
  faUserAlt,
  faChevronDown,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import Header from './Components/Header';
import TabContent1 from './Tabs/TabContent1';
import TabContent2 from './Tabs/TabContent2';
import TabContent3 from './Tabs/TabContent3';
import TabContent4 from './Tabs/TabContent4';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedButton, setSelectedButton] = useState(null);

  const TabButton = ({ tabNumber, label, icon, subButtons }) => (
    <div className="relative">
      <button
        className={`${
          selectedButton === label ? 'bg-[#3a0aca] text-white' : 'bg-[#4000FF] text-white'
        } py-2 text-white font-semibold px-4 rounded-lg w-[200px] flex items-center justify-between gap-2 focus:outline-none focus:shadow-outline`}
        onClick={() => {
          setSelectedButton(selectedButton === label ? null : label);
        }}
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={icon} />
          <span>{label}</span>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {selectedButton === label && (
        <div className="top-full left-0 mt-2 p-2 bg-[#4000FF] text-white shadow-lg rounded-md">
          {subButtons.map((subButton) => (
            <button
              key={subButton.label}
              className="block w-full text-left py-2 px-4 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
              onClick={() => setActiveTab(subButton.tabNumber)}
            >
              {subButton.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const buttonsData = [
    {
      label: 'Dashboard',
      icon: faChartBar,
      subButtons: [
        { label: 'Operations', tabNumber: 1, icon: faCog },
        { label: 'Finance', tabNumber: 2, icon: faCog },
        { label: 'Reports', tabNumber: 3, icon: faCog },
      ]
    },
    {
      label: 'Container',
      icon: faCube,
      subButtons: [
        { label: 'View Containers', tabNumber: 5, icon: faCog },
        { label: 'Add Containers', tabNumber: 6, icon: faCog },
        { label: 'Container Transfers', tabNumber: 7, icon: faCog },
        { label: 'Containers Status', tabNumber: 8, icon: faCog }
      ]
    },
    {
      label: 'Manifest',
      icon: faList,
      subButtons: [
        { label: 'View Manifests', tabNumber: 9, icon: faCog },
        { label: 'Create Manifests', tabNumber: 10, icon: faCog },
        { label: 'Update Manifests', tabNumber: 11, icon: faCog },
        { label: 'Lock Manifests', tabNumber: 12, icon: faCog }
      ]
    },
    {
      label: 'Vessels',
      icon: faShip,
      subButtons: [
        { label: 'View Vessels', tabNumber: 13, icon: faCog },
        { label: 'Add Vessels', tabNumber: 14, icon: faCog },
        { label: 'Manage Voyages', tabNumber: 15, icon: faCog }
      ]
    },
    {
      label: 'Yard Mgt',
      icon: faWarehouse,
      subButtons: [
        { label: 'View Yard Map', tabNumber: 17, icon: faCog },
        { label: 'Gate In/Out', tabNumber: 18, icon: faCog },
        { label: 'Transfer', tabNumber: 19, icon: faCog },
        { label: 'Yard Activity', tabNumber: 20, icon: faCog }
      ]
    },
    {
      label: 'Customers',
      icon: faUserAlt,
      subButtons: [
        { label: 'View Customer', tabNumber: 21, icon: faCog },
        { label: 'Add Customer', tabNumber: 22, icon: faCog },
        { label: 'View Invoice', tabNumber: 23, icon: faCog },
      ]
    },
    {
      label: 'Billings',
      icon: faDollarSign,
      subButtons: [
        { label: 'Create Invoice', tabNumber: 25, icon: faCog },
        { label: 'View Invoice', tabNumber: 26, icon: faCog },
        { label: 'Payment', tabNumber: 27, icon: faCog },
        { label: 'Receivables', tabNumber: 28, icon: faCog }
      ]
    }
  ];
  
  

  return (
    <div className="">
      <Header />
      <div className="flex">
        <div className="flex flex-col justify-between gap-[8rem] items-center w-1/5 p-4 py-10 bg-[#20007F]">
          <div className="flex flex-col gap-3">
            {buttonsData.map(({ label, icon, subButtons }) => (
              <TabButton key={label} label={label} icon={icon} subButtons={subButtons} />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <TabButton 
                label="Settings" 
                icon={faCog} 
                subButtons={[
                    { label: 'Create Invoice', tabNumber: 30, icon: faCog },
                    { label: 'View Invoice', tabNumber: 31, icon: faCog },
                    { label: 'Payment', tabNumber: 32, icon: faCog },
                    { label: 'Receivables', tabNumber: 33, icon: faCog }
                 ]} />
            <TabButton label="Logout" icon={faSignOutAlt}  />
          </div>
        </div>

        <div className="flex-grow p-4">
          {activeTab === 1 && <TabContent1 />}
          {activeTab === 2 && <TabContent2 />}
          {activeTab === 3 && <TabContent3 />}
          {activeTab === 4 && <TabContent4 />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
