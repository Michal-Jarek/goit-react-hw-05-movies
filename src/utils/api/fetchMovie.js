import axios from "axios";

const apiKey = '?api_key=b6baed1eb57186fb03779557a2765daa';
const trendingToday = 'trending/movie/day';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 3000,
});

const fetchTrending = async () =>
{
    const response = await instance.get(
      `${trendingToday}${apiKey}`
    );
  //  console.log(response.data.results);
    return response.data.results;
    }



export { fetchTrending };
// https://api.themoviedb.org/3/movie/550?api_key=b6baed1eb57186fb03779557a2765daa
// https://api.themoviedb.org/3/trending/movie/day?api_key=b6baed1eb57186fb03779557a2765daa