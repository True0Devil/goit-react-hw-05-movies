import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className="list-group flex-row flex-wrap">
      {movies.map(movie => (
        <li
          key={movie.id}
          className="list-group-item btn btn-primary w-50 p-0 border"
        >
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className="text-decoration-none text-black d-block  p-3"
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
}