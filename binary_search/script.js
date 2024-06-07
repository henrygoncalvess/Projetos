var titulo = document.getElementById('titulo')
var parag = document.getElementById('parag')
var tam2 = document.getElementById('tam2')
var ant = document.getElementById('vol')
var avan = document.getElementById('avan')
var tela = document.getElementById('ind')
var pos = 0
var cont = 0
var tempo = 3100

function trocar() {
    if (pos == 0) {
        pos += 2
    } else { pos += 0 }
    switch (pos) {
        case 2:
            titulo.style.translate = '-400px'
            parag.style.translate = '-400px'

            titulo.style.opacity = 0
            parag.style.opacity = 0
            avan.style.opacity = 0

            tam2.style.padding = '212px 0px'

            setTimeout(() => {
                titulo.style.translate = '400px'
                parag.style.translate = '400px'
                tam2.style.transition = '0ms'
            }, 600);

            setTimeout(() => {
                tam2.style.padding = '20px'
            }, 1100);

            setTimeout(() => {
                titulo.innerHTML = `Busca Sequencial`
                parag.innerHTML = `
        <p>
            Uma <strong>Busca Sequencial</strong> é o algoritmo mais simples de busca. <br> <br> Ele percorre todos os valores dentro de uma lista comparando os índices/posições(0,1,2...) com os valores dos elementos em cada uma das posições.
            <br>
            Se a <mark>chave</mark> for igual a algum dos valores, a busca retorna a posição correspondente na lista
            <br>
            <br>
            <mark>Chave:</mark> <strong>7</strong>
            <br>
            <br>
            <pre>
<span class="cod">lista = [<span id="a1" class="a">2</span>,<span id="a2" class="a">5</span>,<span id="a3" class="a">9</span>,<span id="a4" class="a">1</span>,<span id="a5" class="a">0</span>,<span id="b" class="a">7</span>,3]</span>
            </pre>
            <br>
            <span class="tela"><strong><span id="d1">&bull;</span><span id="d2">&bull;</span><span
                        id="d3">&bull;</span><span id="d4">&bull;</span></strong><span id="pos">Valor encontrado
                    <br>
                    Posição: <mark style="background-color: rgb(25, 25, 25); color: yellow;">5</mark></span>
        </p>`

                titulo.style.translate = '0px'
                parag.style.translate = '0px'

                titulo.style.opacity = 100
                parag.style.opacity = 100
            }, 1100);

            setTimeout(() => {
                ant.style.opacity = 100
                avan.style.opacity = 100
                tam2.style.transition = '800ms'
            }, 1200);
            break
        default:

            break
    }
}

function voltar() {
    if (pos == 2 || pos == 1) {
        pos -= 1
    } else { pos -= 0 }
    switch (pos) {
        case 0:
            titulo.innerHTML = `O que é "<strong>Binary Search</strong>" <br> ou <br> "<strong>Pesquisa Binária</strong>"?`
            parag.innerHTML = 'Para entendermos melhor o que é e como funciona uma <strong>Pesquisa Binária</strong>, vamos começar analizando um algoritmo de <mark>Busca Sequencial</mark>'
            break
        case 1:
            ant.style.opacity = 0
            titulo.style.translate = '-400px'
            parag.style.translate = '-400px'

            titulo.style.opacity = 0
            parag.style.opacity = 0

            setTimeout(() => {
                titulo.style.translate = '400px'
                parag.style.translate = '400px'
            }, 600);

            setTimeout(() => {
                titulo.innerHTML = `O que é "Binary Search" <br> ou <br> "Pesquisa Binária"?`
                parag.innerHTML = 'Para entendermos melhor o que é e como funciona uma <strong>Pesquisa Binária</strong>, vamos começar analizando um algoritmo de <mark>Busca Sequencial</mark>'

                titulo.style.translate = '0px'
                parag.style.translate = '0px'

                titulo.style.opacity = 100
                parag.style.opacity = 100
            }, 900);
            break
    }
}