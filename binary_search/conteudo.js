export function pag2() {
    setTimeout(() => {
        titulo.innerHTML = `<strong>Busca Sequencial</strong>`;
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
        </p>`;
    }, 900);
}

export function pag1(){
    setTimeout(() => {
        ant.style.opacity = 0
        avan.style.opacity = 100
        titulo.innerHTML = `O que é "<strong>Binary Search</strong>" <br> ou <br> "<strong>Pesquisa Binária</strong>"?`
        parag.innerHTML = 'Para entendermos melhor o que é e como funciona uma <strong>Pesquisa Binária</strong>, vamos começar analizando um algoritmo de <mark>Busca Sequencial</mark>'
    }, 900);
}