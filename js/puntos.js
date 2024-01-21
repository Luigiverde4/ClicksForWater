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
    nombreLabel.textContent = 'Nombre y Apellidos:*';
    


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
    emailLabel.textContent = 'Correo electrónico:*';

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
    puntosButton.id = "puntosIDButton"
    puntosButton.style.display = "none"
    puntosButton.type = 'button'; // Si es submit, recarga la página y eso no lo queremos
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
    let puntosButton = document.getElementById("puntosIDButton")
    let puntosInput = document.getElementById("puntosid")   // Usado en actualizarPuntos, Puntos del input
    let informativo = document.getElementById("informativo"); // Usado in actualizarPuntos

    informativo.innerHTML = ""
    puntos_anteriores = 0;

    actualizarPuntos();
    
    if (cant_puntos.textContent == 0){
        informativo.innerHTML += ` <br>No hay puntos para enviar`;
    }else {
        let enviado = 0.01/100000 * puntosInput.value
        informativo.innerHTML += ` <br>Total de puntos enviados: ${cant_puntos.textContent}<br> Eso es una contribución de : ${enviado} €`;
    }
    
    cant_puntos.textContent = 0;
    puntosInput.value = 0;
    puntosButton.style.display = "none"
}

function actualizarPuntos(){
    let cant_puntos = document.getElementById("puntos").textContent
    let puntosInput = document.getElementById("puntosid")
    let puntosButton = document.getElementById("puntosIDButton")
    if (cant_puntos == puntos_anteriores){
        informativo.textContent = "Ya están los puntos actualizados"
    }else{
        informativo.textContent = "Puntos actualizados" 
        puntos_anteriores = cant_puntos
    }
    puntosInput.value = cant_puntos

    // Activar el otro boton
    let nombreInput = document.getElementById("nombre")
    let emailInput = document.getElementById("email")

    if (nombreInput.checkValidity() && emailInput.checkValidity()){
        puntosButton.style.display = "inline"
    }else{
        informativo.innerHTML = "Rellena los campos primero"
    }
}