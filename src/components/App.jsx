import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './Shared/SharedLayout';

const Home = lazy(() => import('../pages/hOME/Home'));
const MoviesSearch = lazy(() => import('../pages/movieSearch/MoviesSearch'));
const FilmDetails = lazy(() => import('../pages/moviePage/FilmDetails'));
const Reviews = lazy(() => import('./castRevBlock/reviews/Reviews'));
const Cast = lazy(() => import('./castRevBlock/cast/Cast'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MoviesSearch />} />
        <Route path="movies/:id" element={<FilmDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
