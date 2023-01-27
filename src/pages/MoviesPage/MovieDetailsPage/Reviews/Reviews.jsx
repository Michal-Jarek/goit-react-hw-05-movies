import { useLocation, useSearchParams } from 'react-router-dom';

const Reviews = () => {
  const id = useLocation();
  
  console.log(id.state);

  return (<nav>Reviews</nav>);
};

export default Reviews;
