import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css';
import Movie from './Movie';
import moviesData from './movies.json';

function App() {
  const [movies, setMovies] = useState(moviesData);

  const deleteMovie = (title) => {
    setMovies(movies.filter((movie) => movie.movieName !== title));
  };

  return (
    <div className="App">
      <div className="Movies row row-cols-sm-1 row-cols-lg-3"> 
        {movies.map((movie) => (
          <Movie key={movie.movieName} movie={movie} onDelete={deleteMovie} />
        ))}
      </div>
    </div>
  );
}

export default App;