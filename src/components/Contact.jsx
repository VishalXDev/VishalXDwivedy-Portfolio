// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a backend service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      value: '7004212369',
      link: 'tel:7004212369'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'Vishaldwidy@gmail.com',
      link: 'mailto:Vishaldwidy@gmail.com'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'LinkedIn Profile',
      link: 'https://www.linkedin.com/'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'GitHub Profile',
      link: 'https://github.com/VishalXDev'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-12 text-center">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-dark p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium mb-6 text-primary">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-light mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-md p-3 focus:outline-none focus:border-primary"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-light mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-md p-3 focus:outline-none focus:border-primary"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-light mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-md p-3 focus:outline-none focus:border-primary"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-light mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-md p-3 focus:outline-none focus:border-primary"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-dark p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-medium mb-6 text-primary">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-4 text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{info.title}</h4>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light hover:text-primary transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-dark p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-4 text-primary">Let's Connect</h3>
              <p className="text-light mb-4">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <p className="text-light">
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;