let decision = prompt("¿Quieres ser Frontend o Backend? (F/B)");
if (decision == "F") {
  alert("Bienvenido al mundo del Frontend!");

  let especialidad = prompt("¿Quieres aprender React o Vue? (R/V)");
  if (especialidad == "R") {
    alert("Bienvenido al mundo de React!");
  } else {
    alert("Bienvenido al mundo de Vue!");
  }
} else if (decision == "B") {
  alert("Bienvenido al mundo del Backend!");

  let especialidad = prompt("¿Quieres aprender C# o Java? (C/J)");
  if (especialidad == "C") {
    alert("Bienvenido al mundo de C#!");
  } else {
    alert("Bienvenido al mundo de Java!");
  }
}

let decision2 = prompt(
  "¿Quieres seguir especializandote o convertirte en fullstack? (E/F)"
);
if (decision2 == "E") {
  alert("Sigue especializandote!");
} else {
  alert("Bienvenido al mundo fullstack!");
}

while (true) {
  let decision3 = prompt(
    "¿Hay alguna tecnologia que te gustaria aprender? Si es asi, escribe el nombre de la tecnologia. Si no, presiona cancelar."
  );
  if (decision3 != null) {
    alert("Excelente! Aprende " + decision3 + "!");
  } else {
    break;
  }
}
