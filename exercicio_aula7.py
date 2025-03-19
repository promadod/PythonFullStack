# Peça ao usuário um número e mostre a tabuada dele de 1 a 10.

num = int(input("Digite um número: "))

for i in range(1, 11):
    print(f"{num} x {i} = {num * i}")



numero = int(input("Digite um número: "))
i = 1
while i <= 10:
    print(f"{numero} x {i} = {numero * i}")
    i += 1  


    numero = int(input("Digite um número: "))
    i = 1
    while i <= 10:
        resultado = numero * i
        print(numero, "x", i, "=", resultado)
        i += 1


