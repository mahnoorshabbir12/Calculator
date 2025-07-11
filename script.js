let buttons = document.querySelectorAll(".button");
let backspace = document.querySelector("#backspace");
let display = document.querySelector("#display");

let expression = "";
let result;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    button.classList.add("clicked");
    setTimeout(() => {
      button.classList.remove("clicked");
    }, 200);

    if (value === "CE") {
      display.innerText = "0";
      expression = "";
      return;
    }

    if (value === backspace.innerText) {
      expression = expression.slice(0, -1);
      display.innerText = expression || "0";
      return;
    }

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

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (/[0-9+\-*/.]/.test(key)) {
    expression += key;
    display.innerText = expression;
  }

  if (key === "Escape") {
    display.innerText = "0";
    expression = "";
  }

  if (key === "Backspace") {
    expression = expression.slice(0, -1);
    display.innerText = expression || "0";
  }

  if (key === "Enter") {
    try {
      result = eval(expression);
      display.innerText = result;
      expression = result.toString();
    } catch (err) {
      display.innerText = "Error";
      expression = "";
    }
  }
});
