import React from 'react';
// import '../main.css';
import MovieListItem from './movieListItem.jsx';

var MovieList = function(props) {
  return (
 <div>
{props.movies.map((movie) => <MovieListItem theTitle={movie.title}/>)}
 </div>
  )
}




export default MovieList;