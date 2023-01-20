import { Searchbar } from 'components/Searchbar/Searchbar';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchMoviesByName } from 'services/tmdb.service';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const MoviePage = () => {
  // const [search, setSearch] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParms, setSearchParams)

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
    // setSearch(query);
    setSearchParams({ search: query });
  };

  // const query = searchParms.get('search')
  // console.log(query)

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {movies && <MovieList movies={movies} />}
    </>
  );
};
