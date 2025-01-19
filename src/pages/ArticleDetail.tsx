import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Loading } from "@/components/ui/loading";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";

const articles = [
  {
    id: 1,
    tags: ["Дизайн", "Брендинг"],
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    title: "Растровая и векторная графика: отличия, применение и способы трассировки изображения",
    description: "Растровая и векторная графика → Применение векторной графики по сравнению с растровой → Различие векторной и растровой графики",
    date: "24.12.2024",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Введение</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          В современном мире цифрового дизайна существует два основных типа графики: растровая и векторная. 
          Каждый из них имеет свои особенности, преимущества и недостатки.
        </p>
      </>
    )
  },
  {
    id: 2,
    tags: ["Разработка", "Frontend"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "Современные подходы к разработке веб-приложений",
    description: "Обзор актуальных технологий и методологий в веб-разработке.",
    date: "22.12.2024",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Актуальные технологии</h2>
      </>
    )
  },
  {
    id: 3,
    tags: ["UX/UI", "Дизайн"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    title: "Принципы эффективного UX дизайна",
    description: "Ключевые принципы создания удобных интерфейсов.",
    date: "20.12.2024",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Основные принципы UX</h2>
      </>
    )
  },
  {
    id: 4,
    tags: ["Маркетинг", "Аналитика"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "Тренды цифрового маркетинга в 2025 году",
    description: "Анализ новых стратегий и инструментов в digital marketing.",
    date: "18.12.2024",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Будущие тренды</h2>
      </>
    )
  }
];

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState(0);

  const currentIndex = articles.findIndex(article => article.id === Number(id));
  const currentArticle = articles[currentIndex];
  const nextArticle = articles[currentIndex + 1];
  const prevArticle = articles[currentIndex - 1];

  useEffect(() => {
    if (currentArticle) {
      setIsLoading(false);
    }
  }, [currentArticle]);

  const handleNavigation = (articleId: number, dir: number) => {
    setDirection(dir);
    navigate(`/article/${articleId}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!currentArticle) {
    return <div>Article not found</div>;
  }

  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  const pageTransition = {
    type: "tween",
    duration: 0.5
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div 
          key={currentArticle.id}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={pageTransition}
          className="container mx-auto px-4 py-16"
        >
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> На главную
          </Button>

          <motion.article 
            className="max-w-4xl mx-auto"
          >
            <motion.header className="mb-8">
              <h1 className="text-4xl font-bold mb-6">{currentArticle.title}</h1>
            </motion.header>

            <motion.div 
              className="relative aspect-video mb-12 rounded-xl overflow-hidden"
            >
              <img 
                src={currentArticle.image} 
                alt={currentArticle.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div className="prose prose-lg max-w-none mb-12">
              {currentArticle.content}
            </motion.div>
          </motion.article>

          <motion.div className="flex justify-between mt-8">
            {prevArticle && (
              <Button 
                variant="ghost" 
                onClick={() => handleNavigation(prevArticle.id, -1)}
                className="group flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-sm text-gray-500">Предыдущая статья</div>
                  <div className="font-medium line-clamp-1">{prevArticle.title}</div>
                </div>
              </Button>
            )}
            {nextArticle && (
              <Button 
                variant="ghost" 
                onClick={() => handleNavigation(nextArticle.id, 1)}
                className="group flex items-center"
              >
                <div className="text-right">
                  <div className="text-sm text-gray-500">Следующая статья</div>
                  <div className="font-medium line-clamp-1">{nextArticle.title}</div>
                </div>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ArticleDetail;