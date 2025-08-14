<template>
  <section
    id="hero"
    class="hero-section min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    <!-- Animated Background -->
    <div class="absolute inset-0">
      <div
        class="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"
      ></div>
    </div>

    <div class="max-w-4xl mx-auto text-center px-6 relative z-10">
      <div class="mb-8">
        <div
          class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 float"
        >
          <div class="w-full h-full rounded-full bg-black flex items-center justify-center">
            <User class="w-12 h-12 text-white" />
          </div>
        </div>
      </div>

      <h1 class="text-5xl md:text-7xl font-bold mb-6">
        <span
          class="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
        >
          Muhammad Nasa'i
        </span>
        <br />
        <span class="text-white">Kairupan</span>
      </h1>

      <p class="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
        Software Engineer & Blockchain Enthusiast
      </p>

      <p class="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
        Passionate web developer specializing in Laravel, Node.js, Vue.js, and blockchain
        technologies. Experienced in creating web applications.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          as-child
          class="bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <a href="#contact">Get In Touch</a>
        </Button>

        <Button
          variant="outline"
          class="text-white bg-black hover:bg-slate-800 hover:text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          @click="downloadCV"
        >
          <Download class="w-5 h-5 mr-2" />
          Download CV
        </Button>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown class="w-8 h-8 text-gray-400" />
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background-image: url('@/assets/hero-bg.svg');
  background-size: cover;
  background-position: center;
}
</style>

<script setup lang="ts">
import { User, Download, ChevronDown } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import cvFile from '@/assets/cv.pdf'

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = cvFile
  link.download = 'Muhammad-Nasai-Kairupan-CV.pdf'
  link.click()
}
</script>
