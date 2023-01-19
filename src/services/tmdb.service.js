import axios from 'axios';

const tmdbAPI = axios.create({ baseURL: 'https://api.themoviedb.org/3' });

// export const fetchMovies = async type => {
//   const { data } = await tmdbAPI.get(type, {
//     params: {
//       api_key: '94b41ec0e6f6b6ffeb7ae80dc6b59179',
//     },
//   });

//   console.log(data);
// };

export const fetchMoviesByName = async query => {
  const { data } = await tmdbAPI.get('/search/movie', {
    params: {
      api_key: '94b41ec0e6f6b6ffeb7ae80dc6b59179',
      query,
    },
  });

  return data.results;
};

export const fetchMovieById = async (id, type = '') => {
  const movie = await tmdbAPI.get('/movie/' + id + type, {
    params: {
      api_key: '94b41ec0e6f6b6ffeb7ae80dc6b59179',
    },
  });

  return movie.data;
};

export const fetchTrendingMovies = async () => {
  const movies = await tmdbAPI.get('/trending/movie/day', { 
    params: {
      api_key: '94b41ec0e6f6b6ffeb7ae80dc6b59179',
    },
  });

  return movies.data.results;
};
