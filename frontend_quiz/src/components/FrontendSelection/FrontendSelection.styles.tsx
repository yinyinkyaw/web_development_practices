import { tss } from "tss-react";

export const useStyles = tss.create({
  content: {
    width: "min(var(--screen-size), 100% - 8rem)",
    marginInline: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "3rem",
    zIndex: "1",
    "@media only screen and (max-width: 904px)": {
      gridTemplateColumns: "1fr",
      placeItems: "center",
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
    width: "100%",
    maxWidth: "56rem",
  },
});

export const subjectStyles = tss.create({
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
    transition: "transform 200ms ease-in-out",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: "0 2px 8px hsl(from var(--text-color-700) h s l / 40%)",
    },
  },
});
