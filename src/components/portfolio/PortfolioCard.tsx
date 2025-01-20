import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PortfolioCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    mainImage: string;
    tech: string;
  };
  index: number;
  onClick: () => void;
}

const PortfolioCard = ({ project, index, onClick }: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg
        transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500
            group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary
              transition-colors duration-300">{project.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
          </div>
          <span className="text-primary opacity-0 group-hover:opacity-100
            transition-opacity duration-300">
            <ArrowRight className="w-6 h-6" />
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.split(", ").map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;