import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../../components/SharedLoyout/SharedLoyout';
import { HomePage } from '../../pages/HomePage/HomePage';
import { MoviesPage } from '../../pages/MoviesPage/MoviesPage';
import { MovieDetailsPage } from '../../pages/MoviesPage/MovieDetailsPage/MovieDetailsPage';
import { Cast } from '../../pages/MoviesPage/MovieDetailsPage/Cast/Cast';
import { Reviews } from '../../pages/MoviesPage/MovieDetailsPage/Reviews/Reviews';

export const Router = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route path="movies" element={<MoviesPage />} />
      <Route path="movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<SharedLayout />} />
    </Route>
  </Routes>
);
