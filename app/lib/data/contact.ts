import type { ContactInfo } from '../types';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@darkwaresystems.com',
    href: 'mailto:contact@darkwaresystems.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+92 42 32020809',
    href: 'tel:+924232020809',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: 'Lahore, Pakistan',
    href: 'https://maps.google.com/?q=Lahore,Pakistan',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'Follow us on LinkedIn',
    href: 'https://linkedin.com/company/darkware-systems',
  },
];

export const businessHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];
