<script setup lang="ts">
const test = ref(false);

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
const upcomingMovies = ref<MovieData[]>([]);

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    const data = await response.json();
    upcomingMovies.value = data.results
      //   .slice(0, 10)
      .map((movie: MovieData) => ({
        original_title: movie.original_title,
        overview: movie.overview,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
      }));
  } catch (err) {
    console.error(err);
  }
};

// Call the fetchData function when the component is mounted
onMounted(fetchData);
</script>

<template>
  <h2 class="mx-4 text-gray-6 underline italic">Upcoming movies</h2>
  <!-- <div>{{ upcomingMovies.length }}</div>
  <pre>{{ upcomingMovies }}</pre> -->
  <div class="flex gap-2 flex-wrap">
    <SingleMovie
      v-for="movie in upcomingMovies"
      :key="movie.original_title"
      :movie="movie"
    />
  </div>
</template>
