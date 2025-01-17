import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Calendar, Tag, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";

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

const ContentHubPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center mb-4"
          >
            Контент-хаб
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          >
            Полезные статьи и материалы для развития вашего бизнеса
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                  hover:-translate-y-1 cursor-pointer transition-all duration-300"
                onClick={() => navigate(`/article/${article.id}`)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500
                      group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="flex items-center gap-1 bg-white/90 backdrop-blur-sm text-primary 
                          px-3 py-1 rounded-full text-sm font-medium"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-lg font-semibold mb-2 group-hover:text-primary
                      transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h2>
                    <span className="text-primary opacity-0 group-hover:opacity-100
                      transition-opacity duration-300 flex-shrink-0">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.description}</p>
                  <time className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </time>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHubPage;