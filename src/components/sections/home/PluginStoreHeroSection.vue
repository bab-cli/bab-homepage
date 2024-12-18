<template>
  <section class="bg-gradient-to-r from-primary-600 to-accent-500 py-24 text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-10 bg-noise-pattern"></div>

    <div class="container relative z-10 px-5 mx-auto text-center">
      <div class="flex items-center justify-center mb-4">
        <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span class="text-sm uppercase tracking-wide text-white/80">Supercharge Your Text</span>
      </div>

      <h2 class="text-5xl font-bold mb-6
        bg-clip-text text-transparent
        bg-gradient-to-r from-white to-white/80
        leading-tight">
        Transform Youre Text with Plugins
      </h2>

      <p class="text-xl mb-10 max-w-3xl mx-auto text-white/90 leading-relaxed">
        Explore a vibrant ecosystem of creative plugins that enhance and transform your text in playful and powerful ways you never imagined.

      </p>

      <div class="flex justify-center space-x-6">
        <button
            class="
            px-4 py-3
            rounded-lg
            bg-white text-primary-600 font-semibold
            hover:bg-white/90 transition duration-300
            flex items-center gap-2

">
          <span aria-hidden="true" class="material-symbols-outlined shrink-0">store</span>

          Browse Plugins
        </button>

        <button
            class="
            aspect-square
            sm:aspect-auto
            sm:px-4 py-3 px-3
            rounded-lg
            bg-white/10 text-white font-semibold border border-white/20
            hover:bg-white/20 transition duration-300 hover:border-white/40
            flex items-center gap-2">

          <span aria-hidden="true" class="material-symbols-outlined shrink-0">add</span>


          <span class="hidden sm:block">Create Plugin</span>
        </button>



      </div>

    </div>
  </section>
</template>



<style scoped>
.bg-noise-pattern {
  background-image:
      linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%, transparent),
      linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%, transparent);
  background-size: 50px 50px;
}
</style>
<script setup lang="ts">
</script>