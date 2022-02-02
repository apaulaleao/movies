import React, { useEffect, useState } from 'react';
import './Heroslide.scss';
import tmdbApi, {category, movieType} from '../../Api/tmdbApi';
import apiConfig from '../../Api/apiConfig';


const Heroslide = () => {

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
      const getMovies = async () => {
          const params = {page: 1}
          try {
              const response = await tmdbApi.getMoviesList(movieType.popular,{params});
              setMovieItems(response.results.slice(0, 4));
              console.log(response);
          } catch {
              console.log('error');
          }
        }
        getMovies();
      }, []);
        
    

  return (
  <div className = "slide">
slide 
  </div>
  )
}

export default Heroslide;
