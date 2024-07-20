import FrontendSelection from "@/components/FrontendSelection/FrontendSelection.component";
import { useQuizStore } from "store/quiz/quizStore";
import Quizzes from "./components/Quizzes/Quizzes.component";

function App() {
  const { quiz } = useQuizStore((state) => state);

  if (quiz) return <Quizzes />;
  return <FrontendSelection />;
}

export default App;
