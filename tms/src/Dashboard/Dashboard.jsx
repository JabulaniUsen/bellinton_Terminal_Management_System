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
import Home from './Tabs/Home';
import Operations from './Tabs/Operations';
import TabContent4 from './Tabs/Finance';
import Vessel from './Tabs/Vessel';
import AddVessel from './Tabs/VesselComponents/AddVessel';
import ManageVoyage from './Tabs/VesselComponents/ManageVoyage';
import LockVessel from './Tabs/VesselComponents/LockVessel';
import ViewManifest from './Tabs/ManifestComponents/ViewManifest';
import CreateManifest from './Tabs/ManifestComponents/CreateManifest';
import LockManifest from './Tabs/ManifestComponents/LockManifest';
import UpdateManifest from './Tabs/ManifestComponents/UpdateManifest';
import Finance from './Tabs/Finance';
import ViewContainer from './Tabs/ContainerComponents/ViewContainer';
import AddContainer from './Tabs/ContainerComponents/AddContainter';

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
              className="block w-full text-left py-2 px-4 rounded-md hover:bg-[#360bb8]"
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
        { label: 'Home', tabNumber: 1 },
        { label: 'Operations', tabNumber: 2, icon: faCog },
        { label: 'Finance', tabNumber: 3, icon: faCog },
        { label: 'Reports', tabNumber: 4, icon: faCog },
      ]
    },
    {
      label: 'Vessel',
      icon: faCube,
      subButtons: [
        { label: 'View Vessels', tabNumber: 5, icon: faCog },
        { label: 'Add Vessels', tabNumber: 6, icon: faCog },
        { label: 'Manage Voyages', tabNumber: 7, icon: faCog },
        { label: 'Lock Vessels', tabNumber: 8, icon: faCog },
        // { label: 'View Container2', tabNumber: 16, icon: faCog }
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
      label: 'Container',
      icon: faShip,
      subButtons: [
        { label: 'View Container', tabNumber: 13, icon: faCog },
        { label: 'Add Container', tabNumber: 14, icon: faCog },
        { label: 'Container Transfer', tabNumber: 15, icon: faCog },
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

        <div className="flex-grow">
          {activeTab === 1 && <Home />}
          {activeTab === 2 && <Operations />}
          {activeTab === 3 && <Finance/>}

          {/* Vessel */}
          {activeTab === 5 && <Vessel />}
          {activeTab === 6 && <AddVessel />}
          {activeTab === 7 && <ManageVoyage/>}
          {activeTab === 8 && <LockVessel/>}

          {/* Manifest  */}
          {activeTab === 9 && <ViewManifest/>}
          {activeTab === 10 && <CreateManifest/>}
          {activeTab === 11 && <UpdateManifest/>}
          {activeTab === 12 && <LockManifest/>}

          {/* Container */}
          {activeTab === 13 && <ViewContainer/>}
          {activeTab === 14  && <AddContainer/>}



        </div>
      </div>
    </div>
  );
};

export default Dashboard;
