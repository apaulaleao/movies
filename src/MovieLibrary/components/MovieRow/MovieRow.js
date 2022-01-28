import  React from 'react';
import './style.css'

export default function Movie ({title,items}) {
    return(
        <div className ="movieRow ">
             <h2 className="color" style={{color:'red'}}>{title}</h2>
             <div className = "movieRow--listarea">
                 <div className="movieRow--list">
                 {items.results.length> 0 && items.results.map((item, key)=>(
                     <div key ={key} className ="movieRow--item>">
                                    <img src ={`https:image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title}/>
                     </div>
                 ))}
            </div>
                 </div>
              
        </div>
    );
};

