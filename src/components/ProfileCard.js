import React from 'react';

function ProfileCard({ profileName = "Profile", profileIndex, onSelect, isSelected }) {
  const profileAvatars = {
    1: "female_avatar.png",
    2: "man_avatar.png",
    3: "man_avatar1.png",
    4: "female_avatar1.png"
  };

  const handleSelect = () => {
    onSelect(profileIndex); // Notify the parent component of the selected profile
  };

  return (
    <div
      onClick={handleSelect}
      className={`profileCard flex flex-col m-4 items-center px-6 py-8 bg-white bg-opacity-10 rounded-xl shadow-lg hover:shadow-xl transform transition duration-300 cursor-pointer ${
        isSelected ? 'scale-105 bg-opacity-40' : ''
      }`}
    >
      {/* Dynamic import for the image */}
      <img
        src={require(`../assets/${profileAvatars[profileIndex]}`)}
        alt={profileName}
        className="h-40 w-40 object-cover rounded-full border-2 border-gray-200 shadow-inner mb-4"
      />
      <p className="text-lg font-semibold text-white text-center">{profileName}</p>
    </div>
  );
}

export default ProfileCard;
