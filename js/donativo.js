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


// RICARDO
function creaDivs(evento,contadorCesta,contenedor){
  // Apuntamos que este articulo lo hemos agregado ya
  contadorCesta.push(evento)

  // Creamos el div para el articulo y contador
  let divROW = document.createElement("div");
  divROW.id = evento;

  // Creamos el div del nombre del articulo
  let divin = document.createElement("div");
  divin.id = evento + "ART"; // ART de articulo

  // Creamos el parrafo de texto donde va a ir el nombre del articulo
  let parrafin = document.createElement("p");
  parrafin.textContent = evento;
  divin.append(parrafin)

  // Creamos el div del multiplicador
  let divMUT = document.createElement("div");
  divMUT.id = evento + "MUT"; // MUT de multiplicador

  // Metemos el multiplicador
  let parraMUT = document.createElement("p");
  parraMUT.textContent = "x1";
  divMUT.append(parraMUT)

  // Metemos los divs en sus contenedores
  divROW.append(divin)
  divROW.append(divMUT)
  contenedor.append(divROW);
}

// Contadores de divs y de veces metido
var contadorCesta = []
var veces_gotita = 1
var veces_gota = 1
var veces_lluvia = 1

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text/plain");

  // Cogemos el div en el que vamos a meter los articulos
  let contenedor = document.getElementById("listas")


  // Actualiza el contador de items en total. 
  contadorItem[data] = contadorItem[data] ? contadorItem[data] + 1 : 1;
  // Si contador tiene datos, le suma 1, si no, le asigna 1 como valor

  // Actualiza el total
  switch (data) {
    case "Gotita":
      total += 10;
      
      if (contadorCesta.includes(data)){
        let multi = document.getElementById(data+"MUT").children[0]
        multi.textContent = "x" + ++veces_gotita;
      }else{
        creaDivs(data,contadorCesta,contenedor)
      }
      break;
    case "Gota":
      total += 50;
      if (contadorCesta.includes(data)){
        let multi = document.getElementById(data+"MUT").children[0]
        multi.textContent = "x" + ++veces_gota;
      }else{
        creaDivs(data,contadorCesta,contenedor)
      }
      break;
    case "Lluvia":
      total += 100;
      if (contadorCesta.includes(data)){
        let multi = document.getElementById(data+"MUT").children[0]
        multi.textContent = "x" + ++veces_lluvia;
      }else{
        creaDivs(data,contadorCesta,contenedor)
      }
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
// Ricardo
function reseteoCesta(){
  total = 0
  updateCounter()

  veces_gotita = 1
  veces_gota = 1
  veces_lluvia = 1
  contadorCesta = []

  let contenedor = document.getElementById("listas")

  while(contenedor.firstChild){
    contenedor.removeChild(contenedor.firstChild)

  }

}


