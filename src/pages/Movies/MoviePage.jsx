import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchMoviesByName } from 'services/tmdb.service';
import { toast, ToastContainer } from 'react-toastify';
import Loader from 'components/Loader/Loader';

const MoviePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('search');
    if (!query) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      fetchMoviesByName(query)
        .then(movies => {
          if (!movies.length) {
            throw new Error();
          }
          setMovies(movies);
        })
        .catch(error =>
          toast.error(
            <span>
              No movies matched your query (<b>{query}</b>)
            </span>
          )
        )
        .finally(() => setIsLoading(false));
    }, 500);
  }, [searchParams]);

  const handleSubmit = value => {
    const query = value.toLowerCase().trim();
    if (!query) return;
    setSearchParams({ search: query });
  };

  return (
    <main>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {movies && <MovieList movies={movies} />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </main>
  );
};

export default MoviePage;
