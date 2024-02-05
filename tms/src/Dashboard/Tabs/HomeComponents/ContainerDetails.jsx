import React from 'react'
import greenStock from '../../../assets/green-stock.png'
import blueStock from '../../../assets/blue-stock.png'
import orangeStock from '../../../assets/orange-stock.png'
import high from '../../../assets/high.png'
import low from '../../../assets/low.png'


const ContainerDetails = () => {
    const terminalData = [
        {
          title: 'Total Containers in Terminal',
          percentage: '+2.6%',
          value: '18,765',
          stock: greenStock
        },
        {
          title: 'Containers Loaded on Vessel',
          percentage: '+0.2%',
          value: '18,765',
          stock: blueStock
        },
        {
          title: 'Containers Discharged Today',
          percentage: '-0.1%',
          value: '678',
          stock: orangeStock
        }
      ]
  return (
    <div className="containerDetails grid grid-cols-3 ">
        {terminalData.map((item, index) => (
          <div className="container-shadow rounded-3xl p-10 m-6 flex justify-between flex-col gap-6" key={index}>
            <p className='public-san font-semibold text-lg'>{item.title}</p>
            <div className=" flex justify-between gap-5">
              <div className="flex flex-col items-center gap-2">
                <div className="percentage flex items-center">
                  <img src={high} alt="" />
                  <p className='public-san font-semibold'>{item.percentage}</p>
                </div>
                <p className='poppins font-bold text-3xl'>{item.value}</p>
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

export default ContainerDetails