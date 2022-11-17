import fileinput

a = 0
for nome in fileinput.input("/Users/pedro/Documents/VSCode/lista_nomes.txt"):
    if nome.strip() == "Carol":
        print("Encontrei Carol!")
    else:
        a += 1

print("Encontrei outros ", a, " nomes")