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
            px-8 py-3 rounded-lg
            bg-white text-primary-600
            font-semibold
            hover:bg-white/90
            transition duration-300
            flex items-center
            space-x-2
            shadow-lg
            hover:shadow-xl
            group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"></path>
          </svg>
          Browse Plugins
        </button>

        <button
            class="
    w-12 h-12 sm:w-auto sm:h-auto
    aspect-square
    sm:aspect-auto
            sm:px-8 rounded-lg
                        space-x-2

    bg-white/10
    border border-white/20
    text-white
    font-semibold
    hover:bg-white/20
    transition duration-300
    flex items-center justify-center
    :space-x-2
    hover:border-white/40
  "
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
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