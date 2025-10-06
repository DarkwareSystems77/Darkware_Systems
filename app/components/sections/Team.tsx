import { motion } from 'framer-motion';
import { Linkedin, Award, Users, Clock, Target } from 'lucide-react';

export function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Farman Ali',
      role: 'CEO & Founder',
      bio: 'As an IT professional with 6+ years of expertise in Networking (CCNA) and Cybersecurity, and 3–4 years of business development experience, I lead Darkware Systems with a focus on secure, reliable technology solutions. My background in network security, infrastructure management, and advanced protection strategies drives the company’s vision to deliver trusted and innovative IT services that align with clients’ evolving needs.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/muzammal',
        twitter: 'https://twitter.com/muzammal',
        github: 'https://github.com/muzammal',
        email: 'muzammal@darkwaresystems.com',
      },
      skills: ['CI/CD', 'Terraform', 'Docker', 'Kubernetes', 'AWS'],
      achievements: '5+ Years Experience',
    },
    {
      id: 2,
      name: 'Muzammal Hussain',
      role: 'CTO & Co-Founder',
      bio: 'As a seasoned CTO with 5 years of experience, I specialize in DevOps, Networking, Android, and Frontend Development, driving innovation and operational efficiency. I have a strong track record of building scalable, secure infrastructures and developing modern, user-centric applications. My focus is on aligning technology strategies with business objectives, leading cross-functional teams, and implementing automated solutions that deliver seamless digital experiences',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/muhammadsajid',
        twitter: 'https://twitter.com/muhammadsajid',
        github: 'https://github.com/muhammadsajid',
        email: 'sajid@darkwaresystems.com',
      },
      skills: ['MERN Stack', '.NET', 'Azure DevOps', 'CI/CD'],
      achievements: '5+ Years Experience',
    },
    {
      id: 3,
      name: 'Farman Ali',
      role: 'IT Professional & Business Development',
      bio: 'Experienced IT professional with 6+ years in Networking (CCNA) and Cybersecurity, plus 3–4 years in Business Development. Combines technical expertise and strategic insight.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/farmanali',
        twitter: 'https://twitter.com/farmanali',
        github: 'https://github.com/farmanali',
        email: 'farman@darkwaresystems.com',
      },
      skills: ['Networking', 'CCNA', 'Cybersecurity', 'Business Development'],
      achievements: 'CCNA Certified',
    },
    {
      id: 4,
      name: 'Khadeeja',
      role: 'MERN Stack Developer',
      bio: 'Skilled MERN Stack Developer with 5 years of experience building dynamic, scalable, and user-focused web applications. Creates seamless front-end experiences and robust back-end systems.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/khadeeja',
        twitter: 'https://twitter.com/khadeeja',
        github: 'https://github.com/khadeeja',
        email: 'khadeeja@darkwaresystems.com',
      },
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN Stack'],
      achievements: '5+ Years Experience',
    },
    {
      id: 5,
      name: 'Maryam Ali',
      role: 'Full Stack Python Developer',
      bio: 'Full Stack Python Developer with 4 years of experience in building scalable, user-friendly web applications. Skilled in Python, Django, Flask, React, and Angular.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/maryamali',
        twitter: 'https://twitter.com/maryamali',
        github: 'https://github.com/maryamali',
        email: 'maryam@darkwaresystems.com',
      },
      skills: ['Python', 'Django', 'Flask', 'React', 'Angular'],
      achievements: '4+ Years Experience',
    },
    {
      id: 6,
      name: 'Coming Soon',
      role: 'Team Member',
      bio: 'We are excited to welcome our next team member. Details coming soon.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'info@darkwaresystems.com',
      },
      skills: ['TBA'],
      achievements: 'Details Pending',
    },
  ];

  const stats = [
    { icon: Users, value: '6', label: 'Team Members' },
    { icon: Award, value: '10+', label: 'Certifications' },
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
            <span className="text-green-700 bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
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
              <div className="w-16 h-16 bg-green-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-green-700" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
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
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-green-700/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-700/10">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-700/20 to-green-600/10 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-20 h-20 bg-green-700/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-700">
                        {member.name
                          .split(' ')
                          .map(n => n[0])
                          .join('')}
                      </span>
                    </div>
                  </div>

                  {/* Achievement Badge */}
                  <div className="absolute -top-2 -right-2 bg-green-700 text-white text-xs px-2 py-1 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    {member.achievements}
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-green-700 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed text-justify break-words max-w-[24rem] md:max-w-[26rem] mx-auto">
                    {member.bio}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map(skill => (
                      <span
                        key={skill}
                        className="bg-green-700/10 text-green-700 text-xs px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center">
                  <motion.a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-700/20 hover:text-green-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
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
          <div className="bg-gradient-to-r from-green-700/10 to-green-600/10 border border-green-700/20 rounded-2xl p-8 md:p-12">
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
                  boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)',
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors"
              >
                View Open Positions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-green-700/50 text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700/10 transition-colors"
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
