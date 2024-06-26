import pygame
from pygame.locals import *
from sys import exit

pygame.init()

pygame.display.set_caption('Cobrinha Python')

tela = pygame.display.set_mode((640, 480))
fps = pygame.time.Clock()

meioX = (640//2) - 20
meioY = (480//2) - 20

font = pygame.font.SysFont('', 40)

while True:
    tela.fill((0, 0, 0))
    tela.blit(font.render('pedro', 1, (255,255,255)), (0,0))
    fps.tick(30)
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            exit()

    pygame.draw.rect(tela, (255, 0, 127), (meioX, meioY, 20, 20))

    pygame.display.update()