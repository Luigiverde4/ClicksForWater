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
    if (tiendaOpen) {
        // Si ya está abierta, paramos
        return;
    }
    // Creamos el div y le ponemos un ID
    tiendaDiv = document.createElement("div");
    tiendaDiv.id = "tiendaDiv";

    // Tabla?? Los trucos hay que mirarlos a ver que metemos en la version final
    tiendaTable = document.createElement("table");

    buttonRow = tiendaTable.insertRow();

    for (let i = 1; i <= 4; i++) {
        button = document.createElement("button");
        button.textContent = `Incrementar Trucos por ${i}`;
        button.onclick = function() {
            incrementarTrucos(i);
        };

        cell = buttonRow.insertCell();
        cell.appendChild(button);
    }



    // Creamos el boton para cerrar la tienda
    cerrarButton = document.createElement("button");
    cerrarButton.textContent = "Cerrar Tienda";
    cerrarButton.onclick = cerrarTienda;

    // Metemos los elementos a tiendaDiv
    tiendaDiv.appendChild(cerrarButton);
    tiendaDiv.appendChild(tiendaTable);
    document.body.appendChild(tiendaDiv);

    tiendaOpen = true;
}

function incrementarTrucos(cantidad) {
    trucosValue.textContent = parseInt(trucosValue.textContent) + cantidad;
}

// Para cerrar la tienda
function cerrarTienda() {
    tiendaDiv = document.getElementById("tiendaDiv");
    // Si tiendaDiv existe, lo eliminamos
    if (tiendaDiv) {
        document.body.removeChild(tiendaDiv);
        tiendaOpen = false;
    }
}



// Todo lo que sucede cuando clickeas el botón
function buttonClick() {
    var button = document.querySelector('.button-default');
    button.classList.add('button-clicked');
    button.setAttribute("style","background-color:red")

    trucosAmount = parseInt(trucosValue.textContent);
    currentCounter = parseInt(contador.textContent);
    contador.textContent = currentCounter + trucosAmount;

    // Eliminar la clase 'button-clicked' después de la animación
    setTimeout(function() {
        button.classList.remove('button-clicked');
        button.setAttribute("style","background-color:#2980b9")
    }, 100);
    
}