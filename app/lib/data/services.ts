import type { Service } from '../types';
import { 
  Code, 
  Shield, 
  Smartphone, 
  Database, 
  Cloud, 
  Zap 
} from 'lucide-react';

export const services: Service[] = [
  {
    id: 1,
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs',
    features: ['Web Applications', 'Desktop Applications', 'API Development', 'System Integration'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your business from cyber threats with our security solutions',
    features: ['Security Audits', 'Penetration Testing', 'Security Consulting', 'Incident Response'],
    color: 'from-red-500 to-red-600',
  },
  {
    id: 3,
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Modernize your business processes with cutting-edge technology',
    features: ['Process Automation', 'Cloud Migration', 'Legacy System Modernization', 'Digital Strategy'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 4,
    icon: Database,
    title: 'Data Solutions',
    description: 'Unlock insights from your data with our analytics and BI solutions',
    features: ['Data Analytics', 'Business Intelligence', 'Data Warehousing', 'Machine Learning'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 5,
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and services for your business',
    features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps Services', 'Cloud Security'],
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 6,
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
    color: 'from-green-500 to-green-600',
  },
];

export const serviceCategories = [
  'Software Development',
  'Cybersecurity',
  'Digital Transformation',
  'Data Solutions',
  'Cloud Services',
  'Mobile Development',
  'Consulting',
  'Other',
];
