import MovieDetails from 'components/MovieDetails/MovieDetails';

import scss from './MovieDetailsPage.module.scss';



const MovieDetailsPage = () => {
  return (
    <div className={scss.card}>

        <MovieDetails />

    </div>
  );
};

export default MovieDetailsPage;
