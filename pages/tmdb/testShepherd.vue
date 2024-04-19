<script setup>
import { useShepherd } from "vue-shepherd";

const one = ref(null);
const two = ref(null);
const three = ref(null);
const four = ref(null);
const five = ref(null);
const six = ref(null);

const tour = useShepherd({
  useModalOverlay: true,
});

onMounted(() => {
  tour.addSteps([
    {
      attachTo: { element: one.value, on: "top" },
      text: "Testing step one",
    },
    {
      attachTo: { element: two.value, on: "bottom" },
      text: "Testing step two",
    },
    {
      attachTo: { element: three.value, on: "left" },
      text: "Testing step three",
    },
    {
      attachTo: { element: four.value, on: "right" },
      text: "Testing step four",
    },
    {
      attachTo: { element: five.value, on: "top" },
      text: "Testing step five",
    },
  ]);

  tour.start();
});
</script>

<template>
  <div class="h-400">
    <div ref="one">Testing</div>

    <div class="flex gap-2 flex-wrap my-4">
      <Button label="Primary" ref="two" />
      <Button label="Secondary" severity="secondary" ref="three" />
      <Button label="Success" severity="success" ref="five" />
      <Button label="Info" severity="info" ref="four" />
      <Button label="Warning" severity="warning" />
      <Button label="Help" severity="help" />
      <Button label="Danger" severity="danger" />
      <Button label="Contrast" severity="contrast" />
    </div>
  </div>
</template>
