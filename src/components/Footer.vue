<template>
  <footer class="py-8 border-t border-gray-800">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-gray-400 text-center">
        © {{ currentYear }} Muhammad Nasa'i Kairupan. Built with Vue.js, Tailwind CSS & Shadcn UI.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
