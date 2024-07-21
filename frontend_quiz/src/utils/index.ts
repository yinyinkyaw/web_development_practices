import { Quiz } from "@/interfaces/quiz";
import { DATA } from "data";

export function getSubjects() {
  return DATA.quizzes.map((quiz) => ({ title: quiz.title, icon: quiz.icon }));
}

export function getQuizByTitle(title: string) {
  return DATA.quizzes.find((quiz) => quiz.title === title);
}

export function getQuestionByIndex(quiz: Quiz, idx: number) {
  return quiz?.questions.find((_, index) => index === idx);
}

export function getTotalScore(data: Map<string, number>) {
  return [...data.values()].reduce((total, current) => total + current, 0);
}
