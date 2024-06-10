var titulo = document.getElementById('titulo')
var parag = document.getElementById('parag')
var tam2 = document.getElementById('tam2')
var ant = document.getElementById('vol')
var avan = document.getElementById('avan')
var tela = document.getElementById('ind')
var resp1 = document.getElementById('resposta1')
var resp2 = document.getElementById('resposta2')
var resp3 = document.getElementById('resposta3')
var pos = 0
if (pos == 0){
    avan.style.display = 'none'
    ant.style.display = 'none'
}

function verificar(resposta){
    animar()
    
    switch (resposta) {
        case 1:
            pos = 10
            setTimeout(() => {
                ant.style.opacity = 100
                avan.style.display = 'none'
                titulo.innerHTML = `Em andamento...`
                parag.innerHTML = ''
            }, 900);
            break
            
        case 2:
            pos = 1
            pagina1()
            break
        
        case 3:
            pos = 10
            setTimeout(() => {
                ant.style.opacity = 100
                avan.style.display = 'none'
                titulo.innerHTML = `Em andamento...`
                parag.innerHTML = ''
            }, 900);
            break
    }
}

// quando clicar em AVANÇAR
function trocar() {
    animar()

    if (pos == 1) pos = 2

    // posição == página
    switch (pos) {

        case 2:
            setTimeout(() => {
                pos = 3
            }, 900);
            pagina2()
            break

        case 3:
            setTimeout(() => {
                pos = 4
            }, 900);
            pagina3()
            break

        case 4:
            setTimeout(() => {
                pos = 5
            }, 900);
            pagina4()
            break

        case 5:
            setTimeout(() => {
                pos = 6
            }, 900);
            pagina5()
            break

        case 6:
            setTimeout(() => {
                pos = 7
            }, 900);
            pagina6()
            break

        case 7:
            setTimeout(() => {
                pos = 8
            }, 900);
            pagina7()
            break

        // não deixa o conteúdo desaparecer e sair do lugar
        case 8:
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
            inicio()
            break

        case 1:
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

        case 6:
            pagina6()
            break
            
        case 9:
            inicio()
            pos = 0
            break
    }
}

// PÁGINAS / CONTEÚDO E ANIMAÇÕES

// animação de sumir e aparecer
function animar(){

    // move o conteúdo pra esquerda <- e soma com os botões
    resp1.style.translate = '-100px'
    resp2.style.translate = '-100px'
    resp3.style.translate = '-100px'
    titulo.style.translate = '-100px'
    parag.style.translate = '-100px'
    resp1.style.opacity = 0
    resp2.style.opacity = 0
    resp3.style.opacity = 0
    titulo.style.opacity = 0
    parag.style.opacity = 0
    ant.style.opacity = 0
    avan.style.opacity = 0

    // move o conteúdo pra direita -> pra ele aparecer
    setTimeout(() => {
        resp1.style.translate = '85px'
        resp2.style.translate = '85px'
        resp3.style.translate = '85px'
        titulo.style.translate = '85px'
        parag.style.translate = '85px'
    }, 600);

    // aparece com o conteúdo e os botões
    setTimeout(() => {
        resp1.style.display = 'none'
        resp2.style.display = 'none'
        resp3.style.display = 'none'
        resp1.style.translate = '0px'
        resp2.style.translate = '0px'
        resp3.style.translate = '0px'
        titulo.style.translate = '0px'
        parag.style.translate = '0px'

        titulo.style.opacity = 100
        parag.style.opacity = 100

        ant.style.opacity = 100
        avan.style.opacity = 100
        ant.style.display = 'block'
        avan.style.display = 'block'
    }, 900);
}

// PÁGINAS

