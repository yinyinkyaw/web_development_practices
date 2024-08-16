import * as styles from "./FrontendSelection.styles";
import QuizSubjectIcon from "../QuizSubjectIcon/QuizSubjectIcon.component";

interface Props {
  icon: React.ReactNode;
  text: string;
  handleSelect?: () => void;
}
export default function SubjectCard({ icon, text, handleSelect }: Props) {
  const { classes, cx } = styles.subjectStyles({ type: text });
  return (
    <div className={cx(classes.card)} onClick={handleSelect}>
      <QuizSubjectIcon title={text} icon={icon} />
      <p>{text}</p>
    </div>
  );
}
