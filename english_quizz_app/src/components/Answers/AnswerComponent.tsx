import { Answer } from 'interfaces'
import Circle from "@icons/record.svg";
import CheckCircle from "@icons/tick-circle.svg";

type AnswerComponentProps = {
    answer: Answer;
    handleClick: (question_id: string, userAnswer: string) => void;
    result: Answer | null;
}

const AnswerComponent = ({ answer, handleClick, result }: AnswerComponentProps) => {
  return (
    <div className='flex gap-4 w-full flex-wrap justify-center'>
        {
            answer?.answer_options.map((option) => (
                <div className='py-2 px-3 bg-slate-500 rounded-md flex items-center justify-center text-white gap-1
                    cursor-pointer hover:bg-slate-700 transition-colors ease-in-out delay-50
                ' onClick={() => handleClick(answer.question_id, option)}>
                    {result ? result.user_answer === option ? <CheckCircle /> : <Circle /> : <Circle />}
                    {option}
                </div>
            ))
        }
    </div>
  )
}

export default AnswerComponent