// realiza una funcion que reciba un string y 
//devuelva un objeto contando el numero de apariciones de cada letra del string

var frase = "abbabcbdbabdbdbabababcbcbab";

    function contarLetras(miFrase){
        var fraseArray = miFrase.split('');
        //aca estamos definiendo nuestro objeto
        var letrasContadas = {};

        for(var i = 0; i < fraseArray.length; i++){
            //debemos guardar cada letra dentro de una variable
            var letra = fraseArray[i];

            //si dentro de esta variable tengo esta letra, sumale 1
            if(letrasContadas[letra]){
                letrasContadas[letra]++;
            // sino igualalo a 1
            }else{
                letrasContadas[letra] = 1;
            }
        }
        console.log(letrasContadas);
    }

contarLetras(frase);
