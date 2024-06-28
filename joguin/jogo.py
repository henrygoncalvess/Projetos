import pygame
from pygame.locals import *
from sys import exit

pygame.init()

# Nome da janela
pygame.display.set_caption('Joguin Python')

# tamanho da tela
tela = pygame.display.set_mode((640, 480))

# fonte e texto
font = pygame.font.SysFont('', 50)
texto = font.render('Helloooooooooooo World :D', 1, (255, 255, 255))

while True:
    for event in pygame.event.get():
        # se o evento for clicar no X da janela
        if event.type == QUIT:
            # fechar tudo
            pygame.quit()
            exit()
    
    # texto na posição inicial da tela
    tela.fill((0, 0, 0))
    tela.blit(texto, (0, 0))

    # sempre atualizar a tela
    pygame.display.update()