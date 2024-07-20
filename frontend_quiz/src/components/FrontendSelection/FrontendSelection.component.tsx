import * as styles from "./FrontendSelection.styles";
import BackgroundImage from "@/images/pattern-background-desktop-dark.svg";
import { Subject } from "@/interfaces/quiz";
import { getSubjects } from "utils";

const FrontendSelection = () => {
  const { classes, cx } = styles.useStyles();
  const subjects = getSubjects();
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
}: {
  icon: React.ReactNode;
  text: Subject;
}) => {
  const { classes, cx } = styles.subjectStyles({ type: text });
  return (
    <div className={cx(classes.card)}>
      <div className={cx(classes.iconContainer)}>{icon}</div>
      <p>{text}</p>
    </div>
  );
};

export default FrontendSelection;
