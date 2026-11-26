import { mkdirSync, writeFileSync } from "node:fs";

// The worst pickup line an AI could say: a machine that optimises the
// relationship to its end before the first date has even happened —
// pre-filled paperwork, time saved, and coffee as the reasonable next step.
// The divorce papers are the joke; the coffee is the button.
const line =
  "I have already pre-filled our divorce papers to save time later. Shall we start with coffee?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
