<script setup>
// import type { OrganizationChartNode } from "primevue/organizationchart";
const data = {
  key: "0",
  type: "person",
  styleClass: "bg-indigo-100 text-black b-2 b-gray",
  data: {
    image: "https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",
    name: "Amy Elsner",
    title: "CEO",
  },
  children: [
    {
      key: "0_0",
      type: "person",
      styleClass: "bg-purple-100 text-black b-2 b-gray",
      data: {
        image: "https://primefaces.org/cdn/primevue/images/avatar/annafali.png",
        name: "Anna Fali",
        title: "CMO",
      },
      children: [
        {
          label: "Sales",
          styleClass: "bg-purple-100 text-black b-2 b-gray",
        },
        {
          label: "Marketing",
          styleClass: "bg-purple-100 text-black b-2 b-gray",
        },
      ],
    },
    {
      key: "0_1",
      type: "person",
      styleClass: "bg-teal-100 text-black b-2 b-gray",
      data: {
        image:
          "https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png",
        name: "Stephen Shaw",
        title: "CTO",
      },
      children: [
        {
          label: "Development",
          styleClass: "bg-teal-100 text-black b-2 b-gray",
        },
        {
          label: "UI/UX Design",
          styleClass: "bg-teal-100 text-black b-2 b-gray",
        },
      ],
    },
  ],
};
</script>

<template>
  <div class="card overflow-x-auto">
    <h3>This is home page, testing organization chart.</h3>
    <OrganizationChart :value="data" collapsible>
      <template #person="slotProps">
        <div class="flex flex-col">
          <div class="flex flex-col items-center">
            <img
              :alt="slotProps.node.data.name"
              :src="slotProps.node.data.image"
              class="mb-3 w-3rem h-3rem"
            />
            <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
            <span>{{ slotProps.node.data.title }}</span>
          </div>
        </div>
      </template>
      <template #default="slotProps">
        <span>{{ slotProps.node.label }}</span>
      </template>
    </OrganizationChart>
  </div>
</template>
