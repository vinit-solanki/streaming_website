import React from 'react';
import { FaMale, FaFemale } from 'react-icons/fa';

function Settings({ gender = "male", name = "Vinit" }) {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center p-6'>
      {/* User Profile Section */}
      <div className='flex flex-col justify-center items-center mb-6'>
        <div className='h-24 w-24 mb-4 bg-red-200 rounded-full flex justify-center items-center md:flex'>
          {gender === "male" ? (
            <FaMale className='text-blue-600 text-4xl sm:text-5xl' /> // Male icon
          ) : (
            <FaFemale className='text-pink-600 text-4xl sm:text-5xl' /> // Female icon
          )}
        </div>
        <h2 className='text-3xl sm:text-4xl text-gray-200'>Hello, {name}</h2>
        <button className="text-blue-500 hover:underline mt-2">Change Avatar</button> {/* Change Avatar Button */}
      </div>

      {/* Main grid layout */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full sm:w-3/4'>
        {/* Subscription Section */}
        <div className='bg-white bg-opacity-10 p-4 rounded-lg'>
          <h3 className='text-2xl mb-2'>Subscription</h3>
          <p>Current Plan: <span className="font-bold">Premium</span></p>
          <p>Next Billing: <span className="font-bold">Sep 30, 2024</span></p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Manage Subscription</button>
        </div>

        {/* Security Section */}
        <div className='bg-white bg-opacity-10 p-4 rounded-lg'>
          <h3 className='text-2xl mb-2'>Security</h3>
          <div className='flex flex-wrap gap-x-4'>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Change Password</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Enable Two-Factor Authentication</button>
          </div>
        </div>

        {/* Notification Preferences Section */}
        <div className='bg-white bg-opacity-10 p-4 rounded-lg'>
          <h3 className='text-2xl mb-2'>Notification Preferences</h3>
          <label>
            <input type="checkbox" /> Email Notifications
          </label>
          <label className="ml-4">
            <input type="checkbox" /> SMS Notifications
          </label>
          <label className="ml-4">
            <input type="checkbox" /> App Notifications
          </label>
        </div>

        {/* Watch History & Preferences Section */}
        <div className='bg-white bg-opacity-10 p-4 rounded-lg'>
          <h3 className='text-2xl mb-2'>Watch History & Preferences</h3>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Clear Watch History</button>
        </div>

        {/* Language & Playback Settings Section */}
        <div className='bg-white bg-opacity-10 p-4 rounded-lg'>
          <h3 className='text-2xl mb-2'>Language & Playback</h3>
          <label>Preferred Language:</label>
          <select className='m-2 p-2 rounded-lg bg-black bg-opacity-30'>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            {/* Add more languages */}
          </select>
          <div className='mt-4'>
            <label>
              <input type="checkbox" /> Autoplay Next Episode
            </label>
          </div>
        </div>

        {/* Parental Controls Section */}
        <div className='bg-white bg-opacity-10 p-4 rounded-lg'>
          <h3 className='text-2xl mb-2'>Parental Controls</h3>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Manage Parental Controls</button>
        </div>

        {/* Account Section */}
        <div className='bg-white bg-opacity-10 p-4 rounded-lg'>
          <h3 className='text-2xl mb-2'>Account</h3>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Deactivate Account</button>
        </div>

        {/* Theme Customization */}
        <div className='bg-white bg-opacity-10 p-4 rounded-lg'>
          <h3 className='text-2xl mb-2'>Theme</h3>
          <label>
            <input type="radio" name="theme" value="light" /> Light Mode
          </label>
          <label className="ml-4">
            <input type="radio" name="theme" value="dark" /> Dark Mode
          </label>
        </div>
      </div>
    </div>
  );
}

export default Settings;
