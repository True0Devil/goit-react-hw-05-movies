import { useState } from 'react';
import { useEffect } from 'react';
import { fetchTrendingMovies } from 'services/tmdb.service';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trending, setTrending] = useState();
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies().then(setTrending);
  }, []);

  if (!trending) {
    return;
  }
  console.log(trending);

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
