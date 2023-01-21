import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { fetchTrendingMovies } from 'services/tmdb.service';

const Home = () => {
  const [trending, setTrending] = useState();
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies().then(setTrending);
  }, []);

  if (!trending) {
    return;
  }

  return (
    <main>
      <ul>
        {trending.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
