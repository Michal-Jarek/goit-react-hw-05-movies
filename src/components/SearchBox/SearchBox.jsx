import PropTypes from 'prop-types';

export const SearchBox = ({ onSubmit }) => {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <input
          name="Title"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Movie title?"
        />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
    </header>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func,
};
