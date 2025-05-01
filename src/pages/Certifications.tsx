import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import CertificateCard, { Certificate } from '../components/CertificateCard';

const Certifications = () => {
  const certificates: Certificate[] = [
    {
      id: 'leetcode',
      title: 'Secured Global Rank 11k in Leetcode Biweekly Contest 434',
      issuer: 'Leetcode',
      date: 'January 2025',
      url: '#https://leetcode.com/u/kmanoj1010/'
    },
    {
      id: 'php',
      title: 'Building Web Applications in PHP',
      issuer: 'Coursera',
      date: 'December 2024',
      url: '#'
    },
    {
      id: 'hackerrank',
      title: 'Intermediate Problem-Solving Certification',
      issuer: 'HackerRank',
      date: 'November 2024',
      url: '#'
    },
    {
      id: 'aws',
      title: 'Basics of Cloud Computing with AWS',
      issuer: 'AWS',
      date: 'July 2023',
      url: 'https://i.imgur.com/5juxiyU.png'
    },
    {
      id: 'webdev',
      title: 'Introduction to Web Development',
      issuer: 'IBM - Coursera',
      date: 'November 2023',
      url: 'https://i.imgur.com/5o30MiN.png'
    }
  ];

  return (
    <>
      <PageHeader 
        title="Certifications & Achievements" 
        subtitle="Credentials that showcase my skills and knowledge"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Certifications" 
            subtitle="Professional certifications and achievements that validate my skills"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <CertificateCard key={certificate.id} certificate={certificate} index={index} />
            ))}
          </div>
          
          {/* Space for future certificates */}
          <div className="mt-12 card border border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center p-8 text-center">
            <h3 className="text-xl font-medium text-gray-500 mb-2">More Certifications Coming Soon</h3>
            <p className="text-gray-500">
              I'm continuously learning and adding to my skill set.
              Check back for new certifications!
            </p>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Professional Development" 
            subtitle="My approach to continuous learning and growth"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Learning Philosophy</h3>
              <p className="text-gray-700 mb-4">
                I believe in continuous learning and staying updated with the latest technologies and industry trends.
                My approach combines structured learning through courses and certifications with hands-on practice through projects.
              </p>
              <ul className="space-y-2">
                <li className="flex items-baseline">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">Balanced theoretical knowledge and practical application</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">Learning through building real-world projects</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">Participating in competitions to challenge myself</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">Collaborating with peers to gain diverse perspectives</span>
                </li>
              </ul>
            </div>
            
            <div className="card border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Future Learning Goals</h3>
              <p className="text-gray-700 mb-4">
                I'm planning to expand my knowledge in several key areas that align with my career aspirations and industry demands.
              </p>
              <ul className="space-y-2">
                <li className="flex items-baseline">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">Advanced AWS certifications</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">Mastering React Native for mobile development</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">DevOps practices and continuous integration</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">Blockchain technology and smart contracts</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">Advanced algorithms and system design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;