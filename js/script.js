import { translate } from "./translate.js";

const input = document.querySelector(".container__box--input");
const output = document.querySelector(".container__box--output");
const latinTitle = document.querySelectorAll(".latin");
const morseTitle = document.querySelectorAll(".morseCode");

function resetTextColors(elements) {
  elements.forEach((element) => {
    element.style.color = "";
  });
}

input.addEventListener("input", () => {
  if (input.value.startsWith(".") || input.value.startsWith("-")) {
    morseTitle.forEach((element) => {
      element.style.color = "black";
    });
    resetTextColors(latinTitle);
  } else {
    latinTitle.forEach((element) => {
      element.style.color = "black";
    });
    resetTextColors(morseTitle);
  }

  if (input.value === "") {
    resetTextColors([...latinTitle, ...morseTitle]);
  }

  output.innerText = translate(input.value);
});
