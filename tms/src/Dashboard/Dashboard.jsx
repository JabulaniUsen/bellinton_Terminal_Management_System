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
import ContainerMgt from './Tabs/YardManagementComponent/ContainerMgt';
import ContainerTracking from './Tabs/YardManagementComponent/ContainerTracking';
import ContainerMovement from './Tabs/YardManagementComponent/ContainerMovement';
import InboundGate from './Tabs/YardManagementComponent/InboundGate';
import OutboundGate from './Tabs/YardManagementComponent/OutboundGate';
import GateAccessControl from './Tabs/YardManagementComponent/GateAccessControl';
import GateInsident from './Tabs/YardManagementComponent/GateInsident';
import YardQueueManagement from './Tabs/YardManagementComponent/YardQueueManagement';
import AssignContainer from './Tabs/YardManagementComponent/YardSpace/AssignContainer';
import BillingOverview from './Tabs/Billing/BillingOverview';
import PrepaidTerminalInvoice from './Tabs/Billing/PrepaidTerminalInvoice';
import EquipementMgt from './Tabs/YardManagementComponent/EquipementMgt';
import BillingHistory from './Tabs/Billing/BillingHistory';
import AdditionalTerminalInvoice from './Tabs/Billing/AdditionalTerminalInvoice';
import DiscountTerminalInvoice from './Tabs/Billing/DiscountTerminalInvoice';
import PaymentConfirmation from './Tabs/Billing/PaymentConfirmation';
import ContainerR from './Tabs/Documentation/ContainerR';
import ProcessEquipmentInterchange from './Tabs/Documentation/ProcessEquipmentInterchange';
import ProcessTerminalDeliveryOrder from './Tabs/Documentation/ProcessTerminalDeliveryOrder';
import Splitbill from './Tabs/Documentation/Splitbill';
import StorageFreeDays from './Tabs/Documentation/StorageFreeDays';
import CargoBlocking from './Tabs/Documentation/CargoBlocking';
import VesselReport from './Tabs/Report/VesselReport';
import EquipmentMgtList from './Tabs/YardManagementComponent/EquipmentMgtList';
import ManifestReport from './Tabs/Report/ManifestReport';
import ContainerReport from './Tabs/Report/ContainerReport';
import CustomerReport from './Tabs/Report/CustomerReport';
import TerminalInvoiceReport from './Tabs/Billing/TerminalInvoiceReport';
import ViewContainerList from './Tabs/YardManagementComponent/ViewContainerList';
import ContainerTrackingList from './Tabs/YardManagementComponent/ContainerTrackingList';
import PaymentReport from './Tabs/Billing/PaymentReport';
import BlockReport from './Tabs/Documentation/BlockReport';
import UnblockReport from './Tabs/Documentation/UnblockReport';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(2);
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
        setActiveTab(2); // Reset subtab to 1 when switching main tabs
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
            className={`w-[190px] text-left flex ml-2 py-2 px-4 bg-white ${
              activeTab === subButton.tabNumber ? 'bg-[#4E9352] ' : 'hover:bg-[#6ac26e3b]'
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
        // { label: 'Home', tabNumber: 1 },
        { label: 'Operations', tabNumber: 2, icon: faCog },
        // { label: 'Finance', tabNumber: 3, icon: faCog },
        { label: 'Analytics', tabNumber: 4, icon: faCog },
      ]
    },
    // {
    //   label: 'Vessel',
    //   icon: faCube,
    //   subButtons: [
    //     { label: 'View Vessels', tabNumber: 5, icon: faCog },
    //     { label: 'Add Vessels', tabNumber: 6, icon: faCog },
    //     { label: 'Manage Voyages', tabNumber: 7, icon: faCog },
    //     { label: 'Lock Vessels', tabNumber: 8, icon: faCog },
    //   ]
    // },
    // {
    //   label: 'Manifest',
    //   icon: faList,
    //   subButtons: [
    //     { label: 'View Manifests', tabNumber: 9, icon: faCog },
    //     { label: 'Create Manifests', tabNumber: 10, icon: faCog },
    //     { label: 'Update Manifests', tabNumber: 11, icon: faCog },
    //     { label: 'Lock Manifests', tabNumber: 12, icon: faCog }
    //   ]
    // },
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
        { label: 'Yard Space', tabNumber: 40, icon: faCog },
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
    //     { label: 'Overview', tabNumber: 25, icon: faCog },
    //     { label: 'Invoice', tabNumber: 26, icon: faCog },
    //     { label: 'Additional Invoice', tabNumber: 27, icon: faCog },
    //     { label: 'Discount', tabNumber: 28, icon: faCog },
    //     { label: 'Payment Confirmation', tabNumber: 29, icon: faCog },
    //     // { label: 'Billing History', tabNumber: 30, icon: faCog },
    //   ]
    // },
    {
      label: 'Documentation',
      icon: faFile,
      tabNumber: 30,
      subButtons: [
        { label: 'Container Cycle', tabNumber: 41, icon: faCog },
        { label: 'Equipment Interchange', tabNumber: 43, icon: faCog },
        { label: 'Terminal Delivery Order', tabNumber: 44, icon: faCog },
        { label: 'Split Bill of Loading', tabNumber: 45, icon: faCog },
        { label: 'Cargo Blocking', tabNumber: 46, icon: faCog },
        { label: 'Storage Free Days', tabNumber: 48, icon: faCog },
      ]
    },
    {
      label: 'Report',
      icon: faFileContract,
      tabNumber: 31,
      subButtons: [
        { label: 'Vessel ', tabNumber: 53, icon: faCog },
        { label: 'Manifest ', tabNumber: 54, icon: faCog },
        { label: 'Container ', tabNumber: 31, icon: faCog },
        { label: 'Customer ', tabNumber: 49, icon: faCog },
        { label: 'Agency ', tabNumber: 50, icon: faCog },
        { label: 'Agent ', tabNumber: 51, icon: faCog },
        { label: 'Equ. Mgt. ', tabNumber: 55, icon: faCog },
        { label: 'Term. Inv. ', tabNumber: 56, icon: faCog },
        { label: 'Yard Cont. Mgt ', tabNumber: 57, icon: faCog },
        { label: 'Yard Cont. Tracker ', tabNumber: 58, icon: faCog },
        { label: 'Payment Confirmation', tabNumber: 59, icon: faCog },
        { label: 'Cargo Blocking', tabNumber: 60, icon: faCog },
        { label: 'Cargo Blocking', tabNumber: 61, icon: faCog },
      ]
    }
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
          {/* {activeTab === 1 && <Home />} */}
          {activeTab === 2 && <Operations />}
          {activeTab === 3 && <Finance/>}
          {activeTab === 4 && <Report/>}

          {/* Vessel */}
          {/* {activeTab === 5 && <Vessel />}
          {activeTab === 6 && <AddVessel />}
          {activeTab === 7 && <ManageVoyage/>}
          {activeTab === 8 && <LockVessel/>} */}

          {/* Manifest  */}
          {/* {activeTab === 9 && <ViewManifest/>}
          {activeTab === 10 && <CreateManifest/>}
          {activeTab === 11 && <UpdateManifest/>}
          {activeTab === 12 && <LockManifest/>} */}

          {/* Container */}
          {activeTab === 13 && <ViewContainer/>}
          {activeTab === 14  && <AddContainer/>}
          {activeTab === 15 && <ContainerTransfer/>}

          {/* Customer */}
          {/* {activeTab === 21 && <ViewCustomer/>}
          {activeTab === 23 && <ManageCustomer/>}
          {activeTab === 22 && <ViewAgencies/>}
          {activeTab === 24 && <ManageAgencies/>}
          {activeTab === 32 && <ViewAgent/>}
          {activeTab === 33 && <ManageAgent/>} */}

        {/* Yard Mgt   */}
        {/* {activeTab === 17 && <YardManagement onTabSwitch={handleTabSwitch}/>}
        { activeTab === 18 && <ContainerMgt/>}
        { activeTab === 19 && <ContainerTracking/>}
        { activeTab === 20 && <ContainerMovement />}
        { activeTab === 34 && <InboundGate/> } 
        { activeTab === 35 && <OutboundGate/>}
        { activeTab === 36 && <GateAccessControl/>}
        { activeTab === 37 && <GateInsident/>}
        { activeTab === 38 && <EquipementMgt/> }
        { activeTab === 39 && <YardQueueManagement/>}
        { activeTab === 40 && <AssignContainer/> } */}

        {/* Billing */}
        {/* {activeTab === 25 && <BillingOverview/>}
        {activeTab === 26 && <PrepaidTerminalInvoice/>}
        {activeTab === 27 && <AdditionalTerminalInvoice/>}
        {activeTab === 28 && <DiscountTerminalInvoice/>}
        {activeTab === 29 && <PaymentConfirmation/>} */}
        {/* {activeTab === 30 && <BillingHistory/>} */}

        {/* Documentation */}
        {/* {activeTab === 41 && <ContainerR/>}
        {activeTab === 43 && <ProcessEquipmentInterchange/>}
        {activeTab === 44 && <ProcessTerminalDeliveryOrder/>}
        {activeTab === 45 && <Splitbill/>}
        {activeTab === 46 && <CargoBlocking/>}
        {activeTab === 48 && <StorageFreeDays/>} */}

        {/* Report */}
        {/* {activeTab === 53 && <VesselReport/>}
        {activeTab === 54 && <ManifestReport/>}
        {activeTab === 31 && <ContainerReport/>}
        {activeTab === 49 && <ManageCustomer/>}
        {activeTab === 50 && <ManageAgencies/>}
        {activeTab === 51 && <ManageAgent/>}
        {activeTab === 55 && <EquipmentMgtList/>}
        {activeTab === 56 && <TerminalInvoiceReport/>}
        {activeTab === 57 && <ViewContainerList/>}
        {activeTab === 58 && <ContainerTrackingList/>}
        {activeTab === 59 && <PaymentReport/>}
        {activeTab === 60 && <BlockReport/>}
        {activeTab === 61 && <UnblockReport/>} */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
