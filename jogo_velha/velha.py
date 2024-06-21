from random import randint

lista = [[1,2,3], [4,5,6], [7,8,9]]

jog = 0
pc = 0

def velha():
      for l in range(0, len(lista)):
         print(l + 1, end='')
         for c in range(0, len(lista)):
            print(' ' * 2 + f'[ {lista[l][c]} ]', end='  ')
         print('\n')


def jogoX():
   print(f"{'JOGO DA VELHA':^30}\n")
   
   velha()
   
   #marca = str(input('Escolha sua marca [X] ou [O]: '))
   
   col = (int(input('Escolha a coluna: '))) - 1
   lin = int(input(f'Escolha uma posição\n[ {lista[col][0]} ]  [ {lista[col][1]} ]  [ {lista[col][2]} ]: '))
      
   print(f"\n{'vitórias':^30}")
   print(f"{f'Você: {jog}    Computador: {pc}':^30}")
   
   
jogoX()