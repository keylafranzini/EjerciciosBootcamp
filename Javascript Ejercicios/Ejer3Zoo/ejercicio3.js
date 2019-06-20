//realizar una clase que tenga la modelización de un zoologico
class Zoo {
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

// luego creo una clase con el area del zoologico
class AreaDelZoo {
    constructor(nombreArea, descripcion, animales){
        this.nombreArea = nombreArea;
        this.descripcion = descripcion;
        this.animales = animales;
    }
}
// y luego creo una clase donde estén las caracteristicas de los animales
class Animales {
    constructor(nombreAnimal, tipo, fechaNac, salud, paisOrigen){
        this.nombreAnimal = nombreAnimal;
        this.tipo = tipo;
        this.fechaNac = fechaNac;
        this.salud = salud;
        this.paisOrigen = paisOrigen;
    }
}


//luego crear dos variables de dos zoologicos donde aparezca el nombre, ubicacion, aforo y horario
var zooCordoba = new Zoo("Safari", "Cordoba", 2500, "10 a 21");
var zooAlicante = new Zoo("Mundozoo", "Alicante", 3500, "10 a 21");

//creamos una variable con un array vacio de las areas de los animales
var animalesArea1 = [];
var animalesArea2 = [];


// luego se crean la cantidad de variables segun los tipos de animales con su nombre, tipo, fechaNac salud y pais
var leopardo = new Animales("Leopardo", "Mamífero", "Enero, 2011", "90", "Argelia");
var oso = new Animales("Oso", "Mamífero", "Julio, 2014", "95", "EEUU");
var lobo = new Animales("Lobo", "Mamífero", "Diciembre, 2015", "90", "EEUU");
var jirafa = new Animales("Jirafa", "Herbívoro", "Marzo, 2016", "87", "Brasil");
var caballo = new Animales("Caballo", "Herbívoro", "Octubre, 2014", "90", "EEUU");

// luego hay que guardar la areas
animalesArea1.push(leopardo, oso, lobo);
animalesArea2.push(jirafa, caballo);

//aca vamos a crear las variables donde guardamos las categorias de los animales
let mamiferos = new AreaDelZoo("Mamíferos", "Acá es donde viven los Mamíferos", animalesArea1);
let herbivoros = new AreaDelZoo("Herbívoros", "Acá es donde viven los Herbívoros", animalesArea2);

//aca es donde nos va a devolver los array de las areas
var areas = [];
areas.push(mamiferos);
areas.push(herbivoros);

//y por último agrego las areas del zoo
zooCordoba.addArea(mamiferos);
zooCordoba.addArea(herbivoros);
zooAlicante.addArea(mamiferos);
zooAlicante.addArea(herbivoros);
