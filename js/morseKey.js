export const morseKey = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "'": ".----.",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  " ": "/",
};

export const objectReverse = (obj) => {
  const reversedObj = {};
  for (const [key, value] of Object.entries(obj)) {
    reversedObj[value] = key;
  }
  return reversedObj;
};

export const morseKeyReversed = objectReverse(morseKey);

// let convertedData = {};

// for (const [key, value] of Object.entries(morseKey)) {
//   convertedData = { ...convertedData, [value]: key };
// }
// return convertedData;
// const reversed = {};

// for (const key in morseKey) {
//   const value = morseKey[key];
//   reversed[value] = key;
// }
// return reversed;
