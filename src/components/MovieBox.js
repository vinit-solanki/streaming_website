import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function MovieBox({ boxTitle, boxDesp, initialNumOfMovies = 4 }) {
  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numOfMovies, setNumOfMovies] = useState(initialNumOfMovies);
  const navigate = useNavigate(); // Initialize navigate function

  const fetchMovies = async () => {
    try {
      const response = await axios.get("https://www.omdbapi.com/?s=batman&apikey=94221989");
      setPosters(response.data.Search);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleViewMore = () => {
    // Navigate to the MovieListPage route and pass posters and boxTitle as state
    navigate('/clickedmoviebox', { state: { posters, boxTitle } });
  };

  if (loading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-white text-center">{error}</div>;
  }

  return (
    <div className='w-full h-auto text-white flex flex-col gap-y-3 px-3 py-4 bg-black mt-5'>
      <div className='w-full h-5 flex flex-row justify-around gap-x-4 items-center'>
        <h2 className='text-xl'>{boxTitle}</h2>
        <p className='text-md'>{boxDesp}</p>
      </div>
      <div className='w-full flex flex-wrap gap-4 p-2 justify-center'>
        {posters.slice(0, numOfMovies).map((poster, index) => (
          <div key={index} className='flex flex-col items-center'>
            <img
              src={poster.Poster}
              alt={poster.Title}
              className="w-[250px] h-[350px] rounded-md"
            />
          </div>
        ))}
      </div>
      <div className='w-full text-center '>
      {numOfMovies < posters.length && (
        <button 
        onClick={handleViewMore} // Navigate to the MovieListPage on click
        className='text-white px-4 py-2 rounded mt-4'>
          View More
        </button>
      )}
      </div>
    </div>
  );
}

export default MovieBox;
