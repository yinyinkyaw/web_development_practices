import { Question, Quiz } from "@/interfaces/quiz";

export type QuizState = {
  quiz: Quiz | null;
  question: Question | null;
  score: Map<string, number>;
  quizComplete: boolean;
};

export type QuizStoreAction = {
  setQuiz: (quizTitle: string) => void;
  setSelectedQuestion: (question: Question) => void;
  setScore: (quizId: string, score: number) => void;
  setQuizComplete: (status: boolean) => void;
};
