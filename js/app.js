const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true,
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true,
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false,
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false,
    } ];


console.log("- - - - - - - - - - - - - - - - - - - Ejercicio 1 - - - - - - - - - - - - - - - - - - - ");

// Mostrar el carrito de la compra.
function shoppingCart () {
    i = 0;
    for (items of carrito) {
        i++;
        console.log("- - - - - - - - - Producto " + i + " - - - - - - - - -");
        console.log("Id: " + items.id);
        console.log("Nombre: " + items.name);
        console.log("Precio: " + items.price);
        console.log("Cantidad: " + items.count);
        console.log("Premium: " + items.premium);
    };
};

shoppingCart();

console.log(" ")
console.log("- - - - - - - - - - - - - - - - - - - Ejercicio 2 - - - - - - - - - - - - - - - - - - - ");

// Listar todos los productos.
function shoppingCartList () {
    console.log("En el carrito hay " + carrito.length + " productos:")
    for (items of carrito) {
        console.log("* " + items.name);
    };
};

shoppingCartList();

// console.log("- - - - - - - - - - - - - - - - - - - Ejercicio 3 - - - - - - - - - - - - - - - - - - - ");

// Eliminar el producto con id 54657 del carrito de la compra.

function searchAndEliminate (idNum) {
    for(items of carrito) {
        if (items.id == idNum) {
            i = carrito.indexOf(items);
            carrito.splice (i,1);
        };
    };
};

searchAndEliminate (54657);

console.log(" ")
console.log("- - - - - - - - - - - - - - - - - - - Ejercicio 4 - - - - - - - - - - - - - - - - - - - ");

// Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).
let total = 0;

function totalPrice () {
    for(items of carrito) {
        total += items.price * items.count;
    };

    console.log ("El precio total es de " + total + " €")
}

totalPrice ();

console.log(" ")
console.log("- - - - - - - - - - - - - - - - - - - Ejercicio 5 - - - - - - - - - - - - - - - - - - - ");

// Filtrar por los productos que sean prime.

carritoPremium = [];

function premiumItems() {
    for (items of carrito) {
        if (items.premium == true){
            carritoPremium.push (items);
        };
    };
};

function premiumItemsList () {
    console.log("Los productos premium son:")
    for (items of carritoPremium) {
        console.log("* " + items.name);
    };
};

premiumItems ();
premiumItemsList();

console.log(" ");
console.log("- - - - - - - - - - - - - - - - - - Ejercicio extra 1 - - - - - - - - - - - - - - - - - -");

// Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío",
// si no "Este pedido tiene gastos de envío".

function checkPremium () {
    premiumShopping = true;

    for (items of carrito) {
        premiumShopping = premiumShopping && items.premium;
    };  

    if (premiumShopping == true){
        console.log ("Pedido sin gastos de envío")
    } else {console.log ("Este pedido tiene gastos de envío")
    };

    return !premiumShopping;
};

checkPremium ();

console.log(" ");
console.log("- - - - - - - - - - - - - - - - - - Ejercicio extra 2 - - - - - - - - - - - - - - - - - -");

// Mostrar el carrito en un listado de html básico.

function printShoppingList () {
    document.write("<h2>- Carrito -</h2>")
    for (items of carrito) {
        document.write("<p> <b>* " + items.name + "</b></p>");
        document.write("<p>Id: " + items.id + " | Precio unidad: " + items.price + "€ | Unidades: " + items.count +  "</p>");
    };
    document.write("<p>------------------------------------------------------------</p>")
    document.write("<p><b>Total: " + total + " €</b></p>")
};

printShoppingList();


console.log("- - - - - - - - - - - - - - - - - - Ejercicio extra 3 - - - - - - - - - - - - - - - - - -");

// Aplicar un descuento del 5% si la compra es mayor de 100 €.

function discount () {
    if (total > 100) {
        total = total * 0.9;
        console.log("La compra es superior a 100€, por lo que se aplica un descuento del 10%");
        console.log("El precio total de tu compra con el descuento aplicado es de " + total + "€")
    };
};

discount ();