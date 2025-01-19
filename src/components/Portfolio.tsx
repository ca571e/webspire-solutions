import { useNavigate } from "react-router-dom";
import { portfolioData } from "@/data/portfolio";
import PortfolioCard from "./portfolio/PortfolioCard";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши последние проекты</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Каждый проект - это уникальное решение, созданное с учетом потребностей клиента
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((project, index) => (
              <PortfolioCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => navigate(`/portfolio/${project.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;