import { useState } from "react";
import { Progress } from "./ui/progress";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "./ui/use-toast";

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(33);
  const { toast } = useToast();

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
    setProgress((prev) => Math.min(prev + 33, 100));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Оставьте заявку на разработку проекта
            </CardTitle>
            <Progress value={progress} className="mt-6" />
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Какой тип проекта вас интересует?</h3>
                  <RadioGroup defaultValue="website">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="website" id="website" />
                      <label htmlFor="website">Веб-сайт</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="app" id="app" />
                      <label htmlFor="app">Мобильное приложение</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ecommerce" id="ecommerce" />
                      <label htmlFor="ecommerce">Интернет-магазин</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <label htmlFor="other">Другое</label>
                    </div>
                  </RadioGroup>
                  <Button onClick={handleNext} className="w-full">Далее</Button>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Какие функции необходимы?</h3>
                  <div className="space-y-2">
                    {[
                      "Авторизация пользователей",
                      "Интеграция с CRM",
                      "Онлайн-оплата",
                      "Административная панель"
                    ].map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox id={feature} />
                        <label htmlFor={feature}>{feature}</label>
                      </div>
                    ))}
                  </div>
                  <Button onClick={handleNext} className="w-full">Далее</Button>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Предполагаемый бюджет проекта</h3>
                  <RadioGroup defaultValue="budget1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="budget1" id="budget1" />
                      <label htmlFor="budget1">До 100 000 ₽</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="budget2" id="budget2" />
                      <label htmlFor="budget2">100 000 - 300 000 ₽</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="budget3" id="budget3" />
                      <label htmlFor="budget3">300 000 - 500 000 ₽</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="budget4" id="budget4" />
                      <label htmlFor="budget4">Более 500 000 ₽</label>
                    </div>
                  </RadioGroup>
                  <Button type="submit" className="w-full">Отправить заявку</Button>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Quiz;