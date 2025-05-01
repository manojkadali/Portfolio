import { motion } from 'framer-motion';

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCard = ({ category, index }: SkillCardProps) => {
  return (
    <motion.div
      className="card border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-xl font-bold mb-4 text-gray-900">{category.name}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={i}
            className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
            whileHover={{ y: -3, backgroundColor: '#d2dae8' }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;