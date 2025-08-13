<template>
  <section id="about" class="py-20 bg-gray-950">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2
          class="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          About Me
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 class="text-2xl font-semibold mb-6 text-white">Who am I?</h3>
          <p class="text-gray-300 mb-6 leading-relaxed">
            I'm a passionate programmer and web developer specializing in creating robust, scalable
            applications. With expertise in modern web technologies and blockchain development, I
            focus on building solutions that make a real impact in academic and business
            environments.
          </p>
          <p class="text-gray-300 mb-6 leading-relaxed">
            My experience spans from developing comprehensive academic management systems to
            implementing cutting-edge blockchain solutions for document verification and certificate
            management using Hyperledger Fabric.
          </p>
          <p class="text-gray-300 mb-8 leading-relaxed">
            I'm particularly interested in the intersection of traditional web development and
            emerging blockchain technologies, always looking for innovative ways to solve complex
            problems.
          </p>

          <div class="grid grid-cols-2 gap-6 mt-8">
            <Card
              class="text-center p-6 bg-gray-900 border-gray-800 hover:border-purple-500 transition-colors"
            >
              <div class="text-3xl font-bold text-purple-400 mb-2">
                {{ stats.yearsExperience }}+
              </div>
              <div class="text-gray-400 text-sm">Work Experience</div>
            </Card>
            <Card
              class="text-center p-6 bg-gray-900 border-gray-800 hover:border-pink-500 transition-colors"
            >
              <div class="text-3xl font-bold text-pink-400 mb-2">
                {{ stats.projectsCompleted }}+
              </div>
              <div class="text-gray-400 text-sm">Projects Completed</div>
            </Card>
          </div>
        </div>

        <div class="space-y-6">
          <Card class="p-6 bg-gray-900 border-gray-800 hover:border-purple-500 transition-colors">
            <div class="flex items-center gap-4">
              <div class="p-3 rounded-lg bg-purple-500/10">
                <Mail class="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div class="text-sm text-gray-400 mb-1">Email</div>
                <a
                  :href="`mailto:${personalInfo.contact.email}`"
                  class="text-white hover:text-purple-400 transition-colors"
                >
                  {{ personalInfo.contact.email }}
                </a>
              </div>
            </div>
          </Card>

          <Card class="p-6 bg-gray-900 border-gray-800 hover:border-pink-500 transition-colors">
            <div class="flex items-center gap-4">
              <div class="p-3 rounded-lg bg-pink-500/10">
                <Phone class="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <div class="text-sm text-gray-400 mb-1">Phone</div>
                <a
                  :href="`tel:${personalInfo.contact.phone}`"
                  class="text-white hover:text-pink-400 transition-colors"
                >
                  {{ personalInfo.contact.phone }}
                </a>
              </div>
            </div>
          </Card>

          <Card class="p-6 bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors">
            <div class="flex items-center gap-4">
              <div class="p-3 rounded-lg bg-blue-500/10">
                <MapPin class="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div class="text-sm text-gray-400 mb-1">Location</div>
                <div class="text-white">{{ personalInfo.contact.location }}</div>
              </div>
            </div>
          </Card>

          <div class="flex gap-4 pt-4">
            <Button
              variant="outline"
              size="icon"
              as-child
              class="border-gray-700 hover:border-purple-500 hover:bg-purple-500/10"
            >
              <a
                :href="personalInfo.contact.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin class="w-5 h-5 text-purple-400" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              as-child
              class="border-gray-700 hover:border-pink-500 hover:bg-pink-500/10"
            >
              <a
                :href="personalInfo.contact.github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github class="w-5 h-5 text-pink-400" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-vue-next'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { usePortfolioData } from '@/composables/usePortfolioData'

const { personalInfo, stats } = usePortfolioData()
</script>
