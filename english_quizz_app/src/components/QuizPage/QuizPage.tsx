import QuestionComponent from "@components/Questions/QuestionComponent";
import questionData from "@data/quesetions.json";
import answerData from "@data/answers.json";
import { useMemo, useState } from "react";
import Progressbar from "@components/common/Progressbar";
import AnswerComponent from "@components/Answers/AnswerComponent";
import { Answer } from "interfaces";
import ResultComponent from "@components/Answers/ResultComponent";

const questions = questionData?.map((info) => ({...info, id: crypto.randomUUID() }));

const answers = answerData?.map((info, index) => ({ ...info, id: crypto.randomUUID(), question_id: questions[index].id }));

const QuizPage = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [result, setResult] = useState<Answer | null>(null); 
  
  const selectedQuiz = useMemo(() => {
    const question = questions.find((_, index) => index === currentIndex);
    const answer = answers.find((_, index) => index === currentIndex);
    return {
      question,
      answer
    }
  }, [currentIndex]);

  const handleAnswer = (questionId: string, userAnswer: string) => {
    if(currentIndex === questions.length - 1) return
    const answer = answers.find((answer) => answer.question_id === questionId);
    if(answer) {
      setResult({...answer,user_answer: userAnswer});
    }
    setTimeout(() => {
      setCurrentIndex((index) => index + 1);
      setResult(null);
    }, 2000);
  }

  return (
    <section className="max-w-5xl mx-auto w-full dark:bg-slate-800 bg-slate-100 h-[calc(100vh_-_12.8rem)] rounded-2xl my-16 p-4 flex flex-col gap-8">
      <h2 className="text-2xl font-bold dark:text-white text-slate-800 text-center">Fill in the Blank.</h2>
      <div className="w-1/2 mx-auto">
        <Progressbar current={currentIndex + 1} total={questions.length} />
      </div>
      
      <div className="mt-4 h-full flex flex-col items-center justify-center gap-20">
        {
          selectedQuiz && selectedQuiz.question && (
            <QuestionComponent text={selectedQuiz?.question?.text.replaceAll("[]", "_____")} />
          )
        }
        {
          selectedQuiz && selectedQuiz.answer && (
            <AnswerComponent answer={selectedQuiz.answer} handleClick={handleAnswer} result={result} />
          )
        }
        {
          result && (
            <div className="w-1/2 mx-auto">
              <ResultComponent is_correct={selectedQuiz.answer?.answer === result.user_answer} correct_answer={selectedQuiz?.answer?.answer ?? ""} />
            </div>
          )
        }
      </div>
      
    </section>
  )
}

export default QuizPage