import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Eye,
} from 'lucide-react';
import { scrollToSection } from '~/lib/utils';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with advanced analytics, payment integration, and inventory management.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
    },
    {
      id: 2,
      title: 'Cybersecurity Dashboard',
      description:
        'Real-time security monitoring dashboard with threat detection and incident response capabilities.',
      image: '/api/placeholder/600/400',
      category: 'security',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description:
        'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
      image: '/api/placeholder/600/400',
      category: 'mobile',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'AWS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
    },
    {
      id: 4,
      title: 'AI-Powered Analytics',
      description:
        'Machine learning platform for predictive analytics and business intelligence insights.',
      image: '/api/placeholder/600/400',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
    },
    {
      id: 5,
      title: 'Cloud Migration Tool',
      description:
        'Automated cloud migration platform with cost optimization and performance monitoring.',
      image: '/api/placeholder/600/400',
      category: 'cloud',
      technologies: ['Go', 'Kubernetes', 'Terraform', 'Prometheus'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
    },
    {
      id: 6,
      title: 'Blockchain Wallet',
      description:
        'Multi-cryptocurrency wallet with DeFi integration and advanced security features.',
      image: '/api/placeholder/600/400',
      category: 'blockchain',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'blockchain', name: 'Blockchain' },
  ];

  const filteredProjects = projects.filter(
    project => activeFilter === 'all' || project.category === activeFilter
  );

  const featuredProjects = projects.filter(project => project.featured);

  const nextProject = () => {
    setCurrentProject(prev => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject(
      prev => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  return (
    <section className="py-20 px-4 bg-gray-900">
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
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our latest projects and see how we've helped businesses
            transform their digital presence with innovative technology
            solutions.
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Featured Projects
          </h3>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-green-700/20 rounded-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Project Image */}
                      <div className="relative h-64 md:h-96 bg-gradient-to-br from-green-700/20 to-green-600/10">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 bg-green-700/20 rounded-full flex items-center justify-center">
                            <Eye className="w-16 h-16 text-green-700" />
                          </div>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="mb-4">
                          {featuredProjects[currentProject].technologies.map(
                            (tech, index) => (
                              <span
                                key={tech}
                                className="inline-block bg-green-700/10 text-green-700 text-xs px-3 py-1 rounded-full mr-2 mb-2"
                              >
                                {tech}
                              </span>
                            )
                          )}
                        </div>

                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                          {featuredProjects[currentProject].title}
                        </h4>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {featuredProjects[currentProject].description}
                        </p>

                        <div className="flex space-x-4">
                          <motion.a
                            href={featuredProjects[currentProject].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </motion.a>

                          <motion.a
                            href={featuredProjects[currentProject].githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 border border-green-700/50 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-700/10 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <motion.button
              onClick={prevProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-green-700/20 rounded-full flex items-center justify-center text-green-700 hover:bg-green-700/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={nextProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-green-700/20 rounded-full flex items-center justify-center text-green-700 hover:bg-green-700/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentProject ? 'bg-green-700' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-green-700 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-green-700/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-700/10">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-green-700/20 to-green-600/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-green-700/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Eye className="w-8 h-8 text-green-700" />
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 bg-green-700/20 backdrop-blur-sm rounded-full flex items-center justify-center text-green-700 hover:bg-green-700 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 bg-green-700/20 backdrop-blur-sm rounded-full flex items-center justify-center text-green-700 hover:bg-green-700 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span
                          key={tech}
                          className="inline-block bg-green-700/10 text-green-700 text-xs px-2 py-1 rounded-full mr-2 mb-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-green-700 transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-green-700/10 to-green-600/10 border border-green-700/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can bring your vision to life with our
              expertise and innovative solutions.
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
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
