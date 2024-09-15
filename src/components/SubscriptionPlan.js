// SubscriptionPlan.jsx
import React from 'react';

function SubscriptionPlan({ planTitle, planDetails, planPrice }) {
  return (
    <div className='w-full flex flex-col justify-between items-between md:w-1/3 p-6 bg-white bg-opacity-10 backdrop-blur-lg border border-gray-600 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'>
      <h2 className='text-4xl font-bold text-white mb-4'>{planTitle}</h2>
      <ul className='text-gray-300 mb-6 space-y-2'>
        {planDetails.map((detail, index) => (
          <li key={index} className='flex items-center'>
            <span className='text-green-400 mr-2'>✔</span>{detail}
          </li>
        ))}
      </ul>
      <p className='text-3xl font-semibold text-white mb-3 flex justify-start align-start items-start mt-2'>{planPrice}</p>
      <button className='w-full py-3 bg-red-600 bg-opacity-100 text-white rounded-lg font-semibold hover:bg-black bg-opacity-30 transition-colors duration-300'>
        Buy Now
      </button>
    </div>
  );
}

export default SubscriptionPlan;
