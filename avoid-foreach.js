function foreachFunc(){

 const numeros = [1, 2, 3, 4, 5];
let soma = 0;

numeros.forEach(numero => {
    soma += numero;
});

console.log(soma);
}

function forFunc(){
const numeros = [1, 2, 3, 4, 5];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(soma);
}

function forOfFunc(){
const numeros = [1, 2, 3, 4, 5];
let soma = 0;

for (const numero of numeros) {
    soma += numero;
}

console.log(soma);
}