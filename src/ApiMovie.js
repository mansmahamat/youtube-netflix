/* eslint-disable import/no-anonymous-default-export */
const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = "https://api.themoviedb.org/3/"

const fetchMovies = async (endpoint) => {
  return await fetch(
    `${API_URL}${endpoint}?language=fr-FR&api_key=${API_KEY}`
  ).then((response) => response.json())
}

export default {
  getHomeMovies: async () => {
    return [
      {
        slug: "top-rated",
        title: "Mieux notés",
        items: await fetchMovies("movie/top_rated"),
      },
      {
        slug: "trend-allweek",
        title: "Tendance",
        items: await fetchMovies("trending/all/week"),
      },
      {
        slug: "action",
        title: "Action",
        items: await fetchMovies("discover/movie?with_genres=28"),
      },
      {
        slug: "horror",
        title: "Horreur",
        items: await fetchMovies("discover/movie?with_genres=27"),
      },
      {
        slug: "romance",
        title: "Romantique",
        items: await fetchMovies("discover/movie?with_genres=10749"),
      },
      {
        slug: "comedy",
        title: "Comédie",
        items: await fetchMovies("discover/movie?with_genres=35"),
      },
      {
        slug: "documentary",
        title: "Documentaire",
        items: await fetchMovies("discover/movie?with_genres=99"),
      },
      {
        slug: "popular-tv",
        title: "Séries populaires Netflix",
        items: await fetchMovies("discover/tv?with_network=213"),
      },
    ]
  },
}
