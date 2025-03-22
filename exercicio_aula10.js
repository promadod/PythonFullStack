// 1 Soma de Matrizes: Crie duas matrizes 3x3 e escreva uma função para somá-las. A função deve retornar uma nova matriz com o resultado.

let matriz1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];// 3x3
let matriz2 = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];

function somarMatrizes(matriz1, matriz2) {
    let matrizResultado = [];
    for (let i = 0; i < 3; i++) {
        let linha = [];
        for (let j = 0; j < 3; j++) {
            linha.push(matriz1[i][j] + matriz2[i][j]);
        }
        matrizResultado.push(linha);
    }
    return matrizResultado;
}

// 2 Transposição de Matriz: Escreva uma função que receba uma matriz 3x3 e retorne sua transposta (troque linhas por colunas).

// 3 Multiplicação de Matrizes: Crie duas matrizes 2x2 e escreva uma função para multiplicá-las.

// 4 Jogo da Velha: Implemente um jogo da velha usando uma matriz 3x3. O programa deve permitir que dois jogadores façam jogadas alternadas e verifique se há um vencedor.

// 5 Busca em Matriz: Escreva uma função que receba uma matriz e um número, e retorne a posição (linha e coluna) desse número na matriz. Se o número não estiver na matriz, retorne null.

// 6 Matriz Identidade: Crie uma função que gere uma matriz identidade de tamanho NxN (uma matriz onde os elementos da diagonal principal são 1 e os demais são 0).

// 7 Rotação de Matriz: Escreva uma função que rotacione uma matriz 3x3 em 90 graus no sentido horário.

// 8 Soma das Bordas: Escreva uma função que calcule a soma dos elementos das bordas de uma matriz NxN.

