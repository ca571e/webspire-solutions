import { ArrowLeft, Github } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const portfolioData = [
  {
    id: 1,
    number: "01",
    title: "Frontend Project",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores natus rerum saepe. Eum modi assumenda quaerat temporibus.",
    tech: "HTML5, CSS3, JavaScript",
  },
  {
    id: 2,
    title: "Full Stack Project",
    number: "02",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores natus rerum saepe. Eum modi assumenda quaerat temporibus.",
    tech: "MongoDB, Express.js, React.js, Node.js",
  },
  // ... остальные проекты
];

const Portfolio = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Latest <span className="text-primary">Project</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {portfolioData.map((project) => (
              <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-primary text-xl font-bold">{project.number}</p>
                <h3 className="text-2xl font-semibold mt-2">{project.title}</h3>
                <p className="text-gray-600 mt-3">{project.description}</p>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">{project.tech}</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="flex items-center gap-2 text-primary hover:text-primary/80">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Live Project</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-primary hover:text-primary/80">
                    <Github className="w-4 h-4" />
                    <span>Github Repository</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Carousel>
              <CarouselContent>
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <CarouselItem key={index}>
                    <img
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                      alt={`Project ${index}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;