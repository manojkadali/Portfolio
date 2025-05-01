import { motion } from 'framer-motion';

export interface TimelineItemData {
  id: string;
  title: string;
  organization: string;
  duration: string;
  description?: string;
  details?: string[];
}

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
}

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  return (
    <motion.div 
      className="relative pl-8 pb-12 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary-200 last:before:h-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute left-0 top-0 h-6 w-6 -translate-x-[11px] rounded-full border-2 border-primary-500 bg-white"></div>
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 gap-1 sm:gap-3">
            <span className="font-medium">{item.organization}</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-sm text-gray-500">{item.duration}</span>
          </div>
        </div>
        {item.description && (
          <p className="text-gray-700">{item.description}</p>
        )}
        {item.details && item.details.length > 0 && (
          <ul className="space-y-2">
            {item.details.map((detail, i) => (
              <li key={i} className="flex">
                <span className="text-primary-500 mr-2">•</span>
                <span className="text-gray-700">{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;