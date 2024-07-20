import * as styles from "./FrontendSelection.styles";
import { Quiz, Subject } from "@/interfaces/quiz";
import DefaultLayout from "layout/DefaultLayout";
import { useQuizStore } from "store/quiz/quizStore";
import { getSubjects } from "utils";
import QuizSubjectIcon from "../QuizSubjectIcon/QuizSubjectIcon.component";

const FrontendSelection = () => {
  const { setQuiz } = useQuizStore((state) => state);
  const { classes, cx } = styles.useStyles();
  const subjects = getSubjects();

  const onSelectQuiz = (quiz: Quiz["title"]) => {
    setQuiz(quiz);
  };
  return (
    <DefaultLayout>
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
    </DefaultLayout>
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
      <QuizSubjectIcon title={text} icon={icon} />
      <p>{text}</p>
    </div>
  );
};

export default FrontendSelection;
