import React, { useRef } from 'react'
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';
import 'jspdf-autotable';

const ContainerReport = () => {
    const data = [
        { containerId: '72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details', type: 'Dry', customerName: 'ABC Shipping'},
        { containerId: '27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details', type: 'Refregirated', customerName: 'ABC Shipping'},
        { containerId: '72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details', type: 'Dry', customerName: 'ABC Shipping'},
        { containerId: '27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details', type: 'Refregirated', customerName: 'ABC Shipping'},
        { containerId: '72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details', type: 'Dry', customerName: 'ABC Shipping'},
        { containerId: '27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details', type: 'Refregirated', customerName: 'ABC Shipping'},
        { containerId: '72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details', type: 'Dry', customerName: 'ABC Shipping'},
        { containerId: '27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details', type: 'Refregirated', customerName: 'ABC Shipping'},
      ];

      const componentRef = useRef();

      const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
    

  return (
    <>
    <div className={`moreInfo my-10 mx-5`} ref={componentRef}>
        <div className="head flex justify-between mx-5">
            <h3 className='text-2xl font-bold'>Container Reports</h3>
        </div>
          <div className="table overflow-x-auto my-10">
          <table className="w-[100%] border border-collapse">
            <thead>
              <tr className="grid grid-cols-7 border border-black">
                <th className=" border bg-black text-white px-2 py-2">Container ID</th>
                <th className=" border bg-black text-white px-2 py-2">Status</th>
                <th className=" border bg-black text-white px-2 py-2">eta</th>
                <th className=" border bg-black text-white px-2 py-2">etd</th>
                <th className=" border bg-black text-white px-2 py-2">Type</th>
                <th className=" border bg-black text-white px-2 py-2">Vessel Name</th>
                <th className=" border bg-black text-white px-2 py-2">Customer Name</th>
                {/* <th className=" border bg-black text-white py-2">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {data.map((rowData, index) => (
              <tr key={index} className="grid grid-cols-7">
                <td className="border border-black px-2 py-2">{rowData.containerId}</td>
                <td className="border border-black px-2 py-2">{rowData.status}</td>
                <td className="border border-black px-2 py-2">{rowData.eta}</td>       
                <td className="border border-black px-2 py-2">{rowData.etd}</td>
                <td className="border border-black px-2 py-2">{rowData.type}</td>
                <td className="border border-black px-2 py-2">{rowData.vesselName}</td>
                <td className="border border-black px-2 py-2">{rowData.customerName}</td>
                {/* <td className="border border-black px-2 py-2" ><button onClick={() => showVesselDetails(rowData.containerId)} className="underline">[ {rowData.action} ]</button></td> */}
                </tr>
              ))}
            </tbody>
          </table>

          

        </div>
      </div>
    <div className="flex flex-col justify-center items-center my-10">
        <button className=' text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={handlePrint}>Print</button>
    </div>
    </>
  )
}

export default ContainerReport