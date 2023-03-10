import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { fetchTrending } from 'utils/api/fetchMovie';

//import scss from './TrendingToday.module.scss';

const TrendingToday = () => {
  const [trendMovieList, setTrendMovieList] = useState([]);
  const location = useLocation();

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

  if (trendMovieList.length !== 0) {
    console.log(trendMovieList);
    return (
      <>
        <h2>Trending today</h2>
        <ul>
          {trendMovieList.map(({ original_title, id }) => (
            <li key={id}>
              <NavLink to={`movies/movie?id=${id}`} state={{ from: location }}>
                {original_title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
};
export { TrendingToday };
