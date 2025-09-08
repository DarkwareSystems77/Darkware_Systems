export const COMPANY_INFO = {
  name: 'Darkware Systems',
  tagline: 'Innovative Solutions for the Digital Future',
  description:
    'We specialize in cutting-edge software development, cybersecurity solutions, and digital transformation services.',
  email: 'contact@darkwaresystems.com',
  phone: '+1 (555) 123-4567',
  address: '123 Tech Street, Innovation City, IC 12345',
  founded: '2024',
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/darkware-systems',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/darkwaresystems',
    icon: 'twitter',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/darkware-systems',
    icon: 'github',
  },
  { name: 'Email', href: 'mailto:contact@darkwaresystems.com', icon: 'mail' },
] as const;
