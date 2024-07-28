import { tss } from "tss-react";
import BackgroundImageDark from "@/components/BackgroundImageDark/BackgroundImageDark.component";
import BackgroundImageLight from "@/components/BackgroundImageLight/BackgroundImageLight.component";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.component";
import { useThemeStore } from "store/theme/themeStore";

interface DefaultLayoutProps {
  children: React.ReactNode;
  heading?: React.ReactNode;
}

const DefaultLayout = ({ children, heading }: DefaultLayoutProps) => {
  const { theme } = useThemeStore((state) => state);
  const { classes, cx } = layoutStyles({ hasHeading: !!heading });

  return (
    <section className={cx(classes.root)}>
      <div className={cx(classes.content)}>
        <div className={cx(classes.heading)}>
          {heading}
          <ThemeSwitcher />
        </div>
        {children}
      </div>
      <div className={cx(classes.imageContainer)}>
        {theme === "dark" ? <BackgroundImageDark /> : <BackgroundImageLight />}
      </div>
    </section>
  );
};

const layoutStyles = tss
  .withParams<{ hasHeading: boolean }>()
  .create(({ hasHeading }) => ({
    root: {
      minHeight: "100vh",
      height: "max-content",
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
      justifyContent: `${hasHeading ? "space-between" : "flex-end"}`,
      width: "min(var(--screen-size), 100% - 8rem)",
      marginInline: "auto",
      marginBottom: "5rem",
    },
  }));
export default DefaultLayout;
