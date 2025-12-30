ano_atual = 2025

print("Descubra sua idade!")
print("Em que ano você nasceu?")
entrada_do_usuario = input()
ano_nascimento = int(entrada_do_usuario)
ano_em_string = str(ano_atual - ano_nascimento)

print("Sua idade é: " + ano_em_string)