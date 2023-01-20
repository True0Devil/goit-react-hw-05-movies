import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/tmdb.service';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const SingleMovie = () => {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    fetchMovieById(movieID).then(setMovie);
  }, [movieID]);

  if (!movie) {
    return;
  }

  console.log(movie);

  return (
    <main>
      <Link to={location.state?.from ?? '/movies'}>Back</Link>

      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt=""
      />
      <h1>
        {movie.title} ({movie.release_date?.slice(0, 4)})
      </h1>
      <p>User Score: {movie.vote_average * 10}%</p>

      <h2>Overview</h2>
      <p>{movie.overview}</p>

      <h3>Genres</h3>
      <ul>
        {movie.genres?.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>

      <section>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>

        <Outlet />
      </section>
    </main>
  );
};
