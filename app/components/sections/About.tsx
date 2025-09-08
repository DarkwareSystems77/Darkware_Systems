import { motion } from 'framer-motion';
import { Shield, Target, Zap, Users } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description:
        'We prioritize the security and integrity of every solution we build.',
    },
    {
      icon: Target,
      title: 'Precision',
      description:
        'Every project is executed with meticulous attention to detail.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description:
        'We leverage cutting-edge technologies to deliver exceptional results.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'We work closely with our clients to understand their unique needs.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            About{' '}
            <span className="text-green-400 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Darkware Systems
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are a cutting-edge technology company specializing in innovative
            software solutions, cybersecurity services, and digital
            transformation strategies that help businesses thrive in the modern
            digital landscape.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-green-400/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-6 text-center">
              Our Mission
            </h3>
            <p className="text-lg text-gray-300 text-center leading-relaxed max-w-4xl mx-auto">
              To empower businesses with innovative technology solutions that
              drive growth, enhance security, and transform digital experiences.
              We believe in the power of technology to solve complex challenges
              and create meaningful impact.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group text-center"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 h-full hover:border-green-400/40 transition-all duration-300">
                <motion.div
                  className="w-16 h-16 bg-green-400/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-400/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-8 h-8 text-green-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-green-400/10 to-green-300/10 border border-green-400/20 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '50+', label: 'Happy Clients' },
                { number: '100+', label: 'Projects Delivered' },
                { number: '99%', label: 'Success Rate' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
