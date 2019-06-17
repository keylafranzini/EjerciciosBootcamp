//hacer calculadora

class Calculadora {
    constructor(){
        this.resultado = [];
    }

    sumar(primerValor,segundValor){
        var resultado = parseInt(primerValor) + parseInt(segundValor);
        this.acumular(resultado);
        console.log(resultado);
    }

    restar(primerValor,segundValor){
        var resultado = parseInt(primerValor) - parseInt(segundValor);
        console.log(resultado);
        this.acumular(resultado);
    }

    dividir(primerValor,segundValor){
        var resultado = parseInt(primerValor) / parseInt(segundValor);
        console.log(resultado);
        this.acumular(resultado);
    }

    multiplicar(primerValor,segundValor){
        var resultado = parseInt(primerValor) * parseInt(segundValor);
        console.log(resultado);
        this.acumular(resultado);
    }

    potencia(primerValor,segundValor){
        var resultado = parseInt(primerValor) ** parseInt(segundValor);
        console.log(resultado);
        this.acumular(resultado);
    }

    acumular(valor){
        this.resultado.push(valor);
    }

    getResultado (){
        console.log(this.resultado);
    }

    limpiar(){
        this.resultado = [];
    }
}


/* let miCalculadora = new Calculadora();

miCalculadora.sumar(4,5);
miCalculadora.restar(20,7);
miCalculadora.dividir(10,5);
miCalculadora.multiplicar(30,10);
miCalculadora.potencia(30,10);
miCalculadora.getResultado();
miCalculadora.limpiar();  */

//calculadora cutronga

class Cutronga extends Calculadora {
    constructor(){
        super();
    }

    sumar(){
        var valor = this.preguntaValor();
        console.log(valor);
        super.sumar(valor[0],valor[1]);
        console.log(super.sumar(valor[0],valor[1]));
    }

    restar(){
        var valor = this.preguntaValor();
        super.restar(valor[0],valor[1]);
        console.log(super.restar(valor[0],valor[1]));
    }

    dividir(){
        var valor = this.preguntaValor();
        super.dividir(valor[0],valor[1]);
        console.log(super.dividir(valor[0],valor[1]));
    }

    multiplicar(){
        var valor = this.preguntaValor();
        super.multiplicar(valor[0],valor[1]);
        console.log(super.multiplicar(valor[0],valor[1]));
    }

    potencia(){
        var valor = this.preguntaValor();
        super.potencia(valor[0],valor[1]);
        console.log(super.potencia(valor[0],valor[1]));
    }

    preguntaValor(){
        var primerValor = prompt("Mete el primer valor");
        var segundoValor = prompt("Mete el segundo valor");
        return[primerValor,segundoValor];
    }

}

var miCalculadoraCutronga = new Cutronga();
miCalculadoraCutronga.sumar();
miCalculadoraCutronga.restar();
miCalculadoraCutronga.dividir();
miCalculadoraCutronga.multiplicar();
miCalculadoraCutronga.potencia();



