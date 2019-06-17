function incluirtitulo () {
    /** Crear el article */
    var article = document.createElement("article");
    article.classList = "noticia";
    
    
    /* Incluir Titulo */
    
    var titulo = document.createElement("h1"); /** creo el elemento que contendra el texto de Titulo */
    titulo.classList ="noticia__titulo"; /** a la variable que creo del nuevo elemento le incluyo la clase que contiene se tipo de elemento */
    var nuevotitulo = document.getElementById("Titulo_text").value; /** Creo una variable que contendra el contenido del input donde el usuario ingresa por ejemplo el titulo */
    titulo.innerText = nuevotitulo; /** a la variable del elemento (en este caso titulo) le digo que lo complete con el contenido que tiene la variable que cree en el punto anterior (contenido del input) */
    document.getElementById("noticia").appendChild(titulo); /** indico que al elemento "noticias" (es el nombre de la clase de mi article ) le cree el elemento titulo (variable que cree para mi primer elemento) */
    
    /* Incluir Autor */
    var Autor = document.createElement("h2");
    Autor.classList ="noticia__autor";
    var nuevoautor = Autor_text.value;
    Autor.innerText = nuevoautor;
    document.getElementById("noticia").appendChild(Autor);
    
    /* Incluir Imagen */
    var Imagen = document.createElement("img");
    Imagen.classList ="noticia__imagen";
    var nuevaimagen = Imagen_text.value;
    Imagen.src = nuevaimagen;
    document.getElementById("noticia").appendChild(Imagen);
    
    /* Incluir Texto */
    var Texto= document.createElement("p");
    Texto.classList ="noticia__nota";
    var nuevotexto = Texto_text.value;
    Texto.innerText = nuevotexto;
    document.getElementById("noticia").appendChild(Texto);
    
    }