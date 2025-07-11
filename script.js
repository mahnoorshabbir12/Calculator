let buttons = document.querySelectorAll(".button");
let backspace = document.querySelector("#backspace");
let display = document.querySelector("#display");

let expression = "";
let result;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText;
    // Clear display
    if (value === "CE") {
      display.innerText = "0";
      expression = "";
      return;
    }
    // Backspace
    if (value === backspace.innerText) {
      expression = expression.slice(0, -1);
      display.innerText = expression || "0";
      return;
    }
    // Evaluate expression
    if (value === "=") {
      try {
        result = eval(expression);
        display.innerText = result;
        expression = result.toString();
      } catch (err) {
        display.innerText = "Error";
        expression = "";
      }
      return;
    }
    expression += value;
    display.innerText = expression;
    console.log(expression);
  });
});
