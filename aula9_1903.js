function calcularMedia() {
    let soma = 0;
    for (let i = 0; i < 4; i++) {
        let nota = parseFloat(prompt(`Digite a ${i + 1}ª nota:`));
        soma += nota;
    }
    let media = soma / 4;
    console.log("Média:", media);
    if (media >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

// Chamada da função
calcularMedia();

function somaParesNoIntervalo() {
    let inicio = parseInt(prompt("Digite o início do intervalo:"));
    let fim = parseInt(prompt("Digite o fim do intervalo:"));
    let soma = 0;
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }
    console.log("Soma dos números pares:", soma);
}

// Chamada da função
somaParesNoIntervalo();

function verificarPalindromo() {
    let texto = prompt("Digite uma palavra ou frase:").toLowerCase().replace(/ /g, "");
    let textoInvertido = texto.split("").reverse().join("");
    if (texto === textoInvertido) {
        console.log("É palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
}

// Chamada da função
verificarPalindromo();


// Chamada da função
contarDigitos();

// 4. Cálculo de Juros Simples:
// Peça ao usuário o valor principal (P), a taxa de juros anual (r) e o tempo em anos (t).
// Calcule o montante final usando a fórmula de juros simples M = P × (1 + r × t) e exiba o resultado.

function calcularJurosSimples() {
    let P = parseFloat(prompt("Digite o valor principal (P):"));
    let r = parseFloat(prompt("Digite a taxa de juros anual (r):")) / 100;
    let t = parseFloat(prompt("Digite o tempo em anos (t):"));
    let M = P * (1 + r * t);
    console.log("Montante final:", M);
}

// Chamada da função
calcularJurosSimples();

// Funções/comandos de Array:

// push: Adiciona um ou mais elementos ao final do array.

frutas.push("Laranja");
console.log(frutas);

// count: Em JavaScript, não temos uma função count diretamente, mas podemos utilizar o comando length para contar o número de elementos.

console.log(frutas.length);

// copy: Para copiar um array, podemos usar o método slice().

let copiaFrutas = frutas.slice(); 
console.log(copiaFrutas);

// random: Para selecionar um elemento aleatório de um array.

let randomIndex = Math.floor(Math.random() * frutas.length);
console.log(frutas[randomIndex]);

// range: JavaScript não tem uma função range nativa, mas podemos criar uma.

function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

console.log(range(1, 5));

// asort: Em JavaScript, podemos usar sort() para ordenar arrays.

let num = [3, 1, 4, 1, 5, 9];
num.sort((a, b) => a - b);
console.log(num);

// Demonstração:
let numeros = [5, 3, 8, 1, 9];

// Ordenar o array
numeros.sort((a, b) => a - b);
console.log("Ordenado:", numeros);

// Adicionar um novo número
numeros.push(7);
console.log("Após push:", numeros);

// Selecionar um número aleatório
let randomNum = numeros[Math.floor(Math.random() * numeros.length)];
console.log("Número aleatório:", randomNum);

// Contar o número de elementos
console.log("Número de elementos:", numeros.length);
