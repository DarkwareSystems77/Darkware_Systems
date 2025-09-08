import { motion } from 'framer-motion';
import { Code, Shield, Zap, Database, Cloud, Smartphone } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description:
        'Custom software solutions tailored to your business needs using modern technologies and best practices.',
      features: [
        'Web Applications',
        'Mobile Apps',
        'API Development',
        'Cloud Integration',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description:
        'Protect your digital assets with comprehensive security solutions and threat monitoring.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Incident Response',
        'Compliance',
      ],
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description:
        'Modernize your business processes and technology stack for improved efficiency.',
      features: [
        'Process Automation',
        'Legacy Migration',
        'Cloud Migration',
        'Data Analytics',
      ],
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Database,
      title: 'Data Solutions',
      description:
        'Harness the power of your data with advanced analytics and business intelligence.',
      features: [
        'Data Warehousing',
        'Business Intelligence',
        'Machine Learning',
        'Predictive Analytics',
      ],
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description:
        'Scalable and secure cloud infrastructure solutions for your business needs.',
      features: [
        'Cloud Architecture',
        'DevOps',
        'Containerization',
        'Monitoring',
      ],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
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
    <section className="py-20 px-4">
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
            <span className="text-green-400 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
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
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-green-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/10">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
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
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-green-300/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
          <div className="bg-gradient-to-r from-green-400/10 to-green-300/10 border border-green-400/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help you achieve your digital
              transformation goals.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-300 transition-colors"
            >
              Get a Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
