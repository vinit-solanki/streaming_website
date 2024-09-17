import React, { useState } from 'react';
import { FaUserEdit, FaUsersCog, FaTrash } from 'react-icons/fa';
import ProfileCard from '../components/ProfileCard';

function Accounts({ numOfProfiles = 1 }) {
  const profiles = ["Jon Snow", "Tyrion Lannister", "Geralt of Rivia", "Lucifer Morningstar"];
  const [selectedProfile, setSelectedProfile] = useState(null); // Keep track of the selected profile

  const handleProfileSelect = (profileIndex) => {
    // Set the selected profile to the clicked one, or deselect if it's the same profile
    setSelectedProfile((prevSelected) => (prevSelected === profileIndex ? null : profileIndex));
  };

  const handleRemoveProfile = () => {
    if (selectedProfile !== null) {
      const profileName = profiles[selectedProfile - 1];
      if (window.confirm(`Are you sure you want to delete: ${profileName}?`)) {
        // Implement the delete logic here
        console.log(`Deleting profile: ${profileName}`);
      }
    } else {
      alert("No profile selected for deletion.");
    }
  };

  return (
    <div className='w-full min-h-screen flex flex-col justify-evenly items-center align-center'>
      
      <div className='w-full flex flex-row justify-around gap-x-4 items-center'>
        {/* Manage Profiles Button */}
        <button className='flex items-center p-5 bg-white bg-opacity-20 rounded-lg hover:bg-red-600 transition-all duration-300 text-white font-bold'>
          <FaUsersCog className='mr-3 text-xl' /> {/* Manage Profiles Icon */}
          Manage Profiles
        </button>

        {/* Edit Profile Button */}
        <button className='flex items-center p-5 bg-white bg-opacity-20 rounded-lg hover:bg-red-600 transition-all duration-300 text-white font-bold'>
          <FaUserEdit className='mr-3 text-xl' /> {/* Edit Profile Icon */}
          Edit Profile
        </button>
      </div>

      <div className='flex flex-wrap justify-center items-center gap-4 mt-8 w-full'>
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            profileIndex={index + 1}
            profileName={profile}
            onSelect={handleProfileSelect}
            isSelected={selectedProfile === index + 1} // Only one profile can be selected
          />
        ))}
      </div>

      <div className='w-full flex flex-col justify-center items-center'>
        <button
          onClick={handleRemoveProfile}
          className='flex items-center text-lg p-5 bg-red-600 rounded-lg hover:bg-red-700 transition-all duration-300 text-white font-bold'
        >
          <FaTrash className='mr-3 text-xl' /> {/* Remove Profile Icon */}
          Remove Profile
        </button>
        <p className='mt-4 text-gray-100 bg-white bg-opacity-10 p-2 rounded-lg'>
          Click on the profile to select and unselect.
        </p>
      </div>
    </div>
  );
}

export default Accounts;
