import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ array, movieState }) => {
  if (array.length === 0) return;

  return (
    <>
      <h2>Movie List: </h2>
      <ul>
        {array.map(({ original_title, id }) => (
          <li key={id}>
            <NavLink to={`movie?id=${id}`} state={movieState}>
              {original_title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  array: PropTypes.array,
  movieState: PropTypes.object,
};

export { MovieList };
