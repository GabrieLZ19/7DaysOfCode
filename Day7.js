let display = document.getElementById("display");

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function addNumber(number) {
  display.value += number;
}

function addOperator(operator) {
  display.value += operator;
}

function clearDisplay() {
  display.value = "";
}

function deleteNumber() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  display.value = eval(display.value);
}
