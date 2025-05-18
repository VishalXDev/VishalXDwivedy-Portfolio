import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    try {
      // Example implementation using EmailJS
      // You would need to set up an account and install emailjs-com
      // import emailjs from 'emailjs-com';
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formData,
      //   'YOUR_USER_ID'
      // );
      
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'Vishaldwidy@gmail.com',
      link: 'mailto:Vishaldwidy@gmail.com',
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'LinkedIn Profile',
      link: 'https://www.linkedin.com/in/vishal-dwivedy',
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'GitHub Profile',
      link: 'https://github.com/VishalXDev',
    },
  ];

  return (
    <section id="contact" className="pt-6 pb-10 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center text-white mb-8">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="bg-dark p-4 rounded-lg shadow"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-primary mb-4">Send Me a Message</h3>

            {formStatus.isSubmitted ? (
              <div className="bg-green-900/30 border border-green-700 text-green-200 p-4 rounded-md">
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setFormStatus(prev => ({...prev, isSubmitted: false}))}
                  className="mt-3 text-sm bg-green-700/50 hover:bg-green-700 px-4 py-1 rounded-md transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {['name', 'email', 'subject'].map((field, idx) => (
                  <div className="mb-3" key={idx}>
                    <label htmlFor={field} className="block text-sm text-light mb-1 capitalize">
                      {field === 'email' ? 'Your Email' : `Your ${field}`}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full bg-gray-800 text-sm text-white border border-gray-700 rounded-md p-2 focus:outline-none focus:border-primary"
                      required
                      disabled={formStatus.isSubmitting}
                    />
                  </div>
                ))}

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm text-light mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-gray-800 text-sm text-white border border-gray-700 rounded-md p-2 focus:outline-none focus:border-primary"
                    required
                    disabled={formStatus.isSubmitting}
                  ></textarea>
                </div>

                {formStatus.error && (
                  <div className="mb-4 text-red-400 text-sm bg-red-900/30 p-2 rounded border border-red-700">
                    {formStatus.error}
                  </div>
                )}

                <button
                  type="submit"
                  className="bg-primary text-sm text-white font-medium px-5 py-2 rounded-md hover:bg-purple-700 transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-dark p-4 rounded-lg shadow mb-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Contact Information</h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary mr-3 text-sm">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-medium">{info.title}</h4>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light text-sm hover:text-primary transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-primary mb-2">Let's Connect</h3>
              <p className="text-light text-sm mb-2">
                Open to projects, creative ideas, or collaborations.
              </p>
              <p className="text-light text-sm">
                Have a question or want to say hi? I'll try my best to respond!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;