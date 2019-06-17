function crearCarrito(){
    var carrito = document.querySelector(".resumen-compra");
    var newElem = document.createElement("article");

    var productoImagen = document.createElement("img");
    var productoValue = document.getElementById("producto").value;
    productoImagen.src = productoValue;
    newElem.appendChild(productoImagen);
    carrito.appendChild(newElem);

    var imagenProduct = document.createElement("img");
    var productoValue = document.getElementById("producto").value;
    imagenProduct.src = productoValue;
    newElem.appendChild(imagenProduct);
    carrito.appendChild(newElem);

    
    var cantidad = document.createElement("p");
    var cantidadValue = document.getElementById("cantidad").value;
    cantidad.innerText = cantidadValue;
    newElem.style = "font-size: 16px";
    newElem.appendChild(cantidad);
    carrito.appendChild(newElem);
    
    var precio = document.createElement("h2");
    var precioValue = document.getElementById("precio").value;
    precio.innerText = precioValue;
    newElem.style = "font-size: 25px";
    newElem.appendChild(precio);
    carrito.appendChild(newElem);



    //almaceno

    var producto = {
        nombre: 
    }

}

