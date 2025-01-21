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
      whileHover={{ y: -10 }}
      className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg
        hover:shadow-2xl transition-all duration-500"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700
            group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform translate-y-full
          group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-base md:text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm opacity-90 line-clamp-2">{project.description}</p>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <div className="flex flex-wrap gap-2">
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