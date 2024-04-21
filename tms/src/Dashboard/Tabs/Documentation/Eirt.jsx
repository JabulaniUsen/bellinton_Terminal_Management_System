import React, {useRef, useState} from 'react'
import logo from '../../../assets/logo.svg'
import qr from '../../../assets/qr.svg'
import conLabel from '../../../assets/containerLabel.svg'
import { useReactToPrint } from 'react-to-print';

const Eirt = () => {
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
            <div className="mainForm  p-[20px] mx-10 relative" ref={componentRef}>
                <div className="qr border-black absolute right-16 top-28 border p-5 pb-7 flex flex-col justify-center items-center gap-3">
                    <p className='font-bold text-lg'>EIR-202400001</p> 
                    <p className='text-sm font-bold'>EXPORT-EMPTY CONTAINER</p>              
                    <img src={qr} className='w-[120px]' alt="" />     
                </div>

                <img src={conLabel} className='absolute bottom-[200px] right-10' alt="" />

                <div className="flex items-center gap-4 mb-7">
                    <img src={logo} alt="" className=""/>
                    <h1 className='font-bold text-xl'>Equipment Interchange Receipt</h1>
                </div>


                <div className="">
                    <div className="flex">
                        <div className="voyageDetails">
                            <h3 className='font-semibold px-4 py-3 border border-gray-900'>Voyage Details</h3>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Vessel Name:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Voyage Number</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Port of Loading:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Port of Discharge:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Estimated Arrival Date:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Estimated Dept. Date:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                        </div>
                        <div className="equInfo">
                            <h3 className='font-semibold px-4 py-3 border border-gray-900'>Equipment Information</h3>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Equipment ID/No:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Equipment Type:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Equipment Size:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Equipment Status:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="">
                                <div className="flex justify-between">
                                    <p className='h-[42px] w-full text-xs border border-gray-900'></p>
                                </div>
                                <div className="flex justify-between">
                                    <p className='h-[42px] w-full text-xs border border-gray-900'></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    <div className="flex">
                        <div className="voyageDetails">
                            <h3 className='font-semibold px-4 py-3 border border-gray-900'>Shipper Information:</h3>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Shipper Name:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Shipper Address</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Contact Person</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                        </div>
                        <div className="equInfo">
                            <h3 className='font-semibold px-4 py-3 border border-gray-900'>Equipment Condition</h3>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Exterior:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Interior:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Floor:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                        </div>
                        <div className="equInfo pr-5">
                            <h3 className='font-semibold px-4 py-3 border border-gray-900'>Equipment Condition</h3>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Terminal Name:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Terminal Location:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Date of Interchange:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                        </div>
                    </div>




                    <div className="flex">
                        <div className="voyageDetails">
                            <h3 className='font-semibold px-4 py-3 border border-gray-900'>Interchange Details</h3>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Interchange Type:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Interchange Party</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Interchange Contact:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Interchange Ref No:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                        </div>
                        <div className="equInfo">
                            <h3 className='font-semibold px-4 py-3 border border-gray-900'>Equipment Trucking Details:</h3>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Trucking Company:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Truck ID/No:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Driver Name:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                            <div className="flex justify-between">
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Driver Contact:</p>
                                <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                            </div>
                        </div>
                    </div>
                    <div className="equInfo">
                        <h3 className='font-semibold px-4 py-3 border border-gray-900 w-[340px]'>Condition and Inspection:</h3>
                        <div className="flex">
                            <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Overall Condition:</p>
                            <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                        </div>
                        <div className="flex">
                            <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Inspection Result:</p>
                            <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                        </div>
                        <div className="flex">
                            <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'>Inspection Date:</p>
                            <p className='px-4 py-3 w-[170px] text-xs border border-gray-900'></p>
                        </div>
                    </div>
                </div>
                <div className="eirApproval bg-gray-900 h-[1px] mt-[170px] mb-1"></div>
                <div className="flex items-center justify-between mt-5">
                    <div className="">
                        <h2 className='text-xl font-semibold'>EIR APPROVAL</h2>
                        <div className="eirApproval bg-gray-900 h-[2px] mt-3 mb-1 w-[400px]"></div>
                        <small className='font-semibold'>Prepared by: <span className='font-normal ml-1'>chichi.emeka@cfcterminal.com</span></small>
                    </div>
                    <div className="">
                        <div className="eirApproval bg-gray-900 h-[2px] mt-3 mb-1 w-[400px]"></div>
                        <small className='font-semibold'>Transporter/Consignee/Agent/Receiver</small>
                    </div>

                </div>
                <p className="font-bold text-2xl text-center mt-10">THIS IS A DIGITAL DOCUMENT, INK STAMPS NOT REQUIRED</p>
            </div>


            <div className="flex items-center gap-3">
                <button className='text-white px-7 py-3 rounded-md bg-blue-700 my-20' onClick={handlePrint}>Print</button>
                <button className='text-white px-7 py-3 rounded-md bg-blue-700 my-20' onClick={() => {setSeeReport(true)}}>Terminal Payment Report</button>
            </div>
        </div>
    </div>
  )
}

export default Eirt