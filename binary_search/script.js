var titulo = document.getElementById('titulo')
var parag = document.getElementById('parag')
var tam2 = document.getElementById('tam2')
var ant = document.getElementById('vol')
var avan = document.getElementById('avan')
var resp1 = document.getElementById('resposta1')
var resp2 = document.getElementById('resposta2')
var pos2 = document.getElementById('pos2')
var pos = 0
if (pos == 0){
    avan.style.display = 'none'
    ant.style.display = 'none'
}

function verificar(resposta){
    animar()

    switch (resposta) {
        case 1:
            pos = 21
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

    }
}

// quando clicar em AVANÇAR
function trocar() {
    animar()

    if (pos == 1) pos = 11

    // posição == página
    switch (pos) {

        case 2:
            pagina2()
            setTimeout(() => {
                pos = 3
            }, 900);
            break

        case 3:
            pagina3()
            setTimeout(() => {
                pos = 4
            }, 900);
            break

        case 4:
            pagina4()
            setTimeout(() => {
                pos = 5
            }, 900);
            break

        case 5:
            pagina5()
            setTimeout(() => {
                pos = 6
            }, 900);
            break

        case 6:
            pagina6()
            setTimeout(() => {
                pos = 7
            }, 900);
            break

        case 7:
            pagina7()
            setTimeout(() => {
                pos = 8
            }, 900);
            break

        case 8:
            pagina8()
            setTimeout(() => {
                pos = 9
            }, 900);
            break

        case 9:
            pagina9()
            setTimeout(() => {
                pos = 10
            }, 900);
            break

        case 10:
            pagina10()
            setTimeout(() => {
                pos = 11
            }, 900);
            break

        case 11:
            pagina11()
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
            pagina1()
            break

        case 3:
            pagina2()
            break

        case 4:
            pagina3()
            break

        case 5:
            pagina4()
            break

        case 6:
            pagina5()
            break

        case 7:
            pagina6()
            break

        case 8:
            pagina7()
            break

        case 9:
            pagina8()
            break

        case 10:
            pagina9()
            break

        case 11:
            pagina10()
            break

        case 20:
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
    titulo.style.translate = '-100px'
    parag.style.translate = '-100px'
    resp1.style.opacity = 0
    resp2.style.opacity = 0
    titulo.style.opacity = 0
    parag.style.opacity = 0
    ant.style.opacity = 0
    avan.style.opacity = 0

    // move o conteúdo pra direita -> pra ele aparecer
    setTimeout(() => {
        resp1.style.translate = '85px'
        resp2.style.translate = '85px'
        titulo.style.translate = '85px'
        parag.style.translate = '85px'
    }, 600);

    // aparece com o conteúdo e os botões
    setTimeout(() => {
        resp1.style.display = 'none'
        resp2.style.display = 'none'
        resp1.style.translate = '0px'
        resp2.style.translate = '0px'
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
        resp1.style.opacity = 100
        resp2.style.opacity = 100
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
            Para utilizar esse algoritmo o seu vetor precisa estar <strong>ORDENADO</strong>
            <br>
            <br>
            Chave de exemplo: <strong>6</strong>
            <br>
            <br>
            valores : <mark>1</mark> 2 3 <mark style="background: rgba(0, 174, 255, 0.767);">4</mark> 5 6 <mark>7</mark>
            <br>
            <br>
            Isso porque o algoritmo procura o <mark>INÍCIO</mark> e o <mark>FIM</mark> para começar a verificar sempre pelo <mark style="background: rgba(0, 174, 255, 0.767);">MEIO</mark>. A partir do <mark style="background: rgba(0, 174, 255, 0.767);">meio</mark> ele faz a seguinte verificação:
            <br>
            <br>
            <span class="tela" style="padding: 1px;"></span>
            <br>
            <strong>O valor do <mark style="background: rgba(0, 174, 255, 0.767);">meio (4)</mark> é MENOR que a chave (6)?</strong>
            <br>
            <br>
            <strong>se for MENOR a chave só pode ser um valor acima disso...</strong> Então o algoritmo <mark style="background: rgba(0, 174, 255, 0.767);">elimina o meio e tudo abaixo dele</mark>, e continua a busca com os valores que sobraram.
            <br>
            5 6 7
            <br>
            <br>
            <span class="tela" style="padding: 1px;"></span>
            <br>
            <strong>O valor do <mark style="background: rgba(0, 174, 255, 0.767);">meio</mark> é MAIOR que a chave?</strong>
            <br>
            <br>
            <strong>se for MAIOR a chave só pode ser um valor abaixo disso...</strong> Então o algoritmo <mark style="background: rgba(0, 174, 255, 0.767);">elimina o meio e tudo abaixo dele</mark>, e continua a busca com os valores que sobraram.
            <br>
            <br>
            <span class="tela" style="padding: 1px;"></span>
            <br>
            se não for maior, nem menor (chave encontrada) --> retorna o meio
            <br>
            <br>
            Veja o exemplo a seguir...
        </p>`
    }, 900)
}

function pagina7(){
    setTimeout(() => {
        titulo.innerHTML = `<strong>Exemplo</strong>`
        parag.innerHTML = `
        <p>
            <p id="chave">
                <mark>Chave:</mark> <strong>21</strong>
            </p>
            <br>
            <p>
            Agora o nosso vetor <strong>ORDENADO</strong> tem <span id="cor" class="pag7">8 posições</span>, com os valores :
            </p>
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
        <p>
            <br>
            Como vimos na explicação anterior, nosso algoritmo procura as posições :
            <br>
            <mark>INÍCIO</mark> = <span id="cor" class="pag7">0</span>
            <br>
            <mark>FIM</mark> = <span id="cor" class="pag7">7</span>
            <br>
            <br>
            Então... somando as posições &nbsp; 0 + 7 = 7
            <br>
            <br>
            
            Nosso meio = &nbsp; 7 &nbsp;&divide; &nbsp;2 &nbsp;
            <br>
            <br>
            <mark style="background: rgba(0, 174, 255, 0.767);">MEIO</mark> = <mark style="background: rgba(0, 174, 255, 0.767);">3</mark> , 5
            <br>
            <br>
            <strong>OBS:</strong> sempre a divisão inteira
            <br>
            <br>
            na posição <mark style="background: rgba(0, 174, 255, 0.767);">3</mark>, temos o valor <mark>18</mark>, e como vimos anteriormente, ele é menor que a chave, então o algoritmo elimina o <mark>18</mark> e os valores abaixo dele.
            <br>
            Sobrando então...
            <br>
            <br>
            19 21 23 27
            <br>
            <span id="cor" class="pag7"> 4 &nbsp; 5 &nbsp; 6 &nbsp; 7</span>
            <br>
            <br>
            <strong>assista a animação...</strong>
        </p>
        </p>`
    }, 900)
}

function pagina8(){
    setTimeout(() => {
        avan.style.display = 'none'
        ant.style.display = 'none'

        titulo.innerHTML = `<strong>Procurando...</strong>`
        parag.innerHTML = `
        <p>
            <p id="chave">
                <mark>Chave:</mark> <strong>21</strong>
            </p>
            <br>
            <br>
            <p id="chave">
                <mark style="background: rgba(0, 174, 255, 0.767);">meio</mark> <strong>3</strong>
            </p>
        <br>
        <br>
        <p class="posicao">
            <span id="numpag7" class="pag8">11</span>
            <span id="numpag7" class="pag8">13</span>
            <span id="numpag7" class="pag8">15</span>
            <span id="numpag7" class="pag8">18</span>
            <span id="numpag7" class="pag8">19</span>
            <span id="numpag7" class="pag8">21</span>
            <span id="numpag7" class="pag8">23</span>
            <span id="numpag7" class="pag8">27</span>
            </p>
        <p class="posicao">
            <span id="PosPag7" class="pospag8">&nbsp;0</span> &nbsp;

            <span id="PosPag7" class="pospag8">1</span>&nbsp;&nbsp;&nbsp;&nbsp;

            <span id="PosPag7" class="pospag8">2</span> &nbsp;&nbsp;&nbsp;

            <span id="PosPag7" class="pospag8">3</span>&nbsp;&nbsp;&nbsp;

            <span id="PosPag7" class="pospag8">4</span> &nbsp;&nbsp;&nbsp;

            <span id="PosPag7" class="pospag8">5</span> &nbsp;&nbsp;

            <span id="PosPag7" class="pospag8">6</span> &nbsp;

            <span id="PosPag7" class="pospag8">7</span>
        </p>
        <br>
            <span class="tela">
            <strong>
            <div id="ponto"></div>
            <div id="ponto"></div>
            <div id="ponto"></div>
            <div id="ponto"></div>
            </strong>
            <span id="pos2">
                18 é a chave?
            </span>
            <br>
            <span id="pos3">
                18 é menor que a chave?
            </span>
            <span id="pos4">
                removendo o 18 e os valores abaixo dele...
            </span>
        </p>`
    }, 900)

    setTimeout(() => {
        avan.style.display = 'block'
        ant.style.display = 'block'
    }, 25000)
}

function pagina9(){
    setTimeout(() => {
        avan.innerHTML = 'FINALIZAR'

        titulo.innerHTML = `<strong>Agora nós temos :</strong>`
        parag.innerHTML = `
        <p>
            <p class="posicao">
            <span id="numpag7" class="pag8">19</span>
            <span id="numpag7" class="pag8">21</span>
            <span id="numpag7" class="pag8">23</span>
            <span id="numpag7" class="pag8final">27</span>
            </p>
        <p class="posicao">
        <p class="posicao">
            <span id="PosPag7" class="pospag8">4</span> &nbsp;&nbsp;&nbsp;

            <span id="PosPag7" class="pospag8">5</span> &nbsp;&nbsp;

            <span id="PosPag7" class="pospag8">6</span> &nbsp;

            <span id="PosPag7" class="pospag8">7</span>
            <br>
            <br>
            <br>
            <p id="chave">
                <mark>início</mark> = <strong><span id="cor" class="pag7">4</span></strong>
            </p>
            <br>
            <br>
            <p id="chave">
                <mark>fim</mark> = <strong><span id="cor" class="pag7">7</span></strong>
            </p>
            <br>
            <br>
            Então... somando as posições &nbsp; <span id="cor" class="pag7">4</span> + <span id="cor" class="pag7">7</span> = 11
            <br>
            <br>
            
            Nosso meio é -> &nbsp; 11 &nbsp;&divide; &nbsp;2 &nbsp;
            <br>
            <br>
            <mark style="background: rgba(0, 174, 255, 0.767);">MEIO</mark> = <mark style="background: rgba(0, 174, 255, 0.767);">5</mark> , 5
            <br>
            <br>
            <strong>OBS:</strong> sempre a divisão inteira
            <br>
            <br>
            E agora, perceba que na próxima verificação nossa <strong>Pesquisa Binária</strong> irá acabar retornando a posição <mark style="background: rgba(0, 174, 255, 0.767);">5</mark>, pois agora ela é igual a chave.
        </p>
        </p>`
    }, 900)
}

function pagina10(){
    setTimeout(() => {
        avan.innerHTML = 'COMEÇAR'
        titulo.innerHTML = `<strong>A importância de aprender algoritmos</strong>`
        parag.innerHTML = `
        <p>
            Aprender algoritmos na programação é essencial porque eles são as receitas que guiam o computador a resolver problemas de forma eficiente.
            <br>
            <br>
            Aqui você conheceu os algoritmos de <strong>Busca Sequencial</strong> e <strong>Pesquisa Binária</strong>, mas saiba que não existem só eles, e para a criação de um programa de qualidade, é super importante se aprofundar neste assunto.
            <br>
            <br>
            E agora... que tal assitir a <strong>Pesquisa Binária</strong> procurando a <mark>SUA</mark> chave?
            <br>
            e melhor ainda... Em um vetor com 1000 posições.
            <br>
            <br>
            E sabe o mais legal disso tudo? Só vai precisa de (no máximo) <strong>10</strong> tentativas para encontrar a sua chave.
        </p>`
    }, 900)
}

var arr = []
var soma = 0

for (let c = 0; c <= 1000; c++){
    arr[c] = soma
    soma += 1
}

function pagina11(){
    var encontrar = document.getElementById('encontrar')
    var chute = document.getElementById('chute')
    var tentativa = document.getElementById('tentativa')
    setTimeout(() => {
        avan.style.display = 'none'
        titulo.style.display = `none`
        parag.innerHTML = `
        <p>
            <p id="chave">
                <mark>CHAVE</mark> = <input type="number" id="encontrar" min="0" max="1000" placeholder=" 0 a 1000">
            </p>
            <br>
            <br>
            <p id="chave">
                <mark id="algoritmo"  onclick="analisar()">INICIAR</mark>
            </p>
            <br>
            <br>
            <br>
            <p id="procura">
                Procurando... de 0 a 1000
            </p>
            <br>
            <br>
            <p id="chute">
                Chute -> 0
            </p>
            <br>
            <br>
            <p id="tentativa">
                Tentativas -> 0
            </p>
        </p>`
    }, 900)
}
        
var parar = false

var comeco = 0
var final = arr.length - 1
var meio = 0
var contador = 0

function analisar(){
    var id;

    while (true){
        meio = parseInt((comeco + final) / 2)
        if (arr[meio] == encontrar.value){
            contador++
            chute.innerHTML = `A chave ${encontrar.value} foi encontrada`
            tentativa.innerHTML = `${contador}`
            parar = true
            break
        }else{
            contador++
            if (arr[meio] < encontrar.value){
                comeco = meio + 1
            }
            else{
                final = meio - 1
            }
        }
        if (comeco > final){
            chute.innerHTML = `A chave ${encontrar.value} não foi encontrada`
            parar = true
            break
        }
    }

    chute.style.translate = '-100px'
    chute.style.opacity = 0

    setTimeout(() => {
        chute.style.translate = '85px'
    }, 600);

    setTimeout(() => {
        chute.innerHTML = `Chute -> ${meio}`
        chute.style.translate = '0px'
        chute.style.opacity = 100
    }, 900);


    // tentativa
    setTimeout(() => {
        tentativa.style.translate = '-100px'
        tentativa.style.opacity = 0
    }, 3000);

    setTimeout(() => {
        tentativa.style.translate = '85px'
    }, 3600);

    setTimeout(() => {
        tentativa.innerHTML = `tentativa -> ${contador}`
        tentativa.style.translate = '0px'
        tentativa.style.opacity = 100
    }, 3900);

    setTimeout(() => {
        if (parar == true){
            cancelAnimationFrame(id)
        }else{
            id = requestAnimationFrame(analisar) 
        }
    }, 3900);
}