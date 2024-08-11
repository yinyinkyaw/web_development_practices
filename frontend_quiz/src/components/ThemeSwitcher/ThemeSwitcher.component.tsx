import DarkSunIcon from "@/icons/icon-sun-dark.svg";
import LightSunIcon from "@/icons/icon-sun-light.svg";
import DarkMoonIcon from "@/icons/icon-moon-dark.svg";
import LightMoonIcon from "@/icons/icon-moon-light.svg";
import { useEffect, useState } from "react";
import { tss } from "tss-react";
import { useThemeStore } from "@/store/theme/themeStore";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeStore((state) => state);
  const { classes, cx } = switcherStyle({ isSelected: theme === "light" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    () => setMounted(false);
  }, []);

  useEffect(() => {
    const themeSelector = document.querySelector("[data-theme]");
    themeSelector?.setAttribute("data-theme", theme);
  }, [theme]);

  const onThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return;

  return (
    <div className={cx(classes.container)}>
      {theme === "dark" ? <DarkSunIcon /> : <LightSunIcon />}
      <label className={cx(classes.switch)}>
        <input
          type="checkbox"
          checked={theme === "light"}
          onChange={onThemeChange}
        />
        <span className={cx(classes.slider)} />
      </label>
      {theme === "dark" ? <DarkMoonIcon /> : <LightMoonIcon />}
    </div>
  );
};

const switcherStyle = tss
  .withParams<{ isSelected: boolean }>()
  .create(({ isSelected }) => ({
    container: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      width: "fit-content",
      height: "max-content",
    },
    switch: {
      width: "6rem",
      backgroundColor: "var(--action-btn-color)",
      cursor: "pointer",
      borderRadius: "4rem",
      padding: ".4rem",
      display: "flex",
      justifyContent: `${isSelected ? "flex-end" : "flex-start"}`,
      transition: "all 200ms linear",

      "& > input": {
        opacity: 0,
        width: 0,
        height: 0,
      },
    },
    slider: {
      "--_circle-size": "2.4rem",
      inset: ".4rem",
      width: "2.4rem",
      height: "2.4rem",
      backgroundColor: "white",
      borderRadius: "50%",
    },
  }));

export default ThemeSwitcher;
