import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] bg-gradient-to-r from-primary-900 to-secondary-900 flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-accent-400">Manoj Kadali</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
                Computer Science Engineering Student
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                Passionate about web development, problem-solving, and building
                user-friendly applications. Currently studying at Lovely Professional University.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Contact Me
                </Link>
                <a href="https://drive.google.com/file/d/1i8hmPDJxs3KZbnyaFj1sbdiBXNHMIr2T/view?usp=sharing" className="btn btn-outline text-white border-white hover:bg-white/10">
                  <Download size={18} className="mr-2" />
                  Download CV
                </a>
              </div>
              <div className="flex space-x-6 mt-10">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:kmanoj@lpu.in"
                  className="text-white hover:text-accent-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              className="relative flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                <img 
                  src="https://i.imgur.com/TiB70xw.jpeg" 
                  alt="\IMG_1277.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                <span className="text-xs text-center">
                  Computer<br />Science
                </span>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <motion.div
            className="text-white flex flex-col items-center cursor-pointer"
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={() => document.getElementById('about')?.scrollIntoView()}
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <span className="transform rotate-90">→</span>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About Me
            </h2>
            <p className="text-gray-700 mb-4">
              I'm a Computer Science Engineering student at Lovely Professional University with a focus on Full Stack Web Development.
              I'm passionate about building user-friendly applications and solving complex problems.
            </p>
            <p className="text-gray-700 mb-6">
              With experience in ReactJS, Node.js, and other modern web technologies, I aim to create 
              efficient and scalable solutions. I enjoy participating in hackathons and solving DSA problems to 
              continuously improve my skills.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <li className="flex items-baseline">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-gray-700"><strong>Name:</strong> Manoj Kadali</span>
              </li>
              <li className="flex items-baseline">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-gray-700"><strong>Email:</strong> kmanoj@lpu.in</span>
              </li>
              <li className="flex items-baseline">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-gray-700"><strong>Phone:</strong> +91-7702786281</span>
              </li>
              <li className="flex items-baseline">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-gray-700"><strong>Location:</strong> Phagwara, Punjab</span>
              </li>
            </ul>
            <Link to="/projects" className="btn btn-primary inline-flex items-center">
              <span>View My Projects</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Here are some of the technologies and tools I work with.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'C/C++', 'Java', 'JavaScript', 'TypeScript',
              'HTML', 'CSS', 'ReactJS', 'NodeJS',
              'ExpressJS', 'Tailwind CSS', 'MongoDB', 'MySQL',
              'Git', 'GitHub', 'AWS', 'DSA'
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
              >
                <span className="font-medium text-gray-800">{skill}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/skills" className="btn btn-outline inline-flex items-center">
              <span>View All Skills</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="card group overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
                Doctor Appointment System
              </h3>
              <p className="text-gray-600 mb-4">
                Sep 2024 – Dec 2024
              </p>
              <p className="text-gray-700 mb-4">
                Built a full-stack application for managing doctor appointments with secure authentication and role-based access control.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-secondary-100 text-secondary-800 px-2 py-1 text-xs rounded-md">ReactJS</span>
                <span className="bg-secondary-100 text-secondary-800 px-2 py-1 text-xs rounded-md">Tailwind CSS</span>
                <span className="bg-secondary-100 text-secondary-800 px-2 py-1 text-xs rounded-md">Node.js</span>
                <span className="bg-secondary-100 text-secondary-800 px-2 py-1 text-xs rounded-md">Express.js</span>
              </div>
              <Link to="/projects" className="text-primary-600 hover:text-primary-700 inline-flex items-center">
                <span>View Details</span>
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>
            
            <motion.div
              className="card group overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
                CICD Pipeline Automation Project in AWS
              </h3>
              <p className="text-gray-600 mb-4">
                Jun 2024 – Jul 2024
              </p>
              <p className="text-gray-700 mb-4">
                Configured GitHub with AWS CodePipeline to trigger automatic deployments, reducing manual effort by 20-30%.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-secondary-100 text-secondary-800 px-2 py-1 text-xs rounded-md">AWS</span>
                <span className="bg-secondary-100 text-secondary-800 px-2 py-1 text-xs rounded-md">GitHub</span>
                <span className="bg-secondary-100 text-secondary-800 px-2 py-1 text-xs rounded-md">CodePipeline</span>
                <span className="bg-secondary-100 text-secondary-800 px-2 py-1 text-xs rounded-md">EC2</span>
              </div>
              <Link to="/projects" className="text-primary-600 hover:text-primary-700 inline-flex items-center">
                <span>View Details</span>
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-primary inline-flex items-center">
              <span>View All Projects</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gradient-to-r from-primary-600 to-secondary-700 text-white">
        <div className="container-custom text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm currently available for freelance work or internship opportunities.
            If you're interested in working together, please get in touch!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/contact" className="btn inline-flex items-center bg-white text-primary-700 hover:bg-gray-100">
              <Mail size={18} className="mr-2" />
              <span>Contact Me</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;