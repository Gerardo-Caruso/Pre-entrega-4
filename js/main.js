//Funcion para pedir numero sea para total a pagar o numero de personas

const gastos = [100, 220, 310, 400, 145];

function pedirNumero(mensaje){
let entrada = prompt(mensaje);
let numero = parseFloat(entrada);

while (isNaN(numero) || numero <= 0){
entrada = prompt("Ingrese un numero mayor a cero");
numero = parseFloat(entrada);
}

return numero;
}

let nuevoGasto = pedirNumero("Ingresa un nuevo gasto: ");
gastos.push(nuevoGasto);

//Mostramos el gasto en la posicion 3

console.log("El tercer gasto es: " + gastos[2]);

//Quitamos el ultimo gasto con el metodo pop()

let ultimoGasto = gastos.pop();
console.log("Despues de quitar ultimo gasto: " + gastos);

//Agregamos un gasto al inicio del array con unshift()

gastos.unshift(50);
console.log("Con nuevo gasto al inicio: " + gastos);

//Quitamos un gasto al inicio del array con shift()

let primerGasto = gastos.shift();
console.log("El gasto que fue quitado es: " + primerGasto);
console.log("Ahora la lista de gastos es de: " + gastos);

//Uso del metodo includes() para verificar si existe un gasto y retorna "false" porque no hay 1000

let existeGasto = gastos.includes(1000);
console.log("Existe el gasto? " + existeGasto);

//Uso del metodo indexOf() para buscar la posicion

let posicion = gastos.indexOf(310);
console.log("Se encuentra en la posición: " + posicion);

//Uso de splice() para reemplazar un gasto

gastos.splice(1, 1, 99);

//Esta funcion calcula cuando debe pagar por persona

const montoPorPersona = (montoTotal, personas) => montoTotal / personas

//Mostrar resultado

function mostrarResultado (montoTotal, personas, porPersona) {
let mensaje = "El monto total a dividir es: " + montoTotal + "\n" +
"El numero de personas es: " + personas + "\n" +
"El monto a pagar por persona es: " + porPersona + "\n"
alert(mensaje);
console.log(mensaje);
}

// Calculamos el total recorriendo el array con for...of

let total = 0;
for (const gasto of gastos) {
  total += gasto;
}

let personas = pedirNumero ("Entre cuantas personas?");
let totalporPersona = montoPorPersona (total, personas);

mostrarResultado (total, personas, totalporPersona);