import pygame
from pygame.locals import *
from sys import exit

pygame.init()

pygame.display.set_caption('Cobrinha Python')

tela = pygame.display.set_mode((640, 480))
fps = pygame.time.Clock()

font = pygame.font.SysFont('', 40)

while True:
    tela.fill((0, 0, 0))
    tela.blit(font.render('pedro', 1, (255,255,255)), (0,0))
    fps.tick(30)
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            exit()

    # pygame.draw

    pygame.display.update()