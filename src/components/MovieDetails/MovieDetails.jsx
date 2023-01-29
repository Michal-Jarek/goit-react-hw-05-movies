import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { fetchMovie } from '../../utils/api/fetchMovie';

import PropTypes from 'prop-types';
import scss from './MovieDetails.module.scss';

const MovieDetails = ({ filmId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        console.log('w fetch reviews');
        const response = await fetchMovie(filmId);
        setMovie(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
    return () => setMovie(null);
  }, [filmId]);

  if (movie) {
    const {
      poster_path: src,
      title,
      release_date,
      vote_average,
      overview,
      genres,
    } = movie;
    return (
      <>
        <div className={scss.template}>
          <div>
            <img src={`https://image.tmdb.org/t/p/w500${src}`} alt={title} />
          </div>
          <div className={scss.description}>
            <h1>{`${title} (${release_date.slice(0, 4)})`}</h1>
            <span>User Score: {Math.round(vote_average * 10)}%</span>
            <h2>Overview</h2>
            <span>{overview}</span>
            <h3>Genres</h3>
            <span>{genres.map(genre => `${genre.name}, `)}</span>
          </div>
        </div>
      </>
    );
  }
  return <Loader />;
};

MovieDetails.propTypes = {
  filmId: PropTypes.string,
};

export default MovieDetails;
