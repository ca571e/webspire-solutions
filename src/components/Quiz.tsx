import { useState } from "react";
import { Progress } from "./ui/progress";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(33);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
    setProgress((prev) => Math.min(prev + 33, 100));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <Progress value={progress} className="mb-8" />
        <h1 className="text-4xl font-bold text-center mb-12">Оставьте свою заявку</h1>
        <form className="space-y-8">
          {currentStep === 1 && (
            <div className="space-y-4">
              <p className="text-lg font-medium">1. Какой ваш любимый цвет?</p>
              <RadioGroup defaultValue="red">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="red" id="red" />
                  <label htmlFor="red">Красный</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="blue" id="blue" />
                  <label htmlFor="blue">Синий</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="green" id="green" />
                  <label htmlFor="green">Зелёный</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yellow" id="yellow" />
                  <label htmlFor="yellow">Жёлтый</label>
                </div>
              </RadioGroup>
              <Button onClick={handleNext}>Далее</Button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <p className="text-lg font-medium">2. Какие хобби вам нравятся?</p>
              <div className="space-y-2">
                {["Чтение", "Спорт", "Путешествия", "Игры"].map((hobby) => (
                  <div key={hobby} className="flex items-center space-x-2">
                    <Checkbox id={hobby} />
                    <label htmlFor={hobby}>{hobby}</label>
                  </div>
                ))}
              </div>
              <Button onClick={handleNext}>Далее</Button>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <p className="text-lg font-medium">3. Выберите свой возраст:</p>
              <RadioGroup defaultValue="18-25">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="до 18" id="до 18" />
                  <label htmlFor="до 18">до 18</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="18-25" id="18-25" />
                  <label htmlFor="18-25">18-25</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="26-35" id="26-35" />
                  <label htmlFor="26-35">26-35</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="36+" id="36+" />
                  <label htmlFor="36+">36+</label>
                </div>
              </RadioGroup>
              <Button type="submit">Завершить</Button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Quiz;