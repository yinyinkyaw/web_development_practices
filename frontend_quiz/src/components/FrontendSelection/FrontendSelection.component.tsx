import * as styles from "./FrontendSelection.styles";
import BackgroundImage from "@/images/pattern-background-desktop-dark.svg";
import { Quiz, Subject } from "@/interfaces/quiz";
import { useQuizStore } from "store/quiz/quizStore";
import { getSubjects } from "utils";

const FrontendSelection = () => {
  const { setQuiz } = useQuizStore((state) => state);
  const { classes, cx } = styles.useStyles();
  const subjects = getSubjects();

  const onSelectQuiz = (quiz: Quiz["title"]) => {
    setQuiz(quiz);
  };
  return (
    <section className={cx(classes.root)}>
      <div className={cx(classes.content)}>
        <div>
          <h2 className={cx(classes.heading)}>
            Welcome to the <wbr /> <strong>Frontend Quiz!</strong>
          </h2>
          <p className={cx(classes.instruction)}>
            Pick a subject to get started
          </p>
        </div>
        <div className={cx(classes.cardContainer)}>
          {subjects.map((info, index) => (
            <SubjectCard
              icon={info.icon}
              text={info.title as Subject}
              key={index}
              handleSelect={() => onSelectQuiz(info.title)}
            />
          ))}
        </div>
      </div>
      <div className={cx(classes.imageContainer)}>
        <BackgroundImage />
      </div>
    </section>
  );
};

const SubjectCard = ({
  icon,
  text,
  handleSelect,
}: {
  icon: React.ReactNode;
  text: Subject;
  handleSelect: () => void;
}) => {
  const { classes, cx } = styles.subjectStyles({ type: text });
  return (
    <div className={cx(classes.card)} onClick={handleSelect}>
      <div className={cx(classes.iconContainer)}>{icon}</div>
      <p>{text}</p>
    </div>
  );
};

export default FrontendSelection;
