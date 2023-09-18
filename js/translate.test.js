import { translate } from "./translate.js";

describe("test cases for the translate function", () => {
  it("returns the right translation from English to Morse Code", () => {
    expect(translate("a")).toBe(".-");
    expect(translate("Hello")).toBe(".... . .-.. .-.. ---");
    expect(translate("Hello World")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
  });

  it("can translate numbers to Morse Code", () => {
    expect(translate("123")).toBe(".---- ..--- ...--");
    expect(translate("489")).toBe("....- ---.. ----.");
  });

  it("can translate special characters to Morse Code", () => {
    expect(translate("hi, how are you?!")).toBe(
      ".... .. --..-- / .... --- .-- / .- .-. . / -.-- --- ..- ..--.. -.-.--"
    );
    expect(translate("?.,!-/")).toBe(
      "..--.. .-.-.- --..-- -.-.-- -....- -..-."
    );
  });

  it("returns the right translation from Morse Code  to English", () => {
    expect(translate("-. --- .-.. --- --. -.--")).toBe("NOLOGY");
    expect(translate(".... .. / ... .- --")).toBe("HI SAM");
  });

  it("can translate Morse Code to numbers", () => {
    expect(translate("---.. ..--- / ...-- .----")).toBe("82 31");
    expect(translate("----- ..--- -.... ....-")).toBe("0264");
  });

  it("can translate Morse Code to special characters", () => {
    expect(
      translate("-.-- --- ..- .----. .-. . / -- -.-- / ..-. .-. .. . -. -..")
    ).toBe("YOU'RE MY FRIEND");
    expect(translate("..--.. .-.-.- --..-- -.-.-- -....- -..-.")).toBe(
      "?.,!-/"
    );
  });
});
