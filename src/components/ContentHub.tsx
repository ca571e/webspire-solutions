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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Контент-хаб</h1>
        <div className="grid gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {article.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-xl font-semibold mb-4">
                    <a href={article.url} className="hover:text-primary transition-colors">
                      {article.title}
                    </a>
                  </h2>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <time className="text-sm text-gray-500">{article.date}</time>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentHub;