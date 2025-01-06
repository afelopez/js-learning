// Ejemplo básico de switch
let fruta = 'manzana';

switch (fruta) {
    case 'manzana':
        console.log('Es una manzana');
        break;
    case 'banana':
        console.log('Es una banana');
        break;
    case 'naranja':
        console.log('Es una naranja');
        break;
    default:
        console.log('Fruta desconocida');
}

// Switch con múltiples casos para una misma acción
let dia = 2;

switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Es un día de semana');
        break;
    case 6:
    case 7:
        console.log('Es fin de semana');
        break;
    default:
        console.log('Día inválido');
}

// Switch con expresión en el caso
let numero = 10;

switch (true) {
    case (numero < 5):
        console.log('El número es menor que 5');
        break;
    case (numero >= 5 && numero <= 10):
        console.log('El número está entre 5 y 10');
        break;
    case (numero > 10):
        console.log('El número es mayor que 10');
        break;
    default:
        console.log('Número desconocido');
}

// Switch sin break (fall-through)
let letra = 'B';

switch (letra) {
    case 'A':
        console.log('La letra es A');
    case 'B':
        console.log('La letra es B');
    case 'C':
        console.log('La letra es C');
        break;
    default:
        console.log('Letra desconocida');
}