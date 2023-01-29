import { ReviewsCard } from 'components/ReviewsCard/ReviewsCard';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchReviews } from 'utils/api/fetchMovie';

const Reviews = () => {
  const [getId] = useSearchParams();
  const [reviews, setReviews] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await fetchReviews(getId.get('id'));
        setReviews(response);
      } catch (e) {
        console.log(e);
      }
    };
    if (!reviews) fetch();
    return () => setReviews(false);
    // eslint-disable-next-line
  }, [getId]);

  if (!reviews) return <span>We don't have any reviews for this movie.</span>;
  return (
    <div>
      <ReviewsCard array={[...reviews]} />
    </div>
  );
};

export default Reviews;
