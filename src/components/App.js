import React from 'react';
import '../main.css';
import MovieList from './movieList.jsx';
import Search from './search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      filteredMovies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      title: ''

    }
    this.updateSearch=this.updateSearch.bind(this);
    this.onClick=this.onClick.bind(this);
  }

  updateSearch(event) {
  this.setState({
    title: event.target.value,

  })

  }
  onClick() {
    var filter = this.state.movies.filter((movie) => {
      if (movie.title.includes(this.state.title)) {
        return true;

      }
    })
    this.setState({
      filteredMovies: filter,
    })
  }


  render(){
    return(
    <div>

      <div className="title">
       <h1> Movie List!</h1>
      </div>

      <div className='addMovie'>
        <input></input>
        <button className='addbtn'>Add</button>
      </div>

      <div className='search'>
      <div className="searchBar">
      <input onChange={this.updateSearch}></input>
      <button className="searchBtn" onClick={this.onClick}>Search</button>
      </div>
      </div>

      <div className="moviesListed">
       {this.state.filteredMovies.map((movie) =>  <div className="moviesListed"> {movie.title}</div>)}
      </div>

    </div>
  )}
}
// this.state.movies

export default App;
