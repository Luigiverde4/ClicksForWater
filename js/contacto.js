let vector_personas = [] // Vector de objetos que nos va a ir almacenando los datos
                        // de todas las personas
var formulario = document.getElementById("form_css")

// Esta función se encargará de hacer los cálculos recorriendo el vector de objetos con los datos
// de los distintos usuarios que han contactado. Devuelve el número de usuarios, su media de edad y el número de suscripciones
function datos(){
    var num_personas = 0
    var suma_edad = 0
    var num_subs = 0
    
    for (i of vector_personas){
        
        num_personas++
        suma_edad+=parseInt(i.edad)
        if (i.sus == "si"){
            console.log(i.sus)
            num_subs++
        }

        

    }
    var media_edad = suma_edad/num_personas
    return [num_personas,media_edad,num_subs]
    

}


// Se trata de la función que se activa cuando se envia en formulario y que se encarga de generar 
// la respuesta para que la vea el usuario. Genera dos contenedores. En el primero se encuentra lo
// que ha enviado el usuario. En el segundo se muestran los datos calculados. Cada vez que se 
// reenvia el formulario ambos contenedores se actualizan con la nueva info

function generarRespuesta(){
    var elementos_form = document.getElementsByClassName("form")
    var contenedor = document.getElementById("contenedor_form")
    var formulario = document.getElementById("form_css")
    var resultado = document.getElementById("cajita")
    let persona = [] // Definimos un vector persona que almacenará los datos de la persona

    // Recorremos el formulario y almacenamos los datos del usuario que ha contactado
    for (var i = 0; i < elementos_form.length; i++){
        if (elementos_form[i].id == "suscripcion"){
            if (elementos_form[i].checked){
                persona[i] = "si"
                continue
            }else{
                persona[i] = "no"
                continue
            }

        }
        persona[i] = elementos_form[i].value


    }
    
    formulario.style.display = "None"

    // Creamos el primer contenedor

    var resultado = document.createElement("div")
    resultado.id = "cajita"

    // Añadimos header y todos los datos que el usuario ha puesto en el formulario al contenedor

    var header = document.createElement("h3")
    header.innerHTML = "Esto es lo que has enviado"
    resultado.append(header)

    let celdas = ["Nombre : ", "Email : ","Teléfono : ","Edad : ","Género : ", "Suscripción : ", ""]
    
    var vector_persona = {nombre:persona[0],email:persona[1],tel:persona[2],edad:persona[3],gen:persona[4],sus:persona[5]}
    vector_personas.push(vector_persona)
    console.log(vector_personas)
    
    for (var i = 0; i < persona.length; i++){
        
        var elemento_resp = document.createElement("p")
        elemento_resp.innerHTML = celdas[i] + persona[i]
        resultado.append(elemento_resp)

    }

    // Creamos el segundo contenedor
    var caja_datos = document.createElement("div")
    caja_datos.id = "cajita2"

    // Añadimos header y los datos calculados de todos los usuarios que han contactado a este contenedor. Como solo funciona localmente,
    // si se quiere probar se debe volver a enviar otro formulario cambiando los datos de usuario. Los datos calculados se
    // actualizaran

    var header2 = document.createElement("h3")
    header2.innerHTML = "Datos de contactos recientes"
    caja_datos.append(header2)

    var dato1 = document.createElement("p")
    dato1.innerHTML = "Número de personas que han contactado : " + datos()[0]
    caja_datos.append(dato1)

    var dato2= document.createElement("p")
    dato2.innerHTML = "Media de edad de personas que han contactado : " + datos()[1]
    caja_datos.append(dato2)

    var dato3 = document.createElement("p")
    dato3.innerHTML = "Número de suscripciones : " + datos()[2]
    caja_datos.append(dato3)

    // Añadimos estos contenedores al contenedor flex padre
    
    contenedor.appendChild(resultado)
    contenedor.appendChild(caja_datos)

    // Creamos el boton de volver a enviar que al activarse ejecutara la funcion reenviar que
    // veremos más adelante

    var boton = document.createElement("input")
    boton.type = "button"
    boton.value = "Volver a enviar"
    boton.onclick = reenviar
    boton.id = "reenviar"
    contenedor.appendChild(boton)

    return false; // Retornamos false para evitar la recarga de página al enviar el formulario

    


}

// Esta segunda función se encarga de volver a mostrar el formulario y eliminar del contenedor padre
// (donde esta el formulario) los contenedores generados en la anterior función de forma que, si se vuele a enviar el formulario,
// se volverán a crear y se actualizarán


function reenviar(){
    var contenedor = document.getElementById("contenedor_form")
    var formulario = document.getElementById("form_css")
    formulario.style.display = "block"
    var resultado = document.getElementById("cajita")
    contenedor.removeChild(resultado)
    var boton = document.getElementById("reenviar")
    contenedor.removeChild(boton)
    var caja_datos = document.getElementById("cajita2")
    contenedor.removeChild(caja_datos)

}



