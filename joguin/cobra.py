import pygame
from pygame.locals import *
from sys import exit
from random import randint

pygame.init()

# Nome da janela
pygame.display.set_caption('Cobrinha Python')

# tamanho da tela (altura, largura)
tela = pygame.display.set_mode((640, 480))
fps = pygame.time.Clock()

# fonte e texto
font = pygame.font.SysFont('', 40)

gameOver = pygame.font.SysFont('', 30)
mensagem = gameOver.render(f'Game Over...  Pressione a tecla [R] para reiniciar', 1, (0, 0, 0))
hitbox = mensagem.get_rect()

cobraX = (640 / 2) - 30
cobraY = (480 / 2) - 30
tam = 10
vel = 7
morreu = False

controleX = 10
controleY = 0

macaX = randint(20, 600)
macaY = randint(50, 430)

pontos = 0

listCobra = []

def crescer(l):
    for XY in l:
        pygame.draw.circle(tela, (0, 0, 255), (XY[0], XY[1] +10), 10)

def reiniciar():
    global pontos, macaX, macaY, morreu, tam, cobraX, cobraY, listCabeca, listCobra
    pontos = 0
    tam = 10
    macaX = randint(20, 600)
    macaY = randint(50, 430)   
    cobraX = (640 / 2) - 30
    cobraY = (480 / 2) - 30
    listCobra = []
    listCabeca = []
    morreu = False

def fim():
    while morreu:
        hitbox.center = (620//2, 480//2)
        tela.fill((225, 225, 225))
        tela.blit(mensagem, (hitbox))
        for event in pygame.event.get():
            if event.type == QUIT:
                pygame.quit()
                exit()
            if event.type == KEYDOWN:
                if event.key == K_r:
                    reiniciar()

        pygame.display.update()

while True:
    texto = font.render(f'pontos: {pontos}', 1, (0, 0, 0))
    fps.tick(30)
    for event in pygame.event.get():
        # se o evento for clicar no X da janela
        if event.type == QUIT:
            # fechar tudo
            pygame.quit()
            exit()
        if event.type == KEYDOWN:
            if event.key == K_w:
                if controleY == vel:
                    pass
                else:
                    controleY = -vel
                    controleX = 0
            if event.key == K_a:
                if controleX == vel:
                    pass
                else:
                    controleX = -vel
                    controleY = 0
            if event.key == K_s:
                if controleY == -vel:
                    pass
                else:
                    controleY = +vel
                    controleX = 0
            if event.key == K_d:
                if controleX == -vel:
                    pass
                else:
                    controleX = +vel
                    controleY = 0

    cobraX += controleX
    cobraY += controleY

    # texto na posição inicial da tela
    tela.fill((225, 225, 225))
    tela.blit(texto, (10, 10))

    # desenhando formas na tela
    # LINHA .line -> parâmetros (tela, cor, (inicioX, inicioY), (fimX, fimY), expessura)
    # CÍRCULO .circle -> parâmetros (tela, cor, (posX, posY), área)
    # QUADRADO .rect -> parâmetros (tela, cor, (posX, posY, largura, altura))
    eu = pygame.draw.circle(tela, (0, 0, 255), (cobraX, cobraY +10), 10)
    fruta = pygame.draw.circle(tela, (255, 0, 0), (macaX, macaY), 9)
    matinho = pygame.draw.line(tela, (0, 230, 0), (macaX - 5, macaY - 12), (macaX -2, macaY - 5), 6)
    matinho = pygame.draw.line(tela, (0, 230, 0), (macaX +5, macaY -12), (macaX, macaY -5), 6)
    pygame.draw.line(tela, (0, 0, 0), (2, 0), (2, 480), 5)
    pygame.draw.line(tela, (0, 0, 0), (637, 0), (637, 480), 5)
    pygame.draw.line(tela, (0, 0, 0), (0, 2), (637, 2), 5)
    pygame.draw.line(tela, (0, 0, 0), (0, 477), (637, 477), 5)

    if eu.colliderect(fruta):
        macaX = randint(20, 600)
        macaY = randint(50, 430)
        pontos += 1
        tam += 5

    listCabeca = []
    listCabeca.append(cobraX)
    listCabeca.append(cobraY)

    listCobra.append(listCabeca)
    crescer(listCobra)

    if listCobra.count(listCabeca) > 1:
        morreu = True
        fim()

    if len(listCobra) > tam:
        del listCobra[0]

    if cobraX > 630:
        morreu = True
        fim()
    if cobraY > 470:
        morreu = True
        fim()
    else:
        if cobraX < 0:
            morreu = True
            fim()
        if cobraY < 0:
            morreu = True
            fim()

    # sempre atualizar a tela
    pygame.display.update()