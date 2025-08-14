<template>
  <section id="skills" class="skills-section py-20">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2
          class="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          v-for="(skillGroup, index) in skills"
          :key="index"
          :class="[
            'p-6 bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300 group',
            skillGroup.colSpan ? 'lg:col-span-2' : '',
          ]"
        >
          <div class="flex items-center gap-3 mb-4">
            <component :is="skillGroup.icon" :class="['w-7 h-7', skillGroup.color]" />
            <h3 class="text-xl font-semibold text-white">{{ skillGroup.title }}</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="skill in skillGroup.items"
              :key="skill"
              :variant="'secondary'"
              :class="skillGroup.badgeClass"
            >
              {{ skill }}
            </Badge>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  background-image: url('@/assets/skills-bg.svg');
  background-size: cover;
  background-position: center;
}
</style>

<script setup lang="ts">
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { usePortfolioData } from '@/composables/usePortfolioData'

const { skills } = usePortfolioData()
</script>
