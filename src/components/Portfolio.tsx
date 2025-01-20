import { useNavigate } from "react-router-dom";
import { portfolioData } from "@/data/portfolio";
import PortfolioCard from "./portfolio/PortfolioCard";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.1)_100%)]" />
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-grid-16" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-12 group hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Назад к главной
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Наши последние проекты
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Каждый проект - это уникальное решение, созданное с учетом потребностей клиента
              и современных тенденций в дизайне и разработке
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="transform-gpu"
              >
                <PortfolioCard
                  project={project}
                  index={index}
                  onClick={() => navigate(`/portfolio/${project.id}`)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;