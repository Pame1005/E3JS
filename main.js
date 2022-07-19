const nombreh2 = document.getElementById("nombre")
const precioh4 = document.getElementById("precio")
const idPizza = document.getElementById("number")
const buscar = document.getElementById("btn")
const form = document.getElementById("form")


let pizzas = [
{id:1, nombre: "Jamón",Ingredientes: ["Jamón", "mozzarella", "aceitunas","Morrón"], Precio: "$590"},
{id:2, nombre: "Rúcula y Crudo", Ingredientes: ["Jamón crudo", "mozzarella", "aceitunas negras","Rúcula"], Precio: "$800"},
{id:3, nombre: "Tropical", Ingredientes: ["Jamón", "mozzarella", "Ananá"],Precio: "$750"},
{id:4, nombre: "Palmitos", Ingredientes: ["Jamón", "mozzarella", "aceitunas negras","Palmito", "Salsa Golf"], Precio: "$800"},
{id:5, nombre: "De la casa", Ingredientes: ["salmon ahumado", "mozzarella", "alcaparras"], Precio: "$900"},
{id:6, nombre: "Veggie", Ingredientes: ["Mozzarella", "Berengena","Zucchini", "Cebolla", "Morrón", "Aceitunas"], Precio: "$700"}
]


buscar.addEventListener ('click', laPizza);

function laPizza () {
    
    nombreh2.innerHTML = "";
    precioh4.innerHTML = "";
    const respuestaAlBuscar = idPizza.value;
    pizzas.forEach ((pizza) => {
        if (pizza.id == respuestaAlBuscar) {
            nombreh2.innerHTML = `La pizza seleccionada es <br> ${pizza.nombre}`;
            precioh4.innerHTML = `Su precio es ${pizza.Precio}`;
        }
    })
    if (respuestaAlBuscar > 7 ||respuestaAlBuscar < 1) {
        nombreh2.innerHTML = `No hay pizza con este ID <br>`;
    }
}