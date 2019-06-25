function calcularMedia(){
    let resultado = {
        longitud: 0,
        fraseMasLarga: ""
    }

    let resultados = [];
    let media;

    for (let i = 0; i < arrayDeTest1.length; i++){
        if(arrayDeTest1[i].length > resultado.longitud){
            resultado.longitud = arrayDeTest1[i].length;
            resultado.fraseMasLarga = arrayDeTest1[i];
        }
    }
    let longitudArrayTest1 = resultado.longitud;
    resultados.push(resultado.longitud);
    resultado.longitud = 0;

    for (let i = 0; i < arrayDeTest2.length; i++){
        if(arrayDeTest2[i].length > resultado.longitud){
            resultado.longitud = arrayDeTest2[i].length;
            resultado.fraseMasLarga = arrayDeTest2[i];
        }
    }
    let longitudArrayTest2 = resultado.longitud;
    resultados.push(resultado.longitud);
    resultado.longitud = 0;

    for(let i = 0; i < arrayDeTest3.length; i++){
        if(arrayDeTest3[i].length > resultado.longitud){
            resultado.longitud = arrayDeTest3[i].length;
            resultado.fraseMasLarga = arrayDeTest3[i];
        }
    }
    let longitudArrayDeTest3 = resultado.longitud;
    resultados.push(resultado.longitud);
    
    media = (parseFloat(longitudArrayTest1) + parseFloat(longitudArrayTest2) + parseFloat(longitudArrayDeTest3))/3;
    console.log('La media es ' + media);
}

calcularMedia(arrayDeTest1, arrayDeTest2, arrayDeTest3);
