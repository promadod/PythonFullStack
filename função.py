
# Funções um bloco de codigo que executa uma determinada tarefa.


# def identidade(nome,idade,cidade):
#     print(f'Meu nome é: {nome}\nMinha idade é: {idade}\nMinha cidade é: {cidade}')

# identidade('Michael', 33, 'Rio de Janeiro')


def identidade():  # Não aceita valores externos ficamos presos somente a estes dados 
    nome = "Michael"
    idade = 33
    cidade = "Rio de Janeiro"

    print(f"Meu nome é: {nome}\nMinha idade é: {idade}\nMinha cidade é: {cidade}")

identidade()  # Sempre imprime os mesmos valores


# RESUMINDO FUNÇÃO COM AFunção com Argumentos Mais flexível, pois aceita diferentes valores ao ser chamada.
# Reutilizável, porque não fica presa a um único conjunto de dados.
# EXEMPLO DE FLEXIBILIDADE 

def identidade(nome, idade, cidade):  # Aceita valores externos
    print(f"Meu nome é: {nome}\nMinha idade é: {idade}\nMinha cidade é: {cidade}")

identidade("Michael", 33, "Rio de Janeiro")
identidade("Alice", 28, "São Paulo")  # Podemos chamar com diferentes valores

def somar(a, b):
    return a + b  # Retorna a soma, para ser usada fora da função

resultado = somar(3, 5) # A Variável recebe a função somar, colocando os valores que eu desejo que some 
print(resultado)  # Exibe 8

def somar(a, b):
    return a + b  # Retorna o valor, mas não o imprime automaticamente

resultado = somar(15, 15)
print(resultado)  # Agora imprimimos manualmente "30"
print(resultado * 2)  # Podemos reutilizar o valor retornado 30 do primeiro resultado *2

def somar(x,y):
    return x + y
a = 5
b = 10

c = somar(a,b) # Na hora de chamar a função eu posso usar nomes diferentes ele respeitará a ordem X e Y

print(f'O total de {a} x {b} é {c}')


# Testando funções com parametros mais avançados 

def div(g,b):
    if b != 0: # tratamento para quando o usuário digitar 0 no input B | usamos o if toda vez que B for diferente de zero 
        return g / b # Se o B for diferente de zero o return calculara a divisao normal 
    else: # se o valor de B for 0 gera a mensagem do segundo return
        return 'Impossivel Dividir Por Zero'

if __name__ == '__main__': # este comando serve para separar o bloco de codigos executando suas funções acima. 
    g = int(input('Digite um Número:'))
    b = int(input('Digite Outro Número:'))

    r = div(g,b)

print(f'O Valor de {g} dividido por {b} é igual a {r}. ') 


def contar(num= 5 , caractere= '*'): # parametros da função Se o usuário não fornecer um valor, será 5 por padrão. o mesmo para o restante
    for i in range(num): # O range(num) garante que o caractere seja repetido exatamente num vezes. 
        print(caractere)

if __name__ == '__main__': 
    contar(num = 9 ,caractere ='@')


def calcular_fatorial():
 fatorial = int(input('Digite um numero para fatorial: '))
 contador = 1 # o contador serve para repetir a multiplicação sucessivamente que sera digitada no input
 
 while fatorial > 1: # enquanto o valor de fatorial for maior que 1 pois tem um decremento na linha 84  
    contador *= fatorial # contador que é 1 inicialmente ele mesmo se multiplica com valor do input ate o proximo loop
    fatorial -= 1 # decrementa o valor de fatorial ate chegar a 1 e encerrar o loop
 return contador # retorna o resultado final da variavel contador 

if __name__=='__main__':
 fat = calcular_fatorial() # A variavel FAT esta guardando o valor da função calcular_fatorial
 print(f'O Fatorial é: {fat}')


def tabuada():
 numero = int(input('Qual numero para Tabuada?: '))
 for i in range(1, 11):
     result = numero * i
     print(f'{numero} x {i} = {result}')

if __name__ == "__main__":
 tabuada()
 

def eh_primo(numero):
    if numero < 2:  # Números menores que 2 não são primos
        return False
    
    divisor = 2  # Começamos verificando a divisibilidade a partir de 2
    while divisor * divisor <= numero:  # Testamos até a raiz quadrada do número
        if numero % divisor == 0:  # Se for divisível por outro número, não é primo
            return False
        divisor += 1  # Incrementamos para testar o próximo divisor

    return True  # Se não encontrou nenhum divisor, é primo!

# Testando a função
print(eh_primo(7))  # Saída esperada: True
print(eh_primo(10))  # Saída esperada: False
print(eh_primo(13))  # Saída esperada: True



import random 

def numero_aleatorio():
    return random.randint(1,500)

print(numero_aleatorio())

