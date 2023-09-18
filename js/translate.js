import { morseKey, morseKeyReversed } from "./morseKey.js";

export const translate = (input) => {
  if (input.startsWith(".") || input.startsWith("-")) {
    return input
      .split("/")
      .join("")
      .split(" ")
      .map((char) => (morseKeyReversed[char] ? morseKeyReversed[char] : " "))
      .join("");
  }

  return input
    .toUpperCase()
    .split("")
    .map((letter) => morseKey[letter])
    .join(" ")
    .replace(/  +/g, " ");
};

export const sum = (a, b) => {
  return a + b;
};
