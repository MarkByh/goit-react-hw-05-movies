
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '6730498ead9b53c83d6423d9a3bbfa5b';
// 'movie/movie_id/videos?api_key=${API_KEY}&language=en-US'

export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};
// /trending/tv/day?language=en-US'
export const getTrendingTv = async () => {
  const response = await axios.get(`/trending/tv/day?api_key=${API_KEY}`);
  return response.data;
};

export const getSimilar = async (id) => {
  const response = await axios.get(`movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data;
};

export const getMoviesVideo = async (id) => {
  const response = await axios.get(
    `movie/${id}/videos?api_key=${API_KEY}&language=en-US`
  );
  console.log(response.data);
  return response.data;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
export const getTvDetails = async id => {
  const response = await axios.get(
    `tv/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieCredits = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};
