<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Skills Section -->
    <SkillsSection />

    <!-- Experience Section -->
    <ExperienceSection />

    <!-- Projects Section -->
    <ProjectsSection />

    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>
