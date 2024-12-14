<template>
  <div v-if="isVisible" class="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 z-50">
    <div class="bg-[#4F39F6] px-3 py-2 text-white rounded-lg shadow-lg flex items-center gap-4 w-full">
      <div class="flex-1 flex items-center gap-2">
        <p class="font-semibold text-sm">{{ title }}</p>
        <span>
          <svg viewBox="0 0 12 12" aria-hidden="true" class="w-2.5 h-2.5">
            <circle r="2" cx="6" cy="6" fill="white"></circle>
          </svg>
        </span>
        <p class="text-sm text-ellipsis overflow-hidden">{{ message }}</p>
      </div>
      <button @click="close" class="text-white font-semibold focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
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
