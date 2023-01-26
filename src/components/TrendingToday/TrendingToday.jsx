import { useState, useEffect } from 'react';
import { fetchTrending } from 'utils/api/fetchMovie';

//import scss from './TrendingToday.module.scss';

const TrendingToday = () => {
  const [trendMovieList, setTrendMovieList] = useState([]);

  useEffect(() => {
    const fetchTrendMovieList = async () => {
      try {
        const response = await fetchTrending();
        setTrendMovieList(response);
      } catch (e) {
        console.log(e);
      }
    };
    if (trendMovieList.length === 0) fetchTrendMovieList();
  }, [trendMovieList]);

  if (trendMovieList.length !== 0)
    console.log(trendMovieList);
    return (
      <>
        <h2>Trending today</h2>
        <ul></ul>
      </>
    );
};
export { TrendingToday };
