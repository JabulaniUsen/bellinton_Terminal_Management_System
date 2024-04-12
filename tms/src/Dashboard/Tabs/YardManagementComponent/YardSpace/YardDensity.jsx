import React from 'react'
import Select from 'react-select';

const YardDensity = () => {

    const dateRange = [
        { value: '', label: 'Select date range', isDisabled: true },
        { value: '2020-15-20', label: '2020-16-25' },
        { value: '2020-16-25', label: '2020-17-01' },
        { value: '2020-17-10', label: '2020-17-20' },
        { value: '2020-17-20', label: '2020-18-30' },
      ];

      const yardArea = [
        { value: '', label: 'Select yard area', isDisabled: true },
        { value: 'Yard 1', label: 'Yard 1' },
        { value: 'Yard 2', label: 'Yard 2' },
        { value: 'Yard 3', label: 'Yard 3' },
        { value: 'Yard 4', label: 'Yard 4' },
      ];

      const stackLevel = [
        { value: '', label: 'Select Stack Level', isDisabled: true },
        { value: 'Tier 1 (Bottom)', label: 'Tier 1 (Bottom)' },
        { value: 'Tier 2 (2nd level)', label: 'Tier 2 (2nd level)' },
        { value: 'Tier 3 (3rd level)', label: 'Tier 3 (3rd level)' },
        { value: 'Tier 4 (4th level)', label: 'Tier 4 (4th level)' },
      ];
  return (
    <div>
        <div className="m-10">
            <div className="header">
                <h2 className='text-3xl font-bold'>View Yard Density</h2>
            </div>
            <div className="mt-10">
                <form className='flex flex-col'>
                    <div className="">
                        <div className="flex justify-between items-center w-[60%] my-3">
                            <label htmlFor="containerWidth" className="block font-semibold text-base">Yard Area: </label>
                            <Select
                                options={yardArea}
                                isSearchable
                                className='w-[400px]'
                                required
                            />
                        </div>
                        <div className="flex justify-between items-center w-[60%] my-3">
                            <label htmlFor="containerWidth" className="block font-semibold text-base">Date Range: </label>
                            <Select
                                options={dateRange}
                                isSearchable
                                className='w-[400px]'
                                required
                            />
                        </div>
                        <div className="flex justify-between items-center w-[60%] my-3">
                            <label htmlFor="containerWidth" className="block font-semibold text-base">Stack Level: </label>
                            <Select
                                options={stackLevel}
                                isSearchable
                                className='w-[400px]'
                                required
                            />
                        </div>
                    </div>
                    <div className="m-auto my-10">
                        <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' >Apply filter</button>
                    </div>
                </form>
                
                <table className="mt-8 w-[90%] border-collapse border ">
                <thead>
                    <tr className="font-semibold">
                        <th className="bg-[#d9d9d9] px-4 py-1"></th>
                        <th className="bg-[#d9d9d9] m-3 px-2 py-2">1</th>
                        <th className="bg-[#d9d9d9] m-3 px-2 py-2">3</th>
                        <th className="bg-[#d9d9d9] m-3 px-2 py-2">5</th>
                        <th className="bg-[#d9d9d9] m-3 px-2 py-2">7</th>
                        <th className="bg-[#d9d9d9] m-3 px-2 py-2">9</th>
                        <th className="bg-[#d9d9d9] m-3 px-2 py-2">11</th>
                        <th className="bg-[#d9d9d9] m-3 px-2 py-2">13</th>
                        <th className="bg-[#d9d9d9] m-3 px-2 py-2">15</th>
                        <th className="bg-[#d9d9d9] m-3 px-2 py-2">17</th>
                        <th className="bg-[#d9d9d9] m-3 px-2 py-2">19</th>
                        <th className="bg-[#d9d9d9] m-3 px-2 py-2">21</th>
                        <th className="bg-[#d9d9d9] m-3 px-2 py-2">23</th>
                        <th className="bg-[#d9d9d9] m-3 px-2 py-2">25</th>
                        <th className="bg-[#d9d9d9] m-3 px-2 py-2">27</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr className="font-semibold ">
                        <td className=" bg-[#d9d9d9] px-4 py-1 text-center">A</td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#00A76F]"></td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#FFAB00]"></td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#FF2A2A]"></td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#FF2A2A]"></td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#FFAB00]"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                    </tr>
                    <tr className="font-semibold">
                        <td className="px-2 py-2 bg-[#d9d9d9] text-center">B</td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#FFAB00]"></td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#0047FF]"></td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#00A76F]"></td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#FF2A2A]"></td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#FFAB00]"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                    </tr>
                    <tr className="font-semibold">
                        <td className="px-2 py-2 bg-[#d9d9d9] text-center">C</td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#00A76F]"></td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#00A76F]"></td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#FFAB00]"></td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#00A76F]"></td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#00A76F]"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                    </tr>
                    <tr className="font-semibold">
                        <td className="px-2 py-2 bg-[#d9d9d9] text-center">D</td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#FF2A2A]"></td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#00A76F]"></td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#00A76F]"></td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#FF2A2A]"></td>
                        <td className=" px-4 py-1 border-[#000] border bg-[#0047FF]"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                        <td className=" px-4 py-1 border-[#000] border"></td>
                    </tr>
                </tbody>

                </table>
            </div>
        </div>
    </div>
  )
}

export default YardDensity;