<template>
  <h1 class="text-5xl xl:text-6xl text-center font-bold mb-4 text-gray-200">What can <span class="text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent leading-tight">
          Bab
        </span> do?</h1>
  <div class="flex mt-8 justify-center">
    <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
  </div>
  <section id="features" class="max-w-7xl mx-auto px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

    <div
        v-for="feature in features"
        :key="feature.title"
        class="bg-gray-800 bg-opacity-50 p-8 rounded-lg text-center border border-gray-700 border-opacity-30"
    >
      <FeatureCardComponent :icon="feature.icon" :title="feature.title" :description="feature.description" />

    </div>
  </section>

</template>

<script setup>
import FeatureCardComponent from "@/components/modules/FeatureCardComponent.vue";
const features = [
  {
    icon: '💬',
    title: 'Text Transformations',
    description: 'From reversing to adding emojis, bab.sh adds flair and character to your text with playful effects.',
  },
  {
    icon: '⚡',
    title: 'Endless Plugin Possibilities',
    description: 'Explore a wide range of creative plugins, or build your own, to transform your text in unique and fun ways.',
  },
  {
    icon: '🎨',
    title: 'Effortless and Simple',
    description: 'With bab.sh, transforming your text is easy and fun. No complex setup, just run a command and watch the magic happen.',
  },
]
</script>
