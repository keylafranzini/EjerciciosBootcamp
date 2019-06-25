// hacer una funcion que pida al usuario introducir notas (prompt), hasta que escriba FIN.
//en ese momento deberá calcular la media de todas las notas imprimirlo 
// y también su equivalente en lenguaje:


//introducir nota hasta que el usuario escriba la palabra FIN

function calcularMedia(){
var notas = [];    
        while(mensaje != "fin"){
// pedimos al usuario que introduce una nota
            var mensaje = prompt('Introduce tu nota');
            
//cuando nota sea = fin no escriba nada
// convertimos la cadena en minuscula
            mensaje = mensaje.toLowerCase();
//comprobamos si la cadena es fin o es distinto, si es distinto entra en la condición
        if (mensaje != "fin"){
        // convertimos cadena en numeros
            mensaje = parseFloat(mensaje);
        // comprueba si el numero es menor que 10 y si es asi lo mete en el array notas, sino vuelve a pedir que intruzca nota
            if(mensaje <= 10){
                notas.push(mensaje);
                console.log(notas);
            }else {
                console.log("Introduce un número del 1 al 10");
            }
        }
            
    }  
    // calcular la media (suma de notas)/(en cantidad de notas) e imprimirlo en pantalla 
        var media = 0;
        // esto es lo que debemos meter (nota1+nota2+nota3)/3
        for(var i = 0; i < notas.length; i++){
            //el for recorre las notas del array notas y las suma
            //var media = nota1 + nota2 + nota3...
            var media = media + notas[i];
            console.log(media);
        }

        var resultado = media/notas.length;
        console.log(resultado);
        // mostrar si esta suspenso, suficiente, etc...
        if(resultado < 5){
            console.log("Supenso");
        } else if (resultado < 6){
            console.log("Suficiente");
        } else if (resultado < 7){
            console.log("Bien");
        } else if (resultado < 8){
            console.log("Notable");
        } else if (resultado < 9){
            console.log("Sobresaliente");
        } else if (resultado = 10){
            console.log("Matricula");
        }
}
calcularMedia();


