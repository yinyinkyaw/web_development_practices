import DefaultLayout from "layout/DefaultLayout";
import { useQuizStore } from "store/quiz/quizStore";
import { tss } from "tss-react";
import QuizSubjectIcon from "../QuizSubjectIcon/QuizSubjectIcon.component";
import { FormEvent, useEffect, useState } from "react";
import { getQuestionByIndex } from "utils";
import Answers from "../Answer/Answers.component";
import Progress from "../Progress/Progress.component";

const Quizzes = () => {
  const { quiz, question, setSelectedQuestion, setScore, setQuizComplete } =
    useQuizStore((state) => state);
  const [questionNo, setQuestionNo] = useState(1);
  const [answer, setAnswer] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const { classes, cx } = contentStyles();

  const totalQuestion = quiz?.questions.length;

  useEffect(() => {
    if (quiz) {
      const selectedQuestion = getQuestionByIndex(quiz, questionNo - 1);
      if (selectedQuestion) setSelectedQuestion(selectedQuestion);
    }
  }, [quiz, questionNo, setSelectedQuestion]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmit(true);
    if (question)
      setScore(`quiz ${questionNo}`, answer === question.answer ? 1 : 0);

    if (questionNo === totalQuestion) {
      setQuizComplete(true);
    }
  };

  const handleNext = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmit(false);
    setAnswer("");
    if (totalQuestion)
      setQuestionNo((prev) => (prev < totalQuestion ? prev + 1 : prev));
  };

  if (!quiz) return;
  return (
    <DefaultLayout
      heading={
        <h2 className={cx(classes.title)}>
          <QuizSubjectIcon title={quiz?.title} icon={quiz?.icon} />
          {quiz?.title}
        </h2>
      }
    >
      <article className={cx(classes.quizContainer)}>
        <div className={classes.questionContainer}>
          <div>
            <p className={cx(classes.label)}>
              Question {questionNo} of {totalQuestion}
            </p>
            <h3 className={cx(classes.question)}>{question?.question}</h3>
          </div>
          <Progress current={questionNo} total={totalQuestion ?? 1} />
        </div>
        <form onSubmit={isSubmit ? handleNext : handleSubmit}>
          <Answers
            userAnswer={answer}
            setUserAnswer={setAnswer}
            hasSubmit={isSubmit}
          />
          <button type="submit" className={cx(classes.submitBtn)}>
            {isSubmit ? "Next Question" : "Submit answer"}
          </button>
        </form>
      </article>
    </DefaultLayout>
  );
};

const contentStyles = tss.create({
  quizContainer: {
    width: "min(var(--screen-size), 100% - 8rem)",
    marginInline: "auto",
    // border: "2px solid lime",
    display: "grid",
    gap: "4rem",
    gridTemplateColumns: "repeat(2, 1fr)",
    "@media only screen and (max-width: 695px)": {
      gridTemplateColumns: "1fr",
    },
  },
  questionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: "10rem",
  },
  title: {
    fontSize: "2.4rem",
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    fontWeight: "500",
  },
  label: {
    color: "var(--text-color-700)",
    fontSize: "1.8rem",
    fontStyle: "italic",
    marginBottom: "2rem",
  },
  question: {
    fontSize: "3.2rem",
    wordBreak: "break-word",
  },
  submitBtn: {
    width: "100%",
    padding: "1.5rem 1rem",
    backgroundColor: "var(--action-btn-color)",
    borderRadius: "1rem",
    color: "white",
    fontWeight: 500,
    border: 0,
    fontSize: "2rem",
  },
});
export default Quizzes;
