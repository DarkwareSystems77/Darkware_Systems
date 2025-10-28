import { motion } from 'framer-motion';
import {
  Code,
  Shield,
  Zap,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Settings,
} from 'lucide-react';
import { scrollToSection } from '~/lib/utils';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description:
        'Custom web applications and software solutions built with MERN stack, .NET, and Python technologies.',
      features: [
        'MERN Stack Applications',
        '.NET Web Development',
        'Python Django/Flask',
        'React & Angular Frontend',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description:
        'Comprehensive security solutions and network protection with CCNA-certified expertise.',
      features: [
        'Network Security',
        'Security Audits',
        'Infrastructure Protection',
        'Compliance & Standards',
      ],
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud Infrastructure',
      description:
        'Scalable cloud solutions with CI/CD pipelines, containerization, and automated deployment.',
      features: [
        'CI/CD Pipelines',
        'Docker & Kubernetes',
        'Terraform Infrastructure',
        'Azure DevOps',
      ],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'User-centered design solutions that blend creativity with strategy for exceptional digital experiences.',
      features: [
        'UX Research & Analysis',
        'Prototyping & Wireframing',
        'Visual Design & Branding',
        'Frontend Development',
      ],
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description:
        'Strategic modernization of business processes and technology infrastructure for improved efficiency.',
      features: [
        'Legacy System Migration',
        'Process Optimization',
        'Technology Integration',
        'Strategic Consulting',
      ],
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: [
        'iOS Development',
        'Android Development',
        'React Native',
        'Flutter',
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Our{' '}
            <span className="text-green-700 bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We offer comprehensive technology solutions designed to accelerate
            your business growth and enhance your competitive advantage in the
            digital marketplace.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-green-700/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-700/10">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.6 + index * 0.1 + featureIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-green-700 rounded-full" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-700/5 to-green-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-green-700/10 to-green-600/10 border border-green-700/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help you achieve your digital
              transformation goals.
            </p>
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              Get a Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
