import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: "Формирование идеи",
    description: "Мы тщательно анализируем рынок и потребности клиента, создавая уникальную концепцию будущего проекта.",
    image: "/placeholder.svg",
    icon: "./figure/Pawn.png",
    iconClass: "w-8 h-8 object-contain transition-all duration-300"
  },
  {
    title: "Дизайн и прототипирование",
    description: "Разрабатываем стильный и удобный интерфейс, создаем интерактивные прототипы для согласования.",
    image: "/placeholder.svg",
    icon: "./figure/Knight.png",
    iconClass: "w-8 h-8 object-contain transition-all duration-300"
  },
  {
    title: "Разработка",
    description: "Воплощаем проект в жизнь с использованием современных технологий и фреймворков.",
    image: "/placeholder.svg",
    icon: "./figure/Rook.png",
    iconClass: "w-8 h-8 object-contain transition-all duration-300"
  },
  {
    title: "Тестирование",
    description: "Проводим всестороннее тестирование, чтобы гарантировать высокое качество и надежность.",
    image: "/placeholder.svg",
    icon: "./figure/Queen.png",
    iconClass: "w-8 h-8 object-contain transition-all duration-300"
  },
  {
    title: "Запуск и поддержка",
    description: "Запускаем проект и предоставляем техническую поддержку для успешного развития.",
    image: "/placeholder.svg",
    icon: "./figure/King.png",
    iconClass: "w-8 h-8 object-contain transition-all duration-300"
  }
];

const ProjectProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Как мы готовим наш проект
        </motion.h2>
        
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                  index === activeStep ? 'scale-110' : 'scale-95'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <motion.div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 relative overflow-hidden ${
                    index === activeStep ? 'bg-primary' : 'bg-gray-200'
                  }`}
                  animate={{
                    scale: index === activeStep ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src={step.icon} 
                    alt={step.title}
                    className={step.iconClass}
                    initial={{ opacity: 1 }}
                    animate={{ 
                      filter: index === activeStep ? 'brightness(0) invert(1)' : 'none'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <p className="text-sm text-center font-medium">{step.title.split(' ')[0]}</p>
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.img 
                  src={steps[activeStep].image} 
                  alt={steps[activeStep].title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg w-full h-64 object-cover"
                />
                <div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-2xl font-semibold mb-4"
                  >
                    {steps[activeStep].title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="text-gray-600"
                  >
                    {steps[activeStep].description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="p-2 rounded-full bg-gray-100 disabled:opacity-50 hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
              className="p-2 rounded-full bg-gray-100 disabled:opacity-50 hover:bg-gray-200 transition-colors"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectProcess;