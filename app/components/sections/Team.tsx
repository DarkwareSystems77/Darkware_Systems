import { motion } from 'framer-motion';
import {
  Linkedin,
  Award,
  Users,
  Clock,
  Target,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { scrollToSection } from '~/lib/utils';
import { useState, useEffect } from 'react';

export function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Farman Ali',
      role: 'CEO & Founder',
      bio: 'As an IT professional with 6+ years of expertise in Networking (CCNA) and Cybersecurity, and 3–4 years of business development experience, I lead Darkware Systems with a focus on secure, reliable technology solutions. My background in network security, infrastructure management, and advanced protection strategies drives the company’s vision to deliver trusted and innovative IT services that align with clients’ evolving needs.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://www.linkedin.com/in/farmanali4181?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
 skills: ['Cybersecurity','Networking (CCNA)', 'Business Development', 'Leadership'],
  
      achievements: '5+ Years Experience',
    },
    {
      id: 2,
      name: 'Muzammal Hussain',
      role: 'CTO & Co-Founder',
      bio: 'As a seasoned CTO with 5 years of experience, I specialize in DevOps, Networking, Android, and Frontend Development, driving innovation and operational efficiency. I have a strong track record of building scalable, secure infrastructures and developing modern, user-centric applications. My focus is on aligning technology strategies with business objectives, leading cross-functional teams, and implementing automated solutions that deliver seamless digital experiences',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://www.linkedin.com/in/muzammal831',
      },
      skills: ['CI/CD', 'Terraform', 'Docker', 'Kubernetes'],
      achievements: '5+ Years Experience',
    },
    {
      id: 3,
      name: 'Muhammad Sajid',
      role: 'Software Engineer',
      bio: 'Muhammad Sajid is a software engineer with 5 years of experience in MERN stack and .NET development. He has strong expertise in building secure, scalable web applications and cloud solutions. Proficient in Azure DevOps, he streamlines CI/CD pipelines and deployment workflows.Sajid is passionate about delivering high-performance, reliable, and future-ready applications.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/muhammadsajid906',
      },
      skills: ['MERN Stack', '.NET', 'Azure DevOps', 'CI/CD'],
      achievements: 'CCNA Certified',
    },
    {
      id: 4,
      name: 'Qamar Iqbal',
      role: 'Chief Operating Officer',
      bio: 'Chief Operating Officer at Darkware Systems, driving systemic thinking and strategic leadership. Leveraging over a decade of expertise in systems design. Focuses on operational excellence and sustainable business growth. Expert in process optimization and team development strategies.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://www.linkedin.com/in/qamariqbal111',
      },
      skills: [
        'Strategic Leadership',
        'Business Development',
        'Systems Design',
        'Operations',
      ],
      achievements: '10+ Years Experience',
    },
    {
      id: 5,
      name: 'Maryam Ali',
      role: 'Full Stack Python Developer',
      bio: 'Experienced Full Stack Python Developer with 4 years of expertise in designing web applications. Specializes in Python, Django, Flask, React, and Angular. Enjoys solving complex problems and creating efficient, maintainable code solutions. Dedicated to continuous learning and staying updated with latest industry trends.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://www.linkedin.com/in/maryamali-softwarengineer/',
      },
      skills: ['Python', 'Django', 'Flask', 'React', 'Angular'],
      achievements: '4+ Years Experience',
    },
    {
      id: 6,
      name: 'Khadeeja Asif',
      role: 'MERN Stack Developer',
      bio: 'Dedicated MERN Stack Developer with 5 years of hands-on experience delivering dynamic web applications. Excels in React, Node.js, and MongoDB. Passionate about creating seamless user experiences and robust backend systems. Focuses on writing clean, scalable code and implementing modern development practices.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://www.linkedin.com/in/khadeejah-asif/',
      },
      skills: ['React', 'Node.js', 'Express', 'MongoDB'],
      achievements: '5+ Years Experience',
    },
    {
      id: 7,
      name: 'Mehar Muskan',
      role: 'UI/UX Designer & Graphic Designer',
      bio: 'Passionate and results-driven UI/UX Designer with 4 years of experience creating visually engaging, user-focused web and mobile solutions. Known for blending creativity with strategy, she designs digital experiences that not only look beautiful but also drive performance and business growth. Skilled in UX research, prototyping, and visual design, with strong proficiency in graphic design tools delivering complete brand consistency across every platform.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://www.linkedin.com/in/mehar-muskan',
      },
      skills: ['UX Research', 'Prototyping', 'Visual Design', 'Brand Design'],
      achievements: '4+ Years Experience',
    },
    {
      id: 8,
      name: 'Muneeb Ur Rehman',
      role: 'UI/UX Designer',
      bio: 'UI/UX Designer with 5 years of experience crafting seamless, user-focused designs and developing engaging frontend experiences. Specializes in creating intuitive interfaces that bridge the gap between design and development. Expert in user research, wireframing, and translating complex requirements into elegant, functional designs that enhance user engagement and drive business success.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://www.linkedin.com/in/themuneebch',
      },
      skills: [
        'User Research',
        'Wireframing',
        'Frontend Development',
        'Interface Design',
      ],
      achievements: '5+ Years Experience',
    },
    {
      id: 9,
      name: 'Muhammad Asif Munir',
      role: 'Flutter Developer',
      bio: 'Experienced Flutter Developer with 5 years of professional expertise specializing in cross-platform mobile application development. Skilled in building high-performance, visually appealing, and scalable applications for Android and iOS. Possesses deep understanding of Flutter framework, Dart, and state management solutions. Proficient in integrating with various back-end services, and delivering seamless user experience in frontend development.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://www.linkedin.com/in/muhammadasif4744',
      },
      skills: ['Flutter', 'Dart', 'Cross-Platform', 'State Management'],
      achievements: '5+ Years Experience',
    },
    {
      id: 10,
      name: 'Iqra Rasheed',
      role: 'MERN Stack Developer',
      bio: 'MERN Stack Developer with 3 years of experience building dynamic and user-friendly web applications. Specializes in MongoDB, Express.js, React, and Node.js, creating scalable solutions with clean and efficient code. Passionate about crafting great user experiences and continuously learning new technologies to deliver innovative web solutions that meet modern business requirements.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://www.linkedin.com/in/iqra-rasheed-mern',
      },
      skills: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      achievements: '3+ Years Experience',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1); // Default to 1 for mobile
  const totalSlides = Math.ceil(teamMembers.length / cardsPerView);

  // Handle responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1); // 1 card on mobile
      } else {
        setCardsPerView(2); // 2 cards on tablet and desktop
      }
    };

    // Set initial value
    updateCardsPerView();

    // Add event listener
    window.addEventListener('resize', updateCardsPerView);

    // Cleanup
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Reset current slide when cardsPerView changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [cardsPerView]);

  const stats = [
    { icon: Users, value: '10', label: 'Team Members' },
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

        {/* Team Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mb-8">
            <motion.button
              onClick={() =>
                setCurrentSlide(prev =>
                  prev === 0 ? totalSlides - 1 : prev - 1
                )
              }
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-green-700/20 text-green-700 hover:bg-green-700/30 hover:text-green-600"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-green-700 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={() =>
                setCurrentSlide(prev =>
                  prev === totalSlides - 1 ? 0 : prev + 1
                )
              }
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-green-700/20 text-green-700 hover:bg-green-700/30 hover:text-green-600"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 flex">
                  {teamMembers
                    .slice(
                      slideIndex * cardsPerView,
                      (slideIndex + 1) * cardsPerView
                    )
                    .map((member, memberIndex) => (
                      <div
                        key={member.id}
                        className="w-full flex-shrink-0 px-4"
                        style={{ width: `${100 / cardsPerView}%` }}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: memberIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          whileHover={{ y: -10 }}
                          className="group"
                        >
                          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-[520px] w-full flex flex-col justify-between hover:border-green-700/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-700/10">
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
                              <div className="absolute -top-2 -right-2 bg-green-700 text-white text-xs px-2 py-1 rounded-full font-semibold">
                                {member.achievements}
                              </div>
                            </div>

                            {/* Member Info */}
                            <div className="text-center mb-6 flex-1 flex flex-col">
                              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-700 transition-colors">
                                {member.name}
                              </h3>
                              <p className="text-green-700 font-semibold mb-3">
                                {member.role}
                              </p>
                              <div className="flex-1 flex items-start">
                                <p className="text-gray-400 text-sm leading-relaxed text-justify break-words max-w-[24rem] md:max-w-[26rem] mx-auto">
                                  {member.bio}
                                </p>
                              </div>
                            </div>

                            {/* Skills */}
                            <div className="mb-4 h-16 flex items-center">
                              <div className="flex flex-wrap gap-2 justify-center w-full">
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
                      </div>
                    ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

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
                onClick={() => scrollToSection('contact')}
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
                onClick={() => scrollToSection('contact')}
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
