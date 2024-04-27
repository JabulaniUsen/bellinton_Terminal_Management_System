import React, { useRef } from 'react'
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';
import 'jspdf-autotable';

const ManifestReport = () => {
    const data = [
      { cargoId: 'CON73872', shipperName: 'ABC Shipping', shipperAddress: '123 Main St.', weight: 50, consigneeName: 'XYZ Company', status: 'Pending', consigneeAddress: '456 Elm St', sealNo: '20', packageQty: '20' },
      { cargoId: 'CON16273', shipperName: 'DEF Logistics', shipperAddress: '789 Oak St.', weight: 30, consigneeName: 'LMN Corporation', status: 'In transit', consigneeAddress: '101 Pine St.', sealNo: '14', packageQty: '20' },
      ];

      const componentRef = useRef();

      const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

      const exportAsPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
          head: [Object.keys(data[0])],
          body: data.map((row) => Object.values(row)),
        });
        doc.save('manifest_report.pdf');
      };
    
      const exportAsCSV = () => {
        const csvContent =
          'data:text/csv;charset=utf-8,' +
          data.map((row) => Object.values(row).join(',')).join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'manifest_report.csv');
        document.body.appendChild(link);
        link.click();
      };
    

  return (
    <>
    <div className={`moreInfo my-10 mx-5 text-sm`} ref={componentRef}>
        <div className="head flex justify-between mx-5">
            <h3 className='text-2xl font-bold'>Manifest Reports</h3>
        </div>
          <div className="table overflow-x-auto my-10">
          <table className=" border border-collapse">
            <thead>
              <tr className=" border border-black">
                <th className=" border bg-black text-white py-2 px-2">Cargo ID</th>
                <th className=" border bg-black text-white py-2 px-2">Shipper Name</th>
                <th className=" border bg-black text-white py-2 px-2">Shipper Address</th>
                <th className=" border bg-black text-white py-2 px-2">Weight</th>
                <th className=" border bg-black text-white py-2 px-2">Consignee Name</th>
                <th className=" border bg-black text-white py-2 px-2">Consignee Address</th>
                <th className=" border bg-black text-white py-2 px-2">Seal No.</th>
                <th className=" border bg-black text-white py-2 px-2">Package Qty</th>
                <th className=" border bg-black text-white py-2 px-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((rowData, index) => (
              <tr key={index} className=" text-center">
                <td className="border border-black px-4 py-2">{rowData.cargoId}</td>
                <td className="border border-black px-4 py-2">{rowData.shipperName}</td>
                <td className="border border-black px-4 py-2">{rowData.shipperAddress}</td>
                <td className="border border-black px-4 py-2">{rowData.weight}</td>
                <td className="border border-black px-4 py-2">{rowData.consigneeName}</td>
                <td className="border border-black px-4 py-2">{rowData.consigneeAddress}</td>
                <td className="border border-black px-4 py-2">{rowData.packageQty}</td>
                <td className="border border-black px-4 py-2">{rowData.sealNo}</td>
                <td className="border border-black px-4 py-2">{rowData.status}</td>
              </tr>
              ))}
            </tbody>
          </table>

          

        </div>
      </div>
      <div className="flex gap-5 justify-center items-center my-10">
        <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={handlePrint}>Print</button>
        <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={exportAsCSV}>Export as CSV</button>
        <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={exportAsPDF}>Export as PDF</button>
      </div>
    </>
  )
}

export default ManifestReport