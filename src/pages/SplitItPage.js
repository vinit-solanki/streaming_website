import React from 'react'
import { FaMale, FaFemale } from 'react-icons/fa'

function SplitItPage({ name = "Vinit", gender = "male", groupName = ["None"], recentGroups = ["No Recent Groups"] }) {
  // This map defines the min no. of members allowed according to the type of group 
  const groupMap = {
    "basic": 1,
    "pro": 3,
    "legend": 4
  };

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center px-3 py-4'>
      {/* Main Container */}
      <div className='bg-white bg-opacity-20 border-2 border-gray-600 shadow-lg rounded-lg p-8 w-full sm:w-4/5 md:w-3/4 lg:w-3/2 flex flex-wrap justify-between items-center align-center space-y-4 sm:space-y-0 sm:flex-row'>

        {/* Name and Greeting */}
        <div className='flex flex-col text-gray-400 sm:mr-4'>
          <h2 className='text-3xl sm:text-4xl'>Hello, {name}</h2>
          <p className='text-xl sm:text-2xl text-white'>Split Your Pay!</p>
        </div>

        {/* Group Name */}
        <div className='text-lg sm:text-xl font-semibold bg-black p-4 rounded-lg bg-opacity-50'>
          Your Current Group: {groupName.map((member, index) => (
            <span key={index}>{member}{index < groupName.length - 1 ? ', ' : ''}</span>
          ))}
        </div>

        {/* Gender Icon */}
        <div className='h-16 w-16 sm:h-20 sm:w-20 bg-red-200 rounded-full flex justify-center items-center hidden md:flex'>
          {gender === "male" ? (
            <FaMale className='text-blue-600 text-4xl sm:text-5xl' /> // Male icon
          ) : (
            <FaFemale className='text-pink-600 text-4xl sm:text-5xl' /> // Female icon
          )}
        </div>
      </div>

      {/* Plan and Pay Section */}
      <div className='bg-white bg-opacity-20 border-2 border-gray-600 shadow-lg rounded-lg p-8 flex flex-row w-full justify-between sm:w-4/5 md:w-3/4 lg:w-3/2 flex flex-wrap justify-between items-center align-center space-y-4 sm:space-y-0 sm:flex-row mt-5'>
        <div className='w-1/2 p-2'>
          <h2 className='text-2xl text-gray-300 sm:text-3xl'>Select Your Plan Type</h2>
          <select className='w-full mt-3 px-2 py-4 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'>
            <option value="basic">Basic . Free. 1 Member at Max.</option>
            <option value="pro">Pro . Rs.399/qtr . 3 Members at Max.</option>
            <option value="legend">Legend . Rs.499/qtr . 4 Members at Max.</option>
          </select>
        </div>
        <div className='w-1/2 p-2 flex justify-end items-center align-center pr-5 pt-5'>
          <button className='px-5 py-5 bg-green-600 bg-opacity-100 text-gray-200 rounded-lg font-bold text-xl hover:bg-black bg-opacity-30 transition-colors duration-300'>Split & Pay Now</button>
        </div>
      </div>

      {/* Recent Groups Section */}
      <div className='border-2 border-gray-600 shadow-lg rounded-lg p-8 flex flex-col w-full justify-center sm:w-4/5 md:w-3/4 lg:w-3/2 flex flex-col justify-between items-center align-center space-y-4 sm:space-y-0 sm:flex-col mt-5'>
        <div>
          <h2 className='text-2xl text-gray-300 sm:text-3xl'>Your Recent Groups</h2>
        </div>
        {/* Previous Group List */}
        <div className='w-full h-auto'>
          <ul className='w-full p-2'>
            {recentGroups.length > 0 ? (
              recentGroups.map((group, index) => (
                <li key={index} className='text-white p-3 my-2 rounded-lg shadow-md'>
                  {group}
                </li>
              ))
            ) : (
              <li className='text-white p-3 my-2 rounded-lg shadow-md'>
                No Recent Groups
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SplitItPage
