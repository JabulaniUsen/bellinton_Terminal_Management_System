import React, { useState } from 'react'
import Select from 'react-select';

const ViewAssignmentContainer = () => {

    const [viewDensity, setViewDensity] = useState(false)
    
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

      const containerSize = [
        { value: '', label: 'Select container size', isDisabled: true },
        { value: '20FT', label: '20FT' },
        { value: '30FT', label: '30FT' },
      ];

  return (
    <div>
        <div className="m-10">
            <div className="header">
                <h2 className='text-3xl font-bold'>View Assigned Containers</h2>
            </div>
            <div className="mt-10">
                <form className='flex flex-col'>
                    <div className="">
                        <div className="flex justify-between items-center w-[60%] my-3">
                            <label htmlFor="containerWidth" className="block font-semibold text-base">Date Range: </label>
                            <div className="flex items-center gap-5">
                            <input type="date" className='border-gray-400 border-[1px] rounded-lg p-2 w-[170px]' />
                            <p>To</p>
                            <input type="date" className='border-gray-400 border-[1px] rounded-lg p-2 w-[170px]' />
                            </div>
                        </div>
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
                            <label htmlFor="containerWidth" className="block font-semibold text-base">Container Size: </label>
                            <Select
                                options={containerSize}
                                isSearchable
                                className='w-[400px]'
                                required
                            />
                        </div>
                    </div>
                    <div className="m-auto my-10">
                        <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' >Apply Filter</button>
                    </div>
                </form>
                
                <table className="mt-8 w-[90%] border-collapse border border-gray-800">
                <thead>
                    <tr className="font-semibold">
                        <th className="border-[#000] border px-4 py-1"></th>
                        <th className="border-[#000] border  bg-[#82d4b8] m-3 text-[#005236] px-4 py-1">Tier 1 (Bottom)</th>
                        <th className="border-[#000] border  bg-[#ffd275] m-3 px-4 py-1">Tier 2 (2nd Level)</th>
                        <th className="border-[#000] border  bg-[#80a3ff] m-3 px-4 py-1">Tier 3 (3rd Level)</th>
                        <th className="border-[#000] border  bg-[#ff8080] m-3 px-4 py-1">Tier 4 (4th Level)</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr className="hover:bg-[#dbbfff] hover:text-[#351959] font-semibold ">
                        <td className=" border-[#000] border-r px-4 py-1 text-center">A</td>
                        <td className=" px-4 py-1 border-[#000] border-r">CN1</td>
                        <td className=" px-4 py-1 border-[#000] border-r">CN5</td>
                        <td className=" px-4 py-1 border-[#000] border-r">CN9</td>
                        <td className=" px-4 py-1 border-[#000] border-r">CN9</td>
                    </tr>
                    <tr className="hover:bg-[#dbbfff] hover:text-[#351959] font-semibold">
                        <td className="px-4 py-1 border-[#000] border-r text-center">B</td>
                        <td className="px-4 py-1 border-[#000] border-r">CN2</td>
                        <td className="px-4 py-1 border-[#000] border-r">CN6</td>
                        <td className="px-4 py-1 border-[#000] border-r">CN10, CN14</td>
                        <td className="px-4 py-1 border-[#000] border-r">CN10, CN14</td>
                    </tr>
                    <tr className="hover:bg-[#dbbfff] hover:text-[#351959] font-semibold">
                        <td className="px-4 py-1 border-[#000] border-r text-center">C</td>
                        <td className="px-4 py-1 border-[#000] border-r">CN3</td>
                        <td className="px-4 py-1 border-[#000] border-r">CN7</td>
                        <td className="px-4 py-1 border-[#000] border-r">CN11, CN15</td>
                        <td className="px-4 py-1 border-[#000] border-r">CN11, CN15</td>
                    </tr>
                    <tr className="hover:bg-[#dbbfff] hover:text-[#351959] font-semibold">
                        <td className="px-4 py-1 border-[#000] border-r text-center">D</td>
                        <td className="px-4 py-1 border-[#000] border-r">CN4</td>
                        <td className="px-4 py-1 border-[#000] border-r">CN8</td>
                        <td className="px-4 py-1 border-[#000] border-r">CN12, CN16</td>
                        <td className="px-4 py-1 border-[#000] border-r">CN12, CM16</td>
                    </tr>
                </tbody>

                </table>
            </div>
            <div className="flex items-center gap-32">
                <div className="mt-10">
                    <ul>
                        <li>Green - 2tier (Bottom of the stack)</li>
                        <li>Yellow - 2tier (2nd level of the stack)</li>
                        <li>Blue - 3tier (3rd level of the stack)</li>
                        <li>Red - 4tier (Top of the stack)</li>
                    </ul>
                </div>
                <div className="flex items-center gap-2 mt-12">
                    <div className="a-1 flex flex-col gap-2">
                        <p className='bg-[#d9d9d9] font-semibold p-2 w-[30px] text-center rounded'>A</p>
                        <span className='bg-[#00A76F] w-[30px] h-[35px] rounded'></span>
                        <p className='bg-[#d9d9d9] font-semibold p-2 w-[30px] text-center rounded'>1</p>
                    </div>
                    <div className="a-1 flex flex-col gap-2">
                        <p className='bg-[#d9d9d9] font-semibold p-2 w-[30px] text-center rounded'>B</p>
                        <span className='bg-[#FFAB00] w-[30px] h-[35px] rounded'></span>
                        <p className='bg-[#d9d9d9] font-semibold p-2 w-[30px] text-center rounded'>2</p>
                    </div>
                    <div className="a-1 flex flex-col gap-2">
                        <p className='bg-[#d9d9d9] font-semibold p-2 w-[30px] text-center rounded'>C</p>
                        <span className='bg-[#0047FF] w-[30px] h-[35px] rounded'></span>
                        <p className='bg-[#d9d9d9] font-semibold p-2 w-[30px] text-center rounded'>3</p>
                    </div>
                    <div className="a-1 flex flex-col gap-2">
                        <p className='bg-[#d9d9d9] font-semibold p-2 w-[30px] text-center rounded'>D</p>
                        <span className='bg-[#FF2B2B] w-[30px] h-[35px] rounded'></span>
                        <p className='bg-[#d9d9d9] font-semibold p-2 w-[30px] text-center rounded'>3</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAssignmentContainer;