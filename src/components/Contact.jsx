import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub,
  FaPaperPlane, FaCheckCircle, FaSpinner, FaMapMarkerAlt,
  FaExternalLinkAlt, FaStar
} from 'react-icons/fa';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mpwrwryn';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const [focusedField, setFocusedField] = useState(null);

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-white text-lg" />,
      title: 'Phone',
      value: '+91 7004212369',
      displayValue: 'Call me directly',
      link: 'tel:7004212369',
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      shadow: 'shadow-emerald-500/25'
    },
    {
      icon: <FaEnvelope className="text-white text-lg" />,
      title: 'Email',
      value: 'Vishaldwidy@gmail.com',
      displayValue: 'Drop me a line',
      link: 'mailto:Vishaldwidy@gmail.com',
      gradient: 'from-blue-400 via-blue-500 to-indigo-600',
      shadow: 'shadow-blue-500/25'
    },
    {
      icon: <FaLinkedin className="text-white text-lg" />,
      title: 'LinkedIn',
      value: 'vishal-dwivedy',
      displayValue: 'Let\'s connect professionally',
      link: 'https://www.linkedin.com/in/vishal-dwivedy',
      gradient: 'from-blue-500 via-blue-600 to-blue-700',
      shadow: 'shadow-blue-600/25'
    },
    {
      icon: <FaGithub className="text-white text-lg" />,
      title: 'GitHub',
      value: 'VishalXDev',
      displayValue: 'Check out my code',
      link: 'https://github.com/VishalXDev',
      gradient: 'from-gray-600 via-gray-700 to-gray-800',
      shadow: 'shadow-gray-600/25'
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Something went wrong. Please try again.');
      }
    } catch (err) {
      setFormStatus({ isSubmitting: false, isSubmitted: false, error: err.message });
    }
  };

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);
  const resetForm = () => setFormStatus(prev => ({ ...prev, isSubmitted: false }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-[var(--bg-primary)] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-[var(--accent-primary)]/5 via-[var(--accent-secondary)]/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-[var(--accent-secondary)]/5 via-[var(--accent-primary)]/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface-secondary)] border border-[var(--border-color)] mb-6">
            <FaStar className="text-[var(--accent-primary)] text-sm animate-pulse" />
            <span className="text-sm font-medium text-[var(--text-secondary)]">Let's Collaborate</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Let's Build Something
            <br />
            <span className="text-transparent bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-primary)] bg-clip-text">
              Amazing Together
            </span>
          </h2>
          
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm always excited to discuss new projects, 
            creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="glass-card p-8 lg:p-10 border border-[var(--border-color)] rounded-3xl bg-[var(--surface-primary)]/50 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-2xl flex items-center justify-center shadow-lg">
                  <FaPaperPlane className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Send Message</h3>
                  <p className="text-[var(--text-secondary)] text-sm">I'll get back to you within 24 hours</p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {formStatus.isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25"
                    >
                      <FaCheckCircle className="text-3xl text-white" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Message Sent Successfully!</h4>
                    <p className="text-[var(--text-secondary)] mb-6">Thanks for reaching out. I'll get back to you soon!</p>
                    <motion.button
                      onClick={resetForm}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-semibold rounded-2xl shadow-lg hover:shadow-[var(--accent-primary)]/25 transition-all duration-200"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-[var(--text-primary)] font-semibold text-sm">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => handleFocus('name')}
                          onBlur={handleBlur}
                          required
                          disabled={formStatus.isSubmitting}
                          placeholder="Your full name"
                          className={`w-full bg-[var(--surface-secondary)]/50 text-[var(--text-primary)] border rounded-2xl px-4 py-3 text-sm transition-all duration-200 focus:outline-none placeholder-[var(--text-secondary)]/60 ${
                            focusedField === 'name'
                              ? 'border-[var(--accent-primary)] shadow-lg shadow-[var(--accent-primary)]/10 bg-[var(--surface-secondary)]'
                              : 'border-[var(--border-color)] hover:border-[var(--border-color)]/80'
                          }`}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[var(--text-primary)] font-semibold text-sm">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => handleFocus('email')}
                          onBlur={handleBlur}
                          required
                          disabled={formStatus.isSubmitting}
                          placeholder="your@email.com"
                          className={`w-full bg-[var(--surface-secondary)]/50 text-[var(--text-primary)] border rounded-2xl px-4 py-3 text-sm transition-all duration-200 focus:outline-none placeholder-[var(--text-secondary)]/60 ${
                            focusedField === 'email'
                              ? 'border-[var(--accent-primary)] shadow-lg shadow-[var(--accent-primary)]/10 bg-[var(--surface-secondary)]'
                              : 'border-[var(--border-color)] hover:border-[var(--border-color)]/80'
                          }`}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[var(--text-primary)] font-semibold text-sm">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus('subject')}
                        onBlur={handleBlur}
                        required
                        disabled={formStatus.isSubmitting}
                        placeholder="What's this about?"
                        className={`w-full bg-[var(--surface-secondary)]/50 text-[var(--text-primary)] border rounded-2xl px-4 py-3 text-sm transition-all duration-200 focus:outline-none placeholder-[var(--text-secondary)]/60 ${
                          focusedField === 'subject'
                            ? 'border-[var(--accent-primary)] shadow-lg shadow-[var(--accent-primary)]/10 bg-[var(--surface-secondary)]'
                            : 'border-[var(--border-color)] hover:border-[var(--border-color)]/80'
                        }`}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[var(--text-primary)] font-semibold text-sm">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        rows="5"
                        required
                        disabled={formStatus.isSubmitting}
                        placeholder="Tell me about your project or idea..."
                        className={`w-full bg-[var(--surface-secondary)]/50 text-[var(--text-primary)] border rounded-2xl px-4 py-3 text-sm transition-all duration-200 focus:outline-none resize-none placeholder-[var(--text-secondary)]/60 ${
                          focusedField === 'message'
                            ? 'border-[var(--accent-primary)] shadow-lg shadow-[var(--accent-primary)]/10 bg-[var(--surface-secondary)]'
                            : 'border-[var(--border-color)] hover:border-[var(--border-color)]/80'
                        }`}
                      />
                    </div>

                    {formStatus.error && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-2xl text-sm flex items-center gap-3"
                      >
                        <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-red-400 font-bold">!</span>
                        </div>
                        <span>{formStatus.error}</span>
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={formStatus.isSubmitting}
                      whileHover={!formStatus.isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!formStatus.isSubmitting ? { scale: 0.98 } : {}}
                      className="w-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-[var(--accent-primary)]/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus.isSubmitting ? (
                        <span className="flex items-center justify-center gap-3">
                          <FaSpinner className="animate-spin text-lg" />
                          Sending Message...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-3">
                          <FaPaperPlane className="text-lg" />
                          Send Message
                        </span>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                Get in Touch
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Prefer a more direct approach? Feel free to reach out through any of these channels. 
                I'm always happy to chat about new opportunities!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith('http') ? "_blank" : "_self"}
                  rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group block p-6 bg-[var(--surface-primary)]/50 backdrop-blur-xl border border-[var(--border-color)] rounded-3xl hover:border-transparent transition-all duration-300 hover:${info.shadow}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-[var(--text-primary)] font-bold text-lg">
                          {info.title}
                        </h4>
                        {info.link.startsWith('http') && (
                          <FaExternalLinkAlt className="text-[var(--text-secondary)] text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </div>
                      <p className="text-[var(--text-secondary)] text-sm mb-1">
                        {info.displayValue}
                      </p>
                      <p className="text-[var(--text-primary)]/80 text-sm font-medium">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[var(--accent-primary)]/5 via-[var(--accent-secondary)]/5 to-transparent rounded-3xl border border-[var(--border-color)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="text-[var(--text-primary)] font-bold text-lg mb-2">
                    Based in Chandigarh, India
                  </h4>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    Available for remote work globally • Open to relocation for the right opportunity
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">Available for new projects</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;