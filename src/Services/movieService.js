import { api } from "./api";

export const getMovieDetails = async (id)=>{
  const response = await api.get(`/movie/${id}`)

  return response.data
}

export const getMovieCasts = async (id) => {
  const response = await api.get(`/movie/${id}/credits`);
  return response.data;
};

export const getTrendingMovies = async ()=>{

    const response = await api.get("/trending/movie/week");

    return response.data.results;
};

export const getPopularMovies = async () => {
    const response = await api.get("/movie/popular")

    return response.data.results
};

export const getTopRatedMovies = async () => {
    const response = await api.get("/movie/top_rated")

    return response.data.results
};

export const getMovieGenres = async () => {
  const response = await api.get("/genre/movie/list");

  return response.data.genres;
};

export const getMoviesByGenre = async (genreId)=>{
    const response = await api.get("/discover/movie", {
        params: {
            with_genres: genreId,
        },
    })
    return response.data.results
};

export const getShowDetails = async (id)=>{
  const response = await api.get(`/tv/${id}`)

  return response.data
}

export const getShowCasts = async (id) => {
  const response = await api.get(`/tv/${id}/credits`);
  return response.data;
};

export const getShowSeasons = async (id,id2) => {
  const response = await api.get(`/tv/${id}/season/${id2}`);
  return response.data;
};

export const getTrendingShows = async () => {
  const response = await api.get("/trending/tv/week");
  return response.data.results;
};

export const getPopularShows = async () => {
  const response = await api.get("/tv/popular");
  return response.data.results;
};

export const getTopRatedShows = async () => {
  const response = await api.get("/tv/top_rated");
  return response.data.results;
};

export const getShowsGenres = async () => {
  const response = await api.get("/genre/tv/list");
  return response.data.genres;
};

export const getShowsByGenre = async (genreId) => {
  const response = await api.get("/discover/tv", {
    params: {
      with_genres: genreId,
    },
  });

  return response.data.results;
};

export const getSearchMovies = async (query) => {
  const { data } = await api.get(
    `/search/movie?query=${encodeURIComponent(query)}`
  );

  return data.results;
};

export const getSearchTVShows = async (query) => {
  const { data } = await api.get(
    `/search/tv?query=${encodeURIComponent(query)}`
  );

  return data.results;
};

