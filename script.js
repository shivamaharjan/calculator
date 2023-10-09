// const btn1Elm = document.querySelector(".btn-1");

// console.log(displayElm);

// btn1Elm.addEventListener("click", () => {
//   console.log("I am pressed");
//   strToDipslay += "1";
//   displayElm.innerText = strToDipslay;
// });

const displayElm = document.querySelector(".display");
let strToDisplay = "";
let lastOperator = "";
const btns = document.querySelectorAll(".btn");
const operators = ["+", "*", "-", "%", "/"];

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;
    if (val === "AC") {
      strToDisplay = "";
      return display(strToDisplay);
    }

    if (val === "C") {
      strToDisplay = strToDisplay.slice(0, -1);
      return display(strToDisplay);
    }

    if (val === "=") {
      return getTotal();
    }

    if (strToDisplay.length === 0 && operators.includes(val)) {
      return;
    }

    if (operators.includes(val)) {
      lastOperator = val;

      let lastChar = strToDisplay.slice(-1);
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
    }

    if (val === ".") {
      if (!strToDisplay) {
        return;
      }

      const lastCharOfStr = strToDisplay.slice(-1);
      if (lastCharOfStr === ".") {
        return;
      }
    }
    if (!lastOperator) {
      if (strToDisplay.includes(".")) {
        return;
      }
    }

    const lasOperatorIndex = strToDisplay.lastIndexOf(lastOperator);
    const lastNumberSet = strToDisplay.slice(lasOperatorIndex);
    if (lastNumberSet.includes(".")) {
      return;
    }

   
    strToDisplay += val;
    return display(strToDisplay);
  });
});

const display = (str) => {
  displayElm.innerText = str || "0.00";
};

const getTotal = () => {
  const total = eval(strToDisplay);
  strToDisplay = total;
  display(total);
};
