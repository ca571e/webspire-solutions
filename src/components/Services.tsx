import { useState } from 'react';
import { motion } from 'framer-motion';
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
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-8 md:py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"
        >
          Наши Услуги
        </motion.h1>
        
        <div className="space-y-4 max-w-3xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Collapsible 
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
                className="bg-white rounded-lg shadow-sm"
              >
                <CollapsibleTrigger className="w-full p-4 md:p-6 flex justify-between items-center text-left">
                  <span className="text-lg md:text-xl font-semibold">{service.title}</span>
                  <motion.i 
                    animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`bx ${openItems.includes(index) ? 'bx-minus' : 'bx-plus'} text-xl md:text-2xl`}
                  />
                </CollapsibleTrigger>
                
                <CollapsibleContent className="p-4 md:p-6 pt-0">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {service.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        className="p-3 md:p-4 bg-gray-50 rounded-lg text-center"
                      >
                        <i className={`bx ${tech.icon} text-2xl md:text-3xl text-primary mb-2`}></i>
                        <p className="text-xs md:text-sm">{tech.name}</p>
                      </motion.div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;