// Preguntar el nombre del usuario y saludar
function solicitarNombre() {
    let nombre = prompt("Por favor, ingresa tu nombre");
    alert("Hola " + nombre + "!");
    return nombre; // devuelve el valor de la variable "nombre"
}
  
let nombre = solicitarNombre(); // llama la función y guarda el valor de retorno en una variable

// Mis productos
const productos = [
    {id: 1, destino: "Bariloche", precio: 52000, tiempo: "10 días"},
    {id: 2, destino: "Salta", precio: 45000, tiempo: "8 días"},
    {id: 3, destino: "Misiones", precio: 31000, tiempo: "5 días"},
    {id: 4, destino: "Ushuaia", precio: 65000, tiempo: "12 días"},
    {id: 5, destino: "San Juan", precio: 30000, tiempo: "7 días"},
    {id: 6, destino: "Mendoza", precio: 55000, tiempo: "14 días"},
    {id: 7, destino: "San Luis", precio: 30000, tiempo: "6 días"},
    {id: 8, destino: "Catamarca", precio: 40000, tiempo: "15 días"},
    {id: 9, destino: "Jujuy", precio: 38000, tiempo: "10 días"},
    {id: 10, destino: "El Calafate", precio: 70000, tiempo: "7 días"},
];

let destino = prompt("Ingrese el destino deseado").toLowerCase(); //se solicita el destino

const encontrado = productos.find(item => item.destino.toLowerCase().includes(destino)); //se busca el destino en los productos

if(encontrado){
    let transporte = prompt("¿Prefiere viajar en micro o en avión? (Escriba 'micro' o 'avión')");
    let precioFinal = encontrado.precio;
    let transporteElegido = "micro";
    
    if (transporte.toLowerCase() === "avión") {
        precioFinal *= 1.6; //por elegir avión le sumamos un 60%
        transporteElegido = "avión";
    }
    
    let mensaje = `
    ${nombre}
    Destino elegido: ${encontrado.destino}
    Precio Final (incluye hotel y pasajes en ${transporteElegido}): ${precioFinal}
    Estadía: ${encontrado.tiempo}
    `;
    alert(mensaje); //muestra en un alerta el msj final que incluye destino, estadía, tipo de transporte y precio final.
} else {
    alert("Destino no disponible momentáneamente"); //en caso de que ingresen un valor que no exista entre los productos
}
