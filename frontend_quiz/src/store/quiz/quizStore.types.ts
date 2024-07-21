import { Question, Quiz } from "@/interfaces/quiz";

export type QuizState = {
  quiz: Quiz | null;
  question: Question | null;
  score: number;
};

export type QuizStoreAction = {
  setQuiz: (quizTitle: string) => void;
  setSelectedQuestion: (question: Question) => void;
  setScore: (correctAnswer: string, userAnswer: string) => void;
};
