function generarRespuesta(){

    
    

    var body = document.getElementById("contenedor_form")
    body.removeChild("cajita")
    var nombre = document.getElementById("nombre").value
    var email = document.getElementById("email").value
    var telefono = document.getElementById("telefono").value
    var edad = document.getElementById("edad").value
    var genero = document.getElementById("genero").value
    var suscripcion = document.getElementById("suscripcion").value
    var comentarios = document.getElementById("comentarios").value


    var resultado = document.createElement("div")
    resultado.id = "cajita"

    var header = document.createElement("h3")
    header.innerHTML = "Esto es lo que has enviado"
    resultado.append(header)

    var nombre_resp = document.createElement("p")
    nombre_resp.innerHTML = "Nombre: "+ nombre
    resultado.append(nombre_resp)

    var email_resp = document.createElement("p")
    email_resp.innerHTML = "Email: "+ email
    resultado.append(email_resp)

    var telefono_resp = document.createElement("p")
    telefono_resp.innerHTML = "Teléfono : "+ telefono
    resultado.append(telefono_resp)

    var edad_resp = document.createElement("p")
    edad_resp.innerHTML = "Edad : "+ edad
    resultado.append(edad_resp)

    var genero_resp = document.createElement("p")
    genero_resp.innerHTML = "Género : "+ genero
    resultado.append(genero_resp)

    var comentarios_resp = document.createElement("p")
    comentarios_resp.innerHTML = comentarios
    resultado.append(comentarios_resp)

    body.appendChild(resultado)

    return false;




}