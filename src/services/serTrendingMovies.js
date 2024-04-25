import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/trending/movie/day";
const API_READ_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWE5NmMyMTk4ODg4MjE4MGNkYmZkNDNhMzFmZTE1ZSIsInN1YiI6IjY2MWU1Njg0ZWNhZWY1MDE2M2Y4YzVhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.smGWlRbBvlmIBTHwPm8w8TkHTsfc1k-USsXPuMReN9Y";

const serTrendingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}`, {
    headers: {
      Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
    },
  });
  return data;
};

export default serTrendingMovies;