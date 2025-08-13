import { ref, readonly } from 'vue'
import type { Experience, Project, PersonalInfo } from '@/types'

// Personal Information
const personalInfo: PersonalInfo = {
  name: "Muhammad Nasa'i Kairupan",
  title: 'Software Engineer & Blockchain Enthusiast',
  description:
    'Passionate web developer specializing in Laravel, Vue.js, and blockchain technologies. Experienced in creating academic operational systems and innovative web3 applications.',
  contact: {
    email: 'nasa.kairupan@gmail.com',
    phone: '+62 877 5668 6152',
    location: 'Balikpapan, Indonesia',
    linkedin: 'https://www.linkedin.com/in/muhammad-nasa-i-kairupan-3ba24b7/',
    github: 'https://github.com/yourusername',
  },
}

// Experiences Data
const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Universitas Balikpapan (UNIBA)',
    period: '02/2023 - Present',
    location: 'Balikpapan, Indonesia',
    description:
      'Developing academic operational systems including student enrollment, exam applications, and academic process management systems using Laravel and Vue.js. Implementing modern development practices and automated deployment workflows.',
  },
  {
    title: 'Back End Developer',
    company: 'Kramakata',
    period: '06/2022 - Present',
    location: 'Jakarta, Indonesia',
    description:
      'Building robust backend systems and APIs for various web applications using modern technologies. Focus on scalable architecture and performance optimization.',
  },
  {
    title: 'Cloud Computing Cohort',
    company: 'Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka',
    period: '07/2020',
    description:
      'Intensive training program focused on cloud computing technologies, modern development practices, and industry best practices. Gained expertise in cloud infrastructure and deployment strategies.',
  },
]

// Projects Data
const projects: Project[] = [
  {
    title: 'Blockchain Research & Community Service Information System (SIMPAS)',
    description:
      'Designed and developed a comprehensive information system for ITK to manage research and community service proposals. Integrated blockchain technology using Hyperledger Fabric for document verification and certificate management.',
    tech: ['Laravel', 'Vue.js', 'Hyperledger Fabric', 'MySQL', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Computer-Based Testing Application',
    description:
      'Developed a comprehensive CBT platform to digitize and simplify the examination process at Universitas Balikpapan. Features include automated grading, real-time monitoring, and detailed analytics.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Docker', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Web Deployment Process Automation',
    description:
      'Streamlined web deployment processes at UNIBA using automated Git-based workflow. Implemented CI/CD pipelines that significantly reduced deployment time and minimized human errors.',
    tech: ['Git', 'Docker', 'Cloud Computing', 'CI/CD', 'Linux'],
    githubUrl: '#',
  },
  {
    title: 'Academic Management System',
    description:
      'Comprehensive system for managing student enrollment, academic processes, and administrative operations. Built with modern web technologies and responsive design for optimal user experience.',
    tech: ['Laravel', 'Vue.js', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
]

// Statistics
const stats = ref({
  yearsExperience: 3,
  projectsCompleted: 10,
  technologiesUsed: 15,
  clientsSatisfied: 8,
})

export const usePortfolioData = () => {
  return {
    personalInfo: readonly(personalInfo),
    experiences: readonly(experiences),
    projects: readonly(projects),
    stats: readonly(stats),
  }
}
