<template>
  <a
      :href="href"
      :class="[
      'font-semibold transition-all duration-300 group px-6 py-3 rounded-lg text-center flex items-center justify-center gap-2',
      variantClasses[variant]
    ]"
  >
    <span v-if="leftIcon" aria-hidden="true" class="material-symbols-outlined h-{{iconSize}} shrink-0">{{ leftIcon }}</span>

    <slot />
    <span v-if="rightIcon" aria-hidden="true" class="material-symbols-outlined h-{{iconSize}} shrink-0">{{ rightIcon }}</span>

  </a>
</template>

<script setup>

const props = defineProps({
  href: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'tertiary'].includes(value)
  },
  leftIcon: {
    type: String,
    default: null
  },
  rightIcon: {
    type: String,
    default: null
  },
  iconSize: {
    type: Number,
    default: 20
  }
})

const variantClasses = {
  primary: 'bg-primary-400 border-2 border-primary-400 hover:border-primary-450 text-white hover:bg-primary-450 rounded-lg px-6 py-3 transition-all duration-400',
  secondary: 'border-2 border-secondary-400 text-secondary-400 hover:bg-secondary-400 hover:bg-opacity-20 hover:text-white rounded-lg px-6 py-3 transition-all duration-300',
  tertiary: 'border-2 border-transparent text-gray-600 hover:bg-gray-100 rounded-lg px-6 py-3 transition-all duration-300'
}
</script>