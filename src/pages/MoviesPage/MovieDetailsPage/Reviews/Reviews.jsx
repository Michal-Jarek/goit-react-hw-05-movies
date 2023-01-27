import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchReviews } from 'utils/api/fetchMovie';

const Reviews = () => {
  // eslint-disable-next-line
  const [id, setId] = useSearchParams();
  const [reviews, setReviews] = useState(null);
  let localId = id.get('id');

  useEffect(() => {
    const fetch = async () => {
      try {
        console.log('w fetch reviews');
        const response = await fetchReviews(localId);
        setReviews(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
    console.log(reviews);
    return () => setReviews(null);
    // eslint-disable-next-line
  }, []);

  return <nav>Reviews</nav>;
};

export default Reviews;
