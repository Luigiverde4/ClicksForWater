let contador;
let trucosValue;
let tiendaOpen = false;

// Cada vez que se cargue la web, se carga el juego 
window.onload = function() {
    comenzarJuego();
}
// Cuando se carga, asignamos los valores del contador y trucos  avariables
// Pensar que podemos cargar datos de un JSON para guardar los valores de los puntos
function comenzarJuego() {
    contador = document.getElementById("puntos");
    trucosValue = document.getElementById("trucos");
}

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

function incrementarTrucos(numero,arrrayTrucos,arrayCuesta) {
    if (contador.textContent>=arrayCuesta[numero-1]) {
        contador.textContent=contador.textContent - arrayCuesta[numero-1];
        trucosValue.textContent = parseInt(trucosValue.textContent) + arrrayTrucos[numero-1];
    }
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



// Todo lo que sucede cuando clickeas el botón
function buttonClick() {
    var button = document.querySelector(".button-default");
    var puntos = document.getElementById("puntos")
    // Cambia el tamaño los puntos
    puntos.setAttribute("style","font-size:30px")
    // Se anima el botón
    button.classList.add('button-clicked');
    // Cambia el color del botón
    button.setAttribute("style","background-color:#2965b9")
    // Se añaden los puntos correspondientes
    trucosAmount = parseInt(trucosValue.textContent);
    currentCounter = parseInt(contador.textContent);
    contador.textContent = currentCounter + trucosAmount;

    // Eliminar la clase 'button-clicked' después de la animación
    // En menos de un segundo, se vuelve a reestablecer todo
    setTimeout(function() {
        button.classList.remove("button-clicked");
        puntos.setAttribute("style","font-size:20px")
        
        button.setAttribute("style","background-color:#2980b9")
    }, 100);
    
}
