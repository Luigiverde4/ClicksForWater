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

// Funcion para abrir la tienda
function abrirTienda() {
    arrrayTrucos = [];
    arrayCuesta = [];
    if (tiendaOpen) {
        // Si ya está abierta, paramos
        return;
    }

    // Cambiamos el botón para que cierre la tienda
    let boton_tienda = document.getElementById("tienda");
    boton_tienda.style.backgroundColor = "red";
    boton_tienda.textContent = "Cerrar tienda";
    boton_tienda.onclick = cerrarTienda;

    // Creamos el div y le ponemos un ID
    tiendaDiv = document.createElement("div");
    tiendaDiv.id = "tiendaDiv";

    // Tabla?? Los trucos hay que mirarlos a ver que metemos en la version final
    tiendaTable = document.createElement("table");

    buttonRow = tiendaTable.insertRow();

    for (let i = 1; i <= 4; i++) {
        button = document.createElement("button");
        button.textContent = `Incrementar Trucos por ${(10**i)} cuesta ${(10**(i+1))}`;
        arrrayTrucos.push(10**i)
        arrayCuesta.push(10**(i+1))
        button.onclick = function() {
            incrementarTrucos(i,arrrayTrucos,arrayCuesta);
        };

        cell = buttonRow.insertCell();
        cell.appendChild(button);
    }
    // Metemos los elementos a tiendaDiv
    tiendaDiv.appendChild(tiendaTable);

    let ElementoAside = document.querySelector("aside")
    ElementoAside.appendChild(tiendaDiv);

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
        let ElementoAside = document.querySelector("aside")
        ElementoAside.removeChild(tiendaDiv);
        tiendaOpen = false;

        let boton_tienda = document.getElementById("tienda")
        boton_tienda.style.backgroundColor = "rgb(64, 206, 64)"
        boton_tienda.textContent = "Abrir tienda"
        boton_tienda.onclick = abrirTienda
    
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
