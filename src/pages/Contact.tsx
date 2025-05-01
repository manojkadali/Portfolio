import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    { 
      icon: <MapPin className="w-10 h-10 text-primary-600" />,
      title: 'Location', 
      details: 'Phagwara, Punjab, India' 
    },
    { 
      icon: <Phone className="w-10 h-10 text-primary-600" />,
      title: 'Phone', 
      details: '+91-7702786281' 
    },
    { 
      icon: <Mail className="w-10 h-10 text-primary-600" />,
      title: 'Email', 
      details: 'kmanoj@lpu.in' 
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={24} />, url: 'https://github.com/' },
    { name: 'LinkedIn', icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/' }
  ];

  return (
    <>
      <PageHeader 
        title="Contact Me" 
        subtitle="Get in touch for collaborations, opportunities, or just to say hello!"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Get In Touch" 
                subtitle="I'd love to hear from you. Here's how you can reach me."
                align="left"
              />
              
              <div className="space-y-8 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-700">{info.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-primary-50 hover:text-primary-600 p-3 rounded-full transition-colors"
                      aria-label={link.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -3 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <SectionTitle 
                title="Send a Message" 
                subtitle="Have a question or want to work together? Send me a message."
                align="left"
              />
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map or additional info section */}
      <section className="section bg-gray-50">
        <div className="container-custom text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Let's Build Something Amazing Together
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Whether you're looking for a developer for your project, have a question, or just want to connect,
            I'm open to discussing new opportunities and ideas.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default Contact;