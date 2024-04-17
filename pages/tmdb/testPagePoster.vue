<script setup lang="ts">
const test = ref(false);

const upcomingMovies = ref<MovieData[]>([]);

onMounted(async () => {
  upcomingMovies.value = await fetchData(2);
});
</script>

<template>
  <h2 class="mx-4 text-gray-6 underline italic">Posters</h2>

  <div class="flex gap-2 flex-wrap">
    <div
      v-for="movie in upcomingMovies"
      :key="movie.original_title"
      :movie="movie"
    >
      <NuxtImg :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`" />
    </div>
  </div>
</template>
