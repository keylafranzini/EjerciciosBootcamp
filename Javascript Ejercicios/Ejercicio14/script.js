
    function crearNoticia(){

    var article = document.createElement('article');
    article.className = 'noticia';

// Titulo
    var titulo = document.createElement('h1');
    titulo.className = 'noticia-titulo';
    var inputTitle = document.getElementById('titulo').value;
    titulo.innerText = inputTitle;
    document.getElementById('noticia').appendChild(titulo);

// Imagen
    var image = document.createElement('img');
    image.className = 'noticia-image';
    var inputUrl = document.getElementById('urlImagen').value;
    image.src = inputUrl;
    document.getElementById('noticia').appendChild(image);

// Autor
    var autor = document.createElement('p');
    autor.className = 'noticia-autor';
    var inputAutor = document.getElementById('autor').value;
    autor.innerText = inputAutor;
    document.getElementById('noticia').appendChild(autor);

// Parrafo
    var parrafo = document.createElement('p');
    parrafo.className = 'noticia-parraf';
    var inputParraf = document.getElementById('parraf').value;
    parrafo.innerText = inputParraf;
    document.getElementById('noticia').appendChild(parrafo);

}
