import { tss } from "tss-react";
import BackgroundImage from "@/images/pattern-background-desktop-dark.svg";

interface DefaultLayoutProps {
  children: React.ReactNode;
  heading?: React.ReactNode;
}

const DefaultLayout = ({ children, heading }: DefaultLayoutProps) => {
  const { classes, cx } = layoutStyles();
  return (
    <section className={cx(classes.root)}>
      <div className={cx(classes.content)}>
        <div className={cx(classes.heading)}>{heading}</div>
        {children}
      </div>
      <div className={cx(classes.imageContainer)}>
        <BackgroundImage />
      </div>
    </section>
  );
};

const layoutStyles = tss.create({
  root: {
    height: "100vh",
    position: "relative",
    backgroundColor: "var(--background-color)",
    color: "var(--text-color)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "9rem 0",
  },
  imageContainer: {
    position: "absolute",
    inset: 0,
    height: "fit-content",
    "& > svg": {
      width: "100vw",
      height: "100vh",
    },
  },
  content: {
    width: "100%",
    zIndex: "10",
  },
  heading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "min(var(--screen-size), 100% - 8rem)",
    marginInline: "auto",
    marginBottom: "5rem",
  },
});
export default DefaultLayout;
