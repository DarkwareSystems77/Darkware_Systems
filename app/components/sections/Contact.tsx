import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { sendEmail } from '../../lib/emailService';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Linkedin,
  ChevronDown,
} from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  service: z.string().min(1, 'Please select a service'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using the email service
      const success = await sendEmail({
        name: data.name,
        email: data.email,
        company: data.company,
        phone: data.phone,
        service: data.service,
        subject: data.subject,
        message: data.message,
      });

      if (success) {
        console.log('Email sent successfully to contact@darkwaresystems.com');
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@darkwaresystems.com',
      href: 'mailto:contact@darkwaresystems.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 42 32020809',
      href: 'tel:+924232020809',
    },
    {
      icon: MapPin,
      title: 'UK Office',
      value: '34 Emma Street, Accrington, Manchester, United Kingdom',
      href: '#',
    },
    {
      icon: MapPin,
      title: 'Pakistan Office',
      value:
        '3rd Floor, CP 111, Fairways Commercial DHA Raya, Phase 6, Lahore, Pakistan',
      href: '#',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'https://linkedin.com/company/darkware-systems',
      href: 'https://linkedin.com/company/darkware-systems',
    },
  ];

  const services = [
    'Full-Stack Development',
    'Cybersecurity',
    'DevOps & Cloud Infrastructure',
    'UI/UX Design',
    'Digital Transformation',
    'Mobile App Development',
    'Consulting',
    'Other',
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Get In{' '}
            <span className="text-green-400 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Ready to transform your business? Let's discuss your project and
            explore how our innovative solutions can help you achieve your
            goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                We're here to help you succeed. Whether you have a specific
                project in mind or need guidance on your digital transformation
                journey, our team is ready to provide expert advice and
                innovative solutions.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-400/10 rounded-lg flex items-center justify-center group-hover:bg-green-400/20 transition-colors flex-shrink-0">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-white font-semibold text-sm sm:text-base">
                      {info.title}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm truncate">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-400/10 to-green-300/10 border border-green-400/20 rounded-xl p-4 sm:p-6"
            >
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Business Hours
              </h4>
              <div className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              Send us a Message
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 sm:space-y-6"
            >
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs sm:text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs sm:text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Company and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Company
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Phone
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Service Interest *
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none transition-colors text-sm sm:text-base text-left flex items-center justify-between"
                  >
                    <span
                      className={
                        watch('service') ? 'text-white' : 'text-gray-400'
                      }
                    >
                      {watch('service') || 'Select a service'}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-50 w-full mt-1 bg-gray-800 border border-gray-600/50 rounded-lg shadow-xl max-h-60 overflow-auto"
                    >
                      {services.map((service, index) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => {
                            setValue('service', service);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-left text-sm sm:text-base transition-colors first:rounded-t-lg last:rounded-b-lg ${
                            watch('service') === service
                              ? 'bg-green-400/20 text-green-400'
                              : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Hidden input for form validation */}
                <input {...register('service')} type="hidden" />

                {errors.service && (
                  <p className="mt-1 text-xs sm:text-sm text-red-400 flex items-center">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Subject *
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs sm:text-sm text-red-400 flex items-center">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  rows={8}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs sm:text-sm text-red-400 flex items-center">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-green-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start sm:items-center space-x-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-3 sm:p-4"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>
                    Message sent successfully to khadeejaasif323@gmail.com!
                    We'll get back to you soon.
                  </span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start sm:items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3 sm:p-4"
                >
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span className="text-sm sm:text-base">
                    Something went wrong. Please try again.
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
