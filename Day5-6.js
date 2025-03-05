let decision = prompt(
  "¿Quieres agregar un alimento a tu lista de compras? (si/no)"
);
let listaCompras = [];
let categorias = ["Frutas", "Verduras", "Carnes", "Lácteos", "Granos", "Otros"];
let lista = document.getElementsByClassName("Lista");

function mostrarLista() {
  lista[0].innerHTML = ""; // Limpiar el contenido de la lista

  let titulo = document.createElement("h1");
  titulo.textContent = "Lista de compras";
  lista[0].appendChild(titulo);

  listaCompras.forEach((element) => {
    let li = document.createElement("li");
    li.textContent = element.categoria + ": " + element.alimento;
    lista[0].appendChild(li);
  });
}

while (decision === "si") {
  let alimento = prompt("¿Qué alimento deseas agregar a la lista de compras?");

  let categoria = prompt(
    "¿A qué categoría pertenece el alimento? (Frutas, Verduras, Carnes, Lácteos, Granos, Otros)"
  );

  if (categorias.includes(categoria)) {
    listaCompras.push({ categoria, alimento });
  } else {
    alert("La categoría ingresada no es válida");
  }

  let eliminar = prompt(
    "¿Quieres eliminar algún alimento de la lista? (si/no)"
  );

  if (eliminar === "si") {
    let alimentoEliminar = prompt(
      "¿Qué alimento deseas eliminar de la lista de compras? Lista de compras actual: " +
        listaCompras.map((element) => element.alimento)
    );
    let index = listaCompras.findIndex(
      (element) => element.alimento === alimentoEliminar
    );

    if (index !== -1) {
      listaCompras.splice(index, 1);

      alert("Alimento eliminado de la lista de compras");
    } else {
      alert("El alimento ingresado no se encuentra en la lista");
    }

    mostrarLista();
  }

  decision = prompt(
    "¿Quieres agregar otro alimento a tu lista de compras? (si/no)"
  );
}
