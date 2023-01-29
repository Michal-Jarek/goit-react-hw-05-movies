import { BackLink } from 'components/BackLink/BackLink';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useState, useEffect } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useSearchParams,
} from 'react-router-dom';

import scss from './MovieDetailsPage.module.scss';

let backLinkHref = '/movies';

const MovieDetailsPage = () => {
  const [searchParams] = useSearchParams();
  const [filmId, setFilmId] = useState(null);
  const location = useLocation();
  if (location.state?.from) backLinkHref = location.state?.from;

  useEffect(() => {
    setFilmId(searchParams.get('id'));
    // eslint-disable-next-line
  }, []);

  if (filmId)
    return (
      <div>
        <BackLink to={backLinkHref} txtButton={'cokolwiek'} />
        <div className={scss.card}>
          <MovieDetails filmId={filmId} />
          <div>
            <p>Additional information:</p>
            <ul>
              <li>
                <NavLink to={`cast?id=${filmId}`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`reviews?id=${filmId}`}>Reviews</NavLink>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    );
};

export default MovieDetailsPage;
