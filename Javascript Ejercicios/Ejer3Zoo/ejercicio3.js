//realizar una clase que tenga la modelización de un Zoologico
class Zoologico {
// el zoologico debera tener un nombre, ubicacion, aforo maximo, horario y animales
    constructor(nombre, ubicacion, aforo, horario, animales){
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.aforo = aforo;
        this.horario = horario;
        this.areas = [];
    }

    addArea(area){
        
    }
}
// luego creo una clase donde estén las caracteristicas de los animales
class Animales {
    constructor(nombreAnimal, tipo, fechaNac, salud, paisOrigen){
        this.nombreAnimal = nombreAnimal;
        this.tipo = tipo;
        this.fechaNac = fechaNac;
        this.salud = salud;
        this.paisOrigen = paisOrigen;
    }
}
// y una clase con el area del zoologico
class AreaDelZoo {
    constructor(nombreArea, descripcion, animales){
        this.nombreArea = nombreArea;
        this.descripcion = descripcion;
        this.animales = animales;
    }
}

//luego crear dos variables de dos zoologicos donde aparezca el nombre, ubicacion, aforo y horario

//creamos una variable con un array de las areas de los animales

// luego se crean la cantidad de variables segun los tipos de animales con su nombre, tipo, fechaNac salud y pais

// luego hay que guardar la areas