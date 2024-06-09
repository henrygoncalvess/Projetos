var titulo = document.getElementById('titulo')
var parag = document.getElementById('parag')
var tam2 = document.getElementById('tam2')
var ant = document.getElementById('vol')
var avan = document.getElementById('avan')
var tela = document.getElementById('ind')
var pos = 0

// quando clicar em AVANÇAR
function trocar() {
    animar()

    // se for o começo, página 2
    if (pos == 0) {
        pos += 2
    }
    else { pos += 1 }

    // posição == página
    switch (pos) {

        case 2:
            pagina2()
            break

        case 3:
            pagina3()
            break

        case 4:
            pagina4()
            break

        case 5:
            pagina5()
            break

        case 6:
            pagina6()
            break

        // não deixa o conteúdo desaparecer e sair do lugar
        case 7:
            titulo.style.translate = '0px'
            parag.style.translate = '0px'
            titulo.style.opacity = 100
            parag.style.opacity = 100
            ant.style.opacity = 100

            setTimeout(() => {
                titulo.style.translate = '0px'
                parag.style.translate = '0px'
            }, 600);

            setTimeout(() => {
                titulo.style.translate = '0px'
                parag.style.translate = '0px'
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

    // posição == página
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
            break

        case 1:
            // some com o botão de voltar
            avan.style.opacity = 100
            pagina1()
            break

        case 2:
            pagina2()
            break

        case 3:
            pagina3()
            break

        case 4:
            pagina4()
            break

        case 5:
            pagina5()
            break
    }
}

// PÁGINAS / CONTEÚDO E ANIMAÇÕES

// animação de sumir e aparecer
function animar(){

    // move o conteúdo pra esquerda <- e soma com os botões
    titulo.style.translate = '-100px'
    parag.style.translate = '-100px'
    titulo.style.opacity = 0
    parag.style.opacity = 0
    ant.style.opacity = 0
    avan.style.opacity = 0
    
    // move o conteúdo pra direita -> pra ele aparecer
    setTimeout(() => {
        titulo.style.translate = '85px'
        parag.style.translate = '85px'
    }, 600);

    // aparece com o conteúdo e os botões
    setTimeout(() => {
        titulo.style.translate = '0px'
        parag.style.translate = '0px'

        titulo.style.opacity = 100
        parag.style.opacity = 100

        ant.style.opacity = 100
        avan.style.opacity = 100
    }, 900);
}

// PÁGINAS

function pagina1(){
    setTimeout(() => {
        ant.style.opacity = 0
        avan.style.opacity = 100
        titulo.innerHTML = `O que é <strong>Binary Search</strong> <br> ou <br> <strong>Pesquisa Binária?</strong>`
        parag.innerHTML = 'Para entendermos melhor o que é e como funciona uma <strong>Pesquisa Binária</strong>, vamos começar analizando um algoritmo de <mark>Busca Sequencial</mark>'
    }, 900);
}

function pagina2(){
    setTimeout(() => {
        titulo.innerHTML = `<strong>Busca Sequencial</strong>`
        parag.innerHTML = `
        <p>
        Uma <strong>Busca Sequencial</strong> é o algoritmo mais simples de busca. <br> <br> Ele percorre do <strong>início ao fim</strong> de um Vetor, comparando a posição/índice com o valor da <mark>chave</mark>.
        <br>
        <br>
        Se a posição for igual o valor da <mark>chave</mark>, a busca retorna a posição correspondente.
        <br>
        <br>
        Se a <mark>chave</mark> não for encontrada a posição retornada é " <strong>-1</strong> ". Veja o exemplo a seguir...
        </p>`
    }, 900);
}

function pagina3(){
    setTimeout(() => {
        titulo.innerHTML = `<strong>Exemplo</strong>`
        parag.innerHTML = `
        <p>
        <p id="chave">
        <mark>Chave:</mark> <strong>7</strong>
        </p>
        <br>
        <code><span class="cod">
        &nbsp; &nbsp;<strong>Posição</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <strong>Vetor</strong>
        <br>
         &nbsp; &nbsp; &nbsp; <strong style="color: rgba(68, 0, 170, 0.692);">0</strong>  &nbsp; &nbsp; &nbsp; &nbsp;-> &nbsp; &nbsp; &nbsp; &nbsp;<span id="a1" class="a">2</span>
        <br>
         &nbsp; &nbsp; &nbsp; <strong style="color: rgba(68, 0, 170, 0.692);">1</strong>  &nbsp; &nbsp; &nbsp; &nbsp;-> &nbsp; &nbsp; &nbsp; &nbsp;<span id="a2" class="a">5</span>
        <br>
         &nbsp; &nbsp; &nbsp; <strong style="color: rgba(68, 0, 170, 0.692);">2</strong>  &nbsp; &nbsp; &nbsp; &nbsp;-> &nbsp; &nbsp; &nbsp; &nbsp;<span id="a3" class="a">9</span>
        <br>
         &nbsp; &nbsp; &nbsp; <strong style="color: rgba(68, 0, 170, 0.692);">3</strong>  &nbsp; &nbsp; &nbsp; &nbsp;-> &nbsp; &nbsp; &nbsp; &nbsp;<span id="a4" class="a">1</span>
        <br>
         &nbsp; &nbsp; &nbsp; <strong style="color: rgba(68, 0, 170, 0.692);">4</strong>  &nbsp; &nbsp; &nbsp; &nbsp;-> &nbsp; &nbsp; &nbsp; &nbsp;<span id="a5" class="a">0</span>
        <br>
         &nbsp; &nbsp; &nbsp; <strong style="color: rgba(68, 0, 170, 0.692);">5</strong>  &nbsp; &nbsp; &nbsp; &nbsp;-> &nbsp; &nbsp; &nbsp; &nbsp;<span id="b" class="a">7</span>
        <br>
         &nbsp; &nbsp; &nbsp; <strong style="color: rgba(68, 0, 170, 0.692);">6</strong>  &nbsp; &nbsp; &nbsp; &nbsp;-> &nbsp; &nbsp; &nbsp; &nbsp;<span id="c" class="a">3</span>
        </span></code>
        <br>
        <span class="tela"><strong><span id="d1">&bull;</span><span id="d2">&bull;</span><span id="d3">&bull;</span><span id="d4">&bull;</span></strong>
        <span id="pos">
        Valor encontrado<br>
        Posição: <a>5</a>
        </span>
        </p>`
    }, 900);
}

function pagina4(){
    setTimeout(() => {
        titulo.innerHTML = `<strong>Desvantagem</strong>`
        parag.innerHTML = `
        <p>
            A partir do momento em que nós temos muitos dados para manipular, a busca sequencial deixa de ser útil.
            <br>
            <br>
            Imagine que o valor que você procura é o último de um vetor com <strong>1000 elementos</strong>...
            <br>
            <br>
            O Algoritmo vai comparar cada uma das posições... Teste por teste.... e ainda há chances desse valor não existir no vetor.
            <br>
            <br>
            Ou seja, o processo do algoritmo de busca sequencial é <strong>muito demorado</strong>.
        </p>`
    }, 900)
}

function pagina5(){
    setTimeout(() => {
        titulo.innerHTML = `<strong>Binary Search</strong>`
        parag.innerHTML = `
        <p>
            E é aí que entra a <strong>Pesquisa Binária.</strong> No próximo exemplo você vai ver o poder de busca desse algoritmo... Sem contar que ele é executado pouquíssimas vezes.
            <br>
            <br>
            Preste atenção na explicação seguinte...
        </p>`
    }, 900)
}

function pagina6(){
    setTimeout(() => {
        // some com o botão de avançar
        avan.style.opacity = 0
        
        titulo.innerHTML = `<strong>Como a Pesquisa Binária funciona</strong>`
        parag.innerHTML = `
        <p>
            <strong>Detalhe importante :</strong>
            <br>
            <br>
            Para utilizar esse algoritmo o seu vetor precisa estar <strong>ORDENADO</strong> (pode estar em ordem crescente ou decrescente)
            <br>
            <br>
            Isso porque o algoritmo começa sempre na posição do <mark>meio</mark>. A partir dessa posição ele faz a seguinte verificação:
            <span class="tela" style="padding: 1px;"></span>
            <br>
            <strong>O valor dessa posição é igual a chave?</strong>
            <br>
            Se for, retorna a posição correspondente
            <br>
            <br>
            Se não for --> outra verificação :
            <br>
            <span class="tela" style="padding: 1px;"></span>
            <br>
            <strong>O valor dessa posição é maior ou menor que a chave?</strong>
            <br>
            se for maior --> agora a busca verifica da posição atual pra cima
            <br>
            <br>
            se for menor --> agora a busca verifica da posição atual pra baixo  
        </p>`
    }, 900)
}