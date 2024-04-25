import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const API_READ_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWE5NmMyMTk4ODg4MjE4MGNkYmZkNDNhMzFmZTE1ZSIsInN1YiI6IjY2MWU1Njg0ZWNhZWY1MDE2M2Y4YzVhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.smGWlRbBvlmIBTHwPm8w8TkHTsfc1k-USsXPuMReN9Y";

const serSearchMovie = async (query) => {
  const { data } = await axios.get(`${BASE_URL}`, {
    params: {
      query: query,
    },
    headers: {
      Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
    },
  });
  return data;
};

export default serSearchMovie;