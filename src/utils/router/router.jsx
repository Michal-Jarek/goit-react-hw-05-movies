import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from '../../components/SharedLoyout/SharedLoyout';

const HomePage = lazy( () => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));

const MovieDetailsPage = lazy(()=> import('../../pages/MoviesPage/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(()=> import( '../../pages/MoviesPage/MovieDetailsPage/Cast/Cast'));
const Reviews = lazy(()=> import('../../pages/MoviesPage/MovieDetailsPage/Reviews/Reviews'));




export const Router = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route path="movies" element={<MoviesPage />} />
      <Route path="movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Route>
  </Routes>
);
