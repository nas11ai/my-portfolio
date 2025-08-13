<template>
  <section id="contact" class="py-20 bg-gray-950">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2
          class="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Let's Work Together
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          Ready to bring your ideas to life? I'm always interested in discussing new projects,
          creative ideas, or opportunities to be part of your vision.
        </p>
      </div>

      <!-- Contact Cards -->
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <Card
          class="text-center p-6 bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300 group"
        >
          <div class="mb-4 flex justify-center">
            <div
              class="p-4 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors"
            >
              <Mail class="w-8 h-8 text-purple-400" />
            </div>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Email</h3>
          <a
            :href="`mailto:${personalInfo.contact.email}`"
            class="text-gray-300 hover:text-purple-400 transition-colors break-all"
          >
            {{ personalInfo.contact.email }}
          </a>
        </Card>

        <Card
          class="text-center p-6 bg-gray-900 border-gray-800 hover:border-pink-500 transition-all duration-300 group"
        >
          <div class="mb-4 flex justify-center">
            <div
              class="p-4 rounded-full bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors"
            >
              <Phone class="w-8 h-8 text-pink-400" />
            </div>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Phone</h3>
          <a
            :href="`tel:${personalInfo.contact.phone}`"
            class="text-gray-300 hover:text-pink-400 transition-colors"
          >
            {{ personalInfo.contact.phone }}
          </a>
        </Card>

        <Card
          class="text-center p-6 bg-gray-900 border-gray-800 hover:border-blue-500 transition-all duration-300 group"
        >
          <div class="mb-4 flex justify-center">
            <div
              class="p-4 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"
            >
              <MapPin class="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Location</h3>
          <p class="text-gray-300">{{ personalInfo.contact.location }}</p>
        </Card>
      </div>

      <!-- Contact Form -->
      <Card class="p-8 bg-gray-900 border-gray-800 mb-12">
        <h3 class="text-2xl font-semibold text-white mb-6 text-center">Send Me a Message</h3>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                Your Name *
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                Your Email *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
              Subject *
            </label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              required
              class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="Project Discussion"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              required
              class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <div class="text-center">
            <Button
              type="submit"
              :disabled="isSubmitting"
              class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3"
            >
              <template v-if="isSubmitting">
                <Loader2 class="w-5 h-5 mr-2 animate-spin" />
                Sending...
              </template>
              <template v-else>
                <Send class="w-5 h-5 mr-2" />
                Send Message
              </template>
            </Button>
          </div>
        </form>
      </Card>

      <!-- Quick Contact Actions -->
      <div class="text-center space-y-6">
        <p class="text-gray-400">Prefer a more direct approach?</p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            as-child
            class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <a
              :href="`mailto:${personalInfo.contact.email}?subject=Project Inquiry`"
              class="flex items-center gap-2"
            >
              <Mail class="w-5 h-5" />
              Send Email Directly
            </a>
          </Button>

          <Button
            variant="outline"
            class="text-white bg-black hover:bg-slate-800 hover:border-blue-500 hover:text-blue-400 cursor-pointer"
          >
            <a
              :href="personalInfo.contact.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2"
            >
              <Linkedin class="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Mail, Phone, MapPin, Send, Linkedin, Loader2 } from 'lucide-vue-next'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { usePortfolioData } from '@/composables/usePortfolioData'

const { personalInfo } = usePortfolioData()

// Form state
const isSubmitting = ref(false)
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

// Handle form submission
const handleSubmit = async () => {
  isSubmitting.value = true

  try {
    // Here you can implement your form submission logic
    // For example: send to an API endpoint, or create a mailto link

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Create mailto link as fallback
    const mailtoLink = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    )}`

    window.location.href = mailtoLink

    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    console.log('Message sent successfully!')
  } catch (error) {
    console.error('Error sending message:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
