<template>
  <section id="projects" class="projects-section py-20">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2
          class="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        <p class="text-gray-400 mt-6 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in software development.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <Card
          v-for="(project, index) in projects"
          :key="index"
          class="group p-6 bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
        >
          <!-- Project Image Placeholder -->
          <div
            class="mb-6 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
              <Code class="w-16 h-16" />
            </div>

            <!-- Project Status Badge -->
            <Badge :variant="getProjectStatus(project).variant" class="absolute top-3 right-3">
              {{ getProjectStatus(project).label }}
            </Badge>
          </div>

          <div class="mb-4">
            <h3
              class="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2"
            >
              {{ project.title }}
            </h3>
            <p class="text-gray-300 leading-relaxed mb-4 line-clamp-3">
              {{ project.description }}
            </p>
          </div>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2 mb-6">
            <Badge
              v-for="tech in project.tech"
              :key="tech"
              variant="secondary"
              :class="getTechBadgeClass(tech)"
            >
              {{ tech }}
            </Badge>
          </div>

          <!-- Project Links -->
          <div class="flex gap-3">
            <Button
              v-if="project.liveUrl && project.liveUrl !== '#'"
              variant="default"
              size="sm"
              as-child
              class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <a
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2"
              >
                <ExternalLink class="w-4 h-4" />
                Live Demo
              </a>
            </Button>

            <Button
              v-if="project.githubUrl && project.githubUrl !== '#'"
              variant="outline"
              size="sm"
              as-child
              class="border-gray-600 hover:border-purple-400 hover:text-purple-400"
            >
              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2"
              >
                <Github class="w-4 h-4" />
                Source Code
              </a>
            </Button>

            <Button
              v-if="!project.liveUrl || project.liveUrl === '#'"
              variant="outline"
              size="sm"
              disabled
              class="border-gray-700 text-gray-500"
            >
              <Lock class="w-4 h-4 mr-2" />
              Private
            </Button>
          </div>
        </Card>
      </div>

      <!-- More Projects CTA -->
      <div class="text-center mt-12">
        <p class="text-gray-400 mb-6">Interested in seeing more of my work?</p>
        <Button
          variant="outline"
          size="lg"
          as-child
          class="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
        >
          <a
            href="https://github.com/nas11ai"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2"
          >
            <Github class="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  background-image: url('@/assets/projects-bg.svg');
  background-size: cover;
  background-position: center;
}
</style>

<script setup lang="ts">
import { Code, ExternalLink, Github, Lock } from 'lucide-vue-next'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { usePortfolioData } from '@/composables/usePortfolioData'
import type { Project } from '@/types'

const { projects } = usePortfolioData()

// Function to get project status
const getProjectStatus = (project: Project) => {
  if (project.liveUrl && project.liveUrl !== '#') {
    return { label: 'Live', variant: 'default' as const }
  }
  return { label: 'Development', variant: 'secondary' as const }
}

// Function to get tech badge styling based on technology
const getTechBadgeClass = (tech: string): string => {
  const techColors: Record<string, string> = {
    Laravel: 'bg-red-500/10 text-red-300 border-red-500/20',
    'Vue.js': 'bg-green-500/10 text-green-300 border-green-500/20',
    TypeScript: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    MySQL: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
    PostgreSQL: 'bg-blue-600/10 text-blue-300 border-blue-600/20',
    Docker: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    'Hyperledger Fabric': 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    'Node.js': 'bg-green-600/10 text-green-300 border-green-600/20',
    Redis: 'bg-red-600/10 text-red-300 border-red-600/20',
    'Tailwind CSS': 'bg-teal-500/10 text-teal-300 border-teal-500/20',
  }

  return techColors[tech] || 'bg-gray-500/10 text-gray-300 border-gray-500/20'
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
