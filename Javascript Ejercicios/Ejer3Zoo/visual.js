//hacer calculadora

class Calculadora {
    constructor(){
        this.resultado = [];
    }

    sumar(primerValor,segundValor){
        var resultado = parseInt(primerValor) + parseInt(segundValor);
        this.acumular(resultado);
        console.log(resultado);
        return this.resultado;
    }

    restar(primerValor,segundValor){
        var resultado = parseInt(primerValor) - parseInt(segundValor);
        console.log(resultado);
        this.acumular(resultado);
        return this.resultado;
        
    }

    dividir(primerValor,segundValor){
        var resultado = parseInt(primerValor) / parseInt(segundValor);
        console.log(resultado);
        this.acumular(resultado);
        return this.resultado;
    }

    multiplicar(primerValor,segundValor){
        var resultado = parseInt(primerValor) * parseInt(segundValor);
        console.log(resultado);
        this.acumular(resultado);
        return this.resultado;
    }

    potencia(primerValor,segundValor){
        var resultado = parseInt(primerValor) ** parseInt(segundValor);
        console.log(resultado);
        this.acumular(resultado);
        return this.resultado;
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



// calculadora visual

class Visual extends Calculadora{
    constructor(){
        super();
        this.valor = [,];
    }


    sumar(){
       this.preguntaValor();
       super.sumar(this.valor[0],this.valor[1]);
       this.showResultado();
    }

    restar(){
        this.preguntaValor();
        super.restar(this.valor[0],this.valor[1]);
        this.showResultado();
    }

    multiplicar(){
        this.preguntaValor();
        super.multiplicar(this.valor[0],this.valor[1]);
        this.showResultado();
    }

    dividir(){
        this.preguntaValor();
        super.dividir(this.valor[0],this.valor[1]);
        this.showResultado();
    }

    potencia(){
        this.preguntaValor();
        super.potencia(this.valor[0],this.valor[1]);
        this.showResultado();
    }

    preguntaValor(){
        this.valor[0] = document.getElementById("primerValor").value;
        this.valor[1] = document.getElementById("segundoValor").value;
    }

    showResultado(){
        document.getElementById("resultado").value = this.resultado;
    }

}

var calculadoraVisual = new Visual();
