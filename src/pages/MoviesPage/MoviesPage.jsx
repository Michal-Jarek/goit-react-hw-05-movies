import { SearchBox } from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [title, setTitle] = useSearchParams('');
  const onSubmit = e => {
    e.preventDefault();
    setTitle({ Title: e.currentTarget.elements.Title.value });
    e.target.reset();
  };
  console.log(title);
  //   const handleSubmit = async e => {
  //

  //     setTitle(e.currentTarget.elements.search.value);
  //     e.target.reset();
  //   };

  return <SearchBox onSubmit={onSubmit} />;
};

export default MoviesPage;
