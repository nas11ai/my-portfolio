<template>
  <footer class="py-8 border-t bg-purple-400 border-purple-500">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-white text-center">
        © {{ currentYear }} Muhammad Nasa'i Kairupan. Built with Vue.js, Tailwind CSS & Shadcn UI.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
