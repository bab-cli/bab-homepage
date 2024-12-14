<template>
    <NavbarComponent/>
  <main class="main-content">
  <router-view  />
    </main>
    <FooterComponent />


</template>

<script setup>
import NavbarComponent from "@/components/common/NavbarComponent.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';



body {
  font-family: 'Space Grotesk', sans-serif;
  color: #e6e6e6;
  @apply bg-background;
}
html, body {
  height: 100%;
  margin: 0;
}

main.main-content {
  flex: 1;
}

</style>
