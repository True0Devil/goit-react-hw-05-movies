import Loader from 'components/Loader/Loader';
import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';

import { fetchMovieById } from 'services/tmdb.service';

const SingleMovie = () => {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();
  const location = useLocation();


  useEffect(() => {
    fetchMovieById(movieID).then(setMovie);
  }, [movieID]);

  if (!movie) {
    return;
  }

  return (
    <main>
      <button className="d-block p-0 border-0 ms-3 mb-4" type="button">
        <Link
          to={location.state?.from ?? '/'}
          className="btn btn-primary py-2 px-3"
        >
          Back
        </Link>
      </button>

      <section className="d-flex ms-3 mb-4">
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt=""
        />
        <div className="ms-5">
          <h1>
            {movie.title} ({movie.release_date?.slice(0, 4)})
          </h1>
          <p>
            User Score: <b>{(movie.vote_average * 10).toFixed(1)}%</b>
          </p>

          <h2>Overview</h2>
          <p>{movie.overview}</p>

          <h3>Genres</h3>
          <ul className="list-group flex-row p-0">
            {movie.genres?.map(genre => (
              <li key={genre.id} className="list-group-item border-0 ps-0">
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ms-4">
        <h4>Additional information</h4>
        <ul className="list-group">
          <li className="list-group-item border-0 ps-0 fs-4">
            <Link
              to="cast"
              className="text-decoration-none"
              state={{ from: location.state?.from }}
            >
              Cast
            </Link>
          </li>
          <li className="list-group-item border-0 ps-0 fs-4">
            <Link
              to="reviews"
              className="text-decoration-none"
              state={{ from: location.state?.from }}
            >
              Reviews
            </Link>
          </li>
        </ul>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
};

export default SingleMovie;
