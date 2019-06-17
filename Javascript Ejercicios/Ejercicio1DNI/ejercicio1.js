function generarLetraDni(numeroDeDni) {
    var letrasDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    
    // tiene que ser num -> DONE
    // tiene que ser positivo 
    // le tengo que poner 0 hasta 8 digits
  
    if(typeof(numeroDeDni) == "number") {
      // OK
      if(numeroDeDni > 0) {
        // OK
        var miNumeroComoCadena = numeroDeDni.toString();
        var numeroDigitos = miNumeroComoCadena.length;
        var cerosQueFaltan = 8 - numeroDigitos;
        while(cerosQueFaltan > 0){
          miNumeroComoCadena = "0" + miNumeroComoCadena;
          cerosQueFaltan = cerosQueFaltan - 1;
        }
        console.log("El numero completo es: " + miNumeroComoCadena);
  
        var numeroParseado = parseInt(miNumeroComoCadena);
        var resto = numeroParseado % 23;
        var letra = letrasDni[resto];
      } else {
        // MAL
        console.error("El numero debe ser positivo");
      } 
    } else {
      // MAL
      console.error("Debes introducir un número");
    }
  
    return letra;
  }
  
  
  var letraDevuelta = generarLetraDni(12312);
  console.log(letraDevuelta);
  
  var letraDeJulio = generarLetraDni(53502368);
  console.log("La letra del DNI de Julio es: " + letraDeJulio);