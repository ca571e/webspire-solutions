import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

const categories = ["Все", "Веб-разработка", "Мобильные приложения", "Дизайн", "CRM системы"];

const PortfolioPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const filteredProjects = selectedCategory === "Все"
    ? portfolioData
    : portfolioData.filter(project => project.tech.includes(selectedCategory));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Заявка успешно отправлена!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Наше портфолио</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Изучите наши последние проекты и выберите решение, которое подходит именно вам
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg
                hover:-translate-y-2 transition-all duration-300"
              onClick={() => navigate(`/portfolio/${project.id}`)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500
                    group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary
                  transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>
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
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Обсудить проект</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Ваше имя"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
            <Textarea
              placeholder="Опишите ваш проект"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              className="min-h-[120px]"
            />
            <Button type="submit" className="w-full">Отправить заявку</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;