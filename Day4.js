let numeroAdivinar = Math.floor(Math.random() * 10) + 1;

let intentos = 3;

let numeroUsuario = parseInt(prompt("Adivina el número"));

for (let i = 0; i < intentos; i++) {
  if (numeroUsuario === numeroAdivinar) {
    alert("¡Adivinaste!");
    break;
  } else if (numeroUsuario < numeroAdivinar) {
    alert("El número es mayor");
  } else if (numeroUsuario > numeroAdivinar) {
    alert("El número es menor");
  }
  intentos--;
  numeroUsuario = parseInt(
    prompt("Adivina el número, tienes " + intentos + " intentos")
  );
}

if (intentos === 1) {
  alert("Se acabaron los intentos, el número era " + numeroAdivinar);
}
