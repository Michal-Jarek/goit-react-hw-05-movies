import { useState, useEffect } from 'react';
import { fetchTrending } from 'utils/api/fetchMovie';

import scss from './TrendingToday.module.scss';

const TrendingToday = () => {
  const [trendMovieList, setTrendMovieList] = useState([]);

  useEffect(() => {
    if (trendMovieList.length === 0) {
      fetchTrending().then();
    }
  }, [trendMovieList]);

  console.log(trendMovieList);

  return (
    <>
      <h2>Trending today</h2>
      <ul></ul>
    </>
  );
};
export { TrendingToday };
