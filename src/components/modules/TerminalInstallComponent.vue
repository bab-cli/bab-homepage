<template>
  <div class="terminal-container">
    <div :class="terminalThemeClass" class="terminal-window text-left overflow-hidden rounded-lg shadow-2xl">
      <div v-if="isMacOrLinux" class="terminal-header mac-linux-header flex items-center justify-start gap-2.5 p-4 pb-0">
        <span class="control-button close-btn w-3 h-3 bg-red-500 rounded-full"></span>
        <span class="control-button minimize-btn w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span class="control-button maximize-btn w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      <div v-if="isWindows" class="windows-titlebar">
        <div class="flex items-center space-x-2.5">
          <img
              src="@/assets/powershell.svg"
              alt="Terminal Icon"
              class="windows-icon w-5 h-5"
          />
          <span class="text-[13.5px] text-black">Powershell</span>
        </div>
        <div class="window-controls flex">
          <button aria-label="Minimize" class="window-control">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
              <line x1="1" y1="5" x2="9" y2="5"></line>
            </svg>
          </button>
          <button aria-label="Maximize" class="window-control">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect x="1" y="1" width="8" height="8"></rect>
            </svg>
          </button>
          <button aria-label="Close" class="window-control close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
              <line x1="1" y1="1" x2="9" y2="9"></line>
              <line x1="9" y1="1" x2="1" y2="9"></line>
            </svg>
          </button>
        </div>
      </div>

      <div class="terminal-body p-4 text-green-400">
        <div class="flex font-mono items-center">
          <span v-if="isMacOrLinux" class="os-indicator text-gray-500 select-none mr-2">$</span>
          <span v-if="isWindows" class="os-indicator text-gray-500 select-none mr-2">C:\></span>
          <span class="command-text break-keep">
            {{ command }}<span class="cursor-blink animate-blink cursor font-sans select-none">▋</span>
          </span>
        </div>
      </div>

    </div>
    <div class="text-center select-none text-gray-400 mt-6 text-lg">
      Using
      <a
          class="underline cursor-pointer hover:text-gray-100"
          @click="toggleTheme"
          aria-label="Toggle between Windows and Unix installation"
      >
        {{ theme === 'windows' ? 'Linux/MacOS?' : 'Windows?' }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, computed, watch, PropType} from 'vue'

const detectOS = (): 'windows' | 'unix' => {
  const userAgent = navigator.userAgent.toLowerCase()
  if (userAgent.includes('win')) return 'windows'
  if (userAgent.includes('mac')) return 'unix'
  if (userAgent.includes('linux')) return 'unix'
  return 'windows'
}

const setCommandForOS = (os: 'windows' | 'unix') => {
  switch (os) {
    case 'unix':
      return 'curl -fsSL https://bab.sh/install.sh | sh'
    case 'windows':
      return 'iwr https://bab.sh/Install.ps1 | iex'
    default:
      return ''
  }
}

const props = defineProps({
  os: {
    type: String as PropType<'windows' | 'unix'>,
    default: null
  }
})

const theme = ref<'windows' | 'unix'>('windows')
const command = ref('')

onMounted(() => {
  if (props.os) {
    theme.value = props.os
  } else {
    theme.value = detectOS()
  }
  command.value = setCommandForOS(theme.value)
})

watch(() => props.os, (newOS) => {
  if (newOS) {
    theme.value = newOS
    command.value = setCommandForOS(newOS)
  }
})

const toggleTheme = () => {
  theme.value = theme.value === 'windows' ? 'unix' : 'windows'
  command.value = setCommandForOS(theme.value)
}

const isMacOrLinux = computed(() => ['unix'].includes(theme.value))
const isWindows = computed(() => theme.value === 'windows')

const terminalThemeClass = computed(() => {
  return theme.value === 'windows' ? 'bg-[#042353]' : 'bg-[#1e1e1e]'
})
</script>

<style scoped>
@keyframes blink {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.terminal-header{
  padding-bottom: 4px;
}

.animate-blink {
  animation: blink 1s infinite;
}

.terminal-window {
  width: auto;
  min-width: 0;
  overflow: hidden;
}

.windows-titlebar {
  position: relative;
  height: 32px;
  display: flex;
  font-family: "Segoe UI", Arial, sans-serif;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 10px;
  background-color: #EEF4F8;
}

.window-controls {
  display: flex;
  gap: 0;
}

.window-control {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 32px;
  background-color: transparent;
  border: none;
  outline: none;
  transition: background-color 200ms ease-in-out;
}

.window-control svg {
  stroke: black;
  stroke-width: 1.2;
  transition: stroke 150ms ease-in-out;
}

.window-control:hover {
  background-color: #d5d9de;
}

.window-control.close-btn:hover {
  background-color: #D32F2F;
  transition: background-color 150ms ease-in-out;
}
.window-control.close-btn:hover svg {
  stroke: white;
  transition: stroke 150ms ease-in-out;
}
.terminal-body {
  white-space: nowrap;

  word-break: keep-all;
}

.terminal-container {
  width: 500px;
}

.os-indicator {
  margin-right: 10px;
}

.command-text {
  word-wrap: break-word;
}

.cursor-blink {
  margin-left: 10px;
}
</style>
