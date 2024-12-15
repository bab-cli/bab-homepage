<template>
  <div
      v-if="isVisible"
      class="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4"
  >
    <div
        class="
        notification
        bg-[#4F39F6]
        px-3.5
        py-2
        text-white
        rounded-lg
        shadow-lg
        flex
        items-center
        gap-2
        sm:gap-4
        max-w-min
        mx-auto
        relative
        animate-slide-up
      "
    >
      <div class="flex-1 flex items-center gap-2 overflow-hidden">
        <p class="
          font-semibold
          text-xs
          sm:text-sm
          whitespace-nowrap
          overflow-hidden
          text-ellipsis
        ">
          {{ title }}
        </p>
        <span class="flex-shrink-0">
          <svg viewBox="0 0 12 12" aria-hidden="true" class="w-2 sm:w-2.5 h-2 sm:h-2.5">
            <circle r="2" cx="6" cy="6" fill="white"></circle>
          </svg>
        </span>
        <p class="
          text-xs
          sm:text-sm
          overflow-hidden
          text-ellipsis
          whitespace-nowrap
        ">
          {{ message }}
        </p>
      </div>
      <button
          @click="close"
          class="
          text-white
          font-semibold
          focus:outline-none
          top-1/2
          right-2
          transition-transform
          transform
          hover:scale-110
        "
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-4 h-4 sm:w-5 sm:h-5"
        >
          <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FloatingBottomCentered',
  props: {
    title: {
      type: String,
      default: 'Notification',
    },
    message: {
      type: String,
      default: 'This is a message.',
    },
  },
  data() {
    return {
      isVisible: true,
    };
  },
  watch: {
    message(newMessage) {
      const messageKey = this.generateMessageKey(newMessage);
      this.clearOldMessages(messageKey);

      if (localStorage.getItem(messageKey) !== 'true') {
        this.isVisible = true;
      }
    },
  },
  mounted() {
    const messageKey = this.generateMessageKey(this.message);
    this.clearOldMessages(messageKey);

    if (localStorage.getItem(messageKey) === 'true') {
      this.isVisible = false;
    }
  },
  methods: {
    close() {
      this.isVisible = false;
      const messageKey = this.generateMessageKey(this.message);
      localStorage.setItem(messageKey, 'true');
    },
    generateMessageKey(message) {
      return `notificationClosed-${btoa(message)}`;
    },
    clearOldMessages(currentKey) {
      for (const key in localStorage) {
        if (key.startsWith('notificationClosed-') && key !== currentKey) {
          localStorage.removeItem(key);
        }
      }
    },
  },
};
</script>

<style scoped>
.notification {
  animation: slide-up 0.5s ease-out, fade-in 0.5s ease-out;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.notification-exit {
  opacity: 0;
  transform: translateY(20px);
}

@keyframes slide-up {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
