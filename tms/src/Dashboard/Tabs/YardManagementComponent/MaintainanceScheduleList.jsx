import React, { useState } from 'react';

const MaintainanceScheduleList = () => {
    
    const data = [
        { equipmentId: 'EQ001', maintenanceType: 'Routine Inspection', maintenanceDate: '2024-04-10', maintainenanceDesc: 'Quarterly inspection', technician: 'John Doe' },
        { equipmentId: 'EQ002', maintenanceType: 'Repair', maintenanceDate: '2024-04-10', maintainenanceDesc: 'Replace broken part', technician: 'John Doe' },
        { equipmentId: 'EQ003', maintenanceType: 'Servicing', maintenanceDate: '2024-04-10', maintainenanceDesc: 'Oil change', technician: 'John Doe' },
    ]


  return (
    <div className="">
        <div className="">
            <div className="table overflow-x-auto my-10 ">
              <table className="border-collapse border border-gray-800">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-800 px-3 py-2">Equipment ID</th>
                    <th className="border border-gray-800 px-3 py-2">Maintenance Type</th>
                    <th className="border border-gray-800 px-3 py-2">Maintenance Date</th>
                    <th className="border border-gray-800 px-3 py-2">Maintenance Description</th>
                    <th className="border border-gray-800 px-3 py-2">Technician</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((rowData, index) => (
                    <tr key={index} className="">
                      <td className="border border-gray-800 px-3 py-2">{rowData.equipmentId}</td>
                      <td className="border border-gray-800 px-3 py-2">{rowData.maintenanceType}</td>
                      <td className="border border-gray-800 px-3 py-2">{rowData.maintenanceDate}</td>
                      <td className="border border-gray-800 px-3 py-2">{rowData.maintainenanceDesc}</td>
                      <td className="border border-gray-800 px-3 py-2">{rowData.technician}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
  
              <button className='text-white bg-[#4000FF] rounded-md py-1 px-10 m-16 mx-[200px]'>Edit</button>
              <button className='text-white bg-[#4000FF] rounded-md py-1 px-10 m-16 mx-[200px]'>Delete</button>
              <button className='text-white bg-[#000] rounded-md py-1 px-10 m-16 mx-[200px]'>Export</button>
            </div>
        </div>
    </div>
  );
}

export default MaintainanceScheduleList;
