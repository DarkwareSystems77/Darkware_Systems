import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS, COMPANY_INFO } from '~/lib/constants';
import { scrollToSection } from '~/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Software Development', href: '#services' },
      { name: 'Cybersecurity', href: '#services' },
      { name: 'Digital Transformation', href: '#services' },
      { name: 'Cloud Services', href: '#services' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href.slice(1));
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/images/logowithoutbg.png"
                  alt="Darkware Systems Logo"
                  className="w-18 h-18 object-contain"
                />
                <span className="text-2xl font-bold text-white">
                  Darkware Systems
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                {COMPANY_INFO.description}
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map(social => {
                  const iconMap = {
                    linkedin: Linkedin,
                    twitter: Twitter,
                    github: Github,
                    mail: Mail,
                  } as const;

                  const IconComponent =
                    iconMap[social.icon as keyof typeof iconMap];

                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-green-700 hover:text-white transition-colors"
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-3">
            {Object.entries(footerLinks).map(
              ([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white font-semibold mb-4 capitalize">
                    {category.replace('_', ' ')}
                  </h3>
                  <ul className="space-y-3">
                    {links.map(link => (
                      <li key={link.name}>
                        <motion.button
                          onClick={() => handleLinkClick(link.href)}
                          whileHover={{ x: 5 }}
                          className="text-gray-400 hover:text-green-700 transition-colors text-left"
                        >
                          {link.name}
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest insights, updates, and
              technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-10 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-700 focus:ring-1 focus:ring-green-700 focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookie Policy</span>
            </div>

            {/* Back to Top Button
            <motion.button
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-black hover:bg-green-300 transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
