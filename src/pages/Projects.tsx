import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ProjectCard, { Project } from '../components/ProjectCard';

const Projects = () => {
  const projects: Project[] = [
    {
      id: 'doctor-appointment',
      title: 'Doctor Appointment System',
      description: 'Implemented secure authentication and role-based access control using local storage or mock APIs.',
      duration: 'Sep 2024 – Dec 2024',
      points: [
        'Built with ReactJS, enhancing navigation efficiency by 30%',
        'Used Node.js, Express, JWT, and bcrypt for faster API responses (10-15% improvement) and secure login',
        'Integrated a notification system for user updates and managed data with MongoDB, ensuring 99.9% uptime',
        'Responsive UI and Optimized UX for improved user experience'
      ],
      technologies: ['ReactJS', 'Tailwind CSS', 'ToastrJS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'],
      githubUrl: 'https://github.com/manojkadali/Doctor-Appointment-System',
      liveUrl: 'https://example.com/',
      imageUrl: 'https://i.imgur.com/2Kk5ncr.png'
    },
    {
      id: 'cicd-pipeline',
      title: 'CICD Pipeline Automation Project in AWS',
      description: 'Configured GitHub with AWS CodePipeline to trigger automatic deployments.',
      duration: 'Jun 2024 – Jul 2024',
      points: [
        'Reduced manual effort by 20-30% for automated deployment workflow',
        'Utilized AWS CodeBuild for application builds and AWS CodeDeploy for seamless EC2 deployment, cutting manual errors by 40%',
        'Achieved automated CI/CD Pipeline with 3x faster deployment cycles, enhancing efficiency and reliability',
        'Gained practical knowledge of cloud automation, cloud computing and deployment best practices'
      ],
      technologies: ['GitHub', 'AWS', 'CodeBuild', 'CodePipeline', 'CodeDeploy', 'EC2', 'DynamoDB'],
      githubUrl: 'https://github.com/manojkadali/AWS-sample-CICD',
      imageUrl: 'https://i.imgur.com/NE8neiM.png'
    }
  ];

  return (
    <>
      <PageHeader
        title="My Projects"
        subtitle="Here are some of the projects I've worked on"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Future Projects */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What's Next?
          </motion.h2>
          
          <motion.div
            className="card border border-gray-200 text-center px-8 py-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Interested in a collaboration?
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              I'm always looking for new projects to work on and opportunities to expand my skills.
              If you have a project idea or need a developer, let's talk!
            </p>
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/contact" className="btn btn-primary">Contact Me</a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;