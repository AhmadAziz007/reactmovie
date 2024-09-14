/* thrid party */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const GenreList = () => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    setGenres([
      { id: 1, genre_name: 'Action' },
      { id: 2, genre_name: 'Comedy' },
      { id: 3, genre_name: 'Crime' }
    ]);
  }, [])

  return (
    <div className="row">
      {genres.map((genre, index) => (
        <div class="col-sm-2 mb-3">
          <div className="card" key={index}>
            <div className="card-body text-center">
              <Link to={`/genre/${genre.id}`}>{genre.genre_name}</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GenreList