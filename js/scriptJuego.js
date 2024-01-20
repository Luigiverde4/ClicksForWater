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

function incrementarTrucos(numero,arrrayTrucos,arrayCuesta) {
    if (contador.textContent>=arrayCuesta[numero-1]) {
        contador.textContent=contador.textContent - arrayCuesta[numero-1];
        trucosValue.textContent = parseInt(trucosValue.textContent) + arrrayTrucos[numero-1];
    }
}


