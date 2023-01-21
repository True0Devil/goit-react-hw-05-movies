import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const MoviePage = lazy(() => import('pages/Movies/MoviePage'));
const SingleMovie = lazy(() => import('pages/SingleMovie/SingleMovie'));
const Cast = lazy(() => import('pages/SingleMovie/Cast/Cast'));
const Reviews = lazy(() => import('pages/SingleMovie/Reviews/Reviews'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));

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
