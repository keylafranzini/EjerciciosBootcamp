var frases = ["Hola", "Frase corta", "Frase normalita", "Frase muy muy larga"];
var resultado = {
    longitud: 0,
    masLarga: ""
}

for ( var i = 0; i < frases.length; i++ ) {
    if (frases[i].length > resultado.longitud) {
        resultado.longitud = frases[i].length;
        resultado.masLarga = frases[i];
    }
}
console.log('la longitud es ' + resultado.longitud);
console.log('la frase mas larga es ' + resultado.masLarga);



// ejercicio siguiente calcular la media de longitudes

var arrayDeTest1 = ["Richie", "Joanie", "Greg", "Marcia", "Bobby"]; 
var arrayDeTest2 = ["Blanka", "Zangief", "Chun Li", "Guile"]; 
var arrayDeTest3 = ["Red", "Blue", "Green"];


function calcularMedia(){
    var resultado = {
        longitud:  0,
        masLarga: ""
    }
    var resultados = [];
    var media;

    for ( var i = 0; i < arrayDeTest1.length; i++ ) {
        if (arrayDeTest1[i].length > resultado.longitud) {
            resultado.longitud = arrayDeTest1[i].length;
            resultado.masLarga = arrayDeTest1[i];
        }
    }
    var longitudArrayTest1 = resultado.longitud;
    resultados.push(resultado.longitud);
    resultado.longitud =  0;
    
    for ( var i = 0; i < arrayDeTest2.length; i++ ) {
        if (arrayDeTest2[i].length > resultado.longitud) {
            resultado.longitud = arrayDeTest2[i].length;
            resultado.masLarga = arrayDeTest2[i];
        }
    }
    var longitudArrayTest2 = resultado.longitud;
    resultados.push(resultado.longitud);
    resultado.longitud =  0;

    for ( var i = 0; i < arrayDeTest3.length; i++ ) {
        if (arrayDeTest3[i].length > resultado.longitud) {
            resultado.longitud = arrayDeTest3[i].length;
            resultado.masLarga = arrayDeTest3[i];
        }
    }
    var longitudArrayTest3 = resultado.longitud;
    resultados.push(resultado.longitud);

    media = (longitudArrayTest1 + longitudArrayTest2 + longitudArrayTest3)/3;
    console.log(Math.trunc(media));
    
}

calcularMedia(arrayDeTest1, arrayDeTest2, arrayDeTest3);
