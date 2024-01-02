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

  // Actualiza el contador de items en total. 
  contadorItem[data] = contadorItem[data] ? contadorItem[data] + 1 : 1;
  // Si contador tiene datos, le suma 1, si no, le asigna 1 como valor

  // Actualiza el total
  switch (data) {
    case "Gotita":
      total += 10;
      cosasCesta(data)
      break;
    case "Gota":
      total += 50;
      cosasCesta(data)
      break;
    case "Lluvia":
      total += 100;
      cosasCesta(data)
      break;
  }
  // Actualiza el contador
  updateCounter();
}

// Muestra el total debajo de lo que pone cesta
function updateCounter() {
  var counter = document.getElementById("contador");
  counter.textContent = "Total: " + total + "\u20AC";
}


// RICARDO
var contadorCesta = []
function cosasCesta(evento){
  let contenedor = document.getElementById("listas")
  if (contadorCesta.length == 3){
    //Modificar solo el multiplicador
  }else {
    switch (evento) {
      case "Gotita":
        /*
        if ("Gotita" not in contadorCesta){
          contadorCesta.append("Gotita")
        }
        */
        break;
      case "Gota":
  
        break;
      case "Lluvia":
  
        break;
    }
  }



  let parrrafin = document.createElement("p")
  parrrafin.textContent = evento
  let listas = document.getElementById("listas")
  listas.append(parrrafin)


}
/*
let contadorCesta = []; // Assuming contadorCesta is an array to track added items

function cosasCesta(evento) {
  let listas = document.getElementById("listas");

  // Check if the paragraph with the same content already exists
  let existingParagraphs = listas.getElementsByTagName("p");
  let alreadyExists = Array.from(existingParagraphs).some(paragraph => {
    return paragraph.textContent.trim() === evento;
  });

  if (!alreadyExists) {
    let parrafin = document.createElement("p");
    parrafin.textContent = evento;
    listas.appendChild(parrafin);

    // Add the event to the contadorCesta array
    contadorCesta.push(evento);
  }
}
*/