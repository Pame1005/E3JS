const nombreh2 = document.getElementById("nombre")
const precioh4 = document.getElementById("precio")
const idPizza = document.getElementById("number")
const buscar = document.getElementById("btn")

let pizzas = [
{id:1,nombre: "Jamón",Ingredientes: ["Jamón", "mozzarella", "aceitunas","Morrón"], Precio: "$590"},
{id:2,nombre: "Rúcula y Crudo", Ingredientes: ["Jamón crudo", "mozzarella", "aceitunas negras","Rúcula"], Precio: "$800"},
{id:3, nombre: "Tropical", Ingredientes: ["Jamón", "mozzarella", "Ananá"],Precio: "$750"},
{id:4, nombre: "Palmitos", Ingredientes: ["Jamón", "mozzarella", "aceitunas negras","Palmito", "Salsa Golf"], Precio: "$800"},
{id:5, nombre: "De la casa", Ingredientes: ["salmon ahumado", "mozzarella", "alcaparras"], Precio: "$900"},
{id:6, nombre: "Veggie", Ingredientes: ["Mozzarella", "Berengena","Zucchini", "Cebolla", "Morrón", "Aceitunas"], Precio: "$700"}
]


buscar.addEventListener('click', (e) =>{
    e.preventDefault();

    let seleccion = pizzas.map ((pizza) =>{pizza.id === idPizza});

   if (seleccion) {
       nombreh2.innerHTML = pizzas.nombre;
       precioh4.innerHTML = pizzas.Precio;
   } else {
    nombreh2.innerHTML = `No hay pizza con este ID <br>`;
    precioh4.innerHTML = ""; 
   }
})

