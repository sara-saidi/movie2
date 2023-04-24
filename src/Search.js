import React from 'react';
import ReactStars from "react-rating-stars-component";
const Search = ({search}) => {
    
  return (
    <div>
      <input type='text' placeholder='search a movie' onChange={(e)=>{search(e.target.value)}}/>
      
    </div>
  );
}

export default Search;
