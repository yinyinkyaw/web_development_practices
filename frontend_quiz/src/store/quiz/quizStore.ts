import { create } from "zustand";
import { QuizState, QuizStoreAction } from "./quizStore.types";
import { getQuizByTitle } from "utils";

export const useQuizStore = create<QuizState & QuizStoreAction>((set) => ({
  quiz: null,
  question: null,
  score: new Map(),
  quizComplete: false,
  setQuiz: (title) => set(() => ({ quiz: getQuizByTitle(title) })),
  setSelectedQuestion: (info) => set(() => ({ question: info })),
  setScore: (quizId, score) =>
    set((state) => ({
      score: state.score.set(quizId, score),
    })),
  setQuizComplete: (status) =>
    set(() => ({
      quizComplete: status,
    })),
}));
