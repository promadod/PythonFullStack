
# aplicação de estrutura for e range

numero = int(input("digite um número inteiro:"))
for i in range(numero, -1, -1):
    print(i)

# Aplicação de estrutura while
    
numero1 = int(input("Digite um número par:"))
soma = 0
i = 1
while i <= numero1:
    soma += i
    i += 1
print("Soma:", soma)