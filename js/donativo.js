var contadorItem = {};
var total = 0;

// Funcion necesaria para permitir el dropeo y solo cuando se llame
function allowDrop(ev) {
  ev.preventDefault();
}

// Al arrastrar settea basado en el primer tag p que lee
function drag(ev) {
  ev.dataTransfer.setData("text/plain", ev.target.querySelector("p").textContent);
}



function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text/plain");

  // Actualiza el contador de items en total
  contadorItem[data] = contadorItem[data] ? contadorItem[data] + 1 : 1;

  // Actualiza el total
  switch (data) {
    case "Item 1":
      total += 10;
      break;
    case "Item 2":
      total += 100;
      break;
    case "Item 3":
      total += 1000;
      break;
  }
  // Actualiza el contador
  updateCounter();
}

// Muestra el total debajo de lo que pone cesta
function updateCounter() {
  var counter = document.getElementById("contador");
  counter.textContent = "Total: " + total;
}
