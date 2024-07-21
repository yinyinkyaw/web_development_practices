import { create } from "zustand";
import { QuizState, QuizStoreAction } from "./quizStore.types";
import { getQuizByTitle } from "utils";

export const useQuizStore = create<QuizState & QuizStoreAction>((set) => ({
  quiz: null,
  question: null,
  score: 0,
  setQuiz: (title) => set(() => ({ quiz: getQuizByTitle(title) })),
  setSelectedQuestion: (info) => set(() => ({ question: info })),
  setScore: (correctAns, userAns) =>
    set((state) => ({
      score: correctAns === userAns ? state.score + 1 : state.score,
    })),
}));
