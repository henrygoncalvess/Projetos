var title = document.getElementById('title')
var indents = document.getElementById('indents')
var backButton = document.getElementById('backButton')
var fowardButton = document.getElementById('fowardButton')
var resp1 = document.getElementById('resposta1')
var resp2 = document.getElementById('resposta2')
var resp3 = document.getElementById('resposta3')
var pos = 0
var ativo = false

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
    fowardButton.style.display = 'none'
    backButton.style.display = 'none'
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
    fowardButton.style.borderRadius = '20px 100% 100% 20px'
    fowardButton.style.padding = '5px 20px 8px 8px'
    fowardButton.style.fontSize = '0.7em'
    backButton.style.borderRadius = '100% 20px 20px 100%'
    backButton.style.padding = '5px 8px 8px 30px'
    backButton.innerHTML = 'voltar'
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
            fowardButton.innerHTML = 'FINALIZAR'
            pagina9()
            setTimeout(() => {
                pos = 10
            }, 900);
            break

        case 10:
            fowardButton.innerHTML = 'COMEÇAR'
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

        case 46:
            experiente6()
            setTimeout(() => {
                pos = 47
            }, 900);
            break

        case 47:
            experiente7()
            setTimeout(() => {
                pos = 48
            }, 900);
            break

        case 48:
            pagina11()
            setTimeout(() => {
                pos = 49
            }, 900);
        break

        case 49:
            inicio()
            pos = 0
            break
    }
}

// quando clicar em VOLTAR
function voltar() {
    fowardButton.style.borderRadius = '20px 100% 100% 20px'
    fowardButton.style.padding = '5px 20px 8px 8px'
    fowardButton.style.fontSize = '0.7em'
    fowardButton.innerHTML = 'avançar'
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
            fowardButton.innerHTML = 'FINALIZAR'
            pagina9()
            break

        case 11:
            fowardButton.innerHTML = 'COMEÇAR'
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
        
        case 46:
            experiente5()
            break

        case 47:
            experiente6()
            break

        case 48:
            experiente7()
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
    title.style.translate = '-100px'
    indents.style.translate = '-100px'
    resp1.style.opacity = 0
    resp2.style.opacity = 0
    resp3.style.opacity = 0
    title.style.opacity = 0
    indents.style.opacity = 0
    backButton.style.opacity = 0
    fowardButton.style.opacity = 0

    // move o conteúdo pra direita -> pra ele aparecer
    setTimeout(() => {
        resp1.style.translate = '85px'
        resp2.style.translate = '85px'
        resp3.style.translate = '85px'
        title.style.translate = '85px'
        indents.style.translate = '85px'
    }, 600);

    // aparece com o conteúdo e os botões
    setTimeout(() => {
        resp1.style.display = 'none'
        resp2.style.display = 'none'
        resp3.style.display = 'none'
        resp1.style.translate = '0px'
        resp2.style.translate = '0px'
        resp3.style.translate = '0px'
        title.style.translate = '0px'
        indents.style.translate = '0px'

        title.style.opacity = 100
        indents.style.opacity = 100

        backButton.style.opacity = 100
        fowardButton.style.opacity = 100
        backButton.style.display = 'block'
        fowardButton.style.display = 'block'
    }, 900);
    
}

// EXPLICAÇÕES

