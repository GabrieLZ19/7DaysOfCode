let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuál es tu edad?");
let lenguaje = prompt("¿Cuál es tu lenguaje de programación favorito?");

alert(
  "Hola " +
    nombre +
    ", tienes " +
    edad +
    " años y tu lenguaje de programación favorito es " +
    lenguaje +
    "."
);

let gusto = prompt("Te gusta estudiar " + lenguaje + "?");

if (gusto == 1) {
  alert("Qué bien! A seguir estudiando!");
} else {
  alert("Ánimo! Seguro que con más práctica te gustará más!");
}
