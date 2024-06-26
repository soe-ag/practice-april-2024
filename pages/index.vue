<script setup lang="ts">
import { genre } from "~/types/constants";
import type { GenreID } from "~/types/constants";

const movies = ref<ApiData>();
const pageNum = ref(1);
const isMovie = ref("movie");

onMounted(async () => {
  movies.value = await fetchTopRated(isMovie.value, pageNum.value);
});

watch(
  [pageNum, isMovie],
  async () => (movies.value = await fetchTopRated(isMovie.value, pageNum.value))
);
</script>

<template>
  <h3 class="mb-5 m-2">Top Rated</h3>
  <div class="flex gap-3 my-4">
    <div class="flex">
      <RadioButton v-model="isMovie" name="isMovie" value="movie" />
      <label class="ml-2">Movies</label>
    </div>
    <div class="flex">
      <RadioButton v-model="isMovie" name="isTv" value="tv" />
      <label class="ml-2">Series</label>
    </div>
  </div>
  <div class="flex gap-4">
    <div class="">
      <InputNumber
        v-model="pageNum"
        showButtons
        buttonLayout="vertical"
        class="w-10 b-1 b-gray-4 bg-gray-2 rounded-md"
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

    <div class="flex gap-2 flex-wrap text-sm">
      <div
        v-for="movie in movies?.results"
        :key="movie.original_title"
        :movie="movie"
      >
        <div class="">
          <NuxtImg
            :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
            class="rounded w-38 h-56 bg-cover shadow-md"
          />
        </div>
        <p class="w-36 m-1">
          {{ movie.original_title }} ({{
            roundToOneDecimal(movie.vote_average)
          }})
        </p>
        <div class="flex gap-1 flex-wrap w-36">
          <Tag
            value="Primary"
            rounded
            class="text-xs h-4"
            v-for="tag in movie.genre_ids"
            :key="tag"
          >
            {{ genre[tag as GenreID] }}</Tag
          >
        </div>
      </div>
    </div>
  </div>
  <div class="text-sm flex gap-4 justify-end mt-4">
    <p>
      PageNum :
      <span class="text-violet-5 font-semibold">{{ movies?.page }}</span>
    </p>
    <p>
      Total Pages :
      <span class="text-violet-5 font-semibold">{{ movies?.total_pages }}</span>
    </p>
    <p>
      Total {{ isMovie === "tv" ? "Series" : "Movies" }} :
      <span class="text-violet-5 font-semibold">{{
        movies?.total_results
      }}</span>
    </p>
  </div>
</template>
