// Al hacer los divs clickables, tenemos que mandarlos a la web correspondiente 
function ira(i){
    var sitios = [
        "html/contacto.html",
        "html/donativos.html",
        "html/juego.html",
        "html/blog.html",
        "https://www.upv.es/noticias-upv/noticia-12565-los-ods-en-las-es.html"
    ]
    window.location.href = sitios[i]
}