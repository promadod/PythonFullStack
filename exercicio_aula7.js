//Peça ao usuário um número e mostre a tabuada dele de 1 a 10.

let num = parseInt(prompt("Digite um número:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}   

