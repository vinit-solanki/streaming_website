import React from 'react'

function ProfileCard({ profileName = "Profile", profileIndex }) {
  const profileAvatars = {
    1: "female_avatar.png",
    2: "man_avatar.png",
    3: "man_avatar1.png",
    4: "female_avatar1.png"
  };

  return (
    <div className='flex flex-col m-4 items-center px-6 py-8 bg-white bg-opacity-20 rounded-xl shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 cursor-pointer'>
      {/* Dynamic import for the image */}
      <img 
        src={require(`../assets/${profileAvatars[profileIndex]}`)} 
        alt={profileName} 
        className='h-40 w-40 object-cover rounded-full border-2 border-gray-200 shadow-inner mb-4'
      />
      <p className='text-lg font-semibold text-white text-center'>{profileName}</p>
    </div>
  );
}

export default ProfileCard;
