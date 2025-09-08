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
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'contact@darkwaresystems.com',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'Innovation City',
      addressRegion: 'IC',
      postalCode: '12345',
      addressCountry: 'US',
    },
    sameAs: [
      'https://linkedin.com/company/darkware-systems',
      'https://twitter.com/darkwaresystems',
      'https://github.com/darkware-systems',
    ],
    foundingDate: '2024',
    numberOfEmployees: '25',
    services: [
      'Software Development',
      'Cybersecurity',
      'Digital Transformation',
      'Cloud Services',
      'Mobile Development',
      'AI/ML Solutions',
    ],
    areaServed: 'Worldwide',
    knowsAbout: [
      'React',
      'Node.js',
      'TypeScript',
      'Python',
      'AWS',
      'Azure',
      'Google Cloud',
      'Cybersecurity',
      'Machine Learning',
      'Blockchain',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
