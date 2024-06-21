from random import randint
from time import sleep

lista = [[1,2,3], [4,5,6], [7,8,9]]

jog = 0
pc = 0

def velha(coluna=0, linha=0):
      match coluna:
         case 1:
            linha -= 3
         case 2:
            linha -= 6

      match coluna, linha:
         case 0, 0:
            for c in range(0, len(lista)):
               print(f'{c + 1} ->', end='')
               for l in range(0, len(lista)):
                  print(' ' * 2 + f'[ {lista[c][l]} ]', end='  ')
               print('\n')
         case _:
            for c in range(0, len(lista)):
               for l in range(0, len(lista)):
                  lista[c][l] = ' '
                  if c == coluna:
                     lista[coluna][linha - 1] = 'x'
                  # else:
                  #    lista[c][l] = ' '

                  print(' ' * 2 + f'[ {lista[c][l]} ]', end='  ')
               print('\n')



def jogoX():
   print(f"{'JOGO DA VELHA':^35}\n")
   
   velha()
   

   col = 5
   lin = 0
   marca = ' '

   while 'o' not in marca and 'x' not in marca:
      marca = str(input('Escolha sua marca [X] ou [O]: ')[0]).lower()
   
   while col != 0 and col != 1 and col != 2:
      col = (int(input('Escolha uma COLUNA\n[ 1 ] [ 2 ] [ 3 ]: ')[0])) - 1
   
   while lin != lista[col][0] and lin != lista[col][1] and lin != lista[col][2]:
      lin = (int(input(f'Escolha sua POSIÇÃO\n[ {lista[col][0]} ]  [ {lista[col][1]} ]  [ {lista[col][2]} ]: ')[0]))

   print('Você escolheu...\n')
   sleep(0.800)

   velha(col, lin)
      
   print(f"\n{'vitórias':^30}")
   print(f"{f'Você: {jog}    Computador: {pc}':^30}")
   
   
jogoX()