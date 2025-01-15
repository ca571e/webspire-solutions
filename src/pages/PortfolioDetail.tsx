import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { portfolioData } from "@/data/portfolio";

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-4"
          >
            ← Назад
          </Button>
          <h1 className="text-4xl font-bold mb-4">{currentProject.title}</h1>
          <p className="text-lg text-gray-600 mb-8">{currentProject.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <img 
              src={currentProject.mainImage} 
              alt={currentProject.title}
              className="w-full rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              {currentProject.gallery?.map((img, index) => (
                <img 
                  key={index}
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">О проекте</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Технологии:</h4>
                  <p className="text-gray-600">{currentProject.tech}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Задачи:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {currentProject.tasks?.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
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

        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => navigate(`/portfolio/${prevProject.id}`)}
          >
            ← {prevProject.title}
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate(`/portfolio/${nextProject.id}`)}
          >
            {nextProject.title} →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;