import React, { useEffect } from 'react';
import MovieApi from '../../../Api/MovieApi';
import {APIKey} from '../../../Api/MovieApiKey';


function Home() {

  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await MovieApi
      .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`
        );
     // .catch((err) => {
       //   console.log("Err:",err);
     //   });
        console.log("The response from API", response);
    };
    fetchMovies();
  }, []);

  return(
    <div>
    <div className="banner-img">Filmes</div>
    </div>
  );
};

export default Home;
