from random import randint
from time import sleep

lista = [[' ',' ',' '], [' ',' ',' '], [' ',' ',' ']]
lista2 = [[1,2,3], [4,5,6], [7,8,9]]

jog = 0
pc = 0

def velha(coluna=0, linha=0, marca=''):
      match coluna:
         case 1:
            linha -= 3
         case 2:
            linha -= 6

      match coluna, linha, marca:
         case 0, 0, '':
            for c in range(0, len(lista2)):
               print(f'{c + 1} ->', end='')
               for l in range(0, len(lista2)):
                  print(' ' * 2 + f'[ {lista2[c][l]} ]', end='  ')
               print('\n')
         case _:
            for c in range(0, len(lista)):
               for l in range(0, len(lista)):
                  if c == coluna:
                     lista[coluna][linha - 1] = marca

                  print(' ' * 2 + f'[ {lista[c][l]} ]', end='  ')
               print('\n')



def jogoX():
   print(f"{'JOGO DA VELHA':^35}\n")
   
   velha()

   marca = ' '
   marca2 = ' '

   while True:
      lista = [[1,2,3], [4,5,6], [7,8,9]]
      col = 5
      lin = 0
      col2 = 5
      lin2 = 0

      while 'O' not in marca and 'X' not in marca:
         marca = str(input('Escolha sua marca [X] ou [O]: ')[0]).upper()
      
      while col != 0 and col != 1 and col != 2:
         col = (int(input('Escolha uma COLUNA\n[ 1 ] [ 2 ] [ 3 ]: ')[0])) - 1
      
      while lin != lista[col][0] and lin != lista[col][1] and lin != lista[col][2]:
         lin = (int(input(f'Escolha sua POSIÇÃO\n[ {lista[col][0]} ]  [ {lista[col][1]} ]  [ {lista[col][2]} ]: ')[0]))

      print('Você escolheu...\n')
      sleep(0.800)

      velha(col, lin, marca)

      print('O computador escolheu...\n')
      sleep(1.5)

      col2 = randint(0, 2)
      match col2:
         case 0:
            lin2 = randint(1, 3)
         case 1:
            lin2 = randint(4, 5)
         case 2:
            lin2 = randint(6, 8)

      if marca == 'X':
         marca2 = 'O'
      else:
         marca2 = 'X'

      velha(col2, lin2, marca2)

      resp = ''

      while 'n' not in resp and 's' not in resp:
         resp = str(input('Quer continuar? ')[0]).lower()

      if resp == 'n':
         break
      
   print(f"\n{'vitórias':^30}")
   print(f"{f'Você: {jog}    Computador: {pc}':^30}")
   
   
jogoX()