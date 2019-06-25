class Pokemon {
    constructor(name, url){
        this._name = name;
        this._url = url;
    }
    // este seria el primer método donde va a pintar la fila de pokemones
    drawPokemonRow (){
        let pokemonRowTemplate = document.querySelector("#pokemonRowTemplate");
    // el cloneNode devuelve el duplicado del nodo en donde se llamo este método
        let newPokemonRow = pokemonRowTemplate.cloneNode(true);

    // ahora debemos rellenar los campos con las clases del html
    // donde colocamos primero la segunda variable
        newPokemonRow.querySelector(".pokemon-name").innerText = this._name;
    // luego la segunda variable donde le indica el setAtribute que funciona para marcar un atributo a un botón
        newPokemonRow.querySelector(".pokemon-detail__button").setAttribute('data-url', this._url);
    // la segunda variable donde le indica el addEventListener donde configura una funcion que se llamará
    // cuando le hagas click en el documento
        newPokemonRow.querySelector(".pokemon-detail__button").addEventListener('click', () => this.handleClick(event));
        document.querySelector("#pokemonsTableBody").appendChild(newPokemonRow);
    }

    // el segundo método es el que maneja los clicks
    handleClick(event){
    // aca declaramos una const "las constantes se comportan como let variables, excepto que no puede ser reasignadas"
    // currentTarget solo lee las propiedades de la interface del Event que identifica el objeto actual para el evento
    // getAttribute sirve para obtener el valor actual de un atributo
        const detailUrl = event.currentTarget.getAttribute('data-url');
        this.fetchDetailFromApi(detailUrl);
    }

    // el tercer método es nuestro objeto que creamos en el método handleClick
    fetchDetailFromApi(pokemonDetailUrl){
    //fetch proporciona una definicion genérica de objetos de solicitud y respuesta
        fetch(pokemonDetailUrl)
        // el método then devuelve una promesa
            .then(function (response){
                return response.json();
            })
            .then((pokemonDetailResponse) =>{
                this.handlePokemonDetailResponse(pokemonDetailResponse);
            })       
    }

    // el cuarto método maneja la respuesta del detalle del pokemon
    handlePokemonDetailResponse(detail){

        let div = document.createElement('div');
        let imagen = document.createElement('img');
        let nombre = document.createElement('p');
        let peso = document.createElement('p');
        let altura = document.createElement('p');

        imagen.href = detail.url;
        imagen.src = detail.sprites.back_default;
        nombre.innerText = detail.name;
        peso.innerText = detail.weight;
        altura.innerText = detail.height;

        div.appendChild(imagen);
        div.appendChild(nombre);
        div.appendChild(peso);
        div.appendChild(altura);

        let handlePokemonDetail = document.querySelector(".main__pokemon-detail");
        handlePokemonDetail.appendChild(div);

        console.log(detail);
    }

}

// ahora creamos una clase nueva de la App donde el constructor tendra un solo objeto con el array
class AppClass {
    constructor(){
        this.pokemons = [1,2,3];
    }

    // aca creamos el primer método con init() se usa para una buena práctica (ponerlo como inicio)
    init(){
        this.fetchDataFromApi();
    }

    // el segundo método que proviene del objeto del primer método de la clase ( es la data de la app )
    fetchDataFromApi(){
        const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon/';
        fetch(pokemonApiUrl)
            .then(function (response){
                return response.json();
            })
            .then((pokemonsResponse) => {
                this.handlePokemonsResponse(pokemonsResponse);
            })
            
    }

    // el tercer método es donde vacío los pokemons
    handlePokemonsResponse(data){
        this.pokemons = [];
    // creo un for donde recorro los pokemons y mapeo la respuesta a objetos tipo pokemons
        for(let i = 0; i < data.results.length; i++){
            let pokemonJson = data.results[i];
            let pokemonObj = new Pokemon(pokemonJson.name, pokemonJson.url);
            this.pokemons.push(pokemonObj);
        }

        // aca pintamos TODOS los pokemons
        this.drawAllPokemons();
    }

    // el cuarto método es donde se va a vaciar la tabla
    drawAllPokemons(){
        document.querySelector("#pokemonsTableBody").innerHTML = null;

        for(let i = 0; i < this.pokemons.length; i++){
            let pokemon = this.pokemons[i];
            pokemon.drawPokemonRow();
        }
    }
}
// aca creamos una nueva instancia
const app = new AppClass;
app.init();









