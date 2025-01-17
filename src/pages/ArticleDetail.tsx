import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag, Share2, Bookmark, ThumbsUp, ArrowRight } from "lucide-react";
import { Loading } from "@/components/ui/loading";
import { useState } from "react";

// Mock articles data (this should match the data in ContentHub.tsx)
const articles = [
  {
    id: 1,
    tags: ["Дизайн", "Брендинг"],
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    title: "Растровая и векторная графика: отличия, применение и способы трассировки изображения",
    description: "Растровая и векторная графика → Применение векторной графики по сравнению с растровой → Различие векторной и растровой графики",
    date: "24.12.2024",
  },
  {
    id: 2,
    tags: ["Разработка", "Frontend"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "Современные подходы к разработке веб-приложений",
    description: "Обзор актуальных технологий и методологий в веб-разработке. Лучшие практики и инструменты для создания современных приложений.",
    date: "22.12.2024",
  },
  {
    id: 3,
    tags: ["UX/UI", "Дизайн"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    title: "Принципы эффективного UX дизайна",
    description: "Ключевые принципы создания удобных интерфейсов. Как сделать продукт интуитивно понятным и привлекательным для пользователей.",
    date: "20.12.2024",
  },
  {
    id: 4,
    tags: ["Маркетинг", "SEO"],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
    title: "SEO оптимизация в 2024 году",
    description: "Актуальные методы продвижения сайтов. Что работает сейчас и как подготовиться к будущим изменениям алгоритмов.",
    date: "18.12.2024",
  }
];

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  // Find current article and adjacent articles
  const currentIndex = articles.findIndex(article => article.id === Number(id));
  const currentArticle = articles[currentIndex];
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;
  
  // Simulate loading
  setTimeout(() => setIsLoading(false), 1000);

  if (isLoading) {
    return <Loading />;
  }

  if (!currentArticle) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/content-hub")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад
        </Button>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {currentArticle.tags.map((tag, index) => (
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
            
            <h1 className="text-4xl font-bold mb-6">{currentArticle.title}</h1>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <time className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                {currentArticle.date}
              </time>
              
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ThumbsUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Main Image */}
          <div className="relative aspect-video mb-12 rounded-xl overflow-hidden">
            <img
              src={currentArticle.image}
              alt={currentArticle.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p>{currentArticle.description}</p>
            <h2>Введение</h2>
            <p>В современном мире цифрового дизайна существует два основных типа графики: растровая и векторная. Каждый из них имеет свои особенности, преимущества и недостатки.</p>
            
            <h2>Основные понятия</h2>
            <p>Прежде чем углубляться в различия, давайте разберем основные термины и концепции, которые помогут лучше понять тему.</p>
            
            <h3>Что такое растровая графика?</h3>
            <p>Растровые изображения состоят из пикселей — маленьких цветных квадратиков. Каждый пиксель имеет свой цвет и положение в изображении.</p>
            
            <h3>Что такое векторная графика?</h3>
            <p>Векторные изображения строятся с помощью математических формул, описывающих линии, кривые и фигуры.</p>
            
            <h2>Сравнительный анализ</h2>
            <p>Давайте рассмотрим основные преимущества и недостатки каждого типа графики.</p>
            
            <table>
              <thead>
                <tr>
                  <th>Критерий</th>
                  <th>Растровая графика</th>
                  <th>Векторная графика</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Масштабирование</td>
                  <td>Теряет качество</td>
                  <td>Сохраняет качество</td>
                </tr>
                <tr>
                  <td>Размер файла</td>
                  <td>Больше</td>
                  <td>Меньше</td>
                </tr>
                <tr>
                  <td>Детализация</td>
                  <td>Высокая</td>
                  <td>Средняя</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Navigation between articles */}
          <div className="flex justify-between items-center mt-12 border-t pt-8">
            {prevArticle ? (
              <Button
                variant="ghost"
                onClick={() => navigate(`/article/${prevArticle.id}`)}
                className="group flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <div className="text-left">
                  <div className="text-sm text-gray-500">Предыдущая статья</div>
                  <div className="font-medium line-clamp-1">{prevArticle.title}</div>
                </div>
              </Button>
            ) : <div />}
            
            {nextArticle && (
              <Button
                variant="ghost"
                onClick={() => navigate(`/article/${nextArticle.id}`)}
                className="group flex items-center"
              >
                <div className="text-right">
                  <div className="text-sm text-gray-500">Следующая статья</div>
                  <div className="font-medium line-clamp-1">{nextArticle.title}</div>
                </div>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;