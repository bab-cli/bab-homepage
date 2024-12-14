<template>
  <div class="w-full xl:w-1/2 flex flex-col items-center xl:items-start text-center xl:text-left space-y-6 px-4">
    <div class="space-y-6 max-w-lg xl:max-w-xl">
      <h1 class="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-gray-900 dark:text-white">
        <span class="emoji-spin">🤔</span> Page Not Found
      </h1>
      <div class="text-base sm:text-lg text-gray-600 dark:text-gray-300">
        <p>This page has been Thanos-snapped out of existence...</p>
        <p>or maybe it never existed at all.</p>
      </div>
    </div>
    <div class="flex flex-row gap-5">
      <router-link
          to="/"
          class="text-sm underline text-gray-600 hover:text-white font-medium transition-all duration-300"
      >
        Home
      </router-link>
        <router-link
            to="/plugins"
            class="text-sm underline text-gray-600 hover:text-white font-medium transition-all duration-300"
        >
          Plugins
        </router-link>
      <a
          href="https://discord.bab.sh"
          class="text-sm underline text-gray-600 hover:text-white font-medium transition-all duration-300"
      >
        Discord
      </a>
      <a
          href="https://github.bab.sh"
          class="text-sm underline text-gray-600 hover:text-white font-medium transition-all duration-300"
      >
        GitHub
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundContent',
}
</script>


<style>
.emoji-spin {
  display: inline-block;
  animation: spin 12s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>