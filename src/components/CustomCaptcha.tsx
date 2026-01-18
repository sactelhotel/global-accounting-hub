import { useState, useEffect, useCallback } from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CaptchaChallenge {
  question: string;
  answer: number;
}

interface CustomCaptchaProps {
  label: string;
  instruction: string;
  placeholder: string;
  onValidate: (isValid: boolean) => void;
  value: string;
  onChange: (value: string) => void;
}

function generateChallenge(): CaptchaChallenge {
  const operators = ['+', '-', '×'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  
  let num1: number, num2: number, answer: number;
  
  switch (operator) {
    case '+':
      num1 = Math.floor(Math.random() * 20) + 1;
      num2 = Math.floor(Math.random() * 20) + 1;
      answer = num1 + num2;
      break;
    case '-':
      num1 = Math.floor(Math.random() * 20) + 10;
      num2 = Math.floor(Math.random() * num1);
      answer = num1 - num2;
      break;
    case '×':
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      answer = num1 * num2;
      break;
    default:
      num1 = 5;
      num2 = 3;
      answer = 8;
  }
  
  return {
    question: `${num1} ${operator} ${num2} = ?`,
    answer,
  };
}

export function CustomCaptcha({ 
  label, 
  instruction, 
  placeholder, 
  onValidate, 
  value, 
  onChange 
}: CustomCaptchaProps) {
  const [challenge, setChallenge] = useState<CaptchaChallenge>(generateChallenge);

  const refreshChallenge = useCallback(() => {
    setChallenge(generateChallenge());
    onChange('');
    onValidate(false);
  }, [onChange, onValidate]);

  useEffect(() => {
    if (value) {
      const userAnswer = parseInt(value, 10);
      onValidate(userAnswer === challenge.answer);
    } else {
      onValidate(false);
    }
  }, [value, challenge.answer, onValidate]);

  return (
    <div className="space-y-3">
      <Label>{label}</Label>
      <div className="bg-muted/50 border border-border rounded-lg p-4">
        <p className="text-sm text-muted-foreground mb-3">{instruction}</p>
        <div className="flex items-center gap-3">
          <div className="bg-background border border-border rounded-lg px-4 py-3 font-mono text-lg font-semibold text-foreground select-none">
            {challenge.question}
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={refreshChallenge}
            className="shrink-0"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
        <Input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="mt-3"
        />
      </div>
    </div>
  );
}