# 1 Cálculo de Desconto em uma Loja Declare duas variáveis, preco e desconto, com valores 150.0 e 20, respectivamente. Calcule o preço final após aplicar o desconto e imprima o resultado.

# Preço e Desconto

preco = 150
desconto = 20 

preco_final = preco - desconto

print(preco_final)

# 2 Cálculo de IMC (Índice de Massa Corporal) Declare duas variáveis, peso e altura, com valores 70 e 1.75, respectivamente. Calcule o IMC usando a fórmula: IMC = peso / (altura ** 2). Imprima o resultado.

peso = 70
altura = 1.75

imc = peso / (altura ** 2)

print(f'o seu imc é', {imc} )

# 3 Cálculo de Média Declare duas variáveis, nota1 e nota2, com valores 8.5 e 7.0, respectivamente. Calcule a média das notas usando a fórmula: média = (nota1 + nota2) / 2. Imprima o resultado.

idade = 22
tem_experiencia = True

elegivel = idade >= 18 and tem_experiencia

print(elegivel)

# 4 Classificação de Níveis de Acesso Declare uma variável nivel_acesso com um valor entre 1 e 3. Use estruturas condicionais para imprimir:

nivel_acesso = int(input('Digite o Número: '))

if nivel_acesso == 1:
    print("Acesso Restrito")    
elif nivel_acesso == 2:
    print("Acesso Parcial")        
elif nivel_acesso == 3:
    print("Acesso Total")

# 5 Conversão de Temperatura Declare uma variável celsius com um valor de temperatura em graus Celsius. Converta a temperatura para Fahrenheit usando a fórmula: F = (C * 9/5) + 32. Imprima o resultado.

celcius = int(input('Digite a temperatura em celcius: '))

fahrenheit = (celcius * 9/5) + 32

print(fahrenheit)

# 6 Verificação de Números Pares e Ímpares Declare uma variável numero com um valor inteiro. Use estruturas condicionais para verificar se o número é par ou ímpar e imprima o resultado.

numero = 3

if numero % 2 == 0:
    print(" Seu numero é Par")
else:
    print(" Seu numero é Impar")

# 7 Cálculo de Frete com Base no Peso Declare uma variável peso com o peso de um pacote em kg. Calcule o frete com base nas seguintes regras: peso ate 5kg: R$ 10,00 por kg; peso entre 5kg e 10kg: R$ 20,00 por kg; peso acima de 10kg: R$ 30,00 por kg. Imprima o resultado.

peso = float(input('Digite o peso do pacote: '))

if peso <= 5:
    frete = peso * 10
elif peso <= 10:
    frete = peso * 20
else:    
    frete = peso * 30

print(frete)