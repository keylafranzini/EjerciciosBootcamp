

// aqui vamos a guardar en un array la fecha de nacimiento
//Pedir al usuario los datos

    function getEdad(fNac, fActual = (new Date())) {
        var diff = (fActual - fNac) / (365 * 24 * 60 * 60 * 1000);
        return Math.floor(diff);
       }
       
       año = prompt("¿En que año naciste?");
       mes = prompt("¿En que mes naciste?");
       dia = prompt("¿En que día naciste?");
       
       //Para calcular los años restamos el día de hoy menos su fecha de cumpleaños
       var fechaNacimiento = new Date(mes+"-"+dia+"-"+año).getTime();
       const edad = getEdad(fechaNacimiento);
       
       console.log(edad);
    
