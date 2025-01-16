import { Calendar, Tag, ArrowUpRight } from "lucide-react";

const articles = [
  {
    tags: ["Дизайн", "Брендинг"],
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    title: "Растровая и векторная графика: отличия, применение и способы трассировки изображения",
    description: "Растровая и векторная графика → Применение векторной графики по сравнению с растровой → Различие векторной и растровой графики",
    date: "24.12.2024",
    url: "http://web-valley.ru/articles/chem-otlichaetsya-vektornaya-grafika-ot-rastrovoj",
  },
  // ... остальные статьи
];

const ContentHub = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Контент-хаб</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Полезные статьи и материалы для развития вашего бизнеса
          </p>
          
          <div className="grid gap-8">
            {articles.map((article, index) => (
              <article 
                key={index} 
                className="group bg-background rounded-xl overflow-hidden shadow-lg transition-all duration-300
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