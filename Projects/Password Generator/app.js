class PasswordGenerator {
  constructor() {
    this.resultPassword = document.querySelector("#result");
    this.clipboardButton = document.querySelector("#clipboard");
    this.length = document.querySelector("#length");
    this.uppercaseCheckbox = document.querySelector("#uppercase");
    this.lowercaseCheckbox = document.querySelector("#lowercase");
    this.numbersCheckbox = document.querySelector("#numbers");
    this.symbolCheckbox = document.querySelector("#symbols");
    this.generateButton = document.querySelector("#generate-password");

    this.init();
  }
  init() {
    document
      .querySelectorAll(".options input[type = checkbox]")
      .forEach((cb) => cb.addEventListener("click", this.updateOptions));

    this.generateButton.addEventListener("click", this.generatePassword);
    this.updateOptions();

    this.clipboardButton.addEventListener("click", this.copyToClipboard);
  }
  updateOptions = () => {
    const optionsMethods = [];
    if (this.uppercaseCheckbox.checked)
      optionsMethods.push(this.getRandomUppercase);

    if (this.lowercaseCheckbox.checked)
      optionsMethods.push(this.getRandomLowercase);

    if (this.numbersCheckbox.checked) optionsMethods.push(this.getRandomNumber);

    if (this.symbolCheckbox.checked) optionsMethods.push(this.getRandomSymbol);

    this.optionsMethods = optionsMethods;
  };

  getRandomUppercase() {
    // od 65 do 96
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }

  getRandomLowercase() {
    // od 97 do 120
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
  }
  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
  getRandomSymbol() {
    const symbols = `!@#$%^&*()_=+[]{};''/.,']<>|`;
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  generatePassword = () => {
    if (!this.length.value) return;
    if (this.optionsMethods.length === 0) return;

    const arrIndexes = Array.from(Array(+this.length.value).keys());

    const password = arrIndexes
      .map((i) => {
        const method = this.getRandomGenMethod();
        return method();
      })
      .join("");

    this.resultPassword.innerHTML = password;
  };
  getRandomGenMethod = () => {
    const methods = this.optionsMethods;
    return methods[Math.floor(Math.random() * methods.length)];
  };
  copyToClipboard = () => {
    const v = this.resultPassword.innerHTML;
    const cb = navigator.clipboard;
    cb.writeText(v).then(() => console.log(`Skopiowane do schowka`));
  };
}
const passwordGenerator = new PasswordGenerator();
