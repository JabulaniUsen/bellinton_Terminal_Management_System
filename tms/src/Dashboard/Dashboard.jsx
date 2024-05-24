// Dashboard.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartBar,
  faShip,
  faWarehouse,
  faCog,
  faSignOutAlt,
  faUserAlt,
  faFile,
  faFileContract
} from '@fortawesome/free-solid-svg-icons';
import Header from './Components/Header';
import Operations from './Tabs/Operations';
import ViewContainer from './Tabs/ContainerComponents/ViewContainer';
import AddContainer from './Tabs/ContainerComponents/AddContainter';
import ContainerTransfer from './Tabs/ContainerComponents/ContainerTransfer';
import Report from './Tabs/Report';
import ManageBooking from './Tabs/ContainerComponents/ManageContainer';
import ViewCustomer from './Tabs/CustomerComponents/ViewCustomer';
import ManageCustomer from './Tabs/CustomerComponents/ManageCustomer';
import AddCustomer from './Tabs/CustomerComponents/AddCustomer';
import ViewAgencies from './Tabs/CustomerComponents/ViewAgencies';
import ManageAgencies from './Tabs/CustomerComponents/ManageAgencies';
import AddAgencies from './Tabs/CustomerComponents/AddAgencies';
import AddAgent from './Tabs/CustomerComponents/AddAgent';
import ViewAgent from './Tabs/CustomerComponents/ViewAgent';
import ManageAgent from './Tabs/CustomerComponents/ManageAgent';
import ContainerMgt from './Tabs/YardManagementComponent/ContainerMgt';
import { Link } from 'react-router-dom';
import InboundGate from './Tabs/YardManagementComponent/InboundGate';
import OutboundGate from './Tabs/YardManagementComponent/OutboundGate';
import GateAccessControl from './Tabs/YardManagementComponent/GateAccessControl';
import ViewInvoice from './Tabs/InvoicePostingComponents/ViewInvoice';
import AddInvoice from './Tabs/InvoicePostingComponents/AddInvoice';
import PostPayment from './Tabs/InvoicePostingComponents/PostPayment';
import ContainerR from './Tabs/Documentation/ContainerR';
import ProcessEquipmentInterchange from './Tabs/Documentation/ProcessEquipmentInterchange';
import ProcessTerminalDeliveryOrder from './Tabs/Documentation/ProcessTerminalDeliveryOrder';
import Splitbill from './Tabs/Documentation/Splitbill';
import CargoBlocking from './Tabs/Documentation/CargoBlocking';
import StorageFreeDays from './Tabs/Documentation/StorageFreeDays';
import ContainerCMgt from './Tabs/Documentation/ContainerCMgt';


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedButton, setSelectedButton] = useState('Dashboard');

  const handleTabSwitch = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const [activeSubButton, setActiveSubButton] = useState(null)
  
  const TabButton = ({ tabNumber, label, icon, subButtons }) => (
    <div className="">
       <button
      className={`${
        selectedButton === label ? ' text-white bg-[#013A57] border-l-8 border-[#4E9352]' : ' text-[#013A57]'
      } py-3 hover:bg-[#013A57] hover:text-white text-black px-5 font-semibold w-[200px] flex items-center justify-between gap-2 focus:outline-none focus:shadow-outline`}
      onClick={() => {
        setSelectedButton(label);
        setActiveTab(1);
      }}
    >
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={icon} />
        <span>{label}</span>
      </div>
    </button>

      {selectedButton === label && (
        <div className="top-full left-0  text-black ">
        {subButtons.map((subButton) => (
          <button
            key={subButton.label}
            className={`w-[190px] text-left flex ml-2 py-2 px-4  ${
              activeTab === subButton.tabNumber ? 'bg-[#6ac26e3b]' : 'hover:bg-[#6ac26e3b]'
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
      tabNumber: 100,
      subButtons: [
        { label: 'Operations', tabNumber: 1, },
        { label: 'Analytics', tabNumber: 2, },
      ]
    },
    {
      label: 'Container',
      icon: faShip,
      tabNumber: 3,
      subButtons: [
        { label: 'View Container', tabNumber: 3, },
        { label: 'Add Container', tabNumber: 4, },
        { label: 'Manage Booking', tabNumber: 5, },
        { label: 'Container Transfer', tabNumber: 15, }, 
      ]
    },
    {
      label: 'Yard Mgt',
      icon: faWarehouse,
      // tabNumber: 16,
      subButtons: [
        { label: 'Inbound Gate Entry', tabNumber: 15.1, },
        { label: 'Outbound Gate Exit', tabNumber: 16, },
        { label: 'Gate Access Control', tabNumber: 17, },
      ],
    },
    {
      label: 'Customers',
      icon: faUserAlt,
      subButtons: [
        { label: 'View Customer', tabNumber: 6, },
        { label: 'Add Customer', tabNumber: 7, },
        { label: 'Manage Customer', tabNumber: 8, },
        { label: 'View Agency', tabNumber: 9, },
        // { label: 'Manage Agency', tabNumber: 10, },
        { label: 'Add Agency', tabNumber: 11, },
        { label: 'View Agent', tabNumber: 12, },
        { label: 'Manage Agent', tabNumber: 13, },
        { label: 'Add Agent', tabNumber: 14, }
      ]
    },
    {
      label: 'Invoice Posting',
      icon: faFileContract,
      subButtons: [
        { label: 'View Invoice', tabNumber: 41, },
        { label: 'Add Invoice', tabNumber: 42, },
        { label: 'Manage Invoice', tabNumber: 43, },
        { label: 'Post Payment', tabNumber: 44 }
      ]
    },
    {
      label: 'Documentation',
      icon: faFile,
      subButtons: [
        { label: 'Container Cycle', tabNumber: 45, },
        { label: 'Equipment Interchange', tabNumber: 46, },
      ]
    },
    
  ];
  
  

  return (
    <div className="">
      <Header />
      <div className="flex overflow-hidden">
        <div className="flex flex-col justify-between gap-[8rem] items-center w-1/5 p-4 py-10 bg-[#ebf8ff]">
          <div className="flex flex-col gap-3">
            {buttonsData.map(({ label, icon, subButtons }) => (
              <TabButton key={label} label={label} icon={icon} subButtons={subButtons} />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <Link to='/'><TabButton label="Logout" icon={faSignOutAlt}  /></Link>
          </div>
        </div>

        <div className="flex-grow">
          {activeTab === 1 && <Operations />}
          {activeTab === 2 && <Report/>}

          {/* Container */}
          {activeTab === 3 && <ViewContainer/>}
          {activeTab === 4  && <AddContainer/>}
          {activeTab === 5 && <ManageBooking />}
          {activeTab === 15 && <ContainerTransfer/>}

          {/* Customer */}
          {activeTab === 6 && <ViewCustomer/>}
          {activeTab === 7 && <AddCustomer/>}
          {activeTab === 8 && <ManageCustomer/>}
          {activeTab === 9 && <ViewAgencies/>}
          {/* {activeTab === 10 && <ManageAgencies/>} */}
          {activeTab === 11 && <AddAgencies/>}
          {activeTab === 12 && <ViewAgent/>}
          {activeTab === 13 && <ManageAgent/>}
          {activeTab === 14 && <AddAgent/>}

          {/* Yard Mgt   */}
          { activeTab === 15.1 && <InboundGate/> } 
          { activeTab === 16 && <OutboundGate/>}
          { activeTab === 17 && <GateAccessControl/>}
          { activeTab === 18 && <GateInsident/>}
          { activeTab === 38 && <EquipementMgt/> }
          { activeTab === 39 && <YardQueueManagement/>}
          { activeTab === 40 && <AssignContainer/> }

          {/* Invoice Posting */}
          { activeTab === 41 && <ViewInvoice/> }
          { activeTab === 42 && <AddInvoice/> }
          { activeTab === 44 && <PostPayment/> }

          {/* Documentation */}
          {activeTab === 45 && <ContainerCMgt/>}
          {activeTab === 46 && <ProcessEquipmentInterchange/>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
