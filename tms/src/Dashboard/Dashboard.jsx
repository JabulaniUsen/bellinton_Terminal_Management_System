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
import Finance from './Tabs/Finance';
import ViewContainer from './Tabs/ContainerComponents/ViewContainer';
import AddContainer from './Tabs/ContainerComponents/AddContainter';
import ContainerTransfer from './Tabs/ContainerComponents/ContainerTransfer';
import Report from './Tabs/Report';
import ManageBooking from './Tabs/ContainerComponents/ManageContainer';


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
        { label: 'Yard Overview', tabNumber: 17, },
        { label: 'Container Mgt.', tabNumber: 18, },
        { label: 'Container Tracking', tabNumber: 19, },
        { label: 'Container Movement', tabNumber: 20, },
        { label: 'Inbound Gate Entry', tabNumber: 34, },
        { label: 'Outbound Gate Exit', tabNumber: 35, },
        { label: 'Gate Access Control', tabNumber: 36, },
        { label: 'Gate Incident', tabNumber: 37, },
        { label: 'Equipement Mgt', tabNumber: 38, },
        { label: 'Yard Queue', tabNumber: 39, },
        { label: 'Yard Space', tabNumber: 40, },
        // { label: 'Yard Report', tabNumber: 41, },
      ],
    },
    {
      label: 'Customers',
      icon: faUserAlt,
      subButtons: [
        { label: 'View/Add Customer', tabNumber: 21, },
        { label: 'Manage Customer', tabNumber: 23, },
        { label: 'View/Add Agencies', tabNumber: 22, },
        { label: 'Manage Agencies', tabNumber: 24, },
        { label: 'View/Add Agents', tabNumber: 32, },
        { label: 'Manage Agents', tabNumber: 33, },
      ]
    },
    // {
    //   label: 'Billings',
    //   icon: faDollarSign,
    //   subButtons: [
    //     { label: 'Overview', tabNumber: 25, },
    //     { label: 'Invoice', tabNumber: 26, },
    //     { label: 'Additional Invoice', tabNumber: 27, },
    //     { label: 'Discount', tabNumber: 28, },
    //     { label: 'Payment Confirmation', tabNumber: 29, },
    //     // { label: 'Billing History', tabNumber: 30, },
    //   ]
    // },
    {
      label: 'Documentation',
      icon: faFile,
      tabNumber: 30,
      subButtons: [
        { label: 'Container Cycle', tabNumber: 41, },
        { label: 'Equipment Interchange', tabNumber: 43, },
        { label: 'Terminal Delivery Order', tabNumber: 44, },
        { label: 'Split Bill of Loading', tabNumber: 45, },
        { label: 'Cargo Blocking', tabNumber: 46, },
        { label: 'Storage Free Days', tabNumber: 48, },
      ]
    },
    {
      label: 'Report',
      icon: faFileContract,
      tabNumber: 31,
      subButtons: [
        { label: 'Vessel ', tabNumber: 53, },
        { label: 'Manifest ', tabNumber: 54, },
        { label: 'Container ', tabNumber: 31, },
        { label: 'Customer ', tabNumber: 49, },
        { label: 'Agency ', tabNumber: 50, },
        { label: 'Agent ', tabNumber: 51, },
        { label: 'Equ. Mgt. ', tabNumber: 55, },
        { label: 'Term. Inv. ', tabNumber: 56, },
        { label: 'Yard Cont. Mgt ', tabNumber: 57, },
        { label: 'Yard Cont. Tracker ', tabNumber: 58, },
        { label: 'Payment Confirmation', tabNumber: 59, },
        { label: 'Cargo Blocking', tabNumber: 60, },
        { label: 'Cargo Blocking', tabNumber: 61, },
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
                    // { label: 'Create Invoice', tabNumber: 30, },
                    // { label: 'View Invoice', tabNumber: 31, },
                    // { label: 'Payment', tabNumber: 32, },
                    // { label: 'Receivables', tabNumber: 33, }
                 ]} 
                 />
            <TabButton label="Logout" icon={faSignOutAlt}  />
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
