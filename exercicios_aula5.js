// 1 Cálculo de Desconto em uma Loja Declare duas variáveis, preco e desconto, com valores 150.0 e 20, respectivamente. Calcule o preço final após aplicar o desconto e imprima o resultado.

let preco = 150;
let desconto = 20;
let precoFinal = preco - desconto; 
console.log(precoFinal);

// 2 Cálculo de IMC (Índice de Massa Corporal) Declare duas variáveis, peso e altura, com valores 70 e 1.75, respectivamente. Calcule o IMC usando a fórmula: IMC = peso / (altura ** 2). Imprima o resultado.

let peso = 70;
let altura = 1.75;
let imc = peso / (altura ** 2);
console.log(imc);

// 3 Verificação de Elegibilidade para um Concurso Declare duas variáveis, idade e tem_experiencia, com valores 22 e True, respectivamente. Verifique se a pessoa é elegível para o concurso (idade maior ou igual a 18 e tem experiência) e imprima o resultado.

let idade = 22;
let temExperiencia = true;
let elegivel = idade >= 18 && temExperiencia;
console.log(elegivel);

// 4 Classificação de Níveis de Acesso Declare uma variável nivel_acesso com um valor entre 1 e 3. Use estruturas condicionais para imprimir:

let nivelAcesso = 1;
if (nivelAcesso === 1) {
    console.log("Nível de acesso: Restrito");
} else if (nivelAcesso === 2) {
    console.log("Nível de acesso: Parcial");
} else if (nivelAcesso === 3) {
    console.log("Nível de acesso: Total");
}

// 5 Conversão de Temperatura Declare uma variável celsius com um valor de temperatura em graus Celsius. Converta a temperatura para Fahrenheit usando a fórmula: F = (C * 9/5) + 32. Imprima o resultado.

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);    

// 6 Verificação de Números Pares e Ímpares Declare uma variável numero com um valor inteiro. Use estruturas condicionais para verificar se o número é par ou ímpar e imprima o resultado.

let numero = 7;
if (numero % 2 === 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}

// 7 Cálculo de Frete com Base no Peso Declare uma variável peso com o peso de um pacote em kg. Calcule o frete com base nas seguintes regras: peso ate 5kg: R$ 10,00 por kg; peso entre 5kg e 10kg: R$ 20,00 por kg; peso acima de 10kg: R$ 30,00 por kg. Imprima o resultado.

let peso1 = 7;
let frete;
if (peso1 <= 5) {
    frete = peso1 * 10;
} else if (peso1 <= 10) {
    frete = peso1 * 20;
} else {
    frete = peso1 * 30;
}
console.log(frete);     