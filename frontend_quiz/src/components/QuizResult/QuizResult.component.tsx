import DefaultLayout from "layout/DefaultLayout";
import { useQuizStore } from "store/quiz/quizStore";
import { tss } from "tss-react";
import QuizSubjectIcon from "../QuizSubjectIcon/QuizSubjectIcon.component";
import { getTotalScore } from "utils";

const QuizResult = () => {
  const { quiz, score, setQuiz, setQuizComplete } = useQuizStore(
    (state) => state
  );
  const { classes, cx } = quizResultStyles();

  const result = getTotalScore(score);

  const totalScore = quiz?.questions.length;

  const handlePlayAgain = () => {
    setQuiz("");
    setQuizComplete(false);
  };

  if (!quiz) return;
  return (
    <DefaultLayout
      heading={
        <h2 className={cx(classes.heading)}>
          <QuizSubjectIcon title={quiz?.title} icon={quiz?.icon} />
          {quiz?.title}
        </h2>
      }
    >
      <div className={cx(classes.container)}>
        <div>
          <p className={cx(classes.text)}>Quiz completed</p>
          <h1 className={cx(classes.paragraph)}>You scored...</h1>
        </div>
        <div>
          <div className={cx(classes.scoreBox)}>
            <h2 className={cx(classes.heading)}>
              <QuizSubjectIcon title={quiz?.title} icon={quiz?.icon} />
              {quiz?.title}
            </h2>

            <p className={cx(classes.scoreResult)}>{result}</p>
            <p>out of {totalScore}</p>
          </div>
          <button className={cx(classes.actionBtn)} onClick={handlePlayAgain}>
            Play Again
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

const quizResultStyles = tss.create({
  container: {
    width: "min(var(--screen-size), 100% - 8rem)",
    marginInline: "auto",
    marginTop: "4rem",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    "@media only screen and (max-width: 695px)": {
      gridTemplateColumns: "1fr",
    },
  },
  heading: {
    fontSize: "3.2rem",
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    fontWeight: "500",
  },
  text: {
    fontSize: "5.8rem",
    fontWeight: "400",
  },
  paragraph: {
    fontSize: "5.8rem",
  },
  scoreBox: {
    fontSize: "2rem",
    width: "100%",
    height: "35rem",
    backgroundColor: "var(--subject-color)",
    borderRadius: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "4rem 0",
  },
  scoreResult: {
    fontSize: "15rem",
    fontWeight: "600",
  },
  actionBtn: {
    width: "100%",
    padding: "1.2rem 1.5rem",
    backgroundColor: "var(--action-btn-color)",
    fontSize: "3.2rem",
    fontWeight: 500,
    textTransform: "capitalize",
    border: 0,
    borderRadius: "1rem",
    color: "white",
    marginTop: "3rem",
    cursor: "pointer",
    transition: "box-shadow 200ms ease-in-out",
    "&:hover": {
      boxShadow: "0 4px 6px -1px hsl(from #000000 h s l / 25%)",
    },
  },
});
export default QuizResult;
