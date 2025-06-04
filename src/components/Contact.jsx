import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaSpinner } from 'react-icons/fa';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    try {
      // Simulate API call with realistic delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'There was an error sending your message. Please try again.'
      });
    }
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      value: '7004212369',
      link: 'tel:7004212369',
      color: 'from-emerald-400 to-teal-600',
      bgColor: 'bg-emerald-500/10',
      hoverColor: 'group-hover:text-emerald-400'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'Vishaldwidy@gmail.com',
      link: 'mailto:Vishaldwidy@gmail.com',
      color: 'from-blue-400 to-indigo-600',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'group-hover:text-blue-400'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'LinkedIn Profile',
      link: 'https://www.linkedin.com/in/vishal-dwivedy',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-600/10',
      hoverColor: 'group-hover:text-blue-500'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'GitHub Profile',
      link: 'https://github.com/VishalXDev',
      color: 'from-purple-400 to-pink-600',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'group-hover:text-purple-400'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingElements = Array.from({ length: 8 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full"
      animate={{
        x: [0, Math.random() * 100 - 50],
        y: [0, Math.random() * 100 - 50],
        opacity: [0.2, 0.5, 0.2],
        scale: [1, 1.5, 1]
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        repeatType: "reverse",
        delay: Math.random() * 2
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
    />
  ));

  return (
    <section id="contact" className="relative pt-16 pb-16 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        {floatingElements}
      </div>

      <div className="relative z-10 container mx-auto px-5 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Let's Create Magic
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Ready to transform ideas into digital masterpieces? Let's collaborate and build something extraordinary together.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-12"
        >
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 lg:p-8 shadow-xl">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <FaPaperPlane className="text-white text-lg" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white">Send Message</h3>
                </div>

                <AnimatePresence mode="wait">
                  {formStatus.isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <FaCheckCircle className="text-2xl text-white" />
                      </motion.div>
                      <h4 className="text-xl font-bold text-white mb-3">Message Sent Successfully! 🚀</h4>
                      <p className="text-slate-300 mb-5 text-sm">Thank you for reaching out! I'll get back to you within 24 hours.</p>
                      <motion.button 
                        onClick={() => setFormStatus(prev => ({...prev, isSubmitted: false}))}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
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
                      {['name', 'email', 'subject'].map((field, idx) => (
                        <motion.div
                          key={field}
                          className="relative group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <label className="block text-slate-300 font-medium mb-2 text-sm capitalize">
                            {field === 'email' ? 'Your Email' : `Your ${field}`}
                          </label>
                          <div className="relative">
                            <input
                              type={field === 'email' ? 'email' : 'text'}
                              name={field}
                              value={formData[field]}
                              onChange={handleChange}
                              onFocus={() => setFocusedField(field)}
                              onBlur={() => setFocusedField(null)}
                              className={`w-full bg-slate-700/50 backdrop-blur-sm text-white border rounded-xl px-4 py-3 text-sm transition-all duration-300 focus:outline-none ${
                                focusedField === field
                                  ? 'border-purple-400 shadow-md shadow-purple-400/20 bg-slate-700/70'
                                  : 'border-slate-600 hover:border-slate-500'
                              }`}
                              required
                              disabled={formStatus.isSubmitting}
                            />
                            <motion.div
                              className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 pointer-events-none"
                              animate={{
                                opacity: focusedField === field ? 1 : 0
                              }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                        </motion.div>
                      ))}

                      <motion.div
                        className="relative group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label className="block text-slate-300 font-medium mb-2 text-sm">Your Message</label>
                        <div className="relative">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            rows="4"
                            className={`w-full bg-slate-700/50 backdrop-blur-sm text-white border rounded-xl px-4 py-3 text-sm transition-all duration-300 focus:outline-none resize-none ${
                              focusedField === 'message'
                                ? 'border-purple-400 shadow-md shadow-purple-400/20 bg-slate-700/70'
                                : 'border-slate-600 hover:border-slate-500'
                            }`}
                            placeholder="Tell me about your project or just say hello..."
                            required
                            disabled={formStatus.isSubmitting}
                          />
                          <motion.div
                            className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 pointer-events-none"
                            animate={{
                              opacity: focusedField === 'message' ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </motion.div>

                      <AnimatePresence>
                        {formStatus.error && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-xl backdrop-blur-sm text-sm"
                          >
                            {formStatus.error}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <motion.button
                        type="submit"
                        className="group relative w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm"
                        disabled={formStatus.isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="flex items-center justify-center gap-2">
                          {formStatus.isSubmitting ? (
                            <>
                              <FaSpinner className="animate-spin text-base" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <FaPaperPlane className="text-base group-hover:translate-x-1 transition-transform duration-300" />
                              Send Message
                            </>
                          )}
                        </span>
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            {/* Contact Information Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className={`relative ${info.bgColor} backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 transition-all duration-300 group-hover:border-slate-600/50`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center shadow-md`}>
                        <span className="text-white text-base">{info.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-base mb-1">{info.title}</h4>
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-slate-300 hover:text-white transition-colors duration-300 text-sm ${info.hoverColor}`}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Let's Connect Section */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                    Let's Connect & Create
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Open to exciting projects, innovative ideas, and meaningful collaborations. 
                    Whether you're a startup with a vision or an established company looking to innovate.
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Got a question, want to brainstorm, or just say hello? 
                    I'm always excited to connect with fellow creators and visionaries! 🚀
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;