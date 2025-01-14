import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

const services = [
  {
    title: "Веб-разработка",
    description: "Создание современных и адаптивных сайтов под любые задачи вашего бизнеса.",
    technologies: [
      { name: "HTML5 & CSS3", icon: "bxl-html5" },
      { name: "JavaScript", icon: "bxl-javascript" },
      { name: "React.js", icon: "bxl-react" },
      { name: "PHP", icon: "bxl-php" }
    ]
  },
  {
    title: "Дизайн и UI/UX",
    description: "Разработка уникальных и удобных интерфейсов для вашего сайта или приложения.",
    technologies: [
      { name: "Figma", icon: "bxl-figma" },
      { name: "UI/UX Дизайн", icon: "bx-paint" },
      { name: "Мобильный Дизайн", icon: "bx-mobile-alt" }
    ]
  },
  {
    title: "SEO и Продвижение",
    description: "Комплексное продвижение сайтов в поисковых системах для увеличения посещаемости.",
    technologies: [
      { name: "SEO Аудит", icon: "bx-line-chart" },
      { name: "Ключевые слова", icon: "bx-key" },
      { name: "Локальное SEO", icon: "bx-globe" }
    ]
  }
];

const Services = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Наши Услуги</h1>
        
        <div className="space-y-4 max-w-3xl mx-auto">
          {services.map((service, index) => (
            <Collapsible 
              key={index}
              open={openItems.includes(index)}
              onOpenChange={() => toggleItem(index)}
              className="bg-white rounded-lg shadow-sm"
            >
              <CollapsibleTrigger className="w-full p-6 flex justify-between items-center text-left">
                <span className="text-xl font-semibold">{service.title}</span>
                <i className={`bx ${openItems.includes(index) ? 'bx-minus' : 'bx-plus'} text-2xl`}></i>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="p-6 pt-0">
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {service.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="p-4 bg-gray-50 rounded-lg text-center">
                      <i className={`bx ${tech.icon} text-3xl text-primary mb-2`}></i>
                      <p className="text-sm">{tech.name}</p>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;