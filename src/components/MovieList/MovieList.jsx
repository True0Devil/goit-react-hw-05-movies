import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  // const link = useParams();
  // console.log(link);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={movie.id + ''}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};
