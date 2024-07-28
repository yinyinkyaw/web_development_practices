import { Question } from "@/interfaces/quiz";
import { DATA } from "data";

export function getSubjects() {
  return DATA.quizzes.map((quiz) => ({ title: quiz.title, icon: quiz.icon }));
}

export function getQuizByTitle(title: string) {
  return DATA.quizzes.find((quiz) => quiz.title === title);
}

export function getQuestionByIndex(questions: Array<Question>, idx: number) {
  return questions.find((_, index) => index === idx);
}

export function getTotalScore(data: Map<string, number>) {
  return [...data.values()].reduce((total, current) => total + current, 0);
}

export function shuffleData<T>(array: Array<T>) {
  for (let i = array.length - 1; i === 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
