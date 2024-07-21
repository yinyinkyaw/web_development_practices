import DarkSunIcon from "@/icons/icon-sun-dark.svg";
import LightSunIcon from "@/icons/icon-sun-light.svg";
import DarkMoonIcon from "@/icons/icon-moon-dark.svg";
import LightMoonIcon from "@/icons/icon-moon-light.svg";
import { useEffect, useState } from "react";
import { tss } from "tss-react";
import { useThemeStore } from "store/theme/themeStore";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeStore((state) => state);
  const { classes, cx } = switcherStyle();
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
      {theme === "dark" ? <LightSunIcon /> : <DarkSunIcon />}
      <input
        type="checkbox"
        className={cx(classes.switch)}
        checked={theme === "light"}
        onChange={onThemeChange}
      />
      {theme === "dark" ? <LightMoonIcon /> : <DarkMoonIcon />}
    </div>
  );
};

const switcherStyle = tss.create({
  container: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  switch: {},
});

export default ThemeSwitcher;
