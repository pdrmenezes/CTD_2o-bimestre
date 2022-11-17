number = int(input("Insira um número: "))

if number > 1:
    for i in range(2, number):
        if (number % i) == 0:
            print(number, "não é um número primo")
            break
    else:
        print(number, "é primo")

# se o número for menor ou igual a 1, não é primo
else:
    print(number, "não é um número primo")