import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag, Share2, Bookmark, ThumbsUp } from "lucide-react";
import { Loading } from "@/components/ui/loading";
import { useState } from "react";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading
  setTimeout(() => setIsLoading(false), 1000);

  if (isLoading) {
    return <Loading />;
  }
  
  // This would typically come from an API
  const article = {
    title: "Растровая и векторная графика: отличия, применение и способы трассировки изображения",
    author: {
      name: "Александр Петров",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    publishedAt: "24 декабря 2024",
    readTime: "12 мин",
    tags: ["Дизайн", "Брендинг", "Графика"],
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    sections: [
      {
        title: "Введение",
        content: "В современном мире цифрового дизайна существует два основных типа графики: растровая и векторная. Каждый из них имеет свои особенности, преимущества и недостатки.",
      },
      {
        title: "Основные понятия",
        content: "Прежде чем углубляться в различия, давайте разберем основные термины и концепции, которые помогут лучше понять тему.",
        subsections: [
          {
            title: "Что такое растровая графика?",
            content: "Растровые изображения состоят из пикселей — маленьких цветных квадратиков. Каждый пиксель имеет свой цвет и положение в изображении.",
          },
          {
            title: "Что такое векторная графика?",
            content: "Векторные изображения строятся с помощью математических формул, описывающих линии, кривые и фигуры.",
          }
        ]
      },
      {
        title: "Сравнительный анализ",
        content: "Давайте рассмотрим основные преимущества и недостатки каждого типа графики.",
        table: {
          headers: ["Критерий", "Растровая графика", "Векторная графика"],
          rows: [
            ["Масштабирование", "Теряет качество", "Сохраняет качество"],
            ["Размер файла", "Больше", "Меньше"],
            ["Детализация", "Высокая", "Средняя"],
          ]
        }
      }
    ],
    relatedArticles: [
      {
        id: 2,
        title: "Современные подходы к разработке веб-приложений",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
      },
      {
        id: 3,
        title: "Принципы эффективного UX дизайна",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5"
      }
    ]
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
          {/* Header */}
          <header className="mb-8">
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
            
            <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium">{article.author.name}</div>
                  <div className="text-sm text-gray-500">
                    {article.publishedAt} · {article.readTime} чтения
                  </div>
                </div>
              </div>
              
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
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {article.sections.map((section, index) => (
              <section key={index} className="mb-12">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p className="mb-6">{section.content}</p>
                
                {section.subsections && (
                  <div className="pl-6 border-l-2 border-primary/20 space-y-6">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="text-xl font-semibold mb-3">{subsection.title}</h3>
                        <p>{subsection.content}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {section.table && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr>
                          {section.table.headers.map((header, i) => (
                            <th key={i} className="border p-3 bg-gray-50">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, i) => (
                          <tr key={i}>
                            {row.map((cell, j) => (
                              <td key={j} className="border p-3">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Похожие статьи</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {article.relatedArticles.map((related) => (
                <div
                  key={related.id}
                  onClick={() => navigate(`/article/${related.id}`)}
                  className="group cursor-pointer"
                >
                  <div className="aspect-video rounded-lg overflow-hidden mb-3">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform duration-300
                        group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {related.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;