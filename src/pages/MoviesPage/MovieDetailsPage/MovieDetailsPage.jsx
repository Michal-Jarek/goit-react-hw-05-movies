import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';

import scss from './MovieDetailsPage.module.scss';

const MovieDetailsPage = () => {
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const [filmId, setFilmId] = useState(null);

  useEffect(() => {
    setFilmId(searchParams.get('id'));
    // eslint-disable-next-line
  }, []);
  console.log(filmId);
  if (filmId)
    return (
      <div className={scss.card}>
        <MovieDetails filmId={filmId} />
        <div>
          <ul>
            <li>
              <NavLink to={`cast?id=${filmId}`} state={filmId}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to={`reviews?id=${filmId}`} state={filmId}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    );
};

export default MovieDetailsPage;
