<template>
  <section class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-800 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
            class="object-cover object-center rounded-lg shadow-lg"
            alt="hero"
            src="https://dummyimage.com/720x600"
        />
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl font-semibold text-white mb-4">
          Stay Updated with Our Latest News!
        </h1>
        <p class="mb-8 text-lg leading-relaxed text-white opacity-90">
          Subscribe to our newsletter and get the latest news, updates, and promotions delivered straight to your inbox.
        </p>

        <div class="flex w-full md:justify-start justify-center items-end">
          <div class="relative mr-4 lg:w-1/2 w-full">
            <label for="email" class="leading-7 text-sm text-white opacity-80">Enter your email</label>
            <input
                v-model="email"
                type="email"
                id="email"
                name="email"
                class="w-full bg-white bg-opacity-70 rounded-lg border border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-base outline-none text-gray-800 py-2 px-4 mb-4 focus:border-indigo-600 transition duration-200 ease-in-out"
                placeholder="Your email address"
            />
          </div>
          <button
              @click="handleSubmit"
              class="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded-lg text-lg transition duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </div>

        <p class="text-sm mt-2 text-white opacity-80 mb-8 w-full">
          Stay connected with us for more exciting updates.
        </p>


      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const handleSubmit = () => {
  console.log(`Subscribed with email tetstest: ${email.value}`);
  email.value = '';
};
</script>