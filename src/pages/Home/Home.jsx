import { useState } from 'react';
import { useEffect } from 'react';
import { fetchTrendingMovies } from 'services/tmdb.service';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trending, setTrending] = useState();

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
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
