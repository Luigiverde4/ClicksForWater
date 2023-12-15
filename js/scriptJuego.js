let contador;
let trucosValue;
let tiendaOpen = false;
window.onload = function() {
    comenzarJuego();
}

function comenzarJuego() {
    contador = document.getElementById("contadorID");
    trucosValue = document.getElementById("trucos");
}

function abrirTienda() {
    if (tiendaOpen) {
        return;
    }

    tiendaDiv = document.createElement("div");
    tiendaDiv.id = "tiendaDiv";

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


    cerrarButton = document.createElement("button");
    cerrarButton.textContent = "Cerrar Tienda";
    cerrarButton.onclick = cerrarTienda;


    tiendaDiv.appendChild(cerrarButton);


    tiendaDiv.appendChild(tiendaTable);

    document.body.appendChild(tiendaDiv);

    tiendaOpen = true;
}

function incrementarTrucos(cantidad) {
    trucosValue.textContent = parseInt(trucosValue.textContent) + cantidad;
}

function cerrarTienda() {
    tiendaDiv = document.getElementById("tiendaDiv");
    if (tiendaDiv) {
        document.body.removeChild(tiendaDiv);
        tiendaOpen = false;
    }
}

function sumar() {
    trucosAmount = parseInt(trucosValue.textContent);
    currentCounter = parseInt(contador.textContent);
    contador.textContent = currentCounter + trucosAmount;
}