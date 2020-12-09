import React from 'react';
import '../main.css';
import MovieList from './movieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // movies: [
      //   {title: 'Mean Girls'},
      //   {title: 'Hackers'},
      //   {title: 'The Grey'},
      //   {title: 'Sunshine'},
      //   {title: 'Ex Machina'},
      // ]

    }
  }




  render(){
    return(
    <div>
      <div className="title">
       <h1> Movie List!</h1>
      </div>
      <div className="moviesListed">
      <MovieList movies={['Mean Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina']} />
      </div>
    </div>
  )}
}
// this.state.movies

export default App;
