var titulo = document.getElementById('titulo')
var parag = document.getElementById('parag')
var tam2 = document.getElementById('tam2')
var ant = document.getElementById('vol')
var avan = document.getElementById('avan')
var resp1 = document.getElementById('resposta1')
var resp2 = document.getElementById('resposta2')
var resp3 = document.getElementById('resposta3')
var pos2 = document.getElementById('pos2')
var pos = 0

// array que será usado na página 11
var arr = []
var soma = 0

// array preenchido com valores de 0 a 1000
for (let c = 0; c <= 1000; c++){
    arr[c] = soma
    soma += 1
}

// variáveis responsáveis por fazer a busca binária funcionar
var comeco = 0
var final = arr.length - 1
var meio = 0
var contador = 0
var maior = false

if (pos == 0){
    avan.style.display = 'none'
    ant.style.display = 'none'
}

function verificar(resposta){
    animar()

    switch (resposta) {
        case 1:
            pos = 31
            explicar1()
            setTimeout(() => {
                pos = 32
            }, 900);
            break

        case 2:
            pos = 1
            pagina1()
            break

        case 3:
            pos = 41
            experiente()
            setTimeout(() => {
                pos = 42
            }, 900);
            break
    }
}

// quando clicar em AVANÇAR
function trocar() {
    avan.style.borderRadius = '20px 100% 100% 20px'
    avan.style.padding = '5px 20px 8px 8px'
    avan.style.fontSize = '0.7em'
    ant.style.borderRadius = '100% 20px 20px 100%'
    ant.style.padding = '5px 8px 8px 30px'
    ant.innerHTML = 'voltar'
    animar()

    if (pos == 1) pos = 2

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
            avan.innerHTML = 'FINALIZAR'
            pagina9()
            setTimeout(() => {
                pos = 10
            }, 900);
            break

        case 10:
            avan.innerHTML = 'COMEÇAR'
            pagina10()
            setTimeout(() => {
                pos = 11
            }, 900);
            break

        case 11:
            pagina11()
            setTimeout(() => {
                pos = 12
            }, 900);
            break

        case 12:
            inicio()
            pos = 0
            break

        case 32:
            explicar2()
            setTimeout(() => {
                pos = 33
            }, 900);
            break

        case 33:
            explicar3()
            setTimeout(() => {
                pos = 34
            }, 900);
            break

        case 34:
            explicar4()
            setTimeout(() => {
                pos = 35
            }, 900);
            break

        case 35:
            inicio()
            pos = 0
            break

        case 42:
            experiente2()
            setTimeout(() => {
                pos = 43
            }, 900);
            break

        case 43:
            experiente3()
            setTimeout(() => {
                pos = 44
            }, 900);
            break

        case 44:
            experiente4()
            setTimeout(() => {
                pos = 45
            }, 900);
            break

        case 45:
            experiente5()
            setTimeout(() => {
                pos = 46
            }, 900);
            break
    }
}

