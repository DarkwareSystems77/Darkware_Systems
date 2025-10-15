export const COMPANY_INFO = {
  name: 'Darkware Systems',
  tagline: 'Innovative Solutions for the Digital Future',
  description:
    'We specialize in cutting-edge software development, cybersecurity solutions, and digital transformation services.',
  email: 'contact@darkwaresystems.com',
  phone: '+92 42 32020809',
  address: '34 Emma Street, Accrington, Manchester, United Kingdom',
  founded: '2024',
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  // { name: 'Portfolio', href: '#portfolio' },
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
