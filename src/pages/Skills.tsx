import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import SkillCard, { SkillCategory } from '../components/SkillCard';

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 'languages',
      name: 'Languages',
      skills: ['C', 'C++ (proficient)', 'Java', 'HTML', 'CSS', 'JavaScript', 'TypeScript']
    },
    {
      id: 'frameworks',
      name: 'Frameworks',
      skills: ['ReactJS', 'NodeJS', 'ExpressJS', 'Tailwind CSS', 'PHP']
    },
    {
      id: 'databases',
      name: 'Databases',
      skills: ['MongoDB', 'MySQL']
    },
    {
      id: 'technical',
      name: 'Technical Skills',
      skills: ['DSA with C++', 'Git', 'GitHub', 'Linux', 'Microsoft Tools', 'Canva', 'VSCode', 'AWS (Beginner)']
    },
    {
      id: 'soft',
      name: 'Soft Skills',
      skills: ['Team Management', 'Adaptability/Flexibility', 'Problem-Solving', 'Communication Skills']
    }
  ];

  return (
    <>
      <PageHeader 
        title="My Skills" 
        subtitle="The technologies and tools I work with"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Technical Expertise" 
            subtitle="I continually expand my skillset to stay current with emerging technologies"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Coding Stats */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Problem Solving" 
            subtitle="I enjoy tackling challenging problems and continually improving my skills"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card border border-gray-200 text-center py-8">
              <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">DSA Problems</h3>
              <p className="text-gray-600">Solved across multiple platforms</p>
            </div>
            
            <div className="card border border-gray-200 text-center py-8">
              <div className="text-4xl font-bold text-primary-600 mb-2">11k</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Rank</h3>
              <p className="text-gray-600">In Leetcode Biweekly Contest 434</p>
            </div>
            
            <div className="card border border-gray-200 text-center py-8">
              <div className="text-4xl font-bold text-primary-600 mb-2">7th</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Team Rank</h3>
              <p className="text-gray-600">In Web Ka Hackathon (out of 30 teams)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;