import React, {useRef, useState} from 'react'
import logo from '../../../assets/logo.svg'
import { useReactToPrint } from 'react-to-print';
import TerminalInvoiceReport from './TerminalInvoiceReport';

const DiscountPrintTemplate = () => {
    const [seeReport, setSeeReport] = useState(false)
    const tableData = [
        {sNo: '1', item: 'CFC Terminal Handling Charges (40ft)', qty: 1, rate: 160000.00, amount: 160000.00},
        {sNo: '2', item: 'CFC Terminal Handling Charges (40ft)', qty: 1, rate: 160000.00, amount: 160000.00},
        {sNo: '3', item: 'CFC Terminal Handling Charges (40ft)', qty: 1, rate: 160000.00, amount: 160000.00},
        {sNo: '4', item: 'CFC Terminal Handling Charges (40ft)', qty: 3, rate: 160000.00, amount: 160000.00},
        {sNo: '5', item: 'CFC Terminal Handling Charges (40ft)', qty: 4, rate: 160000.00, amount: 160000.00},
        {sNo: '6', item: 'CFC Terminal Handling Charges (40ft)', qty: 7, rate: 160000.00, amount: 160000.00},
        {sNo: '7', item: 'CFC Terminal Handling Charges (40ft)', qty: 5, rate: 160000.00, amount: 160000.00},
        {sNo: '8', item: 'CFC Terminal Handling Charges (40ft)', qty: 1, rate: 160000.00, amount: 160000.00},
    ]

    const totalAmount = tableData.reduce((acc, curr) => acc + curr.amount, 0);

    const vatCharge = totalAmount * 0.075;
    
    const finalSum = totalAmount + vatCharge;
    
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
        <div className="mainForm w-[210mm] h-[297mm] p-[30px] mx-auto" ref={componentRef}>
            <div className="head flex justify-between">
                <div className="address flex flex-col">
                    <img src={logo} alt="" />
                    <p className='text-lg font-bold'>CFC Bonded Terminal</p>
                    <small>CFC Links Scr, Akwukwuigbo-Ugbolu,</small>
                    <small>Asaba, Delta State, Nigeria</small>
                </div>
                <div className="">
                    <h2 className="font-semibold text-blue-900 text-4xl">Terminal Invoice</h2>
                    <p className='font-semibold'># CVCINV-000003</p>
                </div>
            </div>
            <div className="body flex mt-5 justify-between items-end">
                <div className="sideOne">
                    <p className='font-semibold'>Bill to</p>
                    <p className='font-bold'>SHENOR SYSTEMS TECHNOLOGIES</p>
                    <p>2 Folarin Str, Satellite Town,</p>
                    <p>LagosState</p>
                </div>
                <div className="sideTwo flex flex-col gap-6 mt-[-120px]">
                        <div className="balance text-right">
                            <small className='font-semibold'>Balance Due</small>
                            <p className='font-bold text-2xl'>NGN720,350.00</p>
                        </div>

                        <div className="details w-[350px] flex flex-col gap-1">
                            <div className="flex justify-between">
                                <p className='font-semibold'>Invoice Date:</p>
                                <span>11 Mar 2024</span>
                            </div>
                            <div className="flex justify-between">
                                <p className='font-semibold'>Vessel/Vogage:</p>
                                <span>MSC CONDOR - 024W</span>
                            </div>
                            <div className="flex justify-between">
                                <p className='font-semibold'>BL No:</p>
                                <span>MSLUSC234987012</span>
                            </div>
                            <div className="flex justify-between">
                                <p className='font-semibold'>No of Container(s):</p>
                                <span>1 x 40FT</span>
                            </div>
                            <div className="flex justify-between">
                                <p className='font-semibold'>Container No(s):</p>
                                <span>MEDU7695043</span>
                            </div>
                            <div className="flex justify-between">
                                <p className='font-semibold'>Gate In Date:</p>
                                <span>01 Mar 2024</span>
                            </div>
                            <div className="flex justify-between">
                                <p className='font-semibold'>Rated Up To:</p>
                                <span>18 Mar 2024</span>
                            </div>
                            <div className="flex justify-between">
                                <p className='font-semibold'>Storage Days:</p>
                                <span>18 Days</span>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="mt-0">
                <p>
                    Subject: <br />
                    <span>TERMINAL INVOICE FOR 1 X 40FT CONTAINER</span>
                </p>

                <div className="table mt-8 w-full">
                    <table className="w-full border-collapse ">
                        <thead>
                            <tr className='bg-[#134a9e] text-white '>
                                <th className="border border-gray-400 p-2 px-3 text-center">#</th>
                                <th className="border border-gray-400 p-2 px-3">Item</th>
                                <th className="border border-gray-400 p-2 px-3">Qty</th>
                                <th className="border border-gray-400 p-2 px-7 text-right">Rate</th>
                                <th className="border border-gray-400 p-2 px-7 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr key={index}>
                                    <td className="border-b border-gray-400 p-2 px-7 text-center">{row.sNo}</td>
                                    <td className="border-b border-gray-400 p-2 px-3">{row.item}</td>
                                    <td className="border-b border-gray-400 p-2 px-3 text-right">{row.qty}.00</td>
                                    <td className="border-b border-gray-400 p-2 px-7 text-right">{row.rate}</td>
                                    <td className="border-b border-gray-400 p-2 px-7 text-right">{row.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="w-full flex justify-between items-end">
                    <div className="">
                        <p>
                            PLEASE PAY TO: <br />
                            <span>ZENITH BANK PLC (2233445566)</span>
                        </p>
                    </div>
                    <div className="mt-6 flex flex-col justify-between gap-2">
                        <div className="flex justify-between gap-16 px-5">
                            <p>Total Amount: </p>
                            <span>NGN {formatNumberWithCommas(totalAmount.toFixed(2))}</span>
                        </div>
                        <div className="flex justify-between gap-16  px-5">
                            <p>Value Added Tax (VAT) (7.5%): </p>
                            <span>NGN {formatNumberWithCommas(vatCharge.toFixed(2))}</span>
                        </div>
                        <div className="flex justify-between gap-16  px-5">
                            <p className='font-bold'>Total: </p>
                            <span>NGN {formatNumberWithCommas(finalSum.toFixed(2))}</span>
                        </div>
                        <div className="flex justify-between gap-16 bg-[#f3f3f3] px-5 p-2 ">
                            <p className="font-bold">Balance Due: </p>
                            <span>NGN {formatNumberWithCommas(finalSum.toFixed(2))}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="flex items-center gap-3">
            <button className='text-white px-7 py-2 rounded-md bg-blue-700 my-20' onClick={handlePrint}>Print</button>
        </div>
    </div>
    </div>
  )
}

export default DiscountPrintTemplate