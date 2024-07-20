import { Subject } from "@/interfaces/quiz";
import { tss } from "tss-react";

export const useStyles = tss.create({
  root: {
    height: "100%",
    backgroundColor: "var(--background-color)",
    color: "var(--text-color)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12rem 0",
    position: "relative",
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
    width: "min(var(--screen-size), 100% - 8rem)",
    marginInline: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "3rem",
    zIndex: "1",
    "@media only screen and (max-width: 904px)": {
      gridTemplateColumns: "1fr",
    },
  },
  instruction: {
    fontSize: "1.8rem",
    marginTop: "3rem",
    color: "var(--text-color-700)",
    fontStyle: "italic",
  },
  heading: {
    maxWidth: "18ch",
    fontSize: "clamp(3rem, 100vw - 20% ,5.4rem)",
    fontWeight: "300",
    zIndex: "inherit",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
});

export const subjectStyles = tss
  .withParams<{ type: Subject }>()
  .create(({ type }) => ({
    card: {
      width: "100%",
      padding: "1.5rem",
      backgroundColor: "var(--subject-color)",
      display: "flex",
      alignItems: "center",
      borderRadius: "1.5rem",
      fontSize: "1.8rem",
      fontWeight: "500",
      gap: "2rem",
      cursor: "pointer",
    },
    iconContainer: {
      width: "4rem",
      height: "4rem",
      borderRadius: "0.8rem",
      display: "grid",
      "place-items": "center",
      backgroundColor: `
        ${type === "HTML" ? "var(--color-html-icon)" : ""}
        ${type === "CSS" ? "var(--color-css-icon)" : ""}
        ${type === "JavaScript" ? "var(--color-js-icon)" : ""}
        ${type === "Accessibility" ? "var(--color-accessibility-icon)" : ""}
      `,
      "& > svg": {
        width: "3.2rem",
        height: "3.2rem",
      },
    },
  }));
