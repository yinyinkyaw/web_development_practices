import DefaultLayout from "layout/DefaultLayout";
import { useQuizStore } from "store/quiz/quizStore";
import { tss } from "tss-react";
import QuizSubjectIcon from "../QuizSubjectIcon/QuizSubjectIcon.component";

const Quizzes = () => {
  const { quiz } = useQuizStore((state) => state);
  const { classes, cx } = contentStyles();

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
      <article className={cx(classes.root)}></article>
    </DefaultLayout>
  );
};

const contentStyles = tss.create({
  root: {
    width: "min(var(--screen-size), 100% - 8rem)",
    marginInline: "auto",
    height: "500px",
    border: "2px solid lime",
  },
  title: {
    fontSize: "2.4rem",
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    fontWeight: "500",
  },
});
export default Quizzes;
