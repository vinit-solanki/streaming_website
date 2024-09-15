import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import MovieBox from '../components/MovieBox';
// import axios from 'axios';

function Home() {

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      {/* Poster */}
      <Carousel/>
      <MovieBox boxTitle={"Movies we pick for you..."} boxDesp={"Action movies here!"} initialNumOfMovies={4}/>
      <MovieBox boxTitle={"Popular movies"} boxDesp={"Binge-Worthy & Make you gossip ready!"} initialNumOfMovies={4}/>
    </div>
  );
}

export default Home;



// To fetch the complete movie details:
{/* <h1 className="text-white text-4xl mb-4">{poster.Title} ({poster.Year})</h1>
<img src={poster.Poster} alt={poster.Title} className="w-[60px] h-[60px] mb-4" />
<p className="text-white text-center max-w-lg">{poster.Plot}</p>
<p className="text-white mt-4">IMDb Rating: {poster.imdbRating}</p>
<p className="text-white mt-2">Metascore: {poster.Metascore}</p> */}


// For fetching the movie from api:
// const [poster, setPoster] = useState(null);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);

//   const movie = async () => {
//     try {
//       // Replace 'YOUR_API_KEY' with your actual OMDB API key
//       const response = await axios.get("http://www.omdbapi.com/?apikey=94221989&i=tt3896198");
      
//       setPoster(response.data); // Storing movie data in state
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     movie();
//   }, []);

//   if (loading) {
//     return <div className="text-white text-center">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-white text-center">{error}</div>;
//   }