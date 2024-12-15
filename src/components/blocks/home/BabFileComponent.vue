<template>
  <div class="relative bg-[#121418]">
  <div class="mx-auto max-w-7xl px-10 sm:px-20">
    <div class="grid py-40 lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-6 lg:pr-12">
        <h1 class="text-5xl font-bold tracking-tight text-white">
          Create Your Custom .bab Files
        </h1>
        <p class="mt-4 text-lg leading-8 text-gray-300">
          No coding required! Create stunning text tranformator plugins using .bab files.
        </p>

        <div class="mt-8 grid grid-cols-1 gap-6">
          <div class="flex items-start space-x-4 bg-[#151923] p-4 rounded-lg">

            <svg class="w-10 text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm-.293 9.293a1 1 0 0 1 0 1.414L9.414 14l1.293 1.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0Zm2.586 1.414a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L14.586 14l-1.293-1.293Z" clip-rule="evenodd"/>
            </svg>

            <div>
              <h3 class="text-base font-semibold">Simple Syntax</h3>
              <p class="text-sm text-gray-300">BAB files feature a simple, powerful syntax that lets you create plugins without the need for complex code.</p>
            </div>
          </div>
          <div class="flex items-start space-x-4 bg-[#151923] p-4 rounded-lg">
            <svg class="w-10 text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 14h-2.722L11 20.278a5.511 5.511 0 0 1-.9.722H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM9 3H4a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V4a1 1 0 0 0-1-1ZM6.5 18.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.132 7.9 15.6 4.368a1 1 0 0 0-1.414 0L12 6.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
            </svg>


            <div>
              <h3 class="text-base font-semibold">Predefined Effects</h3>
              <p class="text-sm text-gray-300">No need to start from scratch. Bab files come with a handy set of predefined text decorators and effexts to simplify your work.</p>
            </div>
          </div>
        </div>
      </div>
        <div class="relative lg:absolute lg:right-0 lg:top-[15%] lg:bottom-0 lg:w-1/2 xl:pl-20 mt-10 lg:mt-0">
          <div class="bg-gray-900 lg:rounded-none lg:rounded-tl-lg rounded-lg shadow-xl overflow-hidden lg:h-full">
            <div class="bg-gray-800 flex items-center">
              <div class="px-4 py-3 flex space-x-1.5">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div class="flex-1">
                <div class="flex">
                  <button
                      v-for="(file, index) in files"
                      :key="index"
                      @click="activeTab = index"
                      :class="[
                      'px-4 py-2 text-sm font-medium',
                      activeTab === index
                        ? 'text-white bg-gray-700'
                        : 'text-gray-400 hover:text-white'
                    ]"
                  >
                    {{ file.name }}
                  </button>
                </div>
              </div>
            </div>
            <pre class="select-none p-8 pt-2 text-sm text-white overflow-hidden max-w-full h-[calc(100%-50px)] whitespace-pre-wrap">
  <code v-html="files[activeTab].content"></code>
</pre>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureHero',
  data() {
    return {
      activeTab: 0,
      files: [
        {
          name: 'mascot.bab',
          content: `
<span class="text-yellow-400">plugin:</span>
  <span class="text-green-400">name</span>: <span class="text-pink-400">"Custom Mascot"</span>
  <span class="text-green-400">description</span>: <span class="text-pink-400">"Creates custom speech bubble and mascot"</span>

<span class="text-yellow-400">bubble:</span>
  <span class="text-green-400">shape:</span> "rounded"
  <span class="text-green-400">width:</span> 40
  <span class="text-green-400">padding:</span> 3
  <span class="text-green-400">color:</span> "blue"

<span class="text-yellow-400">mascot:</span>
  <span class="text-green-400">name:</span> "cat"
  <span class="text-green-400">color:</span> "orange"
  <span class="text-blue-400">art:</span> |
    <span class="text-gray-400">  /\\_/\\ </span>
    <span class="text-gray-400"> ( o.o ) </span>
    <span class="text-gray-400">  > ^ <  </span>

    `
        },
        {
          name: 'font.bab',
          content: `
<span class="text-yellow-400">plugin:</span>
  <span class="text-green-400">name</span>: <span class="text-pink-400">"Font Changer"</span>
  <span class="text-green-400">description</span>: <span class="text-pink-400">"Turns normal chars in another font"</span>

<span class="text-yellow-400">transformations:</span>
  <span class="text-green-400">A</span>: <span class="text-pink-400">"𝒜"</span>
  <span class="text-green-400">B</span>: <span class="text-pink-400">"𝐵"</span>
  <span class="text-green-400">C</span>: <span class="text-pink-400">"𝒞"</span>
  <span class="text-green-400">D</span>: <span class="text-pink-400">"𝒟"</span>
  <span class="text-green-400">E</span>: <span class="text-pink-400">"𝐸"</span>
  <span class="text-green-400">F</span>: <span class="text-pink-400">"𝐹"</span>
  <span class="text-green-400">G</span>: <span class="text-pink-400">"𝒢"</span>
  <span class="text-green-400">H</span>: <span class="text-pink-400">"𝐻"</span>
  <span class="text-green-400">I</span>: <span class="text-pink-400">"𝐼"</span>
  <span class="text-green-400">J</span>: <span class="text-pink-400">"𝒥"</span>
  <span class="text-green-400">K</span>: <span class="text-pink-400">"𝒦"</span>
  <span class="text-green-400">L</span>: <span class="text-pink-400">"𝐿"</span>
  <span class="text-green-400">M</span>: <span class="text-pink-400">"𝑀"</span>
  <span class="text-green-400">N</span>: <span class="text-pink-400">"𝒩"</span>
  <span class="text-green-400">O</span>: <span class="text-pink-400">"𝒪"</span>
  <span class="text-green-400">P</span>: <span class="text-pink-400">"𝒫"</span>
  <span class="text-green-400">Q</span>: <span class="text-pink-400">"𝒬"</span>
  <span class="text-green-400">R</span>: <span class="text-pink-400">"𝓇"</span>
  <span class="text-green-400">S</span>: <span class="text-pink-400">"𝒮"</span>
  <span class="text-green-400">T</span>: <span class="text-pink-400">"𝒯"</span>
  <span class="text-green-400">U</span>: <span class="text-pink-400">"𝒰"</span>
  <span class="text-green-400">V</span>: <span class="text-pink-400">"𝒱"</span>
  <span class="text-green-400">W</span>: <span class="text-pink-400">"𝒲"</span>
  <span class="text-green-400">X</span>: <span class="text-pink-400">"𝒳"</span>
  <span class="text-green-400">Y</span>: <span class="text-pink-400">"𝒴"</span>
  <span class="text-green-400">Z</span>: <span class="text-pink-400">"𝒵"</span>
`
        }
      ]

    }
  }
}
</script>