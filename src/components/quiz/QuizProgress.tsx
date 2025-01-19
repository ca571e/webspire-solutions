import { Circle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface QuizProgressProps {
  currentStep: number;
  progress: number;
}

const QuizProgress = ({ currentStep, progress }: QuizProgressProps) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <Circle className={`w-6 h-6 text-primary ${currentStep === 3 ? 'animate-bounce' : ''}`} />
        <span className="text-sm font-medium text-primary">ШАГ {currentStep} ИЗ 3</span>
      </div>
      <Progress value={progress} className="w-32" />
    </div>
  );
};

export default QuizProgress;