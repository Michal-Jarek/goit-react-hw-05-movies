import { ReviewsCard } from 'components/ReviewsCard/ReviewsCard';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchReviews } from 'utils/api/fetchMovie';

const Reviews = () => {
  // eslint-disable-next-line
  const [getId, setGetId] = useSearchParams();
  const [reviews, setReviews] = useState(false);
  // eslint-disable-next-line
  const [id, setId] = useState(getId.get('id'));

  useEffect(() => {
    const fetch = async () => {
      try {
        console.log('w fetch reviews');
        const response = await fetchReviews(id);
        setReviews(response);
      } catch (e) {
        console.log(e);
      }
    };
    if (!reviews) fetch();
    return () => setReviews(false);
    // eslint-disable-next-line
  }, []);



  if (!reviews) return <span>We don't have any reviews for this movie.</span>;
  return (
    <div>
      <ReviewsCard array={[...reviews]} />
    </div>
  );
};

export default Reviews;
