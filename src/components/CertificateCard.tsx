import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
  imageUrl?: string;
}

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

const CertificateCard = ({ certificate, index }: CertificateCardProps) => {
  return (
    <motion.div
      className="card border border-gray-200 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {certificate.imageUrl && (
        <div className="aspect-video w-full mb-6 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={certificate.imageUrl}
            alt={certificate.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      {!certificate.imageUrl && (
        <div className="aspect-video w-full mb-6 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">Certificate Image Coming Soon</span>
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
        {certificate.title}
      </h3>
      <div className="flex justify-between items-center mb-4">
        <span className="font-medium">{certificate.issuer}</span>
        <span className="text-sm text-gray-500">{certificate.date}</span>
      </div>
      {certificate.url && (
        <a
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          <span className="mr-1">View Certificate</span>
          <ExternalLink size={16} />
        </a>
      )}
    </motion.div>
  );
};

export default CertificateCard;