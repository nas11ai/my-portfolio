<template>
  <section id="experience" class="experience-section py-20 bg-gray-950">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2
          class="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Experience
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
      </div>

      <div class="relative">
        <!-- Timeline line -->
        <div
          class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"
        ></div>

        <div class="space-y-8">
          <Card
            v-for="(exp, index) in experiences"
            :key="index"
            class="relative p-6 bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300 md:ml-20"
          >
            <!-- Timeline dot -->
            <div
              class="absolute -left-[4.5rem] top-8 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-950 hidden md:block"
            ></div>

            <div class="flex items-start gap-6">
              <div class="flex-shrink-0 md:hidden">
                <div
                  class="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
                >
                  <Briefcase class="w-6 h-6 text-white" />
                </div>
              </div>

              <div class="flex-grow">
                <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div class="mb-2 lg:mb-0">
                    <h3 class="text-xl font-semibold text-white mb-1">{{ exp.title }}</h3>
                    <div class="text-purple-400 font-medium text-lg">{{ exp.company }}</div>
                  </div>
                  <div class="text-gray-400 text-sm lg:text-right">
                    <Badge variant="outline" class="mb-1 border-gray-600 text-gray-300">
                      {{ exp.period }}
                    </Badge>
                    <div v-if="exp.location" class="flex items-center gap-1 lg:justify-end">
                      <MapPin class="w-3 h-3" />
                      <span>{{ exp.location }}</span>
                    </div>
                  </div>
                </div>

                <p class="text-gray-300 leading-relaxed">{{ exp.description }}</p>

                <!-- Skills tags if available -->
                <div v-if="getExperienceSkills(index)" class="flex flex-wrap gap-2 mt-4">
                  <Badge
                    v-for="skill in getExperienceSkills(index)"
                    :key="skill"
                    variant="secondary"
                    class="bg-gray-800 text-gray-300 hover:bg-gray-700"
                  >
                    {{ skill }}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <!-- Education Section -->
      <div class="mt-20">
        <h3 class="text-2xl font-semibold text-white mb-8 text-center">
          Education & Certifications
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <Card class="p-6 bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors">
            <div class="flex items-start gap-4">
              <div class="p-3 rounded-lg bg-blue-500/10">
                <GraduationCap class="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white mb-1">
                  Institut Teknologi Kalimantan (ITK)
                </h4>
                <p class="text-blue-400 mb-2">Diploma - Informatics</p>
                <p class="text-gray-400 text-sm">07/2020 - 10/2025</p>
              </div>
            </div>
          </Card>

          <Card class="p-6 bg-gray-900 border-gray-800 hover:border-green-500 transition-colors">
            <div class="flex items-start gap-4">
              <div class="p-3 rounded-lg bg-green-500/10">
                <Award class="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white mb-1">
                  Certified Blockchain Professional
                </h4>
                <p class="text-green-400 mb-2">EC-Council</p>
                <p class="text-gray-400 text-sm">Blockchain technology expertise</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  background-image: url('@/assets/experience-bg.svg');
  background-size: cover;
  background-position: center;
}
</style>

<script setup lang="ts">
import { Briefcase, MapPin, GraduationCap, Award } from 'lucide-vue-next'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { usePortfolioData } from '@/composables/usePortfolioData'

const { experiences } = usePortfolioData()

// Function to get relevant skills for each experience
const getExperienceSkills = (index: number): string[] => {
  const skillsByExperience = [
    ['Laravel', 'Vue.js', 'MySQL', 'Database Design', 'Docker', 'Git'], // UNIBA
    ['Node.js', 'Laravel', 'RESTful APIs', 'Database Design', 'Vue.js', 'MySQL', 'Git', 'Firebase'], // Valtech
    ['Cloud Computing', 'Google Cloud', 'DevOps'], // Bangkit
  ]
  return skillsByExperience[index] || []
}
</script>
