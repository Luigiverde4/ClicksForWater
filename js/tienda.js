let tiendaOpen = false;
let donaOpen = false;
// TIENDA
function cambiarBoton(abierta){
    let boton_tienda = document.getElementById("tienda");
    switch(abierta){
        case("abierta"):
            boton_tienda.style.backgroundColor = "rgb(242, 53, 53)";
            boton_tienda.textContent = "Cerrar tienda";
            boton_tienda.onclick = cerrarTienda;
            break;
        
        case ("cerrada"):
            boton_tienda.style.backgroundColor = "rgb(64, 206, 64)"
            boton_tienda.textContent = "Abrir tienda"
            boton_tienda.onclick = abrirTienda
            break;
    }
}

// Funcion para generar el bloque de la tienda
function generarTienda(){
    
    // Creamos el div y le ponemos un ID
    tiendaDiv = document.createElement("div");
    tiendaDiv.id = "tiendaDiv";

    // Creamos un div para los botones y costes
    botonesDiv = document.createElement("div");
    botonesDiv.id = "botonesDiv"

    // Le metemos el titulo
    tituloTienda = document.createElement("h2")
    tituloTienda.textContent = "Tienda"
    tiendaDiv.append(tituloTienda)
    
    // Bucle para ir generando los botones
    for (let i = 1; i <= 4; i++) {
        // Creamos el boton y el parrafo de su coste
        button = document.createElement("button");
        coste = document.createElement("p");

        // Creamos un bloque
        bloque = document.createElement("div")
        bloque.classList.add("bloque")

        // Les asignamos valores
        button.textContent = `x ${(10**i)}`;
        coste.textContent = `Coste: ${(10**(i+1))} puntos`;
        
        // Incrementamos el multiplicador de los trucos
        arrrayTrucos.push(10**i);
        arrayCuesta.push(10**(i+1));

        button.onclick = function() {
            incrementarTrucos(i, arrrayTrucos, arrayCuesta);
        };

        //Metemos el boton y coste en el bloque
        bloque.appendChild(button);
        bloque.appendChild(coste);


        // Agrega cada botón al div de la tienda
        botonesDiv.appendChild(bloque);
        tiendaDiv.appendChild(botonesDiv)
    }

    // Agrega el div de la tienda al elemento 'aside' del documento
    let ElementoAside = document.getElementById("asideVariable");
    ElementoAside.appendChild(tiendaDiv);


}

// Funcion para abrir la tienda
function abrirTienda() {
    arrrayTrucos = [];
    arrayCuesta = [];
    if (tiendaOpen) {
        // Si ya está abierta, paramos
        return;
    }

    // Cambiamos el boton para que pueda cerrar la tienda
    cambiarBoton("abierta");
    generarTienda()
    tiendaOpen = true;
}


// Para cerrar la tienda
function cerrarTienda() {
    tiendaDiv = document.getElementById("tiendaDiv");
    // Si tiendaDiv existe, lo eliminamos
    if (tiendaDiv) {
        let ElementoAside = document.getElementById("asideVariable");
        ElementoAside.removeChild(tiendaDiv);
        tiendaOpen = false;
        // Cambiamos el boton para que pueda abrir la tienda
        cambiarBoton("cerrada")
    }
}

// Instrucciones
var instu = true
function instrucciones(){
    let instrucciones = document.getElementById("instrucciones")
    let botoncin = document.getElementById("botoncin")
    if (instu){
        instrucciones.style.display = "none"
        botoncin.textContent="Abrir instrucciones"
        instu = false
    }else{
        instrucciones.style.display = "inline"
        botoncin.textContent="Cerrar instrucciones"
        instu = true

    }

}

