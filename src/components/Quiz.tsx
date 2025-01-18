import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useToast } from "./ui/use-toast";
import { ShoppingBag, Users, Network, Database, MoreHorizontal, ChessKing, ChessPawn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(33);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
    setProgress((prev) => Math.min(prev + 33, 100));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
    setProgress((prev) => Math.max(prev - 33, 33));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Заявка успешно отправлена",
        description: "Мы свяжемся с вами в ближайшее время для обсуждения деталей.",
      });
    } catch (error) {
      toast({
        title: "Ошибка при отправке",
        description: "Пожалуйста, попробуйте еще раз позже.",
        variant: "destructive",
      });
    }
  };

  const projectTypes = [
    { icon: <ShoppingBag className="w-8 h-8" />, label: "Электронная коммерция" },
    { icon: <Users className="w-8 h-8" />, label: "Обслуживание клиентов" },
    { icon: <Network className="w-8 h-8" />, label: "Интранет" },
    { icon: <Database className="w-8 h-8" />, label: "Big data" },
    { icon: <MoreHorizontal className="w-8 h-8" />, label: "Другой" },
  ];

  if (isSubmitted) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="p-8 border-2 border-primary/20 rounded-3xl">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <div className="mb-8">
                <ChessKing className="w-16 h-16 text-primary animate-bounce" />
              </div>
              <h2 className="text-3xl font-bold text-center mb-4">Ваша заявка принята!</h2>
              <p className="text-gray-600 text-center mb-8">
                Наши специалисты свяжутся с вами в ближайшее время для обсуждения деталей проекта.
              </p>
              <Button onClick={() => setIsSubmitted(false)} className="px-8">
                Отправить еще одну заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <Card className="p-8 border-2 border-primary/20 rounded-3xl">
          <CardContent>
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <ChessPawn className={`w-6 h-6 text-primary ${currentStep === 3 ? 'animate-bounce' : ''}`} />
                  <span className="text-sm font-medium text-primary">ШАГ {currentStep} ИЗ 3</span>
                </div>
                <div className="relative w-32 h-8">
                  {/* Chessboard background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-8 h-full">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className={`${i % 2 === 0 ? 'bg-gray-300/50' : 'bg-white/50'}`} />
                      ))}
                    </div>
                  </div>
                  {/* Pawn/King */}
                  <div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
                    style={{
                      '--move-distance': `${progress / 100 * 128}px`,
                    } as React.CSSProperties}
                  >
                    {progress === 100 ? (
                      <ChessKing className="w-6 h-6 text-primary animate-pawn-promote" />
                    ) : (
                      <ChessPawn className="w-6 h-6 text-primary animate-pawn-move" />
                    )}
                  </div>
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-12">
                {currentStep === 1 && "ВЫБЕРИТЕ ТИП ВАШЕГО ПРОЕКТА"}
                {currentStep === 2 && "ВЫБЕРИТЕ НЕОБХОДИМЫЕ ФУНКЦИИ"}
                {currentStep === 3 && "УКАЖИТЕ БЮДЖЕТ ПРОЕКТА"}
              </h2>
            </div>

            <AnimatePresence mode="wait">
              <motion.form
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {currentStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-2">
                      <RadioGroup defaultValue="ecommerce" className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {projectTypes.map((type) => (
                          <div key={type.label} className="relative">
                            <RadioGroupItem
                              value={type.label.toLowerCase()}
                              id={type.label}
                              className="peer sr-only"
                            />
                            <label
                              htmlFor={type.label}
                              className="flex flex-col items-center justify-center p-6 border-2 rounded-xl cursor-pointer hover:border-primary transition-colors peer-checked:border-primary peer-checked:bg-primary/5"
                            >
                              <div className="text-primary mb-3">{type.icon}</div>
                              <span className="text-sm font-medium text-center">{type.label}</span>
                            </label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold mb-4">Ваш проект</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm text-gray-500">Тип</label>
                          <div className="h-8 bg-white rounded border"></div>
                        </div>
                        <div>
                          <label className="text-sm text-gray-500">Описание</label>
                          <div className="h-20 bg-white rounded border"></div>
                        </div>
                        <div>
                          <label className="text-sm text-gray-500">Бюджет</label>
                          <div className="h-8 bg-white rounded border"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Какие функции необходимы?</h3>
                    <RadioGroup defaultValue="auth" className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        "Авторизация пользователей",
                        "Интеграция с CRM",
                        "Онлайн-оплата",
                        "Административная панель",
                        "Аналитика",
                        "API интеграции"
                      ].map((feature) => (
                        <div key={feature} className="relative">
                          <RadioGroupItem value={feature.toLowerCase()} id={feature} className="peer sr-only" />
                          <label
                            htmlFor={feature}
                            className="block p-4 border-2 rounded-xl cursor-pointer hover:border-primary transition-colors peer-checked:border-primary peer-checked:bg-primary/5"
                          >
                            {feature}
                          </label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Предполагаемый бюджет проекта</h3>
                    <RadioGroup defaultValue="budget1" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { value: "budget1", label: "До 100 000 ₽" },
                        { value: "budget2", label: "100 000 - 300 000 ₽" },
                        { value: "budget3", label: "300 000 - 500 000 ₽" },
                        { value: "budget4", label: "Более 500 000 ₽" }
                      ].map((budget) => (
                        <div key={budget.value} className="relative">
                          <RadioGroupItem value={budget.value} id={budget.value} className="peer sr-only" />
                          <label
                            htmlFor={budget.value}
                            className="block p-4 border-2 rounded-xl cursor-pointer hover:border-primary transition-colors peer-checked:border-primary peer-checked:bg-primary/5"
                          >
                            {budget.label}
                          </label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                )}

                <div className="flex justify-between">
                  {currentStep > 1 && (
                    <Button type="button" variant="outline" onClick={handlePrev} className="px-8">
                      Назад
                    </Button>
                  )}
                  <div className="ml-auto">
                    {currentStep < 3 ? (
                      <Button type="button" onClick={handleNext} className="px-8">
                        Далее
                      </Button>
                    ) : (
                      <Button type="submit" className="px-8">
                        Отправить заявку
                      </Button>
                    )}
                  </div>
                </div>
              </motion.form>
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Quiz;
