def descobrir_impar_ou_par(numero: int) -> str:
    if numero % 2 == 0:
        return "par"
    else:
        return "impar"


print("digite um numero")
numero = int(input())
total = descobrir_impar_ou_par(numero)
print("seu numero é " + total)