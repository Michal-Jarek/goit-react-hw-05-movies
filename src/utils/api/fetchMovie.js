import axios from 'axios';

const apiKey = '?api_key=b6baed1eb57186fb03779557a2765daa';
const trendingToday = 'trending/movie/day';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 3000,
});

const fetchTrending = async () => {
  const response = await instance.get(`${trendingToday}${apiKey}`);
  return response.data.results;
};

const fetchMovie = async id => {
  const response = await instance.get(`movie/${id}${apiKey}`);
  return response.data;
};

export { fetchTrending, fetchMovie };
