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
        label: "TMDB test page-1",
        icon: "pi pi-bolt",
        command: () => {
          router.push("/tmdb/testPage");
        },
      },
      {
        label: "sub-2",
        icon: "pi pi-server",
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
  <div class="bg-white">
    <Menubar :model="items" class="bg-gray-1" />
    <div class="p-4"><slot /></div>
  </div>
</template>
