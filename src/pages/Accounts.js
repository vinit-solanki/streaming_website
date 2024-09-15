import React from 'react';
import { FaUserEdit, FaUsersCog, FaTrash } from 'react-icons/fa';
import ProfileCard from '../components/ProfileCard';

function Accounts({ numOfProfiles = 1 }) {
  const profiles = ["Jon Snow", "Tyrion Lannister", "Geralt of Rivia", "Lucifer Morningstar"];

  return (
    <div className='w-full min-h-screen flex flex-col justify-evenly items-center align-center'>
      
      <div className='w-full flex flex-row justify-around gap-x-4 items-center'>
        {/* Manage Profiles Button */}
        <button className='flex items-center p-5 bg-white bg-opacity-30 rounded-lg hover:bg-red-600 transition-all duration-300 text-white font-bold'>
          <FaUsersCog className='mr-3 text-xl' /> {/* Manage Profiles Icon */}
          Manage Profiles
        </button>

        {/* Edit Profile Button */}
        <button className='flex items-center p-5 bg-white bg-opacity-30 rounded-lg hover:bg-red-600 transition-all duration-300 text-white font-bold'>
          <FaUserEdit className='mr-3 text-xl' /> {/* Edit Profile Icon */}
          Edit Profile
        </button>
      </div>

      <div className='flex flex-wrap justify-center items-center gap-4 mt-8 w-full'>
        {profiles.map((profile, index) => (
          <ProfileCard key={index} profileIndex={index + 1} profileName={profile} />
        ))}
      </div>

      <div className='w-full flex flex-row justify-center items-center'>
      <button className='flex items-center text-lg p-5 bg-red-600 bg-opacity-80 rounded-lg hover:bg-red-700 transition-all duration-300 text-white font-bold'>
      <FaTrash className='mr-3 text-xl' /> {/* Remove Profile Icon */}
      Remove Profile
      </button>
      </div>
    </div>
  );
}

export default Accounts;
