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
  }, []);

  console.log(movie);
  if (movie) {
    const { poster_path: src, title: alt } = movie;
    return (
      <>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${src}`} alt={alt} />
        </div>
      </>
    );
  }
  return <Loader />;
};

export default MovieDetails;
