import type { Component } from 'vue'

export interface Experience {
  title: string
  company: string
  period: string
  location?: string
  description: string
}

export interface Project {
  title: string
  description: string
  tech: readonly string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
}

export interface SkillGroup {
  title: string
  icon: Component
  color: string
  badgeClass: string
  items: string[]
  colSpan?: boolean
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  linkedin?: string
  github?: string
}

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface PersonalInfo {
  name: string
  title: string
  description: string
  contact: ContactInfo
}

export interface SkillGroup {
  title: string
  icon: Component
  color: string
  badgeClass: string
  items: string[]
  colSpan?: boolean
}
