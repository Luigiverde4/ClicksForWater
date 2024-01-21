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

// ENVIAR PUNTOS
function dona_cambiarBoton(abierta){
    let boton_dona = document.getElementById("donativo");
    switch(abierta){
        case("abierta"):
            boton_dona.style.backgroundColor = "rgb(242, 53, 53)";
            boton_dona.textContent = "Cerrar envío";
            boton_dona.onclick = cerrar_Donativo;
            break;
        
        case ("cerrada"):
            boton_dona.style.backgroundColor = "rgb(227, 224, 44)"
            boton_dona.textContent = "Abrir envío"
            boton_dona.onclick = abrirDonativo
            break;
    }
}

// Funcion para generar el bloque de envio de puntos
function generarDonativo(){
    
    // Creamos el div y le ponemos un ID
    puntosDiv = document.createElement("div");
    puntosDiv.id = "puntosDiv";

    // Creamos el forms

    // Crear el formulario
    var form = document.createElement('form');
    form.id = 'form_css';

    // Crear el fieldset donde van nuestros inputs y labels
    var fieldset = document.createElement('fieldset');
    var legend = document.createElement('legend');
    legend.textContent = 'Enviar puntos';
    fieldset.appendChild(legend);


    // Nombre

        // Label
    var nombreLabel = document.createElement('label');
    nombreLabel.setAttribute('for', 'nombre');
    nombreLabel.textContent = 'Nombre y Apellidos:';
    


        // Input
    var nombreInput = document.createElement('input');
    nombreInput.type = 'text';
    nombreInput.id = 'nombre';
    nombreInput.name = 'nombre';
    nombreInput.placeholder = "Nombre Apellido Apellido"
    nombreInput.required = true;

        // Lo metemos en le fieldset
    fieldset.appendChild(nombreLabel);
    fieldset.appendChild(nombreInput);

    // Correo electrónico

        // Label
    var emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Correo electrónico:';

        // Input
    var emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = "nombre@correo.com"
    emailInput.required = true;

        // Lo metemos al fieldset
    fieldset.appendChild(emailLabel);
    fieldset.appendChild(emailInput);


    // Cantidad de puntos

        // Label
    var puntosLabel = document.createElement("label")
    puntosLabel.setAttribute('for', 'puntosid');
    puntosLabel.textContent = 'Puntos a enviar:';

        // Input
    var puntosInput = document.createElement('input');
    puntosInput.type = 'text';
    puntosInput.id = 'puntosid';
    puntosInput.name = 'puntos';
    puntosInput.disabled = "true"
    var cant_puntos = document.getElementById("puntos").textContent
    puntosInput.value = cant_puntos

        // Lo metemos al fieldset
    fieldset.appendChild(puntosLabel);
    fieldset.appendChild(puntosInput);

    // Ratio

    var ratioLabel = document.createElement("label")
    ratioLabel.textContent = "Actualmente 100 000 puntos son 0.01 €"
        // Lo metemos al fieldset
    fieldset.appendChild(ratioLabel)

    // Metemos todo al forms
    form.appendChild(fieldset);

    // Botón Envio de puntos
    var puntosButton = document.createElement('button');
    puntosButton.textContent = 'Enviar puntos';
    puntosButton.type = 'button';
    puntosButton.onclick = enviarPuntos

    // Lo metemos al forms
    form.appendChild(puntosButton);

    // Botón actulizador de puntos
    var updateButton = document.createElement('button');
    updateButton.textContent = 'Actualizar puntos a enviar';
    updateButton.type = 'button';
    updateButton.style.marginLeft = "5px"
    updateButton.onclick = actualizarPuntos

    // Lo metemos al forms
    form.appendChild(updateButton);

    // Parrafo informativo
    var informativo = document.createElement("p")
    informativo.id = "informativo"
    fieldset.append(informativo)

    // Agregar el formulario al body
    puntosDiv.appendChild(form);

    // Metemos el div de los puntos en el aside
    let ElementoAside = document.getElementById("asideVariable");
    ElementoAside.appendChild(puntosDiv);
}

// Funcion para abrir el envio de puntos
function abrirDonativo() {
    if (donaOpen) {
        // Si ya está abierta, paramos
        return;
    }

    // Cambiamos el boton para que pueda cerrar 
    dona_cambiarBoton("abierta");
    generarDonativo()
    donaOpen = true;
}


// Para cerrar el envio de puntos
function cerrar_Donativo() {
    puntosDiv = document.getElementById("puntosDiv");
    // Si tiendaDiv existe, lo eliminamos
    if (puntosDiv) {
        let ElementoAside = document.getElementById("asideVariable");
        ElementoAside.removeChild(puntosDiv);
        donaOpen = false;
        // Cambiamos el boton para que pueda abrir la tienda
        dona_cambiarBoton("cerrada")
    }
}

var puntos_anteriores = 0;

function enviarPuntos() {
    let cant_puntos = document.getElementById("puntos"); // Puntos del botón
    let puntosInput = document.getElementById("puntosid")   // Usado en actualizarPuntos, Puntos del input
    let informativo = document.getElementById("informativo"); // Usado in actualizarPuntos
    informativo.innerHTML = ""
    puntos_anteriores = 0;

    actualizarPuntos();
    if (cant_puntos.textContent == 0){
        informativo.innerHTML += ` <br>No hay puntos para enviar`;
    }else {
        informativo.innerHTML += ` <br>Total de puntos enviados: ${cant_puntos.textContent}`;
    }
    
    cant_puntos.textContent = 0;
    puntosInput.value = 0;
}

function actualizarPuntos(){
    let cant_puntos = document.getElementById("puntos").textContent
    let puntosInput = document.getElementById("puntosid")
    if (cant_puntos == puntos_anteriores){
        informativo.textContent = "Ya están los puntos actualizados"
    }else{
        informativo.textContent = "Puntos actualizados" 
        puntos_anteriores = cant_puntos
    }
    puntosInput.value = cant_puntos
}