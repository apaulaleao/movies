import React from 'react';
import './MovieCard.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { category } from '../../Api/tmdbApi';
import apiConfig from '../../Api/apiConfig';




const MovieCard = props => {
    const item = props.item;
    const link = '/' + category[props.category] + '/' + item.id;
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (

      <Link to ={link}>
          <div className='movie-card' style={{backgroundImage:`url(${bg})`}}>
            <Button>
                <i className="bx bx-play"></i>
            </Button>
          </div>
          <h3>{item.title || item.name}</h3>
      
      </Link>

  )
   
};


export default MovieCard;
