<template>
  <ChipMessageComponent message="This is the Beginning of Bab.sh." title="Pre Alpha v0.1"/>

  <section id="hero" class="xl:h-screen pt-[17vh] sm:pt-[15vh] xl:pt-[30vh]">
    <HeroSection/>

    <div class="bottom-0 xl:absolute block mt-[4.5rem] xl:mt-[6rem] sm:mb-[60px] pb-10 h-fit w-full">
      <StatisticSection/>
    </div>
  </section>


  <section id="installation" class="hidden py-5 sm:block bg-[#111418] border-t-[2px] border-gray-800">
    <InstallSection/>
  </section>

  <section class="border-t-[2px] py-40 border-gray-800">
    <FeatureCardSection/>
  </section>

  <section class="border-t-[2px] border-gray-800">
    <BabFileSection/>
  </section>

  <section class="border-t-[2px] border-gray-800">
    <PluginStoreHeroSection/>
  </section>

  <section class="border-t-[2px] border-gray-800 py-5 sm:block bg-[#111418] border-b-[2px]">
    <CrewSection/>
  </section>

  <section class="border-b-[2px] border-gray-800">
    <NewsletterRegisterSection/>
  </section>
</template>


<script setup>
import FeatureCardSection from '@/components/sections/home/FeatureCardSection.vue'
import HeroSection from "@/components/sections/home/HeroSection.vue";
import StatisticSection from "@/components/sections/home/StatisticSection.vue";
import InstallSection from "@/components/sections/home/InstallSection.vue";
import PluginStoreHeroSection from "@/components/sections/home/PluginStoreHeroSection.vue";
import CrewSection from "@/components/sections/home/CrewSection.vue";
import NewsletterRegisterSection from "@/components/sections/home/NewsletterRegisterSection.vue";
import BabFileSection from "@/components/sections/home/BabFileSection.vue"

import ChipMessageComponent from "@/components/common/ChipMessageComponent.vue";

</script>
