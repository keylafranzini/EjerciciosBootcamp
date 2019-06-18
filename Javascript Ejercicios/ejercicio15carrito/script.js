var carrito = [];

var productoEjemplo = {
    nombre: "Camiseta",
    cantidad: 3,
    precio: 10
};

function crearCarrito(){
    
    var producto = document.createElement("article");

    var nombreProducto = document.createElement("p");
    var nomProductoValue = document.getElementById("producto").value;
    nombreProducto.src = nomProductoValue;
    producto.appendChild(nombreProducto);
    

    var imagenProduct = document.createElement("img");
    var productoValue = document.getElementById("imgproducto").value;
    imagenProduct.src = productoValue;
    producto.appendChild(imagenProduct);
    

    
    var cantidad = document.createElement("p");
    var cantidadValue = document.getElementById("cantidad").value;
    cantidad.innerText = cantidadValue;
    /* producto.style = "font-size: 16px"; */
    producto.appendChild(cantidad);
    
    
    var precio = document.createElement("h2");
    var precioValue = document.getElementById("precio").value;
    precio.innerText = precioValue;
    /* producto.style = "font-size: 25px"; */
    producto.appendChild(precio);
    

    var cesta = document.querySelector(".resumen-compra");
    cesta.appendChild(producto);

    // aqui almaceno

    var producto = {
        nombre: nomProductoValue,
        cantidad: parseInt(cantidadValue),
        precio: parseFloat(precioValue)
    };

    carrito.push(producto);
    console.log(carrito);

    drawTotalProducts();
    drawTotalPrice();

}

function drawTotalProducts () {
    let totalNumber = document.querySelector(".total__number");

    let totalProducts = 0;
    for(let i=0; i<carrito.length; i++) {
        let producto = carrito[i];
        totalProducts = totalProducts + producto.cantidad;
    }

    totalNumber.innerText = "Total productos: " + totalProducts;
}

function drawTotalPrice() {
    let totalPriceTag = document.querySelector(".total__price");

    let totalPrice = 0;
    for(let i=0; i<carrito.length; i++) {
        let producto = carrito[i];
        totalPrice = totalPrice + (producto.precio * producto.cantidad);
    }

    totalPriceTag.innerText = "Total precio: " + totalPrice;
}

