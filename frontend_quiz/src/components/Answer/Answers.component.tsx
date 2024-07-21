import { Dispatch, SetStateAction } from "react";
import { useQuizStore } from "store/quiz/quizStore";
import { tss } from "tss-react";

interface AnswersProps {
  userAnswer: string;
  hasSubmit: boolean;
  setUserAnswer: Dispatch<SetStateAction<string>>;
}
const Answers = ({ userAnswer, hasSubmit, setUserAnswer }: AnswersProps) => {
  const { question } = useQuizStore((state) => state);
  const { classes, css, cx } = answerStyles();

  return (
    <div className={cx(classes.cardGrid)}>
      {question?.options.map((answerOption) => (
        <button
          type="button"
          className={cx(
            classes.card,
            css({
              border: `
                ${
                  hasSubmit
                    ? question.answer === answerOption
                      ? "2px solid var(--success-color)"
                      : answerOption === userAnswer
                      ? "2px solid var(--error-color)"
                      : "2px solid var(--subject-color)"
                    : answerOption === userAnswer
                    ? "2px solid var(--action-btn-color)"
                    : "2px solid var(--subject-color)"
                }
              `,
            })
          )}
          key={answerOption}
          onClick={() => setUserAnswer(answerOption)}
        >
          {answerOption}
        </button>
      ))}
    </div>
  );
};

const answerStyles = tss.create({
  card: {
    width: "100%",
    padding: "1.5rem 1rem",
    borderRadius: "1rem",
    backgroundColor: "var(--subject-color)",
    color: "white",
    fontSize: "2rem",
    fontWeight: 500,
    textAlign: "left",
    cursor: "pointer",
  },
  cardGrid: {
    display: "grid",
    gap: "2rem",
    marginBottom: "2rem",
  },
});

export default Answers;
