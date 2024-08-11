import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.component";
import "@testing-library/jest-dom";

describe("Theme Switcher", () => {
  it("initial theme should be light", () => {
    render(<ThemeSwitcher />);

    const checkBox = screen.queryByRole("checkbox");

    expect(checkBox).toBeTruthy();
    expect(screen.getByTitle("sun-light")).toBeInTheDocument();
    expect(screen.getByTitle("moon-light")).toBeInTheDocument();
  });
});
