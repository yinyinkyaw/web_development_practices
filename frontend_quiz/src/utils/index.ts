import { DATA } from "data";

export function getSubjects() {
  return DATA.quizzes.map((quiz) => ({ title: quiz.title, icon: quiz.icon }));
}
