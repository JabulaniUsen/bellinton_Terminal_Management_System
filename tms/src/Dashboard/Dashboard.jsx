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
  faChevronRight,
  faFile,
  faFileContract
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
import ContainerTransfer from './Tabs/ContainerComponents/ContainerTransfer';
import Report from './Tabs/Report';
import ViewCustomer from './Tabs/CustomerComponents/ViewCustomer';
import AddCustomer from './Tabs/CustomerComponents/AddCustomer';
import ManageCustomer from './Tabs/CustomerComponents/ManageCustomer';
import YardManagement from './Tabs/YardManagement';
import ViewAgencies from './Tabs/CustomerComponents/ViewAgencies';
import ManageAgencies from './Tabs/CustomerComponents/ManageAgencies';
import ViewAgent from './Tabs/CustomerComponents/ViewAgent';
import ManageAgent from './Tabs/CustomerComponents/ManageAgent';
import ViewContainerList from './Tabs/YardManagementComponent/ViewContainerList';
import YardReport from './Tabs/YardManagementComponent/YardReport';
import ContainerMgt from './Tabs/YardManagementComponent/ContainerMgt';
import ContainerTracking from './Tabs/YardManagementComponent/ContainerTracking';
import ContainerMovement from './Tabs/YardManagementComponent/ContainerMovement';
import InboundGate from './Tabs/YardManagementComponent/InboundGate';
import OutboundGate from './Tabs/YardManagementComponent/OutboundGate';
import GateAccessControl from './Tabs/YardManagementComponent/GateAccessControl';
import GateInsident from './Tabs/YardManagementComponent/GateInsident';
import EquipementMgt from './Tabs/YardManagementComponent/EquipementMgt';
import MaintainanceScheduleList from './Tabs/YardManagementComponent/MaintainanceScheduleList'
import YardQueueManagement from './Tabs/YardManagementComponent/YardQueueManagement';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedButton, setSelectedButton] = useState(null);
  const [activeSubButton, setActiveSubButton] = useState(null)
  const handleTabSwitch = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const TabButton = ({ tabNumber, label, icon, subButtons }) => (
    <div className="">
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
            className={`block w-full text-left py-2 px-4 rounded-md ${
              activeTab === subButton.tabNumber ? 'bg-[#3a0aca]' : 'hover:bg-[#360bb8]'
            }`}
            onClick={() => {
              setActiveTab(subButton.tabNumber);
              setActiveSubButton(subButton.label);
            }}
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
      // tabNumber: 16,
      subButtons: [
        { label: 'Yard Overview', tabNumber: 17, icon: faCog },
        { label: 'Container Mgt.', tabNumber: 18, icon: faCog },
        { label: 'Container Tracking', tabNumber: 19, icon: faCog },
        { label: 'Container Movement', tabNumber: 20, icon: faCog },
        { label: 'Inbound Gate Entry', tabNumber: 34, icon: faCog },
        { label: 'Outbound Gate Exit', tabNumber: 35, icon: faCog },
        { label: 'Gate Access Control', tabNumber: 36, icon: faCog },
        { label: 'Gate Incident', tabNumber: 37, icon: faCog },
        { label: 'Equipement Mgt', tabNumber: 38, icon: faCog },
        { label: 'Yard Queue', tabNumber: 39, icon: faCog },
        // { label: 'Yard Space', tabNumber: 40, icon: faCog },
        // { label: 'Yard Report', tabNumber: 41, icon: faCog },
      ],
    },
    {
      label: 'Customers',
      icon: faUserAlt,
      subButtons: [
        { label: 'View/Add Customer', tabNumber: 21, icon: faCog },
        { label: 'Manage Customer', tabNumber: 23, icon: faCog },
        { label: 'View/Add Agencies', tabNumber: 22, icon: faCog },
        { label: 'Manage Agencies', tabNumber: 24, icon: faCog },
        { label: 'View/Add Agents', tabNumber: 32, icon: faCog },
        { label: 'Manage Agents', tabNumber: 33, icon: faCog },
      ]
    },
    // {
    //   label: 'Billings',
    //   icon: faDollarSign,
    //   subButtons: [
    //     { label: 'Create Invoice', tabNumber: 25, icon: faCog },
    //     { label: 'View Invoice', tabNumber: 26, icon: faCog },
    //     { label: 'Payment', tabNumber: 27, icon: faCog },
    //     { label: 'Receivables', tabNumber: 28, icon: faCog }
    //   ]
    // },
    // {
    //   label: 'Documentation',
    //   icon: faFile,
    //   tabNumber: 30,
    //   subButtons: [
    //     { label: 'Create Invoice', tabNumber: 29, icon: faCog },
    //     { label: 'View Invoice', tabNumber: 30, icon: faCog },
    //     { label: 'Payment', tabNumber: 31, icon: faCog },
    //     { label: 'Receivables', tabNumber: 28, icon: faCog }
    //   ]
    // },
    // {
    //   label: 'Report',
    //   icon: faFileContract,
    //   tabNumber: 31,
    //   subButtons: [
    //     { label: 'Create Invoice', tabNumber: 29, icon: faCog },
    //     { label: 'View Invoice', tabNumber: 30, icon: faCog },
    //     { label: 'Payment', tabNumber: 31, icon: faCog },
    //     { label: 'Receivables', tabNumber: 28, icon: faCog }
    //   ]
    // }
  ];
  
  

  return (
    <div className="">
      <Header />
      <div className="flex overflow-hidden">
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
                    // { label: 'Create Invoice', tabNumber: 30, icon: faCog },
                    // { label: 'View Invoice', tabNumber: 31, icon: faCog },
                    // { label: 'Payment', tabNumber: 32, icon: faCog },
                    // { label: 'Receivables', tabNumber: 33, icon: faCog }
                 ]} 
                 />
            <TabButton label="Logout" icon={faSignOutAlt}  />
          </div>
        </div>

        <div className="flex-grow">
          {activeTab === 1 && <Home />}
          {activeTab === 2 && <Operations />}
          {activeTab === 3 && <Finance/>}
          {activeTab === 4 && <Report/>}

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
          {activeTab === 15 && <ContainerTransfer/>}

          {/* Customer */}
          {activeTab === 21 && <ViewCustomer/>}
          {activeTab === 23 && <ManageCustomer/>}
          {activeTab === 22 && <ViewAgencies/>}
          {activeTab === 24 && <ManageAgencies/>}
          {activeTab === 32 && <ViewAgent/>}
          {activeTab === 33 && <ManageAgent/>}
          {/* Yard Mgt */}
          {activeTab === 17 && <YardManagement onTabSwitch={handleTabSwitch}/>}
          {/* {activeTab === 17 && <ViewContainerList/>} */}
          {/* {activeTab === 17 && <YardReport/>} */}

        { activeTab === 18 && <ContainerMgt/>}
        { activeTab === 19 && <ContainerTracking/>}
        { activeTab === 20 && <ContainerMovement />}
        { activeTab === 34 && <InboundGate/> } 
        { activeTab === 35 && <OutboundGate/>}
        { activeTab === 36 && <GateAccessControl/>}
        { activeTab === 37 && <GateInsident/>}
        { activeTab === 38 && <EquipementMgt/> }
        {/* { activeTab === 38 && <MaintainanceScheduleList/> } */}
        { activeTab === 39 && <YardQueueManagement/>}
        {/* { label: 'Yard Space', tabNumber: 40} */}
        {/* { label: 'Yard Report', tabNumber: 41}  */}


        </div>
      </div>
    </div>
  );
};

export default Dashboard;
