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

const fetchReviews = async id => {
  const response = await instance.get(`movie/${id}/reviews${apiKey}`);
  if (response.data.results.length === 0) return null;
  return response.data.results;
};
const fetchCasts = async id => {
  const response = await instance.get(`movie/${id}/credits${apiKey}`);
  if (response.data.cast.length === 0) return null;
  return response.data.cast;
};

export { fetchTrending, fetchMovie, fetchReviews, fetchCasts };
