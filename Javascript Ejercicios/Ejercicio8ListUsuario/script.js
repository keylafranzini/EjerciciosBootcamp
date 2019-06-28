class User {
    constructor(id, name, email, company, address){
        this._id = id;
        this._name = name;
        this._email = email;
        this._company = company;
        this._address = address;
    }

    draw(){

        //de la forma mas facil
        let row = document.createElement("tr");
       let contentRow = `
       <td>${this._name}</td>
       <td>${this._username}</td>
       <td>${this._email}</td>
       <td><button id="SeeAddress" class="my-pretty-button">VER</button></td>
       <td><button id="SeeCompany" class="my-pretty-button">VER</button></td>
       `;
       row.innerHTML = contentRow;

       row.querySelector("#SeeAddress").addEventListener("click", () => {
        this._address.draw();
        });

        row.querySelector("#SeeCompany").addEventListener("click", () => {
            this._company.draw();
        });

        //inserto la fila EN LA TABLA
       let tableBody = document.querySelector("#usersTableBody");
       tableBody.appendChild(row);

   

        
    }

    showCompany(){
        console.log("Hola, me llamo " + this._company);
    }

    showAdress(){
        console.log("Hola, me llamo " + this._address);
    }

}

let test = new User(17, "Keyla", "franzini.keyla@gmail.com", "Franzini", "Calle 20");


class Company{
    constructor(name, phrase, business){
        this._name = name;
        this._phrase = phrase;
        this._business = business;
    }

    draw(){
        document.querySelector("#nameCompany").innerText = this._name;
        document.querySelector("#phraseCompany").innerText = this._phrase;
        document.querySelector("#businessCompany").innerText = this._business;
    }
}

class Address{
    constructor(street, suite, city, zipcode, geo){
        this._street = street;
        this._suite = suite;
        this._city = city;
        this._zipcode = zipcode;
        this._geo = geo;
    }

    draw(){
        document.querySelector("#streetAddress").innerText = this._street;
        document.querySelector("#suiteAddress").innerText = this._suite;
        document.querySelector("#cityAddress").innerText = this._city;
        document.querySelector("#zipAddress").innerText = this._zipcode;
        document.querySelector("#geoAddress").innerText = this._geo;
    }
}


class Book {
    constructor(){
        this._users = [];
    }

    searchUsers(name){
    // busca un usuario y te lo devuelve
    }

    addUsers(user){
    // añade un usuario a la agenda
    this._users.push(user);

    }

    drawUserList(){
        for(let user of this._users){
            user.draw();
        }
    }

    fillDataApi(){
    // hace una petición, se trae los usuarios y los añade a esta agenda
    fetch('http://jsonplaceholder.typicode.com/users')
        .then((response) => {
            // CONVIERTE A JSON, NO LO TOCO
            return response.json();
        })
        .then((data) => {
            /* let user = new user();
            this.addUsers(user); */
            for(let userData of data){
                let company = new Company(userData.company.name, userData.company.catchPhrase, userData.company.bs);
                let address = new Address(userData.address.street, userData.address.suite, userData.address.city, userData.address.zipcode, userData.address.geo );
                this.addUsers(new User(userData.id, userData.name, userData.email, company, address));
                console.log(userData.address);
                console.log(userData.company);
            }
            myNewBook.tellNumberUsers();
        });
    }

    tellNumberUsers(){
    // me dice los numeros de usuarios
    console.log(this._users.length);
    }

    fillDataTest (){
        let userTest = new User(18, "Maria", "franzini.keyla@gmail.com", "Franzini", "Calle 20");
        let userTest1 = new User(16, "Pepe", "franzini.keyla@gmail.com", "Franzini", "Calle 20");
        let userTest2 = new User(29, "Jose", "franzini.keyla@gmail.com", "Franzini", "Calle 4");
        this.addUsers(userTest);
        this.addUsers(userTest1);
        this.addUsers(userTest2);
    }
}


let myNewBook = new Book();
myNewBook.fillDataApi();

setTimeout(() => myNewBook.drawUserList(), 2000);