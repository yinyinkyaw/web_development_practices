import { create } from "zustand";
import { ThemeState, ThemeStateAction } from "./themeStore.types";

export const useThemeStore = create<ThemeState & ThemeStateAction>((set) => ({
  theme: "light",
  setTheme: (currentTheme) => set(() => ({ theme: currentTheme })),
}));
