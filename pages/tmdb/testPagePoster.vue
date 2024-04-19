<script setup lang="ts">
import introJs from "intro.js";
import "intro.js/introjs.css";

const test = ref(false);

const movies = ref<MovieData[]>([]);
const pageNum = ref(1);

onMounted(async () => {
  movies.value = await fetchUpcoming(pageNum.value);
  introJs().start();
});

watch(pageNum, async () => (movies.value = await fetchUpcoming(pageNum.value)));
</script>

<template>
  <h2
    class="m-4 text-gray-6 underline italic w-100"
    data-intro="This is step one!"
    data-title="Step one title"
    data-step="1"
  >
    Posters
  </h2>

  <div class="flex gap-2 flex-wrap my-4">
    <Button label="Primary" />
    <Button
      label="Secondary"
      severity="secondary"
      data-intro="This is step one!"
      data-title="Step one title"
      data-step="4"
    />
    <Button
      label="Success"
      severity="success"
      data-intro="This is step one!"
      data-title="Step one title"
      data-step="6"
    />
    <Button
      label="Info"
      severity="info"
      data-intro="This is step one!"
      data-title="Step one title"
      data-step="5"
    />
    <Button
      label="Warning"
      severity="warning"
      data-intro="This is step one!"
      data-title="Step one title"
      data-step="8"
    />
    <Button
      label="Help"
      severity="help"
      data-intro="This is step one!"
      data-title="Step one title"
      data-step="10"
    />
    <Button
      label="Danger"
      severity="danger"
      data-intro="This is step one!"
      data-title="Step one title"
      data-step="6"
    />
    <Button
      label="Contrast"
      severity="contrast"
      data-intro="This is step one!"
      data-title="Step one title"
      data-step="9"
    />
  </div>

  <div class="flex gap-4">
    <div
      class=""
      data-intro="This is step three!"
      data-title="Step three title"
      data-step="3"
    >
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

    <div
      class="flex gap-2 flex-wrap"
      data-intro="This is step two!"
      data-title="Step two title"
      data-step="2"
    >
      <div
        v-for="(movie, index) in movies"
        :key="movie.original_title"
        :movie="movie"
      >
        <NuxtImg :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`" />
      </div>
    </div>
  </div>
</template>
