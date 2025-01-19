import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";

interface QuizStepProps {
  step: number;
  content: {
    title: string;
    options: Array<{
      value: string;
      label: string;
      icon?: React.ReactNode;
    }>;
  };
}

const QuizStep = ({ step, content }: QuizStepProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">{content.title}</h3>
      <RadioGroup defaultValue={content.options[0].value} className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {content.options.map((option) => (
          <div key={option.value} className="relative">
            <RadioGroupItem
              value={option.value}
              id={option.value}
              className="peer sr-only"
            />
            <label
              htmlFor={option.value}
              className="flex flex-col items-center justify-center p-6 border-2 rounded-xl cursor-pointer 
                hover:border-primary transition-colors peer-checked:border-primary peer-checked:bg-primary/5"
            >
              {option.icon && <div className="text-primary mb-3">{option.icon}</div>}
              <span className="text-sm font-medium text-center">{option.label}</span>
            </label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default QuizStep;