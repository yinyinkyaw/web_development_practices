export interface Quiz {
  title: string;
  icon: React.ReactNode;
  questions: Array<Question>;
}

export interface Question {
  question: string;
  options: Array<string>;
  answer: string;
}

export type Subject = "HTML" | "CSS" | "JavaScript" | "Accessibility";
