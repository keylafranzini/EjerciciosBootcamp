// eliminar los espacios

// 

//while( necesita una condicion)



var frase = "Hola clase, qué tal estáis?";
var fraseSinEspacios = "";
var fraseAcabada = false;
var indice = 0;
// mientras que no se me acabe la frase
while(!fraseAcabada){
  // guardo una letra
  var letraActual = frase[indice];
  
  // si no es un espacio, me lo quedo
  if(letraActual != " ") {
    fraseSinEspacios = fraseSinEspacios + letraActual;
  }
  indice = indice + 1;

  if(indice == frase.length) {
    fraseAcabada = true;
  }
}

console.log(fraseSinEspacios);


// hacer una funcion que recibe un string y devuelve el string inverso

var frase = "Me llamo Keyla";

function stringInverso(miFrase){
    var miArray = miFrase.split('');
    var resultado = "";

    for(var i = miFrase.length - 1; i >= 0; i--){
     var letra = miFrase[i];
     resultado = resultado + letra;
    }
    
    console.log(resultado);
}

stringInverso(frase);


//hacer una funcion que reciba un string y devolverlo con todas las letras en  mayuscula

var frase = "Me llamo Keyla";

    function stringMayuscula(miFrase){
        var miArray = miFrase.split('');
        resultado = "";
    
    var len = miFrase.length;
    var fraseMayuscula = "";

    console.log(len);

    for(var i = 0; i < len; i++){
        fraseMayuscula = fraseMayuscula + frase[i].toUpperCase();

    
    }
    console.log(fraseMayuscula);
}

stringMayuscula(frase);