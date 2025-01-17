import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { portfolioData } from "@/data/portfolio";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import PortfolioCollage from "@/components/PortfolioCollage";

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentProject = portfolioData.find(p => p.id === Number(id));
  const currentIndex = portfolioData.findIndex(p => p.id === Number(id));
  
  if (!currentProject) {
    return <div>Project not found</div>;
  }

  const nextProject = portfolioData[(currentIndex + 1) % portfolioData.length];
  const prevProject = portfolioData[(currentIndex - 1 + portfolioData.length) % portfolioData.length];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Заявка успешно отправлена!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <img 
          src={currentProject.mainImage} 
          alt={currentProject.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{currentProject.title}</h1>
            <p className="text-xl max-w-2xl mx-auto">{currentProject.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад к проектам
        </Button>

        {/* Project Collage */}
        <PortfolioCollage images={currentProject.gallery} />

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2 space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-4">О проекте</h2>
              <p>{currentProject.description}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Технологии</h3>
              <div className="flex flex-wrap gap-2">
                {currentProject.tech.split(", ").map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Задачи</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {currentProject.tasks?.map((task, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2 p-4 rounded-lg bg-white shadow-sm"
                  >
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Ссылки на проект</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full" asChild>
                  <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Открыть сайт
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Исходный код
                  </a>
                </Button>
              </div>
            </Card>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">Заказать похожий проект</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Заказать проект</DialogTitle>
                </DialogHeader>
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
                    placeholder="Сообщение"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                  <Button type="submit" className="w-full">Отправить</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Галерея проекта</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentProject.gallery?.map((img, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div 
                    className="aspect-video rounded-lg overflow-hidden cursor-pointer
                      transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => navigate(`/portfolio/${prevProject.id}`)}
            className="group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {prevProject.title}
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate(`/portfolio/${nextProject.id}`)}
            className="group"
          >
            {nextProject.title}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
