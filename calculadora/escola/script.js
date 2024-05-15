var lista = []
var tela = document.getElementById('tela')
function cliquei(num=''){
    tela.innerText += num
        if (num == 11){
        tela.innerText = ''
        lista = []
        lista2 = []
        }
}
function calcular(conta){
    var res = 0
    switch (conta){
        case '+':
            lista.push(tela.innerText)
            tela.innerText = ''
            break
        case '=':
            lista.push(tela.innerText)
            for (var pos in lista){
                res += Number(lista[pos])
            }
            tela.innerText = res
            lista.pop()
            break
    }
}