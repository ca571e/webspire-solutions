import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // This would typically come from an API
  const article = {
    title: "Растровая и векторная графика: отличия, применение и способы трассировки изображения",
    content: `
      <h2>Введение</h2>
      <p>В современном мире цифрового дизайна существует два основных типа графики: растровая и векторная. Каждый из них имеет свои особенности, преимущества и недостатки.</p>
      
      <h2>Растровая графика</h2>
      <p>Растровые изображения состоят из пикселей — маленьких цветных квадратиков. Каждый пиксель имеет свой цвет и положение в изображении. При увеличении растрового изображения качество ухудшается, так как пиксели становятся видимыми.</p>
      
      <h2>Векторная графика</h2>
      <p>Векторные изображения строятся с помощью математических формул, описывающих линии, кривые и фигуры. Благодаря этому векторную графику можно масштабировать без потери качества.</p>
    `,
    date: "24.12.2024",
    tags: ["Дизайн", "Брендинг"],
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад
        </Button>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 bg-primary/10 text-primary 
                    px-3 py-1 rounded-full text-sm font-medium"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            
            <time className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Calendar className="w-4 h-4" />
              {article.date}
            </time>
          </div>

          <div className="relative aspect-video mb-8 rounded-xl overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;