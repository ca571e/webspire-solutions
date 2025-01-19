import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useToast } from "./ui/use-toast";
import { ShoppingBag, Users, Network, Database, MoreHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import QuizStep from "./quiz/QuizStep";
import QuizSuccess from "./quiz/QuizSuccess";
import QuizProgress from "./quiz/QuizProgress";

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

  if (isSubmitted) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <QuizSuccess onReset={() => setIsSubmitted(false)} />
        </div>
      </section>
    );
  }

  const steps = [
    {
      title: "ВЫБЕРИТЕ ТИП ВАШЕГО ПРОЕКТА",
      options: [
        { value: "ecommerce", label: "Электронная коммерция", icon: <ShoppingBag className="w-8 h-8" /> },
        { value: "service", label: "Обслуживание клиентов", icon: <Users className="w-8 h-8" /> },
        { value: "intranet", label: "Интранет", icon: <Network className="w-8 h-8" /> },
        { value: "bigdata", label: "Big data", icon: <Database className="w-8 h-8" /> },
        { value: "other", label: "Другой", icon: <MoreHorizontal className="w-8 h-8" /> },
      ],
    },
    {
      title: "ВЫБЕРИТЕ НЕОБХОДИМЫЕ ФУНКЦИИ",
      options: [
        { value: "auth", label: "Авторизация пользователей" },
        { value: "crm", label: "Интеграция с CRM" },
        { value: "payment", label: "Онлайн-оплата" },
        { value: "admin", label: "Административная панель" },
        { value: "analytics", label: "Аналитика" },
        { value: "api", label: "API интеграции" },
      ],
    },
    {
      title: "УКАЖИТЕ БЮДЖЕТ ПРОЕКТА",
      options: [
        { value: "budget1", label: "До 100 000 ₽" },
        { value: "budget2", label: "100 000 - 300 000 ₽" },
        { value: "budget3", label: "300 000 - 500 000 ₽" },
        { value: "budget4", label: "Более 500 000 ₽" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <Card className="p-8 border-2 border-primary/20 rounded-3xl">
          <CardContent>
            <div className="mb-8">
              <QuizProgress currentStep={currentStep} progress={progress} />
              <h2 className="text-4xl font-bold mb-12">{steps[currentStep - 1].title}</h2>
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
                <QuizStep step={currentStep} content={steps[currentStep - 1]} />

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