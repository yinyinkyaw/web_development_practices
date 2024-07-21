import FrontendSelection from "@/components/FrontendSelection/FrontendSelection.component";
import { useQuizStore } from "store/quiz/quizStore";
import Quizzes from "./components/Quizzes/Quizzes.component";
import QuizResult from "./components/QuizResult/QuizResult.component";

function App() {
  const { quiz, quizComplete } = useQuizStore((state) => state);

  if (quizComplete) return <QuizResult />;
  if (quiz) return <Quizzes />;
  return <FrontendSelection />;
}

export default App;
