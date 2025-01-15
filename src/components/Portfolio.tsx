import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const portfolioData = [
  {
    id: 1,
    title: "Корпоративный сайт для IT компании",
    description: "Современный адаптивный веб-сайт с интерактивными элементами и оптимизированной производительностью.",
    tech: "React.js, TypeScript, Tailwind CSS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "E-commerce платформа",
    description: "Полнофункциональный интернет-магазин с интеграцией платежных систем и админ-панелью.",
    tech: "Next.js, MongoDB, Express.js, Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2432&auto=format&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Мобильное приложение для фитнеса",
    description: "Кроссплатформенное приложение с персонализированными тренировками и трекингом прогресса.",
    tech: "React Native, Firebase, Redux",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2369&auto=format&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Наши последние проекты</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {portfolioData.map((project, index) => (
              <Card 
                key={project.id}
                className={`cursor-pointer transition-all duration-300 ${
                  activeProject === index ? "border-primary" : ""
                }`}
                onClick={() => setActiveProject(index)}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Технологии: {project.tech}</p>
                  <div className="flex gap-4">
                    <Button variant="outline" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Посмотреть проект
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src={portfolioData[activeProject].image}
              alt={portfolioData[activeProject].title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;