export interface Question {
    id: string;
    title: string;
}

export interface Answer {
    id: string;
    question_id: string;
    answer_options: string[];
    answer: string;
    is_answer: boolean;
    user_answer: string;
}