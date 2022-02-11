const display = document.querySelector(".calc-display");
let finalExpression = "";

//0 - 9
function updateDisplayValue(x) {
  display.innerText = parseInt(display.innerText + x);
}

// * / + -
function calcOperator(ch) {
  if (display.innerText !== "0") {
    finalExpression = "";
    finalExpression += display.innerText + ch;
    display.innerText = 0;
  }
}

// =
function calcEqual() {
  if (display.innerText !== "0") {
    display.innerText = eval(finalExpression + display.innerText);
  }
}

// ->
function calcBackspace() {
  if (display.innerText !== "0")
    display.innerText = display.innerText.slice(0, -1);
  if (display.innerText === "") display.innerText = 0;
}

// C
function calcClear() {
  finalExpression = "";
  display.innerText = 0;
}

document
  .querySelector(".calc-btn-container")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      switch (event.target.innerText) {
        case "+":
        case "-":
        case "/":
        case "*":
          calcOperator(event.target.innerText);
          break;
        case "=":
          calcEqual();
          break;
        case "<-":
          calcBackspace();
          break;
        case "C":
          calcClear();
          break;
        default:
          updateDisplayValue(event.target.innerText);
          break;
      }
    }
  });

/**
 * Here in our main fxn , we just use d event delegation/ event bubbling.
 * we selected the container of all buttons and add used a click event listener on it.
 * and if clicked we executed a fuction which on basis of text inside buttons calls different fxns.
 * for 0-9 nums we called updateDisplayValue() fxn which takes button text as parameter and
 * concatinate that with current display text and changes it to int so that "012" -> 12
 * then for +,-,*,/ we called calcOperator() fxn which takes operator sign as input and takes that
 * sign and concatinates it with our empty string finalExpression eg. "21+"
 * also it in starting of this fxn we empty our
 * finarExpression = "" as after equal to is pressed and expression is evaluated and somebody
 * wants uses this result value & press'es a operator old expression goes away and new one is used
 * then this fxn changes display text to 0, so that next word can be written on display.
 * then for = calcEqual() fxn is caled which takes current displat value and concatinate it with
 * finalExpression eg. "21+3" then evaluate it using eval() fxn. then changes displat text.
 * then -> calls calsBackspace() which deletes last disgit of display using slice(0, -1),
 * also if display text becomes empty in end after using backspace continiously
 * we check if display text === "" then display text assign 0
 * then C calls calcClear() fxn which takes calculator to initial stage that is display text = 0,
 * expression = ""
 */
