<template>
  <footer class="py-8 border-t border-gray-800">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="text-gray-400 text-center md:text-left">
          © {{ currentYear }} Muhammad Nasa'i Kairupan. Built with Vue.js, Tailwind CSS & Shadcn
          UI.
        </div>

        <div class="flex items-center gap-4">
          <Button
            v-for="social in socialLinks"
            :key="social.name"
            variant="ghost"
            size="icon"
            as-child
            class="text-gray-400 hover:text-white"
          >
            <a
              :href="social.url"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { usePortfolioData } from '@/composables/usePortfolioData'

const { personalInfo } = usePortfolioData()

const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  { 
    name: 'GitHub',
    url: personalInfo.contact.github || '#',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: personalInfo.contact.linkedin || '#',
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: `mailto:${personalInfo.contact.email}`,
    icon: Mail,
  },
]
</script>
