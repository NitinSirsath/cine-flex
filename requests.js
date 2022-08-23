const API_KEY = process.env.API_KEY;

export const requestMovies = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  fetchTopRated: `
    https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchLatest : `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`
};

export const requestSeries = {
    fetchTopRated : `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular : `
    https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchAiringToday : `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
    fetchLatest : `https://api.themoviedb.org/3/tv/latest?api_key=${API_KEY}&language=en-US`
}