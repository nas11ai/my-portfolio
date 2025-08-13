<template>
  <div id="app" class="min-h-screen bg-black text-white overflow-x-hidden">
    <!-- Navigation -->
    <Navigation />

    <!-- Router View for different pages -->
    <router-view />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.float {
  animation: float 6s ease-in-out infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
</style>