// quando clicar em VOLTAR
function voltar() {
    avan.style.borderRadius = '20px 100% 100% 20px'
    avan.style.padding = '5px 20px 8px 8px'
    avan.style.fontSize = '0.7em'
    avan.innerHTML = 'avançar'
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
            pos = 0
            break

        case 2:
            pos -= 1
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
            avan.innerHTML = 'FINALIZAR'
            pagina9()
            break

        case 11:
            avan.innerHTML = 'COMEÇAR'
            animando = false
            pagina10()
            break

        case 20:
            inicio()
            pos = 0
            break

        case 31:
            inicio()
            pos = 0
            break

        case 32:
            explicar1()
            break

        case 33:
            explicar2()
            break

        case 34:
            explicar3()
            break

        case 41:
            inicio()
            pos = 0
            break

        case 42:
            experiente()
            break

        case 43:
            experiente2()
            break

        case 44:
            experiente3()
            break

        case 45:
            experiente4()
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

// EXPLICAÇÕES

function explicar1(){
    ant.style.borderRadius = '100% 20px 20px 100%'
    ant.style.padding = '5px 8px 8px 30px'
    ant.innerHTML = 'voltar'
    setTimeout(() => {
        titulo.innerHTML = `
        Primeiro vamos aprender
        <br>
        O que são Algoritmos`
        parag.innerHTML = `
        <p>
        Um algoritmo é simplesmente uma <strong>sequência de passos que resolvem um problema ou realizam uma tarefa</strong>. Por exemplo, você sabia que uma receita de bolo é um algoritmo?
        <br>
        <br>
        Ela <strong>lista ingredientes e instruções</strong> passo a passo para <strong>preparar o bolo.</strong> Na programação, algoritmos são usados para processar dados, realizar cálculos, ou automatizar tarefas.
        <br>
        <br>
        É como se nós fizéssemos uma receita pro computador preparar o bolo.
        </p>`
    }, 900);
}

function explicar2(){
    setTimeout(() => {
        titulo.innerHTML = `Importante`
        parag.innerHTML = `
        <p>
        Agora que você sabe o que são Algoritmos, não se assuste com as palavras que você irá encontrar nesta página :
        <br>
        <br>
        <strong>Busca sequencial</strong> e <strong>Binary Search</strong>, como vimos anteriormente são 2 algoritmos de busca. E ao longo desta página você irá conhecer melhor cada um deles.
        <br>
        <br>
        Além de algoritmos, vamos entender mais 3 palavrinhas que também irão aparecer aqui:
        </p>`
    }, 900);
}

function explicar3(){
    setTimeout(() => {
        titulo.innerHTML = `Palavras chave`
        parag.innerHTML = `
        <p>
        <strong>Vetor :</strong> uma lista que armazena valores de um mesmo tipo.
        <br>
        Exemplo: [ 1, 2, 3, 4, 5]
        <br>
        <br>
        <strong><span id="cor" class="pag7">Posição :</span></strong> é o número que identifica cada elemento de um vetor.
        <br>
        na posição 0 está o número 1...
        <br>
        na posição 1 está o número 2...
        <br>
        <br>
        <strong>OBS:</strong> se você não está acostumado com a numeração, não se preocupe, até o final dessa página você irá entender tudo.
        <br>
        <br>
        <strong><mark>Chave</mark> :</strong> é o valor que vamos procurar no nosso algoritmo de busca.
        </p>`
    }, 900);
}

function explicar4(){
    setTimeout(() => {
        avan.style.borderRadius = '20px'
        avan.style.padding = '5px 10px'

        avan.innerHTML = 'VOLTAR AO INÍCIO'
        titulo.innerHTML = `Objetivo`
        parag.innerHTML = `
        <p>
        Agora que você aprendeu o básico sobre algoritmos, e viu também algumas palavras chave é hora de dar o próximo passo.
        <br>
        <br>
        Mas não se preocupe, pois você irá aprender apenas os conceitos de algoritmo de busca, sem ter contato com nenhum código. Se acabar gostando do assunto, você pode voltar para a página inicial e selecionar outro nível de conhecimento.
        </p>`
    }, 900);
}

// NÍVEL EXPERT

function experiente(){
    ant.style.borderRadius = '100% 20px 20px 100%'
    ant.style.padding = '5px 8px 8px 30px'
    ant.innerHTML = 'voltar'
    setTimeout(() => {
        titulo.innerHTML = `Busca sequencial`
        parag.innerHTML = `
        <p>
            Nosso algoritmo começa do <strong>início</strong> do vetor e verifica cada elemento, um por um, até encontrar a chave ou até chegar ao final do vetor.
            <br>
            <br>
            Linguagem de exemplo: <mark style="background: rgb(255, 208, 0, 0.385);">JavaScript</mark>
            <br>
            <br>
            <img src="imagens/busca sequencial.png">
            <br>
            <br>
            <strong>O contador serve pra verificar cada posição do Vetor.</strong>
            <br>
            <br>
            Se for a chave, é mostrado na tela a posição em que ela foi encontrada (que é --> <strong>3</strong>)
            <br>
            <br>
            Se não for a chave, é somado <strong>1</strong> ao contador e ele pula pra próxima posição
        </p>`
    }, 900);
}

function experiente2(){
    setTimeout(() => {
        ant.style.opacity = 100
        titulo.innerHTML = `Desvantagem`
        parag.innerHTML = `
        <p>
            A partir do momento em que nós temos muitos dados para manipular, a busca sequencial deixa de ser útil.
            <br>
            <br>
            O Algoritmo vai comparar cada uma das posições... Teste por teste.... e ainda há chances desse valor não existir no vetor.
            <br>
            <br>
            Ou seja, o processo do algoritmo de busca sequencial é <strong>muito demorado</strong>.
        </p>`
    }, 900);
}

function experiente3(){
    setTimeout(() => {
        ant.style.opacity = 100
        titulo.innerHTML = `Binary Search`
        parag.innerHTML = `
        <p>
            A <strong>Pesquisa Binária</strong> é melhor utilizada em vetores maiores, e ele precisa estar <strong>ORDENADO.</strong>
            <br>
            (aprender <strong>"Bubble Sort"</strong>)
            <br>
            <br>
            Com esse algoritmo nós trabalhamos com <mark>INÍCIO</mark> <mark style="background: rgba(0, 174, 255, 0.767);">MEIO</mark> e <mark>FIM</mark>.
            <br>
            <br>
            <img src="imagens/i.m.f.png">
            <br>
            <br>
            <strong>OBS:</strong> meio --> divisão inteira.
            <br>
            <br>
            Nossa verificação sempre vai começar pelo <mark style="background: rgba(0, 174, 255, 0.767);">meio</mark> e dependendo do resultado, nossas variáveis <mark>início</mark> ou <mark>fim</mark> podem mudar.
            <br>
            <br>
            Isso faz com que nosso algoritmo "diminuia" o vetor a cada verificação, e quanto menos números pra verificar, mais fácil vai ser de encontrar o valor procurado.
            <br>
            <br>
            Vamos colocar em prática...
        </p>`
    }, 900);
}

function experiente4(){
    setTimeout(() => {
        ant.style.opacity = 100
        titulo.innerHTML = `Prática (parte 1/3)`
        parag.innerHTML = `
        <p>
            O código será dividido em <strong>3 partes</strong> para fácil entendimento. (ao final, veremos o algoritmo completo)
            <br>
            <br>
            <strong>OBS:</strong> no exemplo a nossa variável <strong>meio</strong> já estava modificada, mas você precisa declarar ela como <strong>(meio = 0)</strong>
            <br>
            <br>
            <img src="imagens/binary1.png">
            <br>
            <br>
            Essa parte do algoritmo é a mais simples de entender. Nós iremos calcular o meio do vetor, somando as posições <mark>início</mark> e <mark>fim</mark> dele. Se o nosso meio for igual a nossa chave, termina por aí.
        </p>`
    }, 900);
}

function experiente5(){
    setTimeout(() => {
        // some com o botão de avançar
        avan.style.display = 'none'

        ant.style.opacity = 100
        titulo.innerHTML = `Prática (parte 2/3)`
        parag.innerHTML = `
        <p>
            <mark>CHAVE</mark>: <strong>7</strong> &nbsp; <mark>INÍCIO</mark>: <strong><span id="cor" class="pag7">0</span></strong> &nbsp; <mark>FIM</mark>: <strong><span id="cor" class="pag7">8</span></strong>
            <br>
            <br>
            <strong>1 &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; 5 &nbsp; 6 &nbsp; 7 &nbsp; 8 &nbsp; 9</strong>
            <br>
            <span id="cor" class="pag7"> &nbsp;0 &nbsp; 1 &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; 5 &nbsp; 6 &nbsp; 7 &nbsp; 8</span>
            <br>
            <br>
            <img src="imagens/binary2.png">
            <br>
            <br>
            <strong>Resumindo:</strong> Na posição do meio o valor é <strong>5</strong> que é menor que a chave. Então...
            <br>
            <br>
            <mark>INÍCIO</mark>: <strong><span id="cor" class="pag7">5</span></strong> &nbsp; <mark>FIM</mark>: <strong><span id="cor" class="pag7">8</span></strong>
            <br>
            <br>
            Agora só procuramos a partir dos valores que sobraram:
            <br>
            <br>
            <strong>6 &nbsp; 7 &nbsp; 8 &nbsp; 9</strong>
            <br>
            <span id="cor" class="pag7">5 &nbsp; 6 &nbsp; 7 &nbsp; 8</span>
        </p>`
    }, 900);
}

// PÁGINAS

function inicio(){
    // página inicial com as 3 opções
    setTimeout(() => {
        avan.innerHTML = 'avançar'
        titulo.style.display = 'block'
        titulo.innerHTML = `Olá Programador!`
        parag.innerHTML = `
        <p id="parag">
             Hoje você vai aprender o que é uma <strong>"Binary Search"</strong> e como ela funciona.
            <br>
            <br>
            mas antes de começarmos...
            <br>
            <br>
            É importante que você selecione qual é o seu nível de
            conhecimento abaixo, porque você vai conseguir
            aprender mesmo que não entenda de programação.
            <br>
            <br>
            Você sabe o que é um <strong>"Algoritmo"?</strong>
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
        ant.style.borderRadius = '20px'
        ant.style.padding = '5px 10px'
        ant.innerHTML = 'Voltar ao início'
        titulo.style.display = 'block'
        avan.style.opacity = 100
        avan.innerHTML = "avançar"
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
            Então... somando as posições :
            <br>
            0 + 7 = 7
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
            Então... somando as posições :
            <br>
            <span id="cor" class="pag7">4</span> + <span id="cor" class="pag7">7</span> = 11
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
        titulo.style.display = 'block'
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

function pagina11(){

    setTimeout(() => {
        avan.style.borderRadius = '20px'
        avan.style.padding = '5px 10px'
        avan.innerHTML = 'Voltar ao início'
        titulo.style.display = `none`
        parag.innerHTML = `
        <p>
            <p id="chave">
                <mark>CHAVE</mark> <input type="number" id="encontrar" min="0" max="1000" maxlength="4" placeholder="digite sua chave aqui">
            </p>
            <br>
            <br>
            <p id="chave">
                <mark id="algoritmo"  onclick="analisar()">INICIAR</mark>
            </p>
            <br>
            <br>
            <br>
            <p id="chave">Chute</p>
            <br>
            <p id="chute">0<p>
            <br>
            <br>
            <p id="chave">A chave é...</p>
            <br>
            <p id="mm">maior ou menor?</p>
            <br>
            <br>
            <p id="chave">Procurando</p>
            <br>
            <p id="procura">0 a 1000</p>
            <br>
            <br>
            <p id="chave">Tentativas</p>
            <br>
            <p id="tentativa">0</p>
        </p>`
    }, 900)

    setTimeout(() => {
        encontrar.focus()
    }, 1000);
}

// quando clicar em INICIAR
function analisar(){

    // usada depois para começar a animação
    var id;

    // variáveis que manipulam os textos
    var chute = document.getElementById('chute')
    var tentativa = document.getElementById('tentativa')
    var procura = document.getElementById('procura')
    var mm = document.getElementById('mm')

    // se a pessoa não apertar o botão INICIAR
    // chave é considerada  --> 0
    if (encontrar.value < 0 || encontrar.value > 1000 || encontrar.value.length == 0){
        window.alert('ERRO!!! Apenas valores de 0 a 1000')
        encontrar.value = ''
        encontrar.focus()
    }else{

        // algoritmo de busca binária
        meio = parseInt((comeco + final) / 2)
        if (arr[meio] == encontrar.value){
            contador++
        }else{
            contador++
            if (arr[meio] < encontrar.value){
                maior = true
                comeco = meio + 1
            }
            else{
                maior = false
                final = meio - 1
            }
        }

        // mudando o texto de "chutes" conforme o meio muda
        chute.style.translate = '-100px'
        chute.style.opacity = 0

        setTimeout(() => {
            chute.style.translate = '85px'
        }, 600);

        setTimeout(() => {
            if (arr[meio] == encontrar.value){
                chute.innerHTML = `A chave ${encontrar.value} foi encontrada`
                mm.style.display = 'none'
            }else{
                chute.innerHTML = `${meio}`
            }
            chute.style.translate = '0px'
            chute.style.opacity = 100
        }, 800);

        // indica se a chave é maior ou menor
        setTimeout(() => {
            mm.style.translate = '-100px'
            mm.style.opacity = 0
        }, 3000);

        setTimeout(() => {
            mm.style.translate = '85px'
        }, 3600);

        setTimeout(() => {
            if (maior == true){
                mm.innerHTML = `MAIOR`
            }else{
                mm.innerHTML = `MENOR`
            }
            mm.style.translate = '0px'
            mm.style.opacity = 100
        }, 3800);

        // mudando o texto de "procurando..." conforme o algoritmo muda
        setTimeout(() => {
            procura.style.translate = '-100px'
            procura.style.opacity = 0
        }, 6000);

        setTimeout(() => {
            procura.style.translate = '85px'
        }, 6600);

        setTimeout(() => {
            procura.innerHTML = `${comeco} a ${final}`
            procura.style.translate = '0px'
            procura.style.opacity = 100
        }, 6800);

        // mudando o texto de "tentativas" conforme o programa é executado
        setTimeout(() => {
            tentativa.style.translate = '-100px'
            tentativa.style.opacity = 0
        }, 6000);

        setTimeout(() => {
            tentativa.style.translate = '85px'
        }, 6600);

        setTimeout(() => {
            tentativa.innerHTML = `${contador}`
            tentativa.style.translate = '0px'
            tentativa.style.opacity = 100
        }, 6800);

        // se achar a chave, para a animação
        setTimeout(() => {
            if (arr[meio] == encontrar.value){
                comeco = 0
                meio = 0
                contador = 0
                cancelAnimationFrame(id)
            }else{
                id = requestAnimationFrame(analisar)
            }
        }, 10000);
    }
}