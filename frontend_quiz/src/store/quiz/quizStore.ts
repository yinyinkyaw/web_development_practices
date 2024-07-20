import { create } from "zustand";
import { QuizState, QuizStoreAction } from "./quizStore.types";
import { getQuizByTitle } from "utils";

export const useQuizStore = create<QuizState & QuizStoreAction>((set) => ({
  quiz: null,
  setQuiz: (title) => set(() => ({ quiz: getQuizByTitle(title) })),
}));
