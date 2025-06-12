let buttons = document.querySelectorAll(".button");
let backspace = document.querySelector("#backspace");
let display = document.querySelector("#display");
let expression = "";
let result;
let ex1 = "";
let ex2 = "";
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    expression += button.innerText;
    display.innerText = expression;
    let value = button.innerText;
    console.log(expression);
    if (value === "CE") {
      display.innerText = "0";
      expression = "";
      ex1 = "";
      ex2 = "";
    }
    if (value === backspace.innerText) {
      expression = expression.slice(0, -1);
      display.innerText = expression;
    }
    if (value === "=") {
      for (let x = 0; x < expression.length; x++) {
        if (expression[x] === "+") {
          ex1 = expression.slice(0, x);
          ex2 = expression.slice(x + 1);
          result = parseInt(ex1) + parseInt(ex2);
          break;
        } else if (expression[x] === "-") {
          ex1 = expression.slice(0, x);
          ex2 = expression.slice(x + 1);
          result = parseInt(ex1) - parseInt(ex2);
          break;
        } else if (expression[x] === "*") {
          ex1 = expression.slice(0, x);
          ex2 = expression.slice(x + 1);
          result = parseInt(ex1) * parseInt(ex2);
          break;
        } else if (expression[x] === "/") {
          ex1 = expression.slice(0, x);
          ex2 = expression.slice(x + 1);
          result = parseInt(ex1) / parseInt(ex2);
          break;
        }
      }
      display.innerText = result;
    }
  });
});
