<script setup lang="ts">
const test = ref(false);

const movies = ref<MovieData[]>([]);

onMounted(async () => {
  movies.value = await fetchUpcoming(1);
});
</script>

<template>
  <h2 class="mx-4 text-gray-6 underline italic">Upcoming movies</h2>
  <!-- <div>up - {{ movies }}</div> -->
  <!-- <div>{{ movies.length }}</div>
  <pre>{{ movies }}</pre> -->
  <div class="flex gap-2 flex-wrap b-1 b-white">
    <SingleMovie
      v-for="movie in movies"
      :key="movie.original_title"
      :movie="movie"
    />
  </div>
</template>
