// Forma básica de un condicional if
let numero = 10;
if (numero > 5) {
    console.log("El número es mayor que 5");
}

// Condicional if-else
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Condicional if-else if-else
let nota = 85;
if (nota >= 90) {
    console.log("Tienes una A");
} else if (nota >= 80) {
    console.log("Tienes una B");
} else if (nota >= 70) {
    console.log("Tienes una C");
} else if (nota >= 60) {
    console.log("Tienes una D");
} else {
    console.log("Tienes una F");
}

// Condicional if anidado
let hora = 10;
if (hora < 12) {
    if (hora < 6) {
        console.log("Es de madrugada");
    } else {
        console.log("Es de mañana");
    }
} else {
    console.log("Es de tarde o noche");
}

// Condicional if con operador ternario
let esEstudiante = true;
let mensaje = esEstudiante ? "Eres estudiante" : "No eres estudiante";
console.log(mensaje);