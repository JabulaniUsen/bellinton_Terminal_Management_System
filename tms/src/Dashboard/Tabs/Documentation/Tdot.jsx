import React, {useRef, useState} from 'react'
import logo from '../../../assets/logo.svg'
import qr from '../../../assets/qr.svg'
import conLabel from '../../../assets/containerLabel.svg'
import { useReactToPrint } from 'react-to-print';

const Tdot = () => {
    const formatNumberWithCommas = (number) => {
        return number.toLocaleString('en');
    };

    const componentRef = React.useRef();

    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

  return (
    <div className="">
        <div className='flex items-center flex-col justify-center mt-5'>
            <div className="mainForm w-[210mm] p-[20px] mx-10 relative" ref={componentRef}>
                <div className="flex items-center gap-14 text-[#20007F] underline mb-7">
                    <img src={logo} alt="" className=""/>
                    <h1 className='font-bold text-2xl'>Equipment Interchange Receipt</h1>
                </div>

                <div className="flex flex-wrap flex-col gap-y-4 gap-x-20 h-[440px] mt-10">
                    <div className="">
                        <h3 className='font-bold'>CONSIGNEE INFORMATION:</h3>
                        <ul className='list-disc ml-5'>
                            <li className='font-semibold text-sm'>
                                Consignee Name: <span className='font-normal'>XYZ Trading Company</span>
                            </li>
                            <li className='font-semibold text-sm'>
                                Consignee Address: <span className='font-normal'>123 Main Street, Lagos</span>
                            </li>
                            <li className='font-semibold text-sm'>
                                Contact Person: <span className='font-normal'>John Smith</span>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <h3 className='font-bold'>VESSEL INFORMATION:</h3>
                        <ul className='list-disc ml-5'>
                            <li className='font-semibold text-sm'>
                                Vessel Name: <span className='font-normal'>XYZ Trading Company</span>
                            </li>
                            <li className='font-semibold text-sm'>
                                Vessel Number: <span className='font-normal'>123 Main Street, Lagos</span>
                            </li>
                            <li className='font-semibold text-sm'>
                                Port of Loading: <span className='font-normal'>John Smith</span>
                            </li>
                            <li className='font-semibold text-sm'>
                                Port of Discharge: <span className='font-normal'>John Smith</span>
                            </li>
                            <li className='font-semibold text-sm'>
                                Estimated Arrival Date: <span className='font-normal'>John Smith</span>
                            </li>
                            <li className='font-semibold text-sm'>
                                Estimated Departure Date: <span className='font-normal'>John Smith</span>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className='font-bold'>CARGO DETAILS:</h3>
                        <ul className='list-disc ml-5'>
                            <li className='font-semibold text-sm'>
                                Cargo Description: <span className='font-normal'>XYZ Trading Company</span>
                            </li>
                            <li className='font-semibold text-sm'>
                                Quantity: <span className='font-normal'>123 Main Street, Lagos</span>
                            </li>
                            <li className='font-semibold text-sm'>
                                Unit: <span className='font-normal'>John Smith</span>
                            </li>
                            <li className='font-semibold text-sm'>
                                Destination: <span className='font-normal'>John Smith</span>
                            </li>
                            <li className='font-semibold text-sm'>
                                Delivery Date: <span className='font-normal'>John Smith</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 border border-gray-900">
                        <h3 className='font-bold'>CARGO DETAILS:</h3>
                        <ul className='list-disc ml-5'>
                            <li className='font-semibold text-sm'>
                                Order Number: <span className='font-normal'>XYZ Trading Company</span>
                            </li>
                            <li className='font-semibold text-sm'>
                                Data of Issue: <span className='font-normal'>123 Main Street, Lagos</span>
                            </li>
                            <li className='font-semibold text-sm'>
                                Date of Issue: <span className='font-normal'>John Smith</span>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className='font-bold'>BL INFORMATION:</h3>
                        <ul className='list-disc ml-5'>
                            <li className='font-semibold text-sm'>
                                Bill of Lading Number:<span className='font-normal'>Bill of Lading Number</span>
                            </li>
                            <li className='font-semibold text-sm'>
                                Date of Issuance:<span className='font-normal'>Date of Issuance</span>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className='font-bold'>CONTAINER LIST INFORMATION:</h3>
                        <ul className='list-disc ml-5'>
                            <li className=''>
                                Bill of Lading Number
                            </li>
                            <li className=''>
                                Date of Issuance
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <h3 className='font-bold'>DECLARATION:</h3>
                    <p>I, the undersigned, certify that the above-described Terminal Delivery Order accurately reflects the details of the cargo to be delivered from the specified terminal to the designated consignee.</p>
                </div>
                
                <p className="font-bold text-2xl text-center my-10 mb-20">THIS TDO IS VALID UP TO: 29/03/2024</p>
                <div className="flex flex-col justify-end items-end">
                    <div class=" my-2">-------------------------------</div>
                    <p className='text-lg font-semibold'>Check by: Terminal Manager</p>
                </div>
            </div>


            <div className="flex items-center gap-3">
                <button className='text-white px-7 py-3 rounded-md bg-blue-700 my-20' onClick={handlePrint}>Print</button>
            </div>
        </div>
    </div>
  )
}

export default Tdot