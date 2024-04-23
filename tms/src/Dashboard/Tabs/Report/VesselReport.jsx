import React from 'react'

const VesselReport = () => {

    const data = [
        { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
        { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
        { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
        { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
        { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
        { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
        { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
        { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
        { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
        { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
        { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
        { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
        { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
        { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
        { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
        { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
        { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
        { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
      ];

  return (
    <div className={`moreInfo my-10 mx-5 `}>
        <div className="head flex justify-between mx-5">
            <h3 className='text-2xl font-bold'>Vessel Reports</h3>
        </div>
          <div className="table overflow-x-auto my-10">
          <table className="w-[100%] border border-collapse">
            <thead>
              <tr className="grid grid-cols-6 border border-black">
                <th className=" border bg-black text-white py-2">Vessel ID</th>
                <th className=" border bg-black text-white py-2">Shipper Name</th>
                <th className=" border bg-black text-white py-2">Shipper Address</th>
                <th className=" border bg-black text-white py-2">etd</th>
                <th className=" border bg-black text-white py-2">Status</th>
                <th className=" border bg-black text-white py-2">Total Containers</th>
              </tr>
            </thead>
            <tbody>
              {data.map((rowData, index) => (
                <tr key={index} className="grid grid-cols-6">
                  <td className="border border-black px-4 py-2">{rowData.vesselId}</td>
                  <td className="border border-black px-4 py-2">{rowData.vesselName}</td>
                  <td className="border border-black px-4 py-2">{rowData.eta}</td>       
                  <td className="border border-black px-4 py-2">{rowData.etd}</td>
                  <td className="border border-black px-4 py-2">{rowData.status}</td>
                  <td className="border border-black px-4 py-2">{rowData.totalContainers}</td>
                </tr>
              ))}
            </tbody>
          </table>

          

          <div className="flex flex-col justify-end items-end my-10">
            <button className=' text-white bg-[#4000FF] rounded-md py-1 px-10'>Print</button>
          </div>
        </div>
      </div>
  )
}

export default VesselReport