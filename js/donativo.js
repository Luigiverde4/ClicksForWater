var contadorItem = {};
var total = 0;

// La parte del checkout ya funciona

// Funcion necesaria para permitir el dropeo y solo cuando se llame
function allowDrop(ev) {
  ev.preventDefault();
}

// Al arrastrar settea basado en el primer tag summary que lee
function drag(ev) {
  // ojito a esto...

  // Primero cogemos el texto entero
  let summaryText = ev.target.querySelector("summary").textContent;

  // Buscamos primero buscamos el indice siguiente de la primera flecha (le ponemos el +1 para que coja pasado la flecha)
  let startIndex = summaryText.indexOf('→') +1;
  // Luego el indice de la segunda flecha
  let endIndex = summaryText.indexOf('←', startIndex);
  //Luego sacamos el string de enmedio (substring) y le quitamos espacios etc (trim)
  let extractedText = summaryText.substring(startIndex, endIndex).trim();
  ev.dataTransfer.setData("text/plain", extractedText);
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
  divMUT.className = "multiplicador"
  // Metemos el multiplicador
  let parraMUT = document.createElement("p");
  parraMUT.textContent = "x1";
  divMUT.append(parraMUT)

  // Metemos los divs en sus contenedores
  divROW.append(divin)
  divROW.append(divMUT)
  contenedor.append(divROW);

  // CHECKOUT
  let checkResumen = document.getElementById("checkResumen")

  checkResumen.append(divin.cloneNode(true))
    
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

  // Actualiza el total y las multiplicaciones
  switch (data) {
    case "Gotita":
      total += 10;
      if (contadorCesta.includes(data)){
        let multi = document.getElementById(data+"MUT").children[0] // Busca el Multiplicador especifico
        multi.textContent = "x" + ++veces_gota;                     // lo incrementamos
      }else{
        creaDivs(data,contadorCesta,contenedor) // si no esta en la cesta ya, lo creamos
      }
      break;
    case "Gota":  // igual que arriba pero para gota etc
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
  // Y en el checkout
  var counter2 = document.getElementById("contador2");
  counter2.textContent = "Total: " + total + "\u20AC";

}
// Ricardo testing

// reseteo de la cesta y checkout
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

  // esto es un poco chapucero hacerlo 2 veces pero se queda asi
  let contenedor2 = document.getElementById("checkResumen")
  
  while(contenedor2.firstChild){
    contenedor2.removeChild(contenedor2.firstChild)

  }
  // Vamos a meter de nuevo el p
  let packs_escogidos = document.createElement("p")
  let checkResumen = document.getElementById("checkResumen")
  packs_escogidos.textContent = "Packs escogidos"
  checkResumen.append(packs_escogidos)

}

// Checkout
// funcion para abrir la zona checkout
function abrirCheck(){
  // Cogemos el div principal y lo hacemos aparecer
  let checkDiv = document.getElementById("checkDiv")
  checkDiv.style.display = "flex"

  // Movemos el botón (en verdad son 2)
  // Desaparecemos el anterior
  let boton_checkout = document.getElementById("checkout")
  boton_checkout.style.display = "none"
}
// Funcion para ocultar el checkout
function cerrarCheck(){
  let checkDiv = document.getElementById("checkDiv")
  let boton_checkout = document.getElementById("checkout")

  checkDiv.style.display = "none"
  boton_checkout.style.display = "inline"
}

// Esta funcion envia el checkout
function enviarCheck(){
  let nombreInput = document.getElementById("nombre")
  let emailInput = document.getElementById("email")
  let informativo = document.getElementById("informativo")

  if (nombreInput.checkValidity() && emailInput.checkValidity()){ // Si ambas estan checkeadas, para que no reinicie la pagina, se procede
    reseteoCesta()
    cerrarCheck()
    informativo.textContent = "Proceda al correo introducido para seguir con el proceso de pago"
  }else { // Si no, no se procede
    informativo.textContent = "Porfavor, rellene los formularios"
  }
}
