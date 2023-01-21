import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchMoviesByName } from 'services/tmdb.service';

const MoviePage = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('search');
    console.log(query);
    if (!query) {
      return;
    }

    fetchMoviesByName(query).then(setMovies);
  }, [searchParams]);

  const handleSubmit = value => {
    const query = value.toLowerCase().trim();
    if (!query) return;
    setSearchParams({ search: query });
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default MoviePage;
