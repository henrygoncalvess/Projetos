from random import randint
from time import sleep
from datetime import date

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
               match c:
                  case 0:
                     print(f'{"A ->":^9}', end='')
                  case 1:
                     print(f'{"B ->":^9}', end='')
                  case 2:
                     print(f'{"C ->":^9}', end='')
                     
               for l in range(0, len(lista2)):
                  if l >= 1:
                     print(' ' * 2 + f'|  {lista2[c][l]}', end='')
                  else:
                     print(' ' * 2 + f'{lista2[c][l]}', end='')
                     
               if c <= 1:
                  print(f'\n{"—" * 15:^35}')
               else:
                  print('\n')
               
         case _:
            for c in range(0, len(lista)):
               print(f'{"":^9}', end='')
               
               for l in range(0, len(lista)):
                  if c == coluna:
                     lista[coluna][linha] = marca

                  if l >= 1:
                     print(' ' * 2 + f'|  {lista[c][l]}', end='')
                  else:
                     print(' ' * 2 + f'{lista[c][l]}', end='')
               
               if c <= 1:
                  print(f'\n {"—" * 15:^34}')
               else:
                  print('\n')
               

def jogoX():
   print(f'{date.today().day} / {date.today().month} / {date.today().year}\n')
   
   print(f"{'JOGO DA VELHA':—^35}\n")

   velha()
   print(f'{"":—^35}')
   
   marca = str(input('Escolha sua marca [X] ou [O]: ')).upper()[0]
      
   while marca not in 'XO':
      marca = str(input('Apenas [X] ou [O]: ')).upper()[0]

   while True:
      lista2 = [[1,2,3], [4,5,6], [7,8,9]]

      colSTR = (str(input('\nEscolha uma COLUNA\n[ A ] [ B ] [ C ]: '))).upper()[0]
      
      while colSTR not in 'ABC':
         colSTR = (str(input('Apenas as COLUNAS abaixo\n[ A ] [ B ] [ C ]: '))).upper()[0]
         
      match colSTR:
         case 'A':
            col = 0
         case 'B':
            col = 1
         case 'C':
            col = 2
            
      linhaSTR = (str(input(f'\nAgora escolha sua POSIÇÃO\n[ {lista2[col][0]} ]  [ {lista2[col][1]} ]  [ {lista2[col][2]} ]: ')[0]))
      
      a = str(lista2[col][0])
      b = str(lista2[col][1])
      c = str(lista2[col][2])
      
      while linhaSTR not in (f'{a}{b}{c}'):
         linhaSTR = (str(input(f'Apenas as POSIÇÕES abaixo\n[ {lista2[col][0]} ]  [ {lista2[col][1]} ]  [ {lista2[col][2]} ]: ')[0]))
         
      lin = int(linhaSTR) - 1
      
      print(f'\n{"":—^35}')
      print('Você escolheu...\n')
      sleep(0.800)

      velha(col, lin, marca)

      print('O computador escolheu...\n')
      sleep(1.5)
      
      if marca == 'X':
         marca2 = 'O'
      else:
         marca2 = 'X'

      col2 = 0
      match col2:
         case 0:
            lin2 = randint(0, 2)
         case 1:
            lin2 = randint(3, 4)
         case 2:
            lin2 = randint(5, 7)
            
      print(lin2)
            
      for pos in range(0, 3):
         if lista[col2][lin2] in 'XO':
               if lin2 == 2:
                  lin2 -= 2
               else:
                  lin2 += 1
               print('ocupado')
         if pos == 3:
               col2 = 1
               
      print(lin2, col2)
      
      velha(col2, lin2, marca2)
      
      print(lista, col2)

      resp = str(input('Quer continuar? [S] ou [N] ')).upper()[0]
      print(f'{"":—^35}')
      
      while resp not in 'SN':
         resp = str(input('Digite apenas [S] ou [N] ')).upper()[0]

      if resp == 'N':
         break
         
   print(f"\n{'Jogo da Velha encerrado':^30}")
   print(f"\n{'vitórias':^30}\n")
   print(f"{f'Você: {jog}    Computador: {pc}':^30}")


jogoX()