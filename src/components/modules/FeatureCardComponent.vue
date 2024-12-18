<template>



  <div class="text-5xl mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
    {{ props.icon }}
  </div>
  <h3 class="text-xl font-bold mb-2 text-white">{{ props.title }}</h3>
  <p class="text-gray-400">{{ props.description }}</p>

</template>

<script setup>


const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
})

</script>
