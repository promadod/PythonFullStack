
// 1: Crie uma função que recebe um array de números e retorna a soma de todos os elementos.



function somaDeNumeros (){
    let numeros = [1, 2, 3, 4, 5];
    let soma = (1+2+3+4+5);     
    console.log(soma);
}
somaDeNumeros()


// 2: Crie uma função que recebe um array de strings e retorna um novo array com as strings em ordem alfabética.

function ordemAlfabetica(){
    let strings = ["b", "a", "c", "d", "e"];
    let ordem = strings.sort();
    console.log(ordem);
}
ordemAlfabetica()

// 3: Crie uma função que recebe um array e retorna um novo array sem elementos duplicados.

function removerDuplicados(){
    let array = [1, 2, 3, 4, 5, 6, 7,2, 8, 9, 10];
    let semDuplicados = array.filter((item, index) => array.indexOf(item) === index);
    console.log(semDuplicados);
}
removerDuplicados()