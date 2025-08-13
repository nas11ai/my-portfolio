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
    linkedin: 'https://www.linkedin.com/in/muhammad-nasa-i-kairupan-3ba24b7/',
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
