import { Link, useLocation } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';

export const MovieList = ({ movies, search }) => {
  // const link = useParams();
  // console.log(link);

  // console.log(search.get('search'))
  const location = useLocation();
  console.log(location);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={movie.id + ''} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
