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
};

export const fetchData = async (pageNum: number) => {
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
      }))
  );
};
