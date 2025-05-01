import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import TimelineItem, { TimelineItemData } from '../components/TimelineItem';

const Education = () => {
  const educationItems: TimelineItemData[] = [
    {
      id: 'btech',
      title: 'Bachelor of Computer Science and Engineering',
      organization: 'Lovely Professional University',
      duration: '2022 - 2026',
      description: 'CGPA: 7.3 | Course minor: Full Stack Web Development',
      details: [
        'Learning various programming languages and software development methodologies',
        'Participating in coding competitions and hackathons',
        'Working on real-world projects to gain practical experience',
        'Specializing in web development technologies and frameworks'
      ]
    },
    {
      id: 'class12',
      title: 'Class 12th',
      organization: 'Sasi Education Junior College',
      duration: '2020 - 2022',
      description: 'Percentage: 89.5 (Mathematics, Physics, Chemistry)',
      details: [
        'Excelled in mathematics and science subjects',
        'Developed a strong foundation in analytical thinking',
        'Participated in various extracurricular activities',
        'Secured a strong academic performance that enabled entry into engineering'
      ]
    }
  ];

  const activities: TimelineItemData[] = [
    {
      id: 'dsa',
      title: 'Data Structures & Algorithms',
      organization: 'Various Platforms',
      duration: 'Ongoing',
      description: 'Completed 200+ DSA problems across various platforms, demonstrating proficiency in Problem Solving and DSA.',
    },
    {
      id: 'hackathon',
      title: 'Web Ka Hackathon',
      organization: 'Hackathon',
      duration: 'November 2024',
      description: 'Guided a team and secured 7th place out of 30 teams, demonstrating leadership, teamwork, and problem-solving skills in a competitive environment.',
    },
    {
      id: 'ngo',
      title: 'Volunteer Work',
      organization: 'Karmanchu Foundation',
      duration: 'July 2023',
      description: 'Supported underprivileged communities by providing food to 200+ orphan children.',
    },
    {
      id: 'english',
      title: 'English Speaking Events',
      organization: 'Soft Skills Department',
      duration: 'Ongoing',
      description: 'Actively participating in English speaking events conducted by soft skills department to improve communication and presentation skills.',
    }
  ];

  return (
    <>
      <PageHeader 
        title="Education & Activities" 
        subtitle="My academic journey and extracurricular activities"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Education" 
            subtitle="My academic qualifications and achievements"
          />
          
          <div className="max-w-3xl mx-auto">
            {educationItems.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Extracurricular Activities" 
            subtitle="Beyond academics, I engage in various activities to develop well-rounded skills"
          />
          
          <div className="max-w-3xl mx-auto">
            {activities.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;