// import * as conteudo from './conteudo.js';

var titulo = document.getElementById('titulo')
var parag = document.getElementById('parag')
var tam2 = document.getElementById('tam2')
var ant = document.getElementById('vol')
var avan = document.getElementById('avan')
var tela = document.getElementById('ind')
var pos = 0

function pag1(){
    setTimeout(() => {
        ant.style.opacity = 0
        avan.style.opacity = 100
        titulo.innerHTML = `O que é "<strong>Binary Search</strong>" <br> ou <br> "<strong>Pesquisa Binária</strong>"?`
        parag.innerHTML = 'Para entendermos melhor o que é e como funciona uma <strong>Pesquisa Binária</strong>, vamos começar analizando um algoritmo de <mark>Busca Sequencial</mark>'
    }, 900);
}

// animação de sumir e aparecer
function animar(){
    titulo.style.translate = '-400px'
    parag.style.translate = '-400px'
    titulo.style.opacity = 0
    parag.style.opacity = 0
    ant.style.opacity = 0
    avan.style.opacity = 0
    
    setTimeout(() => {
        titulo.style.translate = '400px'
        parag.style.translate = '400px'
        tam2.style.transition = '0ms'
    }, 600);
    
    setTimeout(() => {
        tam2.style.padding = '20px'
        titulo.style.translate = '0px'
        parag.style.translate = '0px'

        titulo.style.opacity = 100
        parag.style.opacity = 100

        ant.style.opacity = 100
        avan.style.opacity = 100
        tam2.style.transition = '800ms'
    }, 900);
}

// quando clicar em AVANÇAR
function trocar() {
    animar()

    // se for o começo, página 2
    if (pos == 0) {
        pos += 2
    }
    else { pos += 1 }

    // se a posição for...
    switch (pos) {

        // página 2
        case 2:
            setTimeout(() => {
                titulo.innerHTML = `<strong>Busca Sequencial</strong>`
                parag.innerHTML = `
        <p>
        Uma <strong>Busca Sequencial</strong> é o algoritmo mais simples de busca. <br> <br> Ele percorre todos os valores dentro de uma lista comparando as posições com os valores dos elementos.
        <br>
        Se a <mark>chave</mark> for igual a algum dos valores, a busca retorna a posição correspondente na lista (Retorna -1 se não encontrar)
        <br>
        <br>
        <mark>Chave:</mark> <strong>7</strong>
        <br>
        <br>
        <pre>
<span class="cod">lista = [<span id="a1" class="a">2</span>,<span id="a2" class="a">5</span>,<span id="a3" class="a">9</span>,<span id="a4" class="a">1</span>,<span id="a5" class="a">0</span>,<span id="b" class="a">7</span>,3 ]</span>
        </pre>
        <br>
        <span class="tela"><strong><span id="d1">&bull;</span><span id="d2">&bull;</span><span
                    id="d3">&bull;</span><span id="d4">&bull;</span></strong><span id="pos">Valor encontrado
                <br>
                Posição: <a>5</a></span>
        </p>`
            }, 900);
            break

        // página 3
        case 3:
            setTimeout(() => {
                // some com o botão de avançar
                avan.style.opacity = 0
                
                titulo.innerHTML = `<strong>Desvantagem</strong>`
                parag.innerHTML = `
        <p>
            A partir do momento em que nós temos muitos dados para manipular, a busca sequencial já deixa de ser tão útil assim.
            <br>
            <br>
            Imagine que o valor que você procura é o último valor de uma lista com <strong>1000 elementos</strong>... O Algoritmo vai ser executado muitas vezes, e ainda há chances desse valor não existir na lista.
            <br>
            <br>
            
        </p>
                `
            }, 1000)
            break

        // final
        case 4:
            // não deixa o conteúdo desaparecer e sair do lugar
            titulo.style.translate = '0px'
            parag.style.translate = '0px'
            titulo.style.opacity = 100
            parag.style.opacity = 100
            ant.style.opacity = 100

            setTimeout(() => {
                titulo.style.translate = '0px'
                parag.style.translate = '0px'
                tam2.style.transition = '0ms'
            }, 600);

            setTimeout(() => {
                titulo.style.translate = '0px'
                parag.style.translate = '0px'
                tam2.style.transition = '0ms'
                avan.style.opacity = 0
            }, 900);
            pos -= 1
            break
    }
}

// quando clicar em VOLTAR
function voltar() {
    animar()

    // se a posição não for o início, volta uma página
    if (pos > 0) {
        pos -= 1
    }
    else { pos -= 0 }

    // se a posição for...
    switch (pos) {

        // se for o início
        // não deixa o conteúdo desaparecer e sair do lugar
        case 0:
            titulo.style.opacity = 100
            parag.style.opacity = 100
            avan.style.opacity = 100
            titulo.style.translate = '0px'
            parag.style.translate = '0px'

            setTimeout(() => {
                titulo.style.translate = '0px'
                parag.style.translate = '0px'
            }, 600);

            setTimeout(() => {
                ant.style.opacity = 0
            }, 900);

            titulo.innerHTML = `O que é "<strong>Binary Search</strong>" <br> ou <br> "<strong>Pesquisa Binária</strong>"?`
            parag.innerHTML = 'Para entendermos melhor o que é e como funciona uma <strong>Pesquisa Binária</strong>, vamos começar analizando um algoritmo de <mark>Busca Sequencial</mark>'
            break

        // página 1
        case 1:
            // some com o botão de voltar
            avan.style.opacity = 100
            pag1()
            break

        // página 2
        case 2:
            // conteúdo
            setTimeout(() => {
                avan.style.opacity = 100
                titulo.innerHTML = `<strong>Busca Sequencial</strong>`
                parag.innerHTML = `
        <p>
            Uma <strong>Busca Sequencial</strong> é o algoritmo mais simples de busca. <br> <br> Ele percorre todos os valores dentro de uma lista comparando as posições com os valores dos elementos.
            <br>
            Se a <mark>chave</mark> for igual a algum dos valores, a busca retorna a posição correspondente na lista (Retorna -1 se não encontrar)
            <br>
            <br>
            <mark>Chave:</mark> <strong>7</strong>
            <br>
            <br>
            <pre>
<span class="cod">lista = [<span id="a1" class="a">2</span>,<span id="a2" class="a">5</span>,<span id="a3" class="a">9</span>,<span id="a4" class="a">1</span>,<span id="a5" class="a">0</span>,<span id="b" class="a">7</span>,3 ]</span>
            </pre>
            <br>
            <span class="tela"><strong><span id="d1">&bull;</span><span id="d2">&bull;</span><span
                        id="d3">&bull;</span><span id="d4">&bull;</span></strong><span id="pos">Valor encontrado
                    <br>
                    Posição: <a>5</a></span>
        </p>`
            }, 900);
            break
    }
}