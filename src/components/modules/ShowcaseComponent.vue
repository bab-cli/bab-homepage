<template>
  <div class="glass-container min-w-full sm:min-w-[520px] max-w-[520px] h-[300px] rounded-lg overflow-hidden">

    <div class="flex items-center bg-gray-800 p-4 pb-2 pt-2 border-b border-gray-700">
      <div class="flex space-x-2 mr-auto">
        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div class="text-gray-300 text-sm flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
        Examples
      </div>
    </div>

    <div class="p-4 text-green-400 text-left font-mono text-sm ">
      <div class="mb-2">
        <span class="text-gray-500 font-mono select-none">$ </span>{{ displayedCommand }}<span
          class="animate-blink font-sans select-none">▋</span>
      </div>
      <div v-if="displayedResponse" class="font-mono text-white">
        <pre class=" font-mono" v-html="displayedResponse"></pre>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  typingSpeed: {
    type: Number,
    default: 35
  },
  pauseBetweenCommands: {
    type: Number,
    default: 1000
  },
  showCursor: {
    type: Boolean,
    default: true
  },
  commandsFolder:{
    type: String,
    default: 'examples'
  },
  random: {
    type: Boolean,
    default: false
  },
  loop: {
    type: Boolean,
    default: true
  }
})

const displayedCommand = ref('')
const displayedResponse = ref('')

const parseColorCodes = (text) => {
  return text.replace(/\{\{color:\s*(\w+)\}\}(.*?)\{\{\/color\}\}/g, (match, color, content) => {
    return `<span style="color: ${color};">${content}</span>`;
  });
}

const loadCommandsFromFiles = async () => {
  const commands = [];

  const commandFolders = {
    notFound: import.meta.glob('@/assets/showcases/notFound/*.txt'),
    examples: import.meta.glob('@/assets/showcases/examples/*.txt')
  }

  const commandFiles = commandFolders[props.commandsFolder] || commandFolders['defaultCommands'];

  for (const path in commandFiles) {
    const module = await commandFiles[path]();
    const text = await fetch(module.default).then(response => response.text());
    const [command, ...responseLines] = text.split('\n');
    const response = parseColorCodes(responseLines.join('\n'));
    commands.push({ command: command.trim(), response });
  }

  if (props.random) {
    for (let i = commands.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [commands[i], commands[j]] = [commands[j], commands[i]];
    }
  }

  return commands;
}

const animateCommand = async (command, response) => {
  displayedCommand.value = '';
  displayedResponse.value = '';

  for (let i = 0; i < command.length; i++) {
    displayedCommand.value += command[i];
    await new Promise(resolve => setTimeout(resolve, props.typingSpeed));
  }

  await new Promise(resolve => setTimeout(resolve, 100));

  displayedResponse.value = response;

  if (props.loop) {
    await new Promise(resolve => setTimeout(resolve, props.pauseBetweenCommands));

    for (let i = command.length - 1; i >= 0; i--) {
      displayedCommand.value = displayedCommand.value.slice(0, -1);
      await new Promise(resolve => setTimeout(resolve, props.typingSpeed / 2));
    }
  }
}

const startCommandLoop = async () => {
  const commands = await loadCommandsFromFiles()

  if (props.loop) {
    while (true) {
      for (const {command, response} of commands) {
        await animateCommand(command, response)
        await new Promise(resolve => setTimeout(resolve, props.pauseBetweenCommands))
      }
    }
  } else {
    if (commands.length > 0) {
      const { command, response } = commands[0];
      await animateCommand(command, response);
    }
  }
}

onMounted(() => {
  startCommandLoop()
})
</script>

<style>
@keyframes blink {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.animate-blink {
  animation: blink 1s infinite;
}

.glass-container {
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-container .text-green-400 {
  color: #32cd32;
}
</style>