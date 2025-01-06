// number.js

// Convertir un número a una cadena
function numberToString(num) {
    return num.toString();
}

// Convertir una cadena a un número entero
function stringToInt(str) {
    return parseInt(str, 10);
}

// Convertir una cadena a un número de punto flotante
function stringToFloat(str) {
    return parseFloat(str);
}

// Redondear un número al entero más cercano
function roundNumber(num) {
    return Math.round(num);
}

// Redondear un número hacia abajo
function floorNumber(num) {
    return Math.floor(num);
}

// Redondear un número hacia arriba
function ceilNumber(num) {
    return Math.ceil(num);
}

// Obtener el valor absoluto de un número
function absoluteValue(num) {
    return Math.abs(num);
}

// Obtener el máximo de una lista de números
function maxNumber(...nums) {
    return Math.max(...nums);
}

// Obtener el mínimo de una lista de números
function minNumber(...nums) {
    return Math.min(...nums);
}

// Generar un número aleatorio entre 0 y 1
function randomNumber() {
    return Math.random();
}

// Verificar si un valor es un número finito
function isFiniteNumber(value) {
    return isFinite(value);
}

// Verificar si un valor es un número entero
function isInteger(value) {
    return Number.isInteger(value);
}

// Verificar si un valor es NaN (Not-a-Number)
function isNaNValue(value) {
    return isNaN(value);
}

// Convertir un número a un valor exponencial
function toExponential(num, fractionDigits) {
    return num.toExponential(fractionDigits);
}

// Convertir un número a una cadena con notación fija
function toFixed(num, digits) {
    return num.toFixed(digits);
}

// Convertir un número a una cadena con notación de precisión
function toPrecision(num, precision) {
    return num.toPrecision(precision);
}

// Ejemplos de uso
console.log(numberToString(123)); // "123"
console.log(stringToInt("123")); // 123
console.log(stringToFloat("123.45")); // 123.45
console.log(roundNumber(123.45)); // 123
console.log(floorNumber(123.45)); // 123
console.log(ceilNumber(123.45)); // 124
console.log(absoluteValue(-123)); // 123
console.log(maxNumber(1, 2, 3, 4, 5)); // 5
console.log(minNumber(1, 2, 3, 4, 5)); // 1
console.log(randomNumber()); // Número aleatorio entre 0 y 1
console.log(isFiniteNumber(123)); // true
console.log(isInteger(123.45)); // false
console.log(isNaNValue(NaN)); // true
console.log(toExponential(12345, 2)); // "1.23e+4"
console.log(toFixed(123.456, 2)); // "123.46"
console.log(toPrecision(123.456, 5)); // "123.46"


// Operaciones aritméticas usando la librería Math

// Sumar dos números
function addNumbers(a, b) {
    return a + b;
}

// Restar dos números
function subtractNumbers(a, b) {
    return a - b;
}

// Multiplicar dos números
function multiplyNumbers(a, b) {
    return a * b;
}

// Dividir dos números
function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Obtener el residuo de la división de dos números
function modulusNumbers(a, b) {
    return a % b;
}

// Elevar un número a una potencia
function powerNumbers(base, exponent) {
    return Math.pow(base, exponent);
}

// Obtener la raíz cuadrada de un número
function sqrtNumber(num) {
    return Math.sqrt(num);
}

// Ejemplos de uso
console.log(addNumbers(5, 3)); // 8
console.log(subtractNumbers(5, 3)); // 2
console.log(multiplyNumbers(5, 3)); // 15
console.log(divideNumbers(6, 3)); // 2
console.log(modulusNumbers(5, 3)); // 2
console.log(powerNumbers(2, 3)); // 8
console.log(sqrtNumber(9)); // 3