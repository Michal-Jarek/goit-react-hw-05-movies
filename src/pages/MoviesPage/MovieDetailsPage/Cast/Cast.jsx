import { CastCard } from 'components/CastCard/CastCard';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchCasts } from 'utils/api/fetchMovie';

const Cast = () => {
  // eslint-disable-next-line
  const [getId, setGetId] = useSearchParams();
  const [casts, setCasts] = useState(false);
  // eslint-disable-next-line
  const id = getId.get('id');

  useEffect(() => {
    const fetch = async () => {
      try {
        console.log('w fetch reviews');
        const response = await fetchCasts(id);
        setCasts(response);
      } catch (e) {
        console.log(e);
      }
    };
    if (!casts) fetch();
    return () => setCasts(false);
    // eslint-disable-next-line
  }, []);

  console.log(casts);

  if (!casts) return <span>We don't have casts for this movie.</span>;
  return <div> <CastCard array={[...casts]} /></div>;
};
export default Cast;
