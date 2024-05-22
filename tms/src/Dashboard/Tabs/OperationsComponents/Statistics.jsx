import React from 'react'
import greenStock from '../../../assets/green-stock2.png'
import blueStock from '../../../assets/blue-stock2.png'
import orangeStock from '../../../assets/orange-stock2.png'
import high from '../../../assets/high2.png'
import low from '../../../assets/low2.png'

const Statistics = () => {
    const terminalData = [
        {
          title: 'Products Sold',
          percentage: '+0.0%',
          value: '0',
          stock: greenStock
        },
        {
          title: 'Total Balance',
          percentage: '0.0%',
          value: '0',
          stock: blueStock
        },
        {
          title: 'Sales Profit',
          percentage: '0.0',
          value: '0',
          stock: orangeStock
        }
      ]
  return (
    <div className="containerDetails grid grid-cols-3 ">
        {terminalData.map((item, index) => (
          <div className="container-shadow rounded-3xl h-[182px] m-6 flex justify-center p-5 flex-col gap-6" key={index}>
            <p className='public-san font-semibold text-lg'>{item.title}</p>
            <div className=" flex justify-between gap-5">
              <div className="flex flex-col items-between gap-3">
                <p className='poppins font-bold text-3xl text-[#212B36]'>{item.value}</p>
                <div className="percentage flex items-center w-">
                  <img src={high} alt="" />
                  <p className='public-san font-semibold text-sm w-[150px]'>{item.percentage} <span className='text-[#637381] text-sm '> than last week</span></p>
                </div>
              </div>
              <div className="stock">
                <img src={item.stock} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Statistics