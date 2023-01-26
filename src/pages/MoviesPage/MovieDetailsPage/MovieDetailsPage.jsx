import { lazy, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = lazy(() =>
  import('../../../components/MovieDetails/MovieDetails')
);

const MovieDetailsPage = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <MovieDetails />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
