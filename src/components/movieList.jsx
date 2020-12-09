import React from 'react';
// import '../main.css';
import MovieListItem from './movieListItem.jsx';

var MovieList = function(props) {
  return (
 <div>
{props.movies.map((movieTitle) => <MovieListItem theTitle={movieTitle}/>)}
 </div>
  )
}




export default MovieList;