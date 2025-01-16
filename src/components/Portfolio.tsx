import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-5 rotate-45" 
        style={{
          backgroundImage: `url('/lovable-uploads/95f03601-cf4d-43c4-a569-1aa7d06c7d87.png')`,
          backgroundSize: '400px',
          backgroundRepeat: 'repeat',
        }}
      />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши последние проекты</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Каждый проект - это уникальное решение, созданное с учетом потребностей клиента
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                onClick={() => navigate(`/portfolio/${project.id}`)}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;