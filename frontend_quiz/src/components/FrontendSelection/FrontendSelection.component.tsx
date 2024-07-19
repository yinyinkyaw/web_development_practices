import { tss } from "tss-react";

const FrontendSelection = () => {
  const { classes, cx } = useStyles();

  return (
    <section className={cx(classes.root)}>
      <h2 className={cx(classes.header)}>Hello</h2>
    </section>
  );
};

const useStyles = tss.create({
  root: {
    backgroundColor: "#eaeaea",
  },
  header: {
    color: "red",
    fontSize: "2.4rem",
  },
});
export default FrontendSelection;
