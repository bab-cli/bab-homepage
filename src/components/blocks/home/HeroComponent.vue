<template>

  <section class="relative flex w-[92%] xl:w-max mx-auto flex-col xl:flex-row justify-center gap-20 items-center xl:items-start text-center xl:text-left">

  <HeroAmbianceComponent/>
    <div class="w-full xl:w-1/2">

        <h1 class="text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent leading-tight">
          Bab.sh
        </h1>
        <p class="text-lg mb-10 max-w-md mx-auto xl:mx-0">
          A playful and powerful CLI tool that styles and transforms your text, with an ecosystem of creative plugins to explore.
        </p>
        <div class="flex gap-5 justify-center xl:justify-start">
          <ButtonComponent
              variant="primary"
              href="#installation"
              :left-icon="DownloadIcon"
          >
            Install
          </ButtonComponent>
          <ButtonComponent
              variant="secondary"
              href=""
          >
            Learn More
          </ButtonComponent>  </div>
      </div>

      <div class="w-full xl:w-1/2 flex justify-center h-full">
        <ShowcaseComponent commandsFolder="examples"/>
      </div>
    </section>
</template>

<script setup>
import { Download, Info } from 'lucide-vue-next'
const DownloadIcon = Download
import ShowcaseComponent from '@/components/modules/ShowcaseComponent.vue'
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import HeroAmbianceComponent from "@/components/decorations/HeroAmbianceComponent.vue";
</script>
