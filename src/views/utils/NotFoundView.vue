<template>
  <section class="flex flex-col mt-40 xl:gap-20 xl:flex-row items-center justify-center px-4 py-8">
    <div class="w-full xl:justify-end justify-center flex xl:w-1/2  mb-8 xl:mb-0">
      <ShowcaseComponent commandsFolder="notFound" :random=true :loop=false />
    </div>

    <NotFoundContent />
  </section>
</template>

<script>
import ShowcaseComponent from "@/components/modules/ShowcaseComponent.vue";
import NotFoundContent from "@/components/common/NotFoundComponent.vue";

export default {

  name: 'NotFoundView',
  components: {
    ShowcaseComponent,
    NotFoundContent,
  },
}
</script>
