import { Searchbar } from 'components/Searchbar/Searchbar';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchMoviesByName } from 'services/tmdb.service';
import { useState } from 'react';
import { useEffect } from 'react';

export const MoviePage = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (!search) {
      return;
    }

    fetchMoviesByName(search).then(setMovies);
  }, [search]);

  const handleSubmit = value => {
    setSearch(value.toLowerCase().trim());
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {movies && <MovieList movies={movies} />}
    </>
  );
};
