import { useNavigate } from "react-router-dom";
import { portfolioData } from "@/data/portfolio";
import PortfolioCard from "./portfolio/PortfolioCard";
import { motion } from "framer-motion";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section className="py-8 md:py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Наши последние проекты</h2>
          <p className="text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Каждый проект - это уникальное решение, созданное с учетом потребностей клиента
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PortfolioCard
                  project={project}
                  index={index}
                  onClick={() => navigate(`/portfolio/${project.id}`)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;