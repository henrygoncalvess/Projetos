var titulo = document.getElementById('titulo')
var parag = document.getElementById('parag')
var tam = document.getElementById('tam')
var tam2 = document.getElementById('tam2')
var voltar = document.getElementById('vol')
var avan = document.getElementById('avan')
var pos = 0
function voltar() {
    if (pos > 0) {
        pos -= 1
    } else {
        pos -= 0
    }
    switch (pos) {
        case 0:
            voltar.style.opacity = 0
            titulo.style.translate = '-400px'
            parag.style.translate = '-500px'

            titulo.style.opacity = 0
            parag.style.opacity = 0

            setTimeout(() => {
                titulo.style.translate = '400px'
                parag.style.translate = '400px'
            }, 600);

            setTimeout(() => {
                titulo.innerHTML = 'O que é "Binary Search" <br> ou <br> "Pesquisa Binária" ?'
                parag.innerHTML = 'Para entendermos melhor o que é e como funciona uma <strong>Pesquisa Binária</strong>, vamos começar analizando um algoritmo de <mark>Busca Sequencial</mark>'

                titulo.style.translate = '0px'
                parag.style.translate = '0px'

                titulo.style.opacity = 100
                parag.style.opacity = 100
            }, 900);
            break
    }
}

function trocar() {
    if (pos == 0 && pos <= 1) {
        pos += 1
    } else {
        pos += 0
    }
    switch (pos) {
        case 1:
            titulo.style.translate = '-400px'
            parag.style.translate = '-500px'

            titulo.style.opacity = 0
            parag.style.opacity = 0
            avan.style.opacity = 0

            tam.style.paddingBottom = '400px'

            setTimeout(() => {
                voltar.style.opacity = 100
                avan.style.opacity = 100
                tam.style.padding = '50px 10px 10px 10px'
            }, 600);

            setTimeout(() => {
                titulo.style.translate = '400px'
                parag.style.translate = '400px'
            }, 600);

            setTimeout(() => {
                titulo.innerHTML = 'Busca Sequencial'
                parag.innerHTML = ' Uma <mark>Busca Sequencial</mark> é o algoritmo mais simples de busca. <br> <br>  Ele percorre todos os valores dentro de uma lista comparando os índices com os valores dos elementos em cada uma das posições. Se a chave for igual a algum dos elementos, ela retorna a posição correspondente na lista <br> <br>  Número escolhido: 7 <br> <br>   <span class="cod">Lista = [<span id="a1" class="a">2</span>,<span id="a2" class="a">5</span>,<span id="a3" class="a">9</span>,<span id="a4" class="a">1</span>,<span id="a5" class="a">0</span>,<span id="b" class="a">7</span>, 8, 5, 10]</span> <br> <br> <span class="tela"> <strong><span id="d1">&bull;</span><span id="d2">&bull;</span><span id="d3">&bull;</span><span id="d4">&bull;</span></strong> <span id="pos">Valor encontrado<br>Posição: <mark style="background-color: rgb(25, 25, 25); color: yellow;">5</mark></span> </span>'

                titulo.style.translate = '0px'
                parag.style.translate = '0px'

                titulo.style.opacity = 100
                parag.style.opacity = 100
            }, 1100);
            break
        case 2:

            break
    }
}