function explicar1(){
    backButton.style.borderRadius = '100% 20px 20px 100%'
    backButton.style.padding = '5px 8px 8px 30px'
    backButton.innerHTML = 'voltar'
    setTimeout(() => {
        title.innerHTML = `
        Primeiro vamos aprender
        <br>
        O que são Algoritmos`
        indents.innerHTML = `
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
        title.innerHTML = `Importante`
        indents.innerHTML = `
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
        title.innerHTML = `Palavras chave`
        indents.innerHTML = `
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
        fowardButton.style.borderRadius = '20px'
        fowardButton.style.padding = '5px 10px'

        fowardButton.innerHTML = 'VOLTAR AO INÍCIO'
        title.innerHTML = `Objetivo`
        indents.innerHTML = `
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
    backButton.style.borderRadius = '100% 20px 20px 100%'
    backButton.style.padding = '5px 8px 8px 30px'
    backButton.innerHTML = 'voltar'
    setTimeout(() => {
        title.innerHTML = `Vamos revisar o que é uma <br> Busca Sequencial`
        indents.innerHTML = `
        <p>
            Nosso algoritmo começa do <strong>início</strong> do vetor e verifica cada elemento, um por um, até encontrar a chave ou até chegar ao final do vetor.
            <br>
            <br>
            Linguagem de exemplo: <mark style="background: rgb(255, 208, 0, 0.385);">JavaScript</mark>
            <br>
            <br>
            <p id="binary"><img src="imagens/busca_sequencial.png"></p>
            <br>
            <strong>O contador serve pra verificar cada posição do Vetor.</strong>
            <br>
            <br>
            Se for a chave, é mostrado na tela a posição em que ela foi encontrada (que é <strong>3</strong>)
            <br>
            <br>
            Se não for a chave, é somado <strong>1</strong> ao contador e ele pula pra próxima posição
        </p>`
    }, 900);
}

function experiente2(){
    setTimeout(() => {
        backButton.style.opacity = 100
        title.innerHTML = `Desvantagem`
        indents.innerHTML = `
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
        backButton.style.opacity = 100
        title.innerHTML = `Binary Search`
        indents.innerHTML = `
        <p>
            A <strong>Pesquisa Binária</strong> é melhor utilizada em vetores maiores, e ele precisa estar <strong>ORDENADO.</strong>
            <br>
            (aprender <strong>"Bubble Sort"</strong>)
            <br>
            <br>
            Com esse algoritmo nós trabalhamos com <span id="cor" class="pag7">as posições</span> <mark>INÍCIO</mark>, <mark style="background: rgba(0, 174, 255, 0.767);">MEIO</mark> e <mark>FIM</mark>.
            <br>
            <br>
            <p id="binary"><img src="imagens/i.m.f.png"></p>
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
        backButton.style.opacity = 100
        title.innerHTML = `Prática (parte 1/3)`
        indents.innerHTML = `
        <p>
            <strong>O código será dividido em 3 partes para melhor entendimento. (ao final, veremos o algoritmo completo)</strong>
            <br>
            <br>
            <strong>OBS:</strong> no exemplo a nossa variável <strong>meio</strong> já estava modificada, mas você precisa declarar ela como <strong>(meio = 0)</strong>
            <br>
            <br>
            <p id="binary"><img src="imagens/binary1.png"></p>
            <br>
            Essa parte do algoritmo é a mais simples de entender. Nós iremos calcular o meio do vetor, somando as posições <mark>início</mark> e <mark>fim</mark> dele. Se o nosso meio for igual a nossa chave, termina por aí.
        </p>`
    }, 900);
}

function experiente5(){
    setTimeout(() => {
        backButton.style.opacity = 100
        title.innerHTML = `Prática (parte 2/3)`
        indents.innerHTML = `
        <p>
            <strong>VETOR DE EXEMPLO:</strong>
            <br>
            <strong>1 &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; 5 &nbsp; 6 &nbsp; 7 &nbsp; 8 &nbsp; 9</strong>
            <br>
            <span id="cor" class="pag7"> &nbsp;0 &nbsp; 1 &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; 5 &nbsp; 6 &nbsp; 7 &nbsp; 8</span>
            <br>
            <br>
            <mark>CHAVE</mark>: <strong>7</strong> &nbsp; <mark>INÍCIO</mark>: <strong><span id="cor" class="pag7">0</span></strong> &nbsp; <mark>FIM</mark>: <strong><span id="cor" class="pag7">8</span></strong>
            <br>
            <br>
            <p id="binary"><img src="imagens/binary2.png"></p>
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
            <br>
            <br>
            Observe que neste exemplo, a próxima verificação retornaria a <mark>chave</mark>, pois:
            <br>
            <br>
            meio = <span id="cor" class="pag7">5</span> <strong>+</strong> <span id="cor" class="pag7">8</span> = <strong>13</strong>
            <br>
            A divisão inteira de <strong>13 &divide; 2</strong> = <span id="cor" class="pag7">6</span>
            <br>
            <br>
            E <span id="cor" class="pag7">6</span> é a posição da nossa <mark>chave</mark>
        </p>`
    }, 900);
}

function experiente6(){
    setTimeout(() => {
        backButton.style.opacity = 100
        title.innerHTML = `Prática (parte 3/3)`
        indents.innerHTML = `
        <p>
            <strong>E por fim...</strong>
            <br>
            <br>
            <p id="binary"><img src="imagens/binary3.png"></p>
            <br>
            Isso significa que se nosso algoritmo for diminuindo o tamanho de busca a ponto do início ser maior que o fim, é porque essa chave não existe.
            <br>
            <br>
            Agora vamos dar uma olhada no código completo...
        </p>`
    }, 900);
}

function experiente7(){
    setTimeout(() => {
        title.style.display = 'block'
        backButton.style.opacity = 100
        fowardButton.innerHTML = 'COMEÇAR'
        title.innerHTML = `Binary Search`
        indents.innerHTML = `
        <p>
        <p id="binary"><img src="imagens/binarySearch.png"></p>
        <br>
        Veja esse algoritmo funcionando em um vetor com 1000 elementos. E melhor ainda... procurando a <mark>SUA</mark> chave.
        </p>`
    }, 900);
}

// PÁGINAS

function inicio(){
    // página inicial com as 3 opções
    setTimeout(() => {
        fowardButton.innerHTML = 'avançar'
        title.style.display = 'block'
        title.innerHTML = `Olá Programador!`
        indents.innerHTML = `
        <p id="indents">
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
        backButton.style.display = 'none'
        fowardButton.style.display = 'none'
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
        backButton.style.borderRadius = '20px'
        backButton.style.padding = '5px 10px'
        backButton.innerHTML = 'Voltar ao início'
        title.style.display = 'block'
        fowardButton.style.opacity = 100
        fowardButton.innerHTML = "avançar"
        title.innerHTML = `O que é <strong>Binary Search</strong> <br> ou <br> <strong>Pesquisa Binária?</strong>`
        indents.innerHTML = 'Para entendermos melhor o que é e como funciona uma <strong>Pesquisa Binária</strong>, vamos começar analizando um algoritmo de <mark>Busca Sequencial</mark>'
    }, 900);
}

function pagina2(){
    setTimeout(() => {
        title.innerHTML = `<strong>Busca Sequencial</strong>`
        indents.innerHTML = `
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
        title.innerHTML = `<strong>Exemplo</strong>`
        indents.innerHTML = `
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
        title.innerHTML = `<strong>Desvantagem</strong>`
        indents.innerHTML = `
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
        title.innerHTML = `<strong>Binary Search</strong>`
        indents.innerHTML = `
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
        title.innerHTML = `<strong>Como a Pesquisa Binária funciona</strong>`
        indents.innerHTML = `
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
        title.innerHTML = `<strong>Exemplo</strong>`
        indents.innerHTML = `
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
        fowardButton.style.display = 'none'
        backButton.style.display = 'none'

        title.innerHTML = `<strong>Procurando...</strong>`
        indents.innerHTML = `
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
        fowardButton.style.display = 'block'
        backButton.style.display = 'block'
    }, 25000)
}

function pagina9(){
    setTimeout(() => {
        fowardButton.innerHTML = 'FINALIZAR'

        title.innerHTML = `<strong>Agora nós temos :</strong>`
        indents.innerHTML = `
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
        title.style.display = 'block'
        fowardButton.innerHTML = 'COMEÇAR'
        title.innerHTML = `<strong>A importância de aprender algoritmos</strong>`
        indents.innerHTML = `
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
    comeco = 0
    meio = 0
    contador = 0
    final = arr.length - 1

    setTimeout(() => {
        fowardButton.style.borderRadius = '20px'
        fowardButton.style.padding = '5px 10px'
        fowardButton.innerHTML = 'Voltar ao início'
        title.style.display = `none`
        indents.innerHTML = `
        <p>
            <p id="chave">
                <mark class="sombra">CHAVE</mark> <input type="number" id="encontrar"  class="sombra" min="0" max="1000" maxlength="4" placeholder="digite sua chave">
            </p>
            <br>
            <br>
            <p id="chave">
                <mark id="buscando">PROCURANDO. . .</mark>
                <mark id="algoritmo" onclick="iniciar()">PROCURAR</mark>
                <mark id="algoritmo2" onclick="reiniciar()">REINICIAR</mark>
            </p>
            <br>
            <br>
            <br>
            <p id="chave"><strong>Chute</strong></p>
            <br>
            <p id="chute">0<p>
            <br>
            <br>
            <p id="chave"><strong>A chave é...</strong></p>
            <br>
            <p id="mm">maior ou menor?</p>
            <br>
            <br>
            <p id="chave"><strong>Procurando</strong></p>
            <br>
            <p id="procura">0 a 1000</p>
            <br>
            <br>
            <p id="chave"><strong>Tentativas</strong></p>
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
    let algoritmo = document.getElementById('algoritmo')
    let algoritmo2 = document.getElementById('algoritmo2')
    let buscando = document.getElementById('buscando')

    if (encontrar.value < 0 || encontrar.value > 1000 || encontrar.value.length == 0){
        window.alert('ERRO!!! Apenas valores de 0 a 1000')
        encontrar.value = ''
        encontrar.focus()
    }else{
        algoritmo.style.display = 'none'
        algoritmo.innerHTML = 'CONTINUAR'
        algoritmo2.style.display = 'none'
        buscando.style.display = 'inline'

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
        if (ativo == true){
            chute.style.translate = '0px'
            chute.style.opacity = 100
        }else{
            chute.style.translate = '-100px'
            chute.style.opacity = 0
        }

        setTimeout(() => {
            if (ativo == true){
                chute.style.translate = '0px'
            }else{
                chute.style.translate = '85px'
            }
        }, 600);

        setTimeout(() => {
            if (ativo == true){
                chute.innerHTML = `0`
                mm.style.display = 'block'
            }else{
                if (arr[meio] == encontrar.value){
                    buscando.innerHTML = 'Chave encontrada!'
                    chute.innerHTML = `${meio}`
                }else{
                    chute.innerHTML = `${meio}`
                }
                chute.style.translate = '0px'
                chute.style.opacity = 100
            }
        }, 800);

        // indica se a chave é maior ou menor
        setTimeout(() => {
            if (ativo == true){
                mm.style.translate = '0px'
                mm.style.opacity = 100
            }else{
                mm.style.translate = '-100px'
                mm.style.opacity = 0
            }
        }, 3000);

        setTimeout(() => {
            if (ativo == true){
                mm.style.translate = '0px'
            }else{
                mm.style.translate = '85px'
            }
        }, 3600);

        setTimeout(() => {
            if (ativo == true){
                mm.innerHTML = `maior ou menor?`
            }else{
                if (arr[meio] == encontrar.value){
                    mm.innerHTML = `IGUAL`
                }else{
                    if (maior == true){
                        mm.innerHTML = `MAIOR`
                    }else{
                        mm.innerHTML = `MENOR`
                    }
                }
                mm.style.translate = '0px'
                mm.style.opacity = 100
            }
        }, 3800);

        // mudando o texto de "procurando..." conforme o algoritmo muda
        setTimeout(() => {
            if (ativo == true){
                procura.style.translate = '0px'
                procura.style.opacity = 100
                tentativa.style.translate = '0px'
                tentativa.style.opacity = 100
            }else{
                procura.style.translate = '-100px'
                procura.style.opacity = 0
                tentativa.style.translate = '-100px'
                tentativa.style.opacity = 0
            }
        }, 6000);

        setTimeout(() => {
            if (ativo == true){
                procura.style.translate = '0px'
                tentativa.style.translate = '0px'
            }else{
                procura.style.translate = '85px'
                tentativa.style.translate = '85px'
            }
        }, 6600);

        setTimeout(() => {
            if (ativo == true){
                procura.innerHTML = `0 a 1000`
                tentativa.innerHTML = `0`
            }else{
                procura.innerHTML = `${comeco} a ${final}`
                procura.style.translate = '0px'
                procura.style.opacity = 100
                tentativa.innerHTML = `${contador}`
                tentativa.style.translate = '0px'
                tentativa.style.opacity = 100
            }
        }, 6800);

        // se achar a chave, para a animação
        setTimeout(() => {
            algoritmo.style.display = 'inline'
            algoritmo2.style.display = 'inline'
            buscando.style.display = 'none'
            if (arr[meio] == encontrar.value){
                comeco = 0
                meio = 0
                contador = 0
                final = arr.length - 1
                algoritmo.style.display = 'none'
            }
        }, 10000);
    }
}

function iniciar(){
    analisar()

    setTimeout(() => {
        
    }, 10000);
}

function reiniciar(){
    ativo = true
    let algoritmo = document.getElementById('algoritmo')
    let algoritmo2 = document.getElementById('algoritmo2')
    let buscando = document.getElementById('buscando')
    algoritmo.style.display = 'inline'
    algoritmo.innerHTML = 'PROCURAR'
    algoritmo2.style.display = 'inline'
    buscando.innerHTML = 'PROCURANDO. . .'
    comeco = 0
    meio = 0
    contador = 0
    final = arr.length - 1
    ativo = true

    animar()
    encontrar.value = ''

    setTimeout(() => {
        encontrar.focus()
        ativo = false
    }, 1000);

    // não deixa o conteúdo sair do lugar

    chute.style.translate = '0px'
    chute.style.opacity = 100

    setTimeout(() => {
        chute.innerHTML = `0`
        mm.innerHTML = `maior ou menor?`
        procura.innerHTML = `0 a 1000`
        tentativa.innerHTML = `0`
        chute.style.translate = '0px'
    }, 600);

    setTimeout(() => {
        if (arr[meio] == encontrar.value){
            chute.innerHTML = `0`
        }else{
            chute.innerHTML = `0`
        }
    }, 800);

    setTimeout(() => {
        mm.style.translate = '0px'
        mm.style.opacity = 100
    }, 3000);

    setTimeout(() => {
        mm.style.translate = '0px'
    }, 3600);

    setTimeout(() => {
        mm.innerHTML = `maior ou menor?`
    }, 3800);

    setTimeout(() => {
        procura.style.translate = '0px'
        procura.style.opacity = 100
        tentativa.style.translate = '0px'
        tentativa.style.opacity = 100
    }, 6000);

    setTimeout(() => {
        procura.style.translate = '0px'
        tentativa.style.translate = '0px'
    }, 6600);

    setTimeout(() => {
        procura.innerHTML = `0 a 1000`
        tentativa.innerHTML = `0`
    }, 6800);
}