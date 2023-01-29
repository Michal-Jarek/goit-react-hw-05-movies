import { MovieList } from 'components/MovieList/MovieList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';

import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByTitle } from 'utils/api/fetchMovie';

const MoviesPage = () => {
  const [title, setTitle] = useSearchParams('');
  const [movieArray, setMovieArray] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const response = await fetchMovieByTitle(title.get('title'));
        setMovieArray(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieList();
  }, [title]);

  const onSubmit = e => {
    e.preventDefault();
    setTitle({ title: e.currentTarget.elements.Title.value });
    e.target.reset();
  };


  return (
    <div>
      <SearchBox onSubmit={onSubmit} />
      {title.get('title') !== null && (
        <MovieList array={movieArray} movieState={{ from: location }} />
      )}
    </div>
  );
};

export default MoviesPage;
