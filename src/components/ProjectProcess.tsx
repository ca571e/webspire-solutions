import { useState } from 'react';
import { ArrowLeft, ArrowRight, Crown, Circle } from 'lucide-react';

const steps = [
  {
    title: "Формирование идеи",
    description: "Мы тщательно анализируем рынок и потребности клиента, создавая уникальную концепцию будущего проекта.",
    image: "/placeholder.svg"
  },
  {
    title: "Дизайн и прототипирование",
    description: "Разрабатываем стильный и удобный интерфейс, создаем интерактивные прототипы для согласования.",
    image: "/placeholder.svg"
  },
  {
    title: "Разработка",
    description: "Воплощаем проект в жизнь с использованием современных технологий и фреймворков.",
    image: "/placeholder.svg"
  },
  {
    title: "Тестирование",
    description: "Проводим всестороннее тестирование, чтобы гарантировать высокое качество и надежность.",
    image: "/placeholder.svg"
  },
  {
    title: "Запуск и поддержка",
    description: "Запускаем проект и предоставляем техническую поддержку для успешного развития.",
    image: "/placeholder.svg"
  }
];

const ProjectProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Как мы готовим наш проект</h2>
        
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center cursor-pointer transition-all ${
                  index === activeStep ? 'scale-110' : 'opacity-50'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 relative ${
                    index === activeStep ? 'bg-primary text-white' : 'bg-gray-200'
                  }`}
                  style={{
                    '--move-distance': `${(index - activeStep) * 100}%`
                  } as React.CSSProperties}
                >
                  {index === steps.length - 1 && activeStep === index ? (
                    <Crown className="w-6 h-6 animate-pawn-promote" />
                  ) : (
                    <Circle 
                      className={`w-6 h-6 ${
                        index === activeStep ? 'animate-pawn-move' : ''
                      }`}
                    />
                  )}
                </div>
                <p className="text-sm text-center">{step.title.split(' ')[0]}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-8 transition-all">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img 
                src={steps[activeStep].image} 
                alt={steps[activeStep].title}
                className="rounded-lg w-full h-64 object-cover"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-4">{steps[activeStep].title}</h3>
                <p className="text-gray-600">{steps[activeStep].description}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="p-2 rounded-full bg-gray-100 disabled:opacity-50 hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
              className="p-2 rounded-full bg-gray-100 disabled:opacity-50 hover:bg-gray-200 transition-colors"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectProcess;