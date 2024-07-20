import { Quiz } from "@/interfaces/quiz";

export type QuizState = {
  quiz: Quiz | null;
};

export type QuizStoreAction = {
  setQuiz: (quizTitle: string) => void;
};
