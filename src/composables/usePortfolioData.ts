import { ref, readonly } from 'vue'
import type { Experience, Project, PersonalInfo, SkillGroup } from '@/types'
import { Code, Server, Database, Cloud, Award } from 'lucide-vue-next'

// Personal Information
const personalInfo: PersonalInfo = {
  name: "Muhammad Nasa'i Kairupan",
  title: 'Software Engineer & Blockchain Enthusiast',
  description:
    'Passionate web developer specializing in Laravel, Vue.js, and blockchain technologies. Experienced in creating academic operational systems and innovative web3 applications.',
  contact: {
    email: 'kairupannasai@gmail.com',
    phone: '+62 877 1884 6152',
    location: 'Balikpapan, Indonesia',
    linkedin: 'https://linkedin.com/in/muhammad-nasa-i-kairupan',
    github: 'https://github.com/nas11ai',
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
    title: 'Full Stack Web Developer',
    company: 'Valtech',
    period: '11/2023 - Present',
    location: 'Balikpapan, Indonesia',
    description:
      'Working as a freelancer on Valtech and building robust end-to-end web applications using modern technologies. Focus on scalable architecture and performance optimization.',
  },
  {
    title: 'Cloud Computing Cohort',
    company: 'Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka',
    period: '07/2022 - 11/2022',
    description:
      'Intensive training program focused on cloud computing technologies, modern development practices, and industry best practices. Gained expertise in cloud infrastructure and deployment strategies.',
  },
]

// Projects Data
const projects: Project[] = [
  {
    title: 'Partnership Information Management System',
    description:
      'A web-based CMS-like system for managing institutional partnership data, dynamic content, customizable forms, and partnership documents of Institut Teknologi Kalimantan (ITK).',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Docker'],
    liveUrl: 'https://sikera.uniba-bpn.ac.id',
    githubUrl: '#',
  },
  {
    title: 'Academic and Financial Management System of Balikpapan University',
    description:
      'Developed and maintained end-to-end academic and financial operational systems, covering frontend, backend services, database, and server infrastructure to ensure system reliability and scalability.',
    tech: ['Laravel', 'Node.js', 'Vue.js', 'MySQL', 'Redis', 'Docker'],
    liveUrl: 'https://siat.uniba-bpn.ac.id/',
    githubUrl: '#',
  },
  {
    title: 'Real Estate Management Web Application',
    description:
      'Designed and developed scalable backend services and RESTful APIs for a real estate property management system, including database schema design, Git- and Docker-based automation, and integration with frontend applications.',
    tech: ['Node.js', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://www.noblepropertiesasia.com',
    githubUrl: '#',
  },
  {
    title: 'Blockchain Applied Research for Public Document Management System',
    description:
      'Conducted applied research to develop a blockchain-based system for managing academic certificates, national ID cards, and land ownership documents.',
    tech: [
      'Node.js',
      'Vue.js',
      'PostgreSQL',
      'Blockchain',
      'Hyperledger Fabric',
      'Docker',
      'Firebase',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/nas11ai/tugas-akhir',
  },
]

const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: Code,
    color: 'text-purple-400',
    badgeClass: 'bg-purple-500/10 text-purple-300 border-purple-500/20 hover:bg-purple-500/20',
    items: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'text-pink-400',
    badgeClass: 'bg-pink-500/10 text-pink-300 border-pink-500/20 hover:bg-pink-500/20',
    items: ['Laravel', 'Node.js', 'PHP', 'RESTful APIs', 'Firebase'],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'text-blue-400',
    badgeClass: 'bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20',
    items: ['MySQL', 'PostgreSQL', 'Redis', 'Database Design'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'text-green-400',
    badgeClass: 'bg-green-500/10 text-green-300 border-green-500/20 hover:bg-green-500/20',
    items: ['Cloud Computing', 'Docker', 'AWS', 'Google Cloud'],
  },
  {
    title: 'Blockchain & Web3',
    icon: Award,
    color: 'text-yellow-400',
    badgeClass: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20 hover:bg-yellow-500/20',
    items: ['Hyperledger Fabric', 'Web3', 'Smart Contracts', 'Blockchain Development'],
    colSpan: true,
  },
]

const startDate = new Date(2023, 1)
const now = new Date()

const diffYears = now.getFullYear() - startDate.getFullYear()
const yearsExperience = now.getMonth() < startDate.getMonth() ? diffYears - 1 : diffYears

// Statistics
const stats = ref({
  yearsExperience,
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
    skills: readonly(skills),
  }
}
