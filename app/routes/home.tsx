import type { Route } from './+types/home';
import { Section } from '../components/ui/Section';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
// import { Portfolio } from '../components/sections/Portfolio';
import { Team } from '../components/sections/Team';
import { Contact } from '../components/sections/Contact';
import { useSmoothScroll } from '../lib/hooks/useSmoothScroll';
import { useScrollOptimization } from '../lib/hooks/useScrollOptimization';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Darkware Systems - Innovative Solutions for the Digital Future' },
    {
      name: 'description',
      content:
        'Darkware Systems specializes in cutting-edge software development, cybersecurity solutions, and digital transformation services. We help businesses thrive in the modern digital landscape with innovative technology solutions.',
    },
    {
      name: 'keywords',
      content:
        'software development, cybersecurity, digital transformation, tech solutions, web development, mobile apps, cloud services, AI/ML, blockchain, React, Node.js, TypeScript, Python, AWS, Azure, Google Cloud',
    },
    {
      name: 'author',
      content: 'Darkware Systems',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'Darkware Systems - Innovative Solutions for the Digital Future',
    },
    {
      property: 'og:description',
      content:
        'We specialize in cutting-edge software development, cybersecurity solutions, and digital transformation services that help businesses thrive in the modern digital landscape.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://darkwaresystems.com',
    },
    {
      property: 'og:site_name',
      content: 'Darkware Systems',
    },
    {
      property: 'og:image',
      content: 'https://darkwaresystems.com/og-image.jpg',
    },
    {
      property: 'og:image:width',
      content: '1200',
    },
    {
      property: 'og:image:height',
      content: '630',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Darkware Systems - Innovative Solutions for the Digital Future',
    },
    {
      name: 'twitter:description',
      content:
        'We specialize in cutting-edge software development, cybersecurity solutions, and digital transformation services.',
    },
    {
      name: 'twitter:image',
      content: 'https://darkwaresystems.com/og-image.jpg',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'theme-color',
      content: '#00ff41',
    },
    {
      name: 'msapplication-TileColor',
      content: '#000000',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
  ];
}

export default function Home() {
  useSmoothScroll();
  useScrollOptimization();

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <Section id="about">
        <About />
      </Section>

      {/* Services Section */}
      <Section id="services">
        <Services />
      </Section>

      {/* Portfolio Section */}
      {/* <Section id="portfolio">
        <Portfolio />
      </Section> */}

      {/* Team Section */}
      <Section id="team">
        <Team />
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <Contact />
      </Section>
    </div>
  );
}
