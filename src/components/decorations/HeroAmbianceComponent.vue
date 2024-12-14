<template>
  <div
      class=" animated-gradient absolute inset-0 -top-[55%] sm:max-w-[80%] xl:max-w-[100%] mx-auto xl:top-0 -z-10 transform-gpu blur-2xl"
      aria-hidden="true">
    <div
        class="aspect-[1800/960] sm:w-[110%] w-[100%] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 opacity-15 transition-all duration-500 ease-in-out"
        style="
        clip-path: polygon(
          35% 5%,
          25% 20%,
          36% 10%,
          48% 40%,
          65% 12%,
          75% 50%,
          84% 20%,
          100% 10%,
          98% 55%,
          76% 95%,
          60% 60%,
          45% 95%,
          30% 57%,
          20% 85%,
          -16% 100%,
          20% 12%
        );
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        position: absolute;
      "
    ></div>
  </div>
</template>

<style scoped>
@keyframes grow {
  0% {
    width: 87%;
    opacity: 0.3;
  }
  100% {
    width: 100%;
    opacity: 1;

  }
}

.animated-gradient {
  animation: grow 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
</style>
