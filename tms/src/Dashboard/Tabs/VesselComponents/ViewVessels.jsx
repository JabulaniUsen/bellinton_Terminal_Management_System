import React from 'react';

const ViewVessels = () => {
  const data = [
    { id: 1, name: 'Vessel 1', type: 'Cargo', origin: 'Port A', destination: 'Port B', status: 'In Transit' },
    { id: 2, name: 'Vessel 2', type: 'Container', origin: 'Port C', destination: 'Port D', status: 'Awaiting Delivery' },
    // Add more data objects as needed
  ];

  const generateTable = () => {
    const rows = [];
    const rowCount = 6;
    const columnCount = 7;

    for (let i = 0; i < rowCount; i++) {
      const cells = [];
      const bgColor = i % 2 === 0 ? 'white' : 'black';
      const textColor = i % 2 === 0 ? 'black' : 'white';

      for (let j = 0; j < columnCount; j++) {
        const cellData = data[i % data.length]; // Use data in a circular manner

        let cellContent = '';
        switch (j) {
          case 0:
            cellContent = cellData.id;
            break;
          case 1:
            cellContent = cellData.name;
            break;
          case 2:
            cellContent = cellData.type;
            break;
          case 3:
            cellContent = cellData.origin;
            break;
          case 4:
            cellContent = cellData.destination;
            break;
          case 5:
            cellContent = cellData.status;
            break;
          default:
            cellContent = `Row ${i + 1}, Col ${j + 1}`;
        }

        cells.push(
          <td key={j} style={{ backgroundColor: bgColor, color: textColor, padding: '10px', borderBottom: '1px solid #ddd' }}>
            {cellContent}
          </td>
        );
      }

      rows.push(<tr key={i}>{cells}</tr>);
    }

    return rows;
  };

  return (
    <table style={{ backgroundColor: 'black', color: 'white', borderBottom: '1px solid #ddd', width: '100%' }}>
      <thead>
        <tr>
          <th>Vessel ID</th>
          <th>Vessel Name</th>
          <th>ETA</th>
          <th>ETD</th>
          <th>Status</th>
          <th>Total Containers</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{generateTable()}</tbody>
    </table>
  );
};

export default ViewVessels;
