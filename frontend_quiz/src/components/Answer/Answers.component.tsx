import { shuffle } from "lodash";
import { Dispatch, SetStateAction, useMemo } from "react";
import { useQuizStore } from "store/quiz/quizStore";
import { tss } from "tss-react";

interface AnswersProps {
  userAnswer: string;
  hasSubmit: boolean;
  setUserAnswer: Dispatch<SetStateAction<string>>;
}
const Answers = ({ userAnswer, hasSubmit, setUserAnswer }: AnswersProps) => {
  const { question } = useQuizStore((state) => state);

  const answerOptions = useMemo(
    () => shuffle(question?.options),
    [question?.options]
  );
  const { classes, css, cx } = answerStyles();

  return (
    <div className={cx(classes.cardGrid)}>
      {answerOptions?.map((answerOption, index) => (
        <button
          type="button"
          className={cx(
            classes.card,
            css({
              border: `
                ${
                  hasSubmit
                    ? question?.answer === answerOption
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
          <span className={classes.optionLabel}>
            {String.fromCharCode(65 + index)}
          </span>
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
    color: "var(--text-color)",
    fontSize: "2rem",
    fontWeight: 500,
    textAlign: "left",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  cardGrid: {
    display: "grid",
    gap: "2rem",
    marginBottom: "2rem",
  },
  optionLabel: {
    width: "3.5rem",
    height: "3.5rem",
    display: "grid",
    placeItems: "center",
    fontSize: "1.8rem",
    backgroundColor: "var(--background-color)",
    color: "var(--text-color-700)",
    borderRadius: "0.4rem",
    marginLeft: "1rem",
  },
});

export default Answers;
