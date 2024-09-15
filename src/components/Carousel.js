import React, { useState, useEffect } from 'react';
import data from '../assets/homePosters.json'; 

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const posters = Object.values(data); // Convert object to array

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + posters.length) % posters.length
    );
  };

//   useEffect(() => {
//     // Set up autoplay
//     const intervalId = setInterval(handleNext, 5000); // Change slide every 3 seconds

//     // Clean up interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

  return (
    <div className='relative w-full max-h-[500px] overflow-hidden border-b-2'>
      <button
        onClick={handlePrev}
        className='absolute rounded-lg p-3 py-5 flex items-center justify-center top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white font-bold text-2xl z-10'
      >
        &lt;
      </button>
      <div className='w-full h-full flex items-center justify-center'>
        <img
          src={posters[currentIndex].img}
          alt={posters[currentIndex].name}
          className='w-full object-cover'
        />
      </div>
      <button
        onClick={handleNext}
        className='absolute rounded-lg p-3 py-5 flex items-center justify-center top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white font-bold text-2xl z-10'
      >
        &gt;
      </button>
      <div className='absolute bottom-4 right-4 bg-black bg-opacity-80 px-6 py-4 rounded-lg shadow-xl z-20'>
        <div className='flex gap-x-5 justify-center items-center'>
          <h2 className='text-white text-xl font-bold'>{posters[currentIndex].name}</h2>
          <span className='text-white'>{posters[currentIndex].genre}</span>
        </div>
        <div className='flex gap-x-2 justify-between items-center mt-2'>
          <p className='text-gray-400 text-center'>{posters[currentIndex].descp}</p>
          <button className='bg-white px-2 py-1 rounded-lg text-black'>Play Now</button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
