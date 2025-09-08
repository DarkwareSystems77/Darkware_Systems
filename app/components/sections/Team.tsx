import { motion } from 'framer-motion';
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  Award,
  Users,
  Clock,
  Target,
} from 'lucide-react';

export function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Chen',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in tech innovation and digital transformation.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/alexchen',
        twitter: 'https://twitter.com/alexchen',
        github: 'https://github.com/alexchen',
        email: 'alex@darkwaresystems.com',
      },
      skills: ['Leadership', 'Strategy', 'Innovation'],
      achievements: 'Forbes 30 Under 30',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Technical architect specializing in scalable systems and cloud infrastructure.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/sarahjohnson',
        twitter: 'https://twitter.com/sarahjohnson',
        github: 'https://github.com/sarahjohnson',
        email: 'sarah@darkwaresystems.com',
      },
      skills: ['Cloud Architecture', 'DevOps', 'Security'],
      achievements: 'AWS Certified Solutions Architect',
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      role: 'Lead Developer',
      bio: 'Full-stack developer passionate about creating exceptional user experiences.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/michaelrodriguez',
        twitter: 'https://twitter.com/michaelrodriguez',
        github: 'https://github.com/michaelrodriguez',
        email: 'michael@darkwaresystems.com',
      },
      skills: ['React', 'Node.js', 'TypeScript'],
      achievements: 'Open Source Contributor',
    },
    {
      id: 4,
      name: 'Emily Watson',
      role: 'Security Specialist',
      bio: 'Cybersecurity expert focused on protecting digital assets and ensuring compliance.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/emilywatson',
        twitter: 'https://twitter.com/emilywatson',
        github: 'https://github.com/emilywatson',
        email: 'emily@darkwaresystems.com',
      },
      skills: ['Penetration Testing', 'Compliance', 'Risk Assessment'],
      achievements: 'CISSP Certified',
    },
    {
      id: 5,
      name: 'David Kim',
      role: 'AI/ML Engineer',
      bio: 'Machine learning specialist developing intelligent solutions for complex problems.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/davidkim',
        twitter: 'https://twitter.com/davidkim',
        github: 'https://github.com/davidkim',
        email: 'david@darkwaresystems.com',
      },
      skills: ['Python', 'TensorFlow', 'Data Science'],
      achievements: 'Published Researcher',
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      role: 'UX/UI Designer',
      bio: 'Creative designer crafting intuitive and beautiful digital experiences.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/lisathompson',
        twitter: 'https://twitter.com/lisathompson',
        github: 'https://github.com/lisathompson',
        email: 'lisa@darkwaresystems.com',
      },
      skills: ['Figma', 'User Research', 'Prototyping'],
      achievements: 'Design Award Winner',
    },
  ];

  const stats = [
    { icon: Users, value: '25+', label: 'Team Members' },
    { icon: Award, value: '50+', label: 'Certifications' },
    { icon: Clock, value: '5+', label: 'Years Experience' },
    { icon: Target, value: '100%', label: 'Client Satisfaction' },
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
            Meet Our{' '}
            <span className="text-green-400 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our diverse team of experts brings together decades of experience in
            technology, design, and innovation to deliver exceptional results
            for our clients.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-green-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/10">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400/20 to-green-300/10 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-20 h-20 bg-green-400/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-400">
                        {member.name
                          .split(' ')
                          .map(n => n[0])
                          .join('')}
                      </span>
                    </div>
                  </div>

                  {/* Achievement Badge */}
                  <div className="absolute -top-2 -right-2 bg-green-400 text-black text-xs px-2 py-1 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    {member.achievements}
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-green-400 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map(skill => (
                      <span
                        key={skill}
                        className="bg-green-400/10 text-green-400 text-xs px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <motion.a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-400/20 hover:text-green-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-400/20 hover:text-green-400 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-400/20 hover:text-green-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    href={`mailto:${member.social.email}`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-400/20 hover:text-green-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-green-400/10 to-green-300/10 border border-green-400/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Team
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals who share our
              passion for innovation and excellence. Explore our open positions
              and become part of our growing team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-300 transition-colors"
              >
                View Open Positions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-green-400/50 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400/10 transition-colors"
              >
                Send Your Resume
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
