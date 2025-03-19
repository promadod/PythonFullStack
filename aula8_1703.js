// Cálculo de Média de Notas: Peça ao usuário que insira 4 notas (de 0 a 10). 
//Calcule a média das notas e exiba o resultado. Se a média for maior ou igual a 7, exiba "Aprovado". Caso contrário, exiba "Reprovado".

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function notas(nota1, nota2, nota3, nota4) {
    let medianotas = (nota1 + nota2 + nota3 + nota4) / 4;

    if (medianotas >= 7) {
        return "Aprovado";
    } else if (medianotas >= 5 && medianotas < 7) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

rl.question("Digite a primeira nota:", (nota1) => {
    rl.question("Digite a segunda nota:", (nota2) => {
        rl.question("Digite a terceira nota:", (nota3) => {
            rl.question("Digite a quarta nota:", (nota4) => {
                nota1 = parseFloat(nota1);
                nota2 = parseFloat(nota2);
                nota3 = parseFloat(nota3);
                nota4 = parseFloat(nota4);

                let resultado = notas(nota1, nota2, nota3, nota4);
                console.log("Classificação das notas: ", resultado);

                rl.close();
            });
        });
    })
});