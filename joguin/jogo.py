import pygame
from pygame.locals import *
from sys import exit
from random import randint

pygame.init()

# Nome da janela
pygame.display.set_caption('Joguin Python')

# tamanho da tela (altura, largura)
tela = pygame.display.set_mode((640, 480))
fps = pygame.time.Clock()

x = (640 / 2) - 30
y = (480 / 2) - 30

cubinx = randint(40, 600)
cubiny = randint(10, 470)

pontos = 0

# fonte e texto
font = pygame.font.SysFont('', 40)

while True:
    texto = font.render(f'pontos: {pontos}', 1, (255, 255, 255))
    fps.tick(30)
    for event in pygame.event.get():
        # se o evento for clicar no X da janela
        if event.type == QUIT:
            # fechar tudo
            pygame.quit()
            exit()

    if pygame.key.get_pressed()[K_w]:
        y -= 10
    if pygame.key.get_pressed()[K_a]:
        x -= 10
    if pygame.key.get_pressed()[K_s]:
        y += 10
    if pygame.key.get_pressed()[K_d]:
        x += 10

    # texto na posição inicial da tela
    tela.fill((0, 0, 0))
    tela.blit(texto, (0, 0))

    # desenhando formas na tela
    # LINHA .line -> parâmetros (tela, cor, (inicioX, inicioY), (fimX, fimY), expessura)
    # CÍRCULO .circle -> parâmetros (tela, cor, (posX, posY), área)
    # QUADRADO .rect -> parâmetros (tela, cor, (posX, posY, largura, altura))
    eu = pygame.draw.rect(tela, (0, 255, 0), (x, y, 20, 20))
    cubin = pygame.draw.rect(tela, (255, 0, 0), (cubinx, cubiny, 18, 18))

    if eu.colliderect(cubin):
        cubinx = randint(40, 600)
        cubiny = randint(10, 470)
        pontos += 1

    # sempre atualizar a tela
    pygame.display.update()