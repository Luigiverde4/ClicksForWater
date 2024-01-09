// Al hacer los divs clickables, tenemos que mandarlos a la web correspondiente 
function ira(i){
    var sitios_html = [
        "html/contacto.html",
        "html/donativos.html",
        "html/juego.html",
        "html/blog.html",
        "https://www.upv.es/noticias-upv/noticia-12565-los-ods-en-las-es.html",
    ]
    var sitios = [
        "contacto.html",
        "donativos.html",
        "juego.html",
        "blog.html",
        "https://www.upv.es/noticias-upv/noticia-12565-los-ods-en-las-es.html",
        "../landing.html"
    ]

    /* Dependiendo de si estamos en la landig page, la ruta tiene que tomar un camino
    u otro, entonces con el parametro i le decimos de donde venimos, si es mayor de 10
    significa que venimos de la landing page y hay que usar otra ruta*/
    if (i>=10){
        // Venimos de la landing pages
        console.log("Hello")
        i -= 10
        window.location.href = sitios_html[i]
    }else{
        // Venimos de las otras webs
        window.location.href = sitios[i]
    }
    
}