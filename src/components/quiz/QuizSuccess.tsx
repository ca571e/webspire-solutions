import { Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface QuizSuccessProps {
  onReset: () => void;
}

const QuizSuccess = ({ onReset }: QuizSuccessProps) => {
  return (
    <Card className="p-8 border-2 border-primary/20 rounded-3xl">
      <CardContent className="flex flex-col items-center justify-center py-12">
        <div className="mb-8">
          <Crown className="w-16 h-16 text-primary animate-bounce" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-4">Ваша заявка принята!</h2>
        <p className="text-gray-600 text-center mb-8">
          Наши специалисты свяжутся с вами в ближайшее время для обсуждения деталей проекта.
        </p>
        <Button onClick={onReset} className="px-8">
          Отправить еще одну заявку
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuizSuccess;