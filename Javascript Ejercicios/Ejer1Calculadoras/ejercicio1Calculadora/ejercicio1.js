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


let miCalculadora = new Calculadora();

miCalculadora.sumar(4,5);
miCalculadora.restar(20,7);
miCalculadora.dividir(10,5);
miCalculadora.multiplicar(30,10);
miCalculadora.potencia(30,10);
miCalculadora.getResultado();
miCalculadora.limpiar(); 



