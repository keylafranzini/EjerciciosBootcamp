var valor = 0;

    function introducirValor(){
        let valor = prompt('Introduce un valor');
        valor = parseFloat(valor);
    }

    function suma(){
        let valor2 = prompt('Introduce otro valor');
        valor2 = parseFloat(valor2);
        valor = valor + valor2;
        console.log(valor);
    }

    function restar(){
        let valor2 = prompt('Introduce otro valor');
        valor2 = parseFloat(valor2);
        valor = valor - valor2;
        console.log(valor);
    }

    function multiplicar(){
        let valor2 = prompt('Introduce otro valor');
        valor2 = parseFloat(valor2);
        valor = valor * valor2;
        console.log(valor);
    }

    function resultado(){
        alert(valor);
    }

