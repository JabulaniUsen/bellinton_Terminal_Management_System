import React, {useRef, useState} from 'react'
import logo from '../../../assets/logo.svg'
import { useReactToPrint } from 'react-to-print';
import TerminalInvoiceReport from './TerminalInvoiceReport';
import PaymentReport from './PaymentReport';

const PaymentPrintTemplet = () => {
    const [seeReport, setSeeReport] = useState(false)
    const tableData = [
        {invoiceNumber: 'FSL-INV-005150', invoiceDate: '22 Mar 2024', invoiceAmount: 160000.00, paymentAmount: 160000.00},
    ]

    const recieptData = [
        {title: 'Payment#', value: '4385'},
        {title: 'Payment Date', value: '28 Mar 2024'},
        {title: 'Reference Number', value: ''},
        {title: 'Payment Mode', value: 'Bank Transfer'},
        {title: 'Amount Recieved in Words', value: 'One Million Naira'},
    ]
    const formatNumberWithCommas = (number) => {
        return number.toLocaleString('en');
    };

    const componentRef = React.useRef();

    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

  return (
    <div className="">
       {!seeReport ? (
        <div className='flex items-center flex-col justify-center mt-5'>
        <div className="mainForm w-[210mm] h-[297mm] p-[30px] mx-auto" ref={componentRef}>
            <div className="head flex justify-between">
                <div className="address flex flex-col">
                    <img src={logo} alt="" />
                   
                </div>
                <div className="">
                    <h2 className="font-semibold text-blue-900 text-4xl text-center">CFC BONDED TERMINAL</h2>
                </div>
            </div>
            <div className="body flex mt-5 justify-between items-end">

            </div>

            <div className="mt-20">
                <div className="flex gap-3 my-32">
                    <div className="">
                        <p className='text-lg text-gray-600 text-center mb-20'>PAYMENT RECIEPT</p>
                        <div className="flex justify-between items-start gap-10">
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-7 justify-between">
                                    <p className='text-gray-600'>Payment#:</p>
                                    <p className='font-semibold'> 4385</p>
                                </div>
                                <div className="flex gap-7 justify-between">
                                    <p className='text-gray-600'>Payment Date:</p>
                                    <p className='font-semibold'> 28 Mar 2024</p>
                                </div>
                                <div className="flex gap-7 justify-between">
                                    <p className='text-gray-600'>Reference Number:</p>
                                    <p className='font-semibold'> </p>
                                </div>
                                <div className="flex gap-7 justify-between">
                                    <p className='text-gray-600'>Payment Mode:</p>
                                    <p className='font-semibold'>Bnak Transfer</p>
                                </div>
                                <div className="flex gap-7 justify-between">
                                    <p className='text-gray-600'>Amount Received in Words:</p>
                                    <p className='font-semibold'>One Million, two hundred and fifty thousand Naira</p>
                                </div>

                                <div className="flex flex-col gap-2 mt-20 justify-between">
                                    <p className='text-gray-600'>Received From:</p>
                                    <p className='font-semibold text-lg'>OSUN AGRI-COMMODITIES EXPORT LTD</p>
                                </div>
                            </div>
                            <div className="text-white py-[50px] px-[5px] w-[250px] bg-[#78ae54] text-center flex flex-col items-center justify-center">
                                <p className=''>Amount Received:</p>
                                <p className='text-xl font-semibold'>NGN 1,250,000.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="table mt-8 w-full">
                    <table className="w-full border-collapse ">
                        <thead>
                            <tr className='bg-[#134a9e] text-white '>
                                <th className="border border-gray-400 p-2 px-3 text-center">Invoice Number</th>
                                <th className="border border-gray-400 p-2 px-3">Invoice Date</th>
                                <th className="border border-gray-400 p-2 px-3">Invoice Amount</th>
                                <th className="border border-gray-400 p-2 px-3">Payment Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr key={index}>
                                    <td className="border-b border-gray-400 p-2 px-3 text-center">{row.invoiceNumber}</td>
                                    <td className="border-b border-gray-400 p-2 px-3">{row.invoiceDate}</td>
                                    <td className="border-b border-gray-400 p-2 px-3">{row.invoiceAmount}.00</td>
                                    <td className="border-b border-gray-400 p-2 px-3">{row.paymentAmount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

        <div className="flex items-center gap-3">
            <button className='text-white px-7 py-2 rounded-md bg-blue-700 my-20' onClick={handlePrint}>Print</button>
            <button className='text-white px-7 py-2 rounded-md bg-blue-700 my-20' onClick={() => {setSeeReport(true)}}>Terminal Payment Report</button>
        </div>
    </div>
       ) : (
        <PaymentReport/>
       )}
    </div>
  )
}

export default PaymentPrintTemplet