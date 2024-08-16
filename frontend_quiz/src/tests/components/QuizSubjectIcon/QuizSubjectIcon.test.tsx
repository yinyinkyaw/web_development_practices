import QuizSubjectIcon from "@/components/QuizSubjectIcon/QuizSubjectIcon.component";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HtmlIcon from "@/icons/icon-html.svg";
import "@testing-library/jest-dom";
import CSSIcon from "@/icons/icon-css.svg";

describe("Quiz Subject Icon", () => {
  it("test quiz subject icon with valid props then the icon should be relative icon", () => {
    const props = {
      icon: <HtmlIcon />,
      text: "HTML",
    };

    render(<QuizSubjectIcon icon={props.icon} title={props.text} />);

    expect(screen.getByTitle(props.text)).toBeInTheDocument();
  });

  it("test quiz subject icon with invalid props the result should be null", () => {
    const props = {
      icon: "",
      text: "HTML",
    };

    render(<QuizSubjectIcon icon={props.icon} title={props.text} />);

    expect(screen.queryByTitle(props.text)).toBeNull();
  });

  it("test quiz subject icon with icon props as a string, result should be string", () => {
    const props = {
      icon: "CSS",
      text: "HTML",
    };

    render(<QuizSubjectIcon icon={props.icon} title={props.text} />);
    expect(screen.getByText(props.icon)).toBeInTheDocument();
  });

  it("test quiz subject icon with unmatch title and icon element, the result should be null", () => {
    const props = {
      icon: <CSSIcon />,
      text: "HTML",
    };

    render(<QuizSubjectIcon icon={props.icon} title={props.text} />);
    expect(screen.queryByText("CSS")).toBeInTheDocument();
  });

  it("test quiz subject icon with text is invalid case, result should be icon without background color", () => {
    const props = {
      icon: <HtmlIcon />,
      text: "",
    };

    render(<QuizSubjectIcon icon={props.icon} title={props.text} />);
    const backgroundColor = screen.queryByTestId("background");
    expect(screen.getByText("HTML")).toBeInTheDocument();
    expect(backgroundColor).toBeNull();
  });
});
