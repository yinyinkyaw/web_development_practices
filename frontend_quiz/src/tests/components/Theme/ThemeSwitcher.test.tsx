import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.component";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Theme Switcher", () => {
  it("initial theme should be light", () => {
    render(<ThemeSwitcher />);

    const checkBox = screen.queryByRole("checkbox");

    expect(checkBox).toBeChecked();
    expect(screen.getByTitle("sun-light")).toBeInTheDocument();
    expect(screen.getByTitle("moon-light")).toBeInTheDocument();
  });

  it("click on theme toggle then theme should be dark", async () => {
    const user = userEvent.setup();

    render(<ThemeSwitcher />);

    const checkBox = screen.getByRole("checkbox");
    await user.click(checkBox);

    expect(checkBox).not.toBeChecked();
    expect(screen.getByTitle("sun-dark")).toBeInTheDocument();
    expect(screen.getByTitle("moon-dark")).toBeInTheDocument();
  });
});
