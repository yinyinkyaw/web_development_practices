import { useMemo } from "react";
import { tss } from "tss-react";

interface ProgressProps {
  total: number;
  current: number;
}
const Progress = ({ total, current }: ProgressProps) => {
  const value = useMemo(() => (current / total) * 100, [current, total]);
  const { classes } = progressStyle({ width: `${value}%` });

  return (
    <div className={classes.container}>
      <span className={classes.progress} />
    </div>
  );
};

const progressStyle = tss
  .withParams<{ width: string }>()
  .create(({ width }) => ({
    container: {
      width: "80%",
      padding: "0.25rem",
      borderRadius: "1rem",
      backgroundColor: "var(--subject-color)",
      display: "flex",
      alignItems: "center",
    },
    progress: {
      width: `${width}`,
      height: "0.5rem",
      backgroundColor: "var(--action-btn-color)",
      borderRadius: "3rem",
    },
  }));
export default Progress;
