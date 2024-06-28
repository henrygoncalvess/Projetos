import pygame
from pygame.locals import *
from sys import exit

pygame.init()

# Nome da janela
pygame.display.set_caption('Joguin Python')

# tamanho da tela (altura, largura)
tela = pygame.display.set_mode((640, 480))
fps = pygame.time.Clock()

x = (640 / 2) - 30
y = (480 / 2) - 30

# fonte e texto
font = pygame.font.SysFont('', 50)
texto = font.render('Helloooooooooooo World :D', 1, (255, 255, 255))

while True:
    fps.tick(48)
    for event in pygame.event.get():
        # se o evento for clicar no X da janela
        if event.type == QUIT:
            # fechar tudo
            pygame.quit()
            exit()

    if pygame.key.get_pressed()[K_w]:
        y -= 3
    if pygame.key.get_pressed()[K_a]:
        x -= 3
    if pygame.key.get_pressed()[K_s]:
        y += 3
    if pygame.key.get_pressed()[K_d]:
        x += 3

    # texto na posição inicial da tela
    tela.fill((0, 0, 0))
    tela.blit(texto, (0, 0))

    # desenhando formas na tela
    # QUADRADO -> parâmetros (tela, cor, (posX, posY, largura, altura))
    pygame.draw.rect(tela, (255, 0, 0), (x, y, 30, 30))


    # # CÍRCULO -> parâmetros (tela, cor, (posX, posY), área)
    # pygame.draw.circle(tela, (0, 0, 255), (110, 60), 20)

    # # LINHA -> parâmetros (tela, cor, (inicioX, inicioY), (fimX, fimY), expessura)
    # pygame.draw.line(tela, (200, 200, 200), (140, 50), (140, 400), 10)
    # pygame.draw.line(tela, (100, 255, 255), (170, 60), (300, 60), 10)

    # sempre atualizar a tela
    pygame.display.update()