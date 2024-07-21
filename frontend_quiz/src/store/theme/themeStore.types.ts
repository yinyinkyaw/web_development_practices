export type ThemeState = {
  theme: "light" | "dark";
};

export type ThemeStateAction = {
  setTheme: (status: "light" | "dark") => void;
};
