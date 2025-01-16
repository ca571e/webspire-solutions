import { Calendar, Tag, ArrowUpRight } from "lucide-react";

const articles = [
  {
    tags: ["Дизайн", "Брендинг"],
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    title: "Растровая и векторная графика: отличия, применение и способы трассировки изображения",
    description: "Растровая и векторная графика → Применение векторной графики по сравнению с растровой → Различие векторной и растровой графики",
    date: "24.12.2024",
    url: "#",
  },
  {
    tags: ["Разработка", "Frontend"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "Современные подходы к разработке веб-приложений",
    description: "Обзор актуальных технологий и методологий в веб-разработке. Лучшие практики и инструменты для создания современных приложений.",
    date: "22.12.2024",
    url: "#",
  },
  {
    tags: ["UX/UI", "Дизайн"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    title: "Принципы эффективного UX дизайна",
    description: "Ключевые принципы создания удобных интерфейсов. Как сделать продукт интуитивно понятным и привлекательным для пользователей.",
    date: "20.12.2024",
    url: "#",
  },
  {
    tags: ["Маркетинг", "SEO"],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
    title: "SEO оптимизация в 2024 году",
    description: "Актуальные методы продвижения сайтов. Что работает сейчас и как подготовиться к будущим изменениям алгоритмов.",
    date: "18.12.2024",
    url: "#",
  }
];

const ContentHub = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `url('/lovable-uploads/95f03601-cf4d-43c4-a569-1aa7d06c7d87.png')`,
          backgroundSize: '400px',
          backgroundRepeat: 'repeat',
        }}
      />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Контент-хаб</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Полезные статьи и материалы для развития вашего бизнеса
          </p>
          
          <div className="grid gap-8">
            {articles.map((article, index) => (
              <article 
                key={index} 
                className="group bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300
                  hover:shadow-xl hover:-translate-y-1"
              >
                <a href={article.url} className="block">
                  <div className="grid md:grid-cols-5 gap-6 p-6">
                    <div className="md:col-span-2">
                      <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden">
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
                    </div>
                    
                    <div className="md:col-span-3 flex flex-col">
                      <div className="flex-grow">
                        <div className="flex items-start justify-between gap-4">
                          <h2 className="text-xl font-semibold mb-3 group-hover:text-primary
                            transition-colors duration-300">
                            {article.title}
                          </h2>
                          <span className="text-primary opacity-0 group-hover:opacity-100
                            transition-opacity duration-300">
                            <ArrowUpRight className="w-6 h-6" />
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                      </div>
                      
                      <time className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </time>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentHub;