var lista = []
var tela = document.getElementById('tela')
function cliquei(num=''){
    tela.innerText += num
        if (num == 11){
        tela.innerText = ''
        lista = []
        }
}
function calcular(conta){
    var res = 0
    switch (conta){
        case '+':
            lista[0] = tela.innerText
            tela.innerText = ''
            break
        case '-':
            lista[0] = tela.innerText
            tela.innerText = ''
            break
        case 'x':
            lista[0] = tela.innerText
            tela.innerText = ''
            break
        case '=':
            lista[1] = tela.innerText
            for (var pos in lista){
                res += Number(lista[pos])
            }
            tela.innerText = res
            break
    }
}