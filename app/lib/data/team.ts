import type { TeamMember } from '../types';
import { Linkedin, Twitter, Github, Dribbble } from 'lucide-react';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Muhammad Saqib',
    role: 'Active Developer',
    bio: 'Experienced full-stack developer with expertise in modern web technologies and cloud solutions.',
    image: '/images/team/saqib.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/saqib',
      twitter: 'https://twitter.com/saqib',
      github: 'https://github.com/saqib',
    },
    skills: ['React', 'Node.js', 'Python', 'AWS'],
    achievements: 'Led development of 50+ successful projects',
  },
  {
    id: 2,
    name: 'Haseeb',
    role: 'Lead Developer',
    bio: 'Passionate about creating innovative solutions and mentoring junior developers.',
    image: '/images/team/haseeb.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/haseeb',
      github: 'https://github.com/haseeb',
    },
    skills: ['TypeScript', 'React', 'GraphQL', 'Docker'],
    achievements: 'Contributed to open-source projects with 1000+ stars',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'UI/UX Designer',
    bio: 'Creative designer focused on user-centered design and modern interfaces.',
    image: '/images/team/sarah.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/sarah',
      dribbble: 'https://dribbble.com/sarah',
    },
    skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
    achievements: 'Designed award-winning mobile applications',
  },
  {
    id: 4,
    name: 'Alex Chen',
    role: 'DevOps Engineer',
    bio: 'Infrastructure specialist with expertise in cloud automation and CI/CD pipelines.',
    image: '/images/team/alex.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/alex',
      github: 'https://github.com/alex',
    },
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    achievements: 'Reduced deployment time by 80% through automation',
  },
  {
    id: 5,
    name: 'Emily Rodriguez',
    role: 'Data Scientist',
    bio: 'Analytics expert specializing in machine learning and business intelligence.',
    image: '/images/team/emily.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/emily',
      github: 'https://github.com/emily',
    },
    skills: ['Python', 'Machine Learning', 'SQL', 'Tableau'],
    achievements: 'Built predictive models with 95% accuracy',
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'Security Specialist',
    bio: 'Cybersecurity expert focused on protecting businesses from digital threats.',
    image: '/images/team/david.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/david',
      github: 'https://github.com/david',
    },
    skills: ['Penetration Testing', 'Security Auditing', 'Compliance', 'Incident Response'],
    achievements: 'Prevented 100+ security breaches for clients',
  },
];
