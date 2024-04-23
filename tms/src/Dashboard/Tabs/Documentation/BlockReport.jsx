import React from 'react'

const BlockReport = ({handleBack}) => {
    const data = [
        {date: '2020-12-15', cargoId: 'MRK898978', staff: 'Adekunle', reason: 'Custom Duty not fully paid'},
        {date: '2020-12-15', cargoId: 'MRK898978', staff: 'Adekunle', reason: 'Custom Duty not fully paid'},
        {date: '2020-12-15', cargoId: 'MRK898978', staff: 'Adekunle', reason: 'Custom Duty not fully paid'},
        {date: '2020-12-15', cargoId: 'MRK898978', staff: 'Adekunle', reason: 'Custom Duty not fully paid'},
        {date: '2020-12-15', cargoId: 'MRK898978', staff: 'Adekunle', reason: 'Custom Duty not fully paid'},
        {date: '2020-12-15', cargoId: 'MRK898978', staff: 'Adekunle', reason: 'Custom Duty not fully paid'},
    ]
  return (
    <div className='m-10'>
        <h2 className="text-2xl font-bold mb-8">Cargo Blocking Report</h2>

        <div className="table">
            <table className='border-collapse border border-gray-800'>
                <thead>
                    <tr>
                        <th className='border border-gray-800 px-5 py-2'>Date</th>
                        <th className='border border-gray-800 px-5 py-2'>Cargo ID</th>
                        <th className='border border-gray-800 px-5 py-2'>Official/Staff</th>
                        <th className='border border-gray-800 px-5 py-2'>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map ((item, index) => (
                        <tr key={index}>
                            <td className='border border-gray-800 px-5 py-2'>{item.date}</td>
                            <td className='border border-gray-800 px-5 py-2'>{item.cargoId}</td>
                            <td className='border border-gray-800 px-5 py-2'>{item.staff}</td>
                            <td className='border border-gray-800 px-5 py-2'>{item.reason}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <button className=' py-2 my-8 ml-48 cursor-pointer rounded-lg bg-blue-800 text-white font-semibold w-[200px]' onClick={handleBack}>Back</button>
    </div>
  )
}

export default BlockReport