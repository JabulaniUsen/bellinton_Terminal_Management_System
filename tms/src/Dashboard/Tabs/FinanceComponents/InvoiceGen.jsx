import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 186;

const InvoiceGen = () => {
    const transactionData = [
        { 
            invoiceId: 'INV-1990',
            category: 'Android', 
            price: 'N85.99',
            status: 'Progress' 
        },
        { 
            
            invoiceId: 'INV-1991',
            category: 'Mac', 
            price: 'N85.99',
            status: 'Out of date' 
        },
        { 
            
            invoiceId: 'INV-1992',
            category: 'Windows', 
            price: 'N85.99',
            status: 'Paid' 
        },
        { 
            invoiceId: 'INV-1993',
            category: 'Android', 
            price: 'N85.99',
            status: 'Progress' 
        },
        { 
            invoiceId: 'INV-1994',
            category: 'Android', 
            price: 'N85.99',
            status: 'Progress' 
        },
      ];
  return (
    <div className='flex'>
        <div className="container-shadow col-span-2 rounded-3xl m-6">
            <h2 className='px-7 py-5 text-xl font-bold poppins'>Recent Transactions</h2>
            <table className=''>
                <thead> 
                    <tr className='py-5 px-8 bg-[#F1F3F4] grid grid-cols-4 place-items-start gap-8 text-[#637381]'>
                        <th className=''>Invoice Id</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {transactionData.map((item, index) => (
                    <tr key={index} className='grid grid-cols-4 gap-8 m-8 place-items-start'>
                        <td>{item.invoiceId}</td>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                        <td className={`font-semibold py-1 px-2 rounded-lg ${item.status === 'Progress' ? 'text-[#B76E00] bg-[#fff2d6]' : (item.status === 'Paid' ? 'text-[#118D57] bg-[#dcf6e5]' : (item.status === 'Out of date' ? 'text-[#B71D18] bg-[#ffe4de]' : 'text-black'))}`}>
                            {item.status}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

        <div className="container-shadow col-span-2 rounded-3xl  my-6">
            <h2 className=' py-5 text-xl font-bold poppins mx-10'>Uncollected Containers</h2>
            <div className="progressBar mx-10 my-7">
                <div style={{ width: 270, height: 270 }} className='font-bold inter'>
                    <CircularProgressbar 
                    text={`${percentage}`}
                    value={65}
                    styles={buildStyles({
                        textSize: '10px',
                        textColor: '#000',
                        pathColor: '#2ec685',
                        trailColor: '#edeff2',
                    })}
                    />
                </div>
            </div>
            <div className="values mx-20 flex flex-col gap-3">
                <div className="public-san flex justify-between">
                    <p className='text-[#637381] font-semibold flex gap-2 items-center'>
                        <div className='h-5 w-5 rounded-lg bg-[#2ec685]'></div> 
                        Cleared
                    </p>
                    <p>120</p>
                </div>
                <div className="public-san flex justify-between">
                    <p className='text-[#637381] font-semibold flex gap-2 items-center'>
                        <div className='h-5 w-5 rounded-lg bg-[#edeff2]'></div> 
                        Available
                    </p>
                    <p>66</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InvoiceGen