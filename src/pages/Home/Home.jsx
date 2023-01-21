import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';

import { fetchTrendingMovies } from 'services/tmdb.service';

const Home = () => {
  const [trending, setTrending] = useState();

  useEffect(() => {
    fetchTrendingMovies().then(setTrending);
  }, []);

  if (!trending) {
    return;
  }

  return (
    <main>
      <h1 className='mb-5 ms-5'>Trending Today</h1>
      <MovieList movies={trending} />
    </main>
  );
};

export default Home;
