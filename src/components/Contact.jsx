import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub,
  FaPaperPlane, FaCheckCircle, FaSpinner
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
      icon: <FaPhoneAlt className="text-white text-base" />,
      title: 'Phone',
      value: '7004212369',
      link: 'tel:7004212369',
      color: 'from-emerald-400 to-teal-600',
    },
    {
      icon: <FaEnvelope className="text-white text-base" />,
      title: 'Email',
      value: 'Vishaldwidy@gmail.com',
      link: 'mailto:Vishaldwidy@gmail.com',
      color: 'from-blue-400 to-indigo-600',
    },
    {
      icon: <FaLinkedin className="text-white text-base" />,
      title: 'LinkedIn',
      value: 'LinkedIn Profile',
      link: 'https://www.linkedin.com/in/vishal-dwivedy',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: <FaGithub className="text-white text-base" />,
      title: 'GitHub',
      value: 'GitHub Profile',
      link: 'https://github.com/VishalXDev',
      color: 'from-purple-400 to-pink-600',
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
        throw new Error('Something went wrong.');
      }
    } catch (err) {
      setFormStatus({ isSubmitting: false, isSubmitted: false, error: err.message });
    }
  };

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);
  const resetForm = () => setFormStatus(prev => ({ ...prev, isSubmitted: false }));

  return (
    <section id="contact" className="relative pt-16 pb-16 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10" />

      <div className="relative z-10 container mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate? Reach out and let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-12">
          {/* Form Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 lg:p-8 shadow-xl">
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheckCircle className="text-2xl text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Message Sent!</h4>
                  <button onClick={resetForm} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-200 text-sm">
                    Send Another
                  </button>
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
                  {['name', 'email', 'subject'].map(field => (
                    <div key={field}>
                      <label className="block text-slate-300 font-medium mb-2 text-sm capitalize">
                        {field === 'email' ? 'Your Email' : `Your ${field}`}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        onFocus={() => handleFocus(field)}
                        onBlur={handleBlur}
                        required
                        disabled={formStatus.isSubmitting}
                        className={`w-full bg-slate-700/50 text-white border rounded-xl px-4 py-3 text-sm transition-all duration-200 focus:outline-none ${focusedField === field
                            ? 'border-purple-400 shadow-purple-400/20 bg-slate-700/70'
                            : 'border-slate-600 hover:border-slate-500'
                          }`}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-slate-300 font-medium mb-2 text-sm">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      rows="4"
                      required
                      disabled={formStatus.isSubmitting}
                      className={`w-full bg-slate-700/50 text-white border rounded-xl px-4 py-3 text-sm transition-all duration-200 focus:outline-none resize-none ${focusedField === 'message'
                          ? 'border-purple-400 shadow-purple-400/20 bg-slate-700/70'
                          : 'border-slate-600 hover:border-slate-500'
                        }`}
                    />
                  </div>

                  {formStatus.error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-xl text-sm">
                      {formStatus.error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    {formStatus.isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <FaSpinner className="animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <FaPaperPlane />
                        Send Message
                      </span>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map(info => (
              <div key={info.title} className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 transition-colors duration-200 hover:border-slate-600/50">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center shadow-md`}>
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-base mb-1">{info.title}</h4>
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                      {info.value}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
