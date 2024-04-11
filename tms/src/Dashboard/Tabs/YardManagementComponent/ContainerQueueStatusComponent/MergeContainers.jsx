import React from 'react'

const MergeContainers = () => {
    const data = [
        { mergeDestination: 'Port A', assignedTruck: 'TRK782', assignedDriver: 'John Smith', notes: 'Electronic'},
        { mergeDestination: 'Port B', assignedTruck: 'TRK782', assignedDriver: 'Emily Johnson', notes: 'Automotive Parts'},
        { mergeDestination: 'Port C', assignedTruck: 'TRK782', assignedDriver: 'Sarah Lee', notes: 'Chemicals'},
      ];
    
      return (
        <div className='poppins'>
            <div className=''>
            <h2 className='font-semibold mb-2'>In bound Gate Entry</h2>
            <table className='border-collapse border border-gray-800 '>
              <thead>
                <tr className='bg-gray-200'>
                  <th className='border border-gray-800 px-2 py-1'>mergeDestination</th>
                  <th className='border border-gray-800 px-2 py-1'>Assigned Truck</th>
                  <th className='border border-gray-800 px-2 py-1'>Driver Name</th>
                  <th className='border border-gray-800 px-2 py-1'>Notes/Instructions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className='hover:bg-[#dbbfff] hover:text-[#351959] font-semibold'>
                    <td className='border border-gray-800 px-2 py-1'>{row.mergeDestination}</td>
                    <td className='border border-gray-800 px-2 py-1'>{row.assignedTruck}</td>
                    <td className='border border-gray-800 px-2 py-1'>{row.driverName}</td>
                    <td className='border border-gray-800 px-2 py-1'>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

export default MergeContainers