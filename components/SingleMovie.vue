<script setup lang="ts">
import type { MovieData } from "~/utils/tmdbApi";

type Props = {
  movie: MovieData;
};
const props = defineProps<Props>();

const computedUrl = computed(
  () => `https://image.tmdb.org/t/p/w400${props.movie.poster_path}`
);

function truncateText(text: string) {
  if (text.length <= 400) {
    return text;
  }
  return text.substring(0, 390) + "...";
}
</script>

<template>
  <div class="b-1 p-2 rounded">
    <h2 class="mx-3 text-gray-6">{{ props.movie.original_title }}</h2>
    <div class="flex gap-2 w-130 bg-black p-3 rounded-xl text-white">
      <NuxtImg :src="computedUrl" preload class="rounded-lg bg-contain" />
      <div class="mx-3 flex flex-col justify-between">
        <p class="text-sm">{{ truncateText(props.movie.overview) }}</p>
        <p class="">release date : {{ props.movie.release_date }}</p>
      </div>
    </div>
  </div>
</template>
