import { MoviePage } from 'pages/Movies/MoviePage';
import { SingleMovie } from 'pages/SingleMovie/SingleMovie';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Cast } from 'pages/SingleMovie/Cast/Cast';
import { Reviews } from 'pages/SingleMovie/Reviews/Reviews';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import PageNotFound from './PageNotFound/PageNotFound';

export const App = () => {
  return (
    <>
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/movies/:movieID" element={<SingleMovie />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
