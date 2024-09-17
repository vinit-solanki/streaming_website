import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function MovieListPage() {
  const location = useLocation();
  const { posters, boxTitle } = location.state;
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full h-min-screen text-white flex flex-col gap-y-6 px-6 py-8 bg-black">
      {/* Box Title */}
      <h2 className="text-2xl text-center mb-6 font-semibold">{boxTitle}</h2>

      {/* Grid layout for posters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {posters.map((poster, index) => (
          <div key={index} className="flex flex-col items-center p-4 rounded-lg">
            {/* Poster Container */}
            <div className="w-[250px] flex flex-col items-center">
              {/* Poster Image */}
              <img
                src={poster.Poster}
                alt={poster.Title}
                className="w-[250px] h-[350px] rounded-md shadow-lg"
              />
              {/* Movie Title */}
              <p className="text-center w-full p-2 rounded text-sm text-gray-300 mt-2">
                {poster.Title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieListPage;
