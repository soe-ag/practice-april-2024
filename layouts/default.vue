<script setup>
import { ref } from "vue";
const router = useRouter();

const items = ref([
  {
    label: "Home",
    icon: "i-mdi-home",
    command: () => {
      router.push("/home");
    },
  },
  {
    label: "Admin",
    icon: "i-mdi-account-cog",
    command: () => {
      router.push("/admin");
    },
  },
  {
    label: "Sections",
    icon: "i-mdi-archive-search-outline",
    items: [
      {
        label: "TMDB test page",
        icon: "pi pi-bolt",
        command: () => {
          router.push("/tmdb/testPage");
        },
      },
      {
        label: "TMDB posters",
        icon: "pi pi-server",
        command: () => {
          router.push("/tmdb/testPagePoster");
        },
      },
      {
        label: "TMDB posters2",
        icon: "pi pi-server",
        command: () => {
          router.push("/tmdb/testPagePoster2");
        },
      },
    ],
  },
  {
    label: "Index",
    icon: "i-mdi-keyboard-return",
    command: () => {
      router.push("/");
    },
  },
]);
</script>

<template>
  <div class="bg-gray-2 p-1">
    <Menubar :model="items" class="bg-gray-1 m-2 b-1 b-gray-3" />
    <div class="p-4"><slot /></div>
  </div>
</template>
