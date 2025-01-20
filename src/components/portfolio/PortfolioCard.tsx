import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

const PortfolioCard = ({ project, onClick }: PortfolioCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer relative overflow-hidden rounded-xl bg-white shadow-lg
        hover:shadow-xl transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700
            group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-20
        group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-white/90 line-clamp-2 mb-4">{project.description}</p>
          </div>
          <span className="text-white opacity-0 group-hover:opacity-100
            transition-all duration-500 delay-100">
            <ArrowUpRight className="w-6 h-6" />
          </span>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {project.tech.split(", ").map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm
                text-white/90"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioCard;