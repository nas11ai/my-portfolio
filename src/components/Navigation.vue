<template>
  <nav
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrollY > 50 ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <router-link
          to="/"
          class="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          NK
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            class="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            {{ item.label }}
          </a>
        </div>

        <!-- Mobile menu button -->
        <Button variant="ghost" size="icon" class="md:hidden" @click="isMenuOpen = !isMenuOpen">
          <Menu v-if="!isMenuOpen" class="h-6 w-6" />
          <X v-else class="h-6 w-6" />
        </Button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <Transition name="fade">
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-black/95 backdrop-blur-lg border-b border-gray-800"
      >
        <div class="px-6 py-4 space-y-3">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            class="block text-gray-300 hover:text-white transition-colors duration-300"
            @click="isMenuOpen = false"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

interface NavItem {
  label: string
  href: string
}

const scrollY = ref(0)
const isMenuOpen = ref(false)

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
