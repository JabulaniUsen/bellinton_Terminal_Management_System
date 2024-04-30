import React, {useState} from 'react'
import Select from 'react-select';
import ViewAssignmentContainer from './ViewAssignmentContainer';
import YardDensity from './YardDensity';

const AssignContainer = () => {

    const [viewAssignment, setViewAssignment] = useState(false)
    const [viewYardDensity, setViewYardDensity] = useState(false);

    const options2 = [
        { value: '', label: 'Enter the container ID or select from a list of available containers', isDisabled: true },
        { value: '0012345', label: 'CON12345' },
        { value: '0014534', label: 'CON14534' },
        { value: '0024565', label: 'CON24565' },
        { value: '0030923', label: 'CON30923' },
      ];

      const handleViewAssignment = () => {
        setViewAssignment(true)
      }
  return (
    <div>
        { !viewAssignment && !viewYardDensity ? (
            <div className="my-10 mx-5">
            <div className="header">
                <h2 className='text-3xl font-bold'>Assign Container to Yard Area</h2>
            </div>
            <div className="mt-10">
          <form>
            <div className="flex justify-between items-center w-[60%] my-5">
              <label htmlFor="YardMgtUser" className="block font-semibold text-base">Yard Mgt. User:</label>
              <input type='text' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="YardMgtUser" name="YardMgtUser" />
            </div>

            <div className="flex justify-between items-center w-[60%] my-5">
              <label htmlFor="containerWidth" className="block font-semibold text-base">Container ID: </label>
              <Select
                options={options2}
                isSearchable
                className='w-[400px]'
                required
              />
            </div>

            <div className="flex justify-between items-center w-[60%] my-5">
                <label htmlFor="YardMgtUser" className="block font-semibold text-base">Container size:</label>
                <div className="flex gap-5 items-center">
                    <div className="flex items-center gap-1">
                        <input type='checkbox' className='border-gray-400 border-[1px] rounded-lg p-2 w-5 h-5' required />
                        <label htmlFor="">20FT</label>
                    </div>
                    <div className="flex items-center gap-1">
                        <input type='checkbox' className='border-gray-400 border-[1px] rounded-lg p-2 w-5 h-5' required />
                        <label htmlFor="">40FT</label>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center w-[60%] my-5">
              <label htmlFor="destination" className="block font-semibold text-base">Destination: </label>
              <input type='text' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' placeholder='Enter the destination or Yard Area ' required id="destination" name="destination" />
            </div>

            <div className="pickStackLevelAndposition">
                <h3 className='text-lg font-bold'>Pick Stack Level & Position</h3>
                <div className="flex items-center my-10">
                    <div className="flex items-center gap-10">
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
                                <p className='bg-[#d9d9d9] font-semibold p-2 w-[30px] text-center rounded'>4</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex flex-col">
                                <div className="">
                                    <p className='text-xl text-center'>Column</p>
                                    <div className="numbers">
                                        <ul className='flex justify-around text-xl'>
                                            <li>1</li>
                                            <li>2</li>
                                            <li>3</li>
                                            <li>4</li>
                                            <li>5</li>
                                            <li>6</li>
                                            <li>7</li>
                                            <li>8</li>
                                            <li>9</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="border-black border-[1px] flex flex-col ">
                                    <div className="flex gap-3 p-3 border-black border-b-[1px]">
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                    </div>
                                    <div className="flex gap-3  p-3">
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                    </div>
                                    <div className="flex gap-3 p-3 border-black border-t-[1px]">
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                        <input type="checkbox" className='w-[20px] h-[20px]' />
                                    </div>
                                </div>
                            </div>
                            <div className="numbers flex items-center">
                                <ul className='flex flex-col justify-around gap-y-5 text-xl ml-3 mt-20'>
                                    <li>A</li>
                                    <li>B</li>
                                    <li>C</li>
                                </ul>
                                <p className='text-xl -rotate-90 mt-20'>Rows</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="buttons flex w-[60%] gap-3 mx-[200px] mt-10">
              <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' type='submit' onClick={handleViewAssignment} >Assign Container</button>
              <button className='text-white bg-[#828282] rounded-md py-1 px-10 cursor-pointer'>Rest</button>
              <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' type='submit' onClick={() => setViewYardDensity(true)} >Yard Density</button>
            </div>
          </form>
        </div>
        </div>
        ) : (
            viewAssignment ? <ViewAssignmentContainer /> : <YardDensity />
        )}
    </div>
  )
}

export default AssignContainer