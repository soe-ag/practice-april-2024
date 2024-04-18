const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTQ0MTExYzYzMzI5YjRhOTk5ZjhlZWM5MTJkMWNlZSIsInN1YiI6IjY2MWU5MGUyZDE4ZmI5MDE3ZGNhYjdiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53cugCUclGr1dJzZCfPc0Fj3Gnkp2Ip2xJt8ioUSqSU",
  },
};

export type MovieData = {
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

export type ApiData = {
  page: number;
  total_pages: number;
  total_results: number;
  results: MovieData[];
};

export const fetchUpcoming = async (pageNum: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pageNum}`,
    options
  );
  const data = await response.json();
  return (
    data.results
      //   .slice(0, 10)
      .map((movie: MovieData) => ({
        original_title: movie.original_title,
        overview: movie.overview,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
      }))
  );
};

export const fetchTopRated = async (type: string, pageNum: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/top_rated?language=en-US&page=${pageNum}`,
    options
  );
  const data = await response.json();
  return {
    page: data.page,
    total_pages: data.total_pages,
    total_results: data.total_results,
    results: data.results.map((movie: MovieData) => ({
      original_title: movie.original_title,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
    })),
  };
};
