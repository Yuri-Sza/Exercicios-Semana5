const numeros = [21, 42, 84, 168, 336];

const somaNumeros = numeros.reduce((total, numero) => total + numero, 0);

console.log (somaNumeros);