function inicio(){
    setTimeout(() => {
        titulo.innerHTML = `<h1 id="titulo"></h1>`
        parag.innerHTML = `<p id="parag">
            Olá Programador! Hoje você vai aprender o que é uma <strong>"Binary Search"</strong> e como ela funciona.
            <br>
            <br>
            mas antes de começarmos...
            <br>
            <br>
            Você sabe o que é um <strong>"Algoritmo"?</strong>
            <br>
            <br>
            É importante que você selecione qual é o seu nível de conhecimento abaixo, porque você vai conseguir aprender mesmo que não entenda de programação.
            <br>
            <br>
        </p>`
        ant.style.display = 'none'
        avan.style.display = 'none'
        resp1.style.display = 'block'
        resp2.style.display = 'block'
        resp3.style.display = 'block'
        resp1.style.opacity = 100
        resp2.style.opacity = 100
        resp3.style.opacity = 100
    }, 900);
}

function pagina1(){
    setTimeout(() => {
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
            <span class="pag3">Vetor</span> &nbsp;
            <span class="pag3">2</span> 
            <span class="pag3">5</span> 
            <span class="pag3">9</span> 
            <span class="pag3">1</span> 
            <span class="pag3">0</span> 
            <span class="pag3">7</span> 
            <span class="pag3">3</span>
            <br>
            <span id="PosPag3" class="pag3">Posição </span>
            <span id="PosPag3" class="pag3">0</span>
            <span id="PosPag3" class="pag3">1</span>
            <span id="PosPag3" class="pag3">2</span>
            <span id="PosPag3" class="pag3">3</span>
            <span id="PosPag3" class="pag3">4</span>
            <span id="PosPag3" class="pag3">5</span>
            <span id="PosPag3" class="pag3">6</span>
            <br>
            </span></code>
            <br>
            <span class="tela">
            <strong>
            <div id="ponto"></div>
            <div id="ponto"></div>
            <div id="ponto"></div>
            <div id="ponto"></div>
            </strong>
            <span id="pos">
            Valor encontrado
            <br>
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
            se SIM --> retorna a posição correspondente
            <br>
            <span class="tela" style="padding: 1px;"></span>
            <br>
            se NÃO --> outra verificação :
            <br>
            <br>
            <strong>O valor dessa posição é MAIOR ou MENOR que a chave?</strong>
            <br>
            se for MAIOR --> agora a busca verifica da posição atual pra <strong>+</strong>
            <br>
            <br>
            se for MENOR --> agora a busca verifica da posição atual pra <strong>-</strong>
        </p>`
    }, 900)
}

function pagina7(){
    setTimeout(() => {
        // some com o botão de avançar
        avan.style.opacity = 0

        // 10 13 15 18 19 21 23 27
        //  0  1  2  3  4  5  6  7

        titulo.innerHTML = `<strong>Exemplo</strong>`
        parag.innerHTML = `
        <p>
            <p id="chave">
                <mark>Chave:</mark> <strong>21</strong>
            </p>
            <br>
            <br>
            Agora o nosso vetor <mark>ORDENADO</mark> tem <span id="cor" class="pag7">8 posições</span>, com os valores :
            <br>
            <br>
        <p class="posicao">
            <span id="numpag7" class="pag7">11</span>
            <span id="numpag7" class="pag7">13</span>
            <span id="numpag7" class="pag7">15</span>
            <span id="numpag7" class="pag7">18</span>
            <span id="numpag7" class="pag7">19</span>
            <span id="numpag7" class="pag7">21</span>
            <span id="numpag7" class="pag7">23</span>
            <span id="numpag7" class="pag7">27</span>
        </p>
        <p class="posicao">
            <span id="PosPag7" class="pag7">&nbsp;0</span> &nbsp;

            <span id="PosPag7" class="pag7">1</span>&nbsp;&nbsp;&nbsp;&nbsp;

            <span id="PosPag7" class="pag7">2</span> &nbsp;&nbsp;&nbsp;

            <span id="PosPag7" class="pag7">3</span>&nbsp;&nbsp;&nbsp;

            <span id="PosPag7" class="pag7">4</span> &nbsp;&nbsp;&nbsp;

            <span id="PosPag7" class="pag7">5</span> &nbsp;&nbsp;
            
            <span id="PosPag7" class="pag7">6</span> &nbsp;

            <span id="PosPag7" class="pag7">7</span>
        </p>
        </p>`
    }, 900)
}