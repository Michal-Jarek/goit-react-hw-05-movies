import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovie } from '../../utils/api/fetchMovie';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const filmId = location.pathname.substring(8);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await fetchMovie(filmId);
        setMovie(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
    return () => setMovie(null);
    // eslint-disable-next-line
  }, []);

  console.log(movie);
  if (movie) {
    const {
      poster_path: src,
      title,
      release_date,
      vote_average,
        overview,
      genres
    } = movie;
    return (
      <>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${src}`} alt={title} />
        </div>
        <div>
          <h1>{`${title} (${release_date.slice(0, 4)})`}</h1>
          <span>User Score: {Math.round(vote_average * 10)}%</span>
          <h2>Overview</h2>
          <span>{overview}</span>
                <h3>Genres</h3>
                <span>{ genres.map(genre => `${genre.name}, `)}</span>
        </div>
      </>
    );
  }
  return <Loader />;
};

export default MovieDetails;
