export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Darkware Systems',
    description:
      'We specialize in cutting-edge software development, cybersecurity solutions, and digital transformation services that help businesses thrive in the modern digital landscape.',
    url: 'https://darkwaresystems.com',
    logo: 'https://darkwaresystems.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-42-32020809',
      contactType: 'customer service',
      email: 'contact@darkwaresystems.com',
    },
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '34 Emma Street',
        addressLocality: 'Accrington, Manchester',
        addressRegion: 'England',
        addressCountry: 'United Kingdom',
      },
      {
        '@type': 'PostalAddress',
        streetAddress:
          '3rd Floor, CP 111, Fairways Commercial DHA Raya, Phase 6',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab',
        addressCountry: 'Pakistan',
      },
    ],
    sameAs: [
      'https://linkedin.com/company/darkware-systems',
      'https://twitter.com/darkwaresystems',
      'https://github.com/darkware-systems',
    ],
    foundingDate: '2024',
    numberOfEmployees: '25',
    services: [
      'Full-Stack Development',
      'Cybersecurity',
      'DevOps & Cloud Infrastructure',
      'UI/UX Design',
      'Digital Transformation',
      'Mobile App Development',
    ],
    areaServed: 'Worldwide',
    knowsAbout: [
      'MERN Stack',
      'React',
      'Node.js',
      'Python',
      '.NET',
      'Docker',
      'Kubernetes',
      'Azure DevOps',
      'Cybersecurity',
      'UI/UX Design',
      'DevOps',
      'CI/CD',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
