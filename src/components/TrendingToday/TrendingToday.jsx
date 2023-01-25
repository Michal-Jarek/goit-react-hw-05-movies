import { fetchTrending } from 'utils/api/fetchMovie';
import scss from './TrendingToday.module.scss'


 export const TrendingToday = () => { 

     const moviesList =  fetchTrending();
     
     return (
         <>
             <h2>Trending today</h2>
         <ul></ul>
       </>
     );
};
