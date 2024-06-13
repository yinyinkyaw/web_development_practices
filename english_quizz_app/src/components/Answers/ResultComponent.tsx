import CheckCircleIcon from "@icons/tick-circle-bold.svg";
import CrossCircleIcon from "@icons/close-circle-bold.svg";

type ResultComponentProps = {
    is_correct: boolean;
    correct_answer: string;
}

const ResultComponent = ({ is_correct, correct_answer }: ResultComponentProps) => {
  return (
    <div className="w-full h-full bg-slate-600 rounded-md p-3 dark:text-white">
        <div className="flex gap-2 items-center">
            <span className={is_correct ? "text-lime-600" : "text-red-600"}>
                {
                    is_correct ? <CheckCircleIcon />: <CrossCircleIcon />
                }
            </span>
            <p className="text-lg font-medium">{is_correct ? "Correct" : "Wrong"} Answer</p>
        </div>
        <p className="text-base dark:text-white mt-6 font-semibold">The answer is "{correct_answer}"</p>
        
    </div>
  )
}

export default ResultComponent