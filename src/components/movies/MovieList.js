/* third party */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios(`http://localhost:4000/movies`);
      await setMovies(result.data.movies);
      setLoaded(true);
    };
    fetchMovies();
  }, []);

  return (
    <>
      {!loaded ? (
        <div className="row">
          <p>Loading...</p>
        </div>
      ) : (

          //error disini aja
        <div className='row'>
          {movies.map((movie, index) => (
            <div className='col-sm-4 mb-2' key={index}>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>{movie.title}</h5>
                  <p className='card-text'>With supporting text below as a natural lead-in to additional content</p>
                  <Link to={`/movies/${movie.id}`} className='btn btn-primary'>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MovieList;