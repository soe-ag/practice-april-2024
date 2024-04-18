<script setup lang="ts">
const test = ref(false);

const movies = ref<MovieData[]>([]);
const pageNum = ref(1);

onMounted(async () => {
  movies.value = await fetchUpcoming(pageNum.value);
});

watch(pageNum, async () => (movies.value = await fetchUpcoming(pageNum.value)));
</script>

<template>
  <h2 class="mx-4 text-gray-6 underline italic">Posters</h2>

  <div class="flex gap-4">
    <div class="">
      <InputNumber
        v-model="pageNum"
        showButtons
        buttonLayout="vertical"
        class="w-8"
        :min="1"
        :max="99"
      >
        <template #incrementbuttonicon>
          <span class="i-mdi-gamepad-round text-red-5" />
        </template>
        <template #decrementbuttonicon>
          <span class="i-mdi-minus-thick text-xl text-red-5" />
        </template>
      </InputNumber>
    </div>

    <div class="flex gap-2 flex-wrap">
      <div v-for="movie in movies" :key="movie.original_title" :movie="movie">
        <NuxtImg :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`" />
      </div>
    </div>
  </div>
</template>
