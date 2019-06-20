var miPromesa = fetch('https://pokeapi.co/api/v2/pokemon/');

miPromesa.then(function(res){
  return res.json();
}).then(function(res){
  for(let i = 0; i < res.results.length; i++){
    let pokemon = res.results[i];
    let fila = document.createElement('tr');
    let celda1 = document.createElement('td');
    let celda2 = document.createElement('td');
    let video = document.createElement('a');

    celda1.innerText = pokemon.name;
    celda2.appendChild(video);
    video.href = pokemon.url;
    video.innerText = "Click on here";
    video.target = "_blank";

    fila.appendChild(celda1);
    fila.appendChild(celda2);

    let tableBody = document.querySelector(".table-body");
    tableBody.appendChild(fila);

    var pokePromesa = fetch(pokemon.url);

    pokePromesa.then(function(res){
        return res.json()
    }).then(function(res){
        console.log(res);

        let imgPoke = document.createElement('img');
        imgPoke.src = res.sprites.back_default;
        let namePoke = document.createElement('p');
        let weightPoke = document.createElement('p');
        let heightPoke = document.createElement('p');

       

        namePoke.innerText = pokePromesa.name;
        weightPoke.innerText = pokePromesa.weight;
        heightPoke.innerText = pokePromesa.height;

        fila.appendChild(imgPoke);
        let celda3 = document.createElement('td');
        let celda4 = document.createElement('td');

        weightPoke.innerText = res.weight;
        celda3.appendChild(weightPoke);
        heightPoke.innerText = res.height;
        celda4.appendChild(heightPoke);  
        fila.appendChild(celda3);
        fila.appendChild(celda4);
        
        

        let sectionPoke = document.querySelector(".section-poke");
        sectionPoke.appendChild(section);

    });


    
  }

});

