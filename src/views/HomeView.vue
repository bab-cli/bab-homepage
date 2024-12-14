<template>
  <section class="xl:h-screen pt-[17vh] sm:pt-[15vh] xl:pt-[30vh]" id="hero">
    <HeroComponent/>

    <div class="bottom-0 xl:absolute block mt-[4.5rem] xl:mt-[6rem] sm:mb-[60px] pb-10 h-fit w-full">
      <StatisticComponent/>

    </div>


  </section>
  <section id="installation" class="hidden py-5 sm:block bg-[#111418] border-t-[2px] border-gray-800">
    <InstallComponent/>
  </section>
  <section class="border-t-[2px] py-40 border-gray-800">
    <FeatureCardComponent/>

  </section>

  <section class="border-t-[2px] border-gray-800">
    <PluginStoreHeroComponent/>
  </section>
  <section class="border-t-[2px] border-gray-800 py-5 sm:block bg-[#111418] border-b-[2px]">
    <TeamComponent/>

  </section>








</template>


<script setup>
import FeatureCardComponent from '@/components/modules/FeatureCardComponent.vue'
import HeroComponent from "@/components/blocks/home/HeroComponent.vue";
import StatisticComponent from "@/components/blocks/home/StatisticComponent.vue";
import InstallComponent from "@/components/blocks/home/InstallComponent.vue";
import PluginStoreHeroComponent from "@/components/blocks/home/PluginStoreHeroComponent.vue";
import TeamComponent from "@/components/blocks/home/TeamComponent.vue";
import OurPartnersComponent from "@/components/blocks/home/OurPartnersComponent.vue";

</script>
