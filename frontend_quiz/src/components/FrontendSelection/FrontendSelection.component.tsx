import { tss } from "tss-react";
import BackgroundImage from "@/images/pattern-background-desktop-dark.svg";

const FrontendSelection = () => {
  const { classes, cx } = useStyles();

  return (
    <section className={cx(classes.root)}>
      <h2 className={cx(classes.header)}>Hello</h2>
      <BackgroundImage />
    </section>
  );
};

const useStyles = tss.create({
  root: {
    backgroundColor: "#eaeaea",
    width: "100%",
    height: "100%",
  },
  header: {
    color: "blue",
    fontSize: "2.4rem",
  },
});
export default FrontendSelection;
