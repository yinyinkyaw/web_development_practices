import { Subject } from "@/interfaces/quiz";
import { tss } from "tss-react";

interface Props {
  title: string;
  icon: React.ReactNode;
}

const QuizSubjectIcon = ({ title, icon }: Props) => {
  const { classes, cx } = iconStyles({ type: title as Subject });
  return (
    <div data-test-id="background" className={cx(classes.root)}>
      {icon}
    </div>
  );
};

const iconStyles = tss.withParams<{ type: Subject }>().create(({ type }) => ({
  root: {
    "--_block-size": "4rem",
    "--_icon-size": "3.2rem",
    width: "var(--_block-size)",
    height: "var(--_block-size)",
    borderRadius: "0.8rem",
    display: "grid",
    "place-items": "center",
    backgroundColor: `
        ${type === "HTML" ? "var(--color-html-icon)" : ""}
        ${type === "CSS" ? "var(--color-css-icon)" : ""}
        ${type === "JavaScript" ? "var(--color-js-icon)" : ""}
        ${type === "Accessibility" ? "var(--color-accessibility-icon)" : ""}
      `,
    "& > svg": {
      width: "var(--_icon-size)",
      height: "var(--_icon-size)",
    },
  },
}));

export default QuizSubjectIcon;
