import { setupCounter } from "./counter";
import "./style.css";

const runBtn = document.getElementById("runBtn") as HTMLButtonElement;
const progressBar = document.getElementById("progress") as HTMLSpanElement;

setupCounter(runBtn, progressBar);
