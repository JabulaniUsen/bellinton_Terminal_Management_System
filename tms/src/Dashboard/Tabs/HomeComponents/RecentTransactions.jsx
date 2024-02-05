import React from 'react';
import avatar1 from '../../../assets/avatar1.png'
import avatar2 from '../../../assets/avatar2.png'
import avatar3 from '../../../assets/avatar3.png'
import beauty from '../../../assets/beauty.png'
import book from '../../../assets/books.png'
import receive from '../../../assets/receive.png'
import send from '../../../assets/send.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const RecentTransactions = () => {
  const transactionData = [
    { 
        avatar: avatar1,
        direction: receive,
        desc: 'Receive money from',
        name: 'Annette Black', 
        date: '20th Dec 2023',
        time: '1:40pm',
        amount: '$68.71',
        status: 'Progress' 
    },
    { 
        avatar: avatar2,
        direction: send,
        desc: 'Receive money from',
        name: 'Annette Black', 
        date: '20th Dec 2023',
        time: '1:40pm',
        amount: '$68.71',
        status: 'Failed' 
    },
    { 
        avatar: avatar3,
        direction: send,
        desc: 'Receive money from',
        name: 'Annette Black', 
        date: '20th Dec 2023',
        time: '1:40pm',
        amount: '$68.71',
        status: 'Complete' 
    },
    { 
        avatar: book,
        direction: send,
        desc: 'Receive money from',
        name: 'Annette Black', 
        date: '20th Dec 2023',
        time: '1:40pm',
        amount: '$68.71',
        status: 'Progress' 
    },
    { 
        avatar: beauty,
        direction: send,
        desc: 'Receive money from',
        name: 'Annette Black', 
        date: '20th Dec 2023',
        time: '1:40pm',
        amount: '$68.71',
        status: 'Complete' 
    },
  ];

  const customerData = [
    {
        avatar: avatar1,
        name: 'Melanie Noble',
        email: 'luella.ryan33@gmail.com'
    },
    {
        avatar: avatar2,
        name: 'Chase Day',
        email: 'joana.simonis84@gmail.com'
    },
    {
        avatar: avatar3,
        name: 'Shawn Manning',
        email: 'marjolaine_white94@gmail.com'
    },
    {
        avatar: avatar1,
        name: 'Soren Durham',
        email: 'vergie_block82@hotmail.com'
    },
    {
        avatar: avatar1,
        name: 'Cortez Herring',
        email: 'vito.hudson@hotmail.com'
    },
  ]

  return (
    <div className='grid grid-cols-3'>
      <div className="container-shadow col-span-2 rounded-3xl m-6">
        <h2 className='px-7 py-5 mx-6 text-xl font-bold poppins'>Recent Transactions</h2>
        <table className=''>
            <thead> 
                <tr className='py-5 bg-[#F1F3F4] my-2 grid grid-flow-col text-[#637381]'>
                    <th className='col-span-2'>Description</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
            {transactionData.map((item, index) => (
                <tr key={index} className='grid grid-cols-5 my-8 place-items-center'>
                    <td className='px-7 col-span-2'>
                        <div className="flex gap-2 col-span-2">
                            <div className="img relative ">
                                <img src={item.avatar} alt="" className='rounded-full' />
                                <img src={item.direction} alt="" className='absolute bottom-0 right-0' />
                            </div>
                            <div className="public-san">
                                <p className='font-semibold'>{item.desc}</p>
                                <p className='text-[#637381] text-[14px]'>{item.name}</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="public-san flex flex-col ">
                            <p>{item.date}</p>
                            <p className='text-[#637381] text-[14px]'>{item.time}</p>
                        </div>
                    </td>
                    <td>{item.amount}</td>
                    <td className={`font-semibold py-1 px-2 rounded-lg ${item.status === 'Progress' ? 'text-[#B76E00] bg-[#fff2d6]' : (item.status === 'Complete' ? 'text-[#118D57] bg-[#dcf6e5]' : (item.status === 'Failed' ? 'text-[#B71D18] bg-[#ffe4de]' : 'text-black'))}`}>
                        {item.status}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        <p className='float-right pr-[2rem] pb-5 font-semibold'>View All <FontAwesomeIcon icon={faChevronRight} className='ml-3' /></p>
      </div>
      <div className="container-shadow rounded-3xl m-6 p-6">
        <div className="flex justify-between py-7">
            <p className='font-bold poppins'>Today's Customers</p>
            <p className='font-semibold'>View All <FontAwesomeIcon icon={faChevronRight}/></p>
        </div>
        {customerData.map((item, index) => (
            <div className="flex gap-5 my-10"key={index}>
                <img src={item.avatar} className='rounded-full' alt="" />
                <div className="public-san">
                    <p className='font-semibold'>{item.name}</p>
                    <p className='text-[#637381] text-sm'>{item.email}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
