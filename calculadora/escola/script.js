var lista = []
var lista2 = []
var lista3 = []
var tela = document.getElementById('tela')
var igual = document.getElementById('igual')
function cliquei(num=''){
    tela.innerText += num
        if (num == 11){
        tela.innerText = ''
        lista = []
        igual.innerHTML = '<br>'
        }
}
function calcular(conta){
    var res = 0
    var res2 = 0
    var res3 = 1
    switch (conta){
        case '+':
            lista.push(tela.innerText)
            tela.innerText = ''
            break
        case '-':
            lista2.push(tela.innerText)
            tela.innerText = ''
            break
        case 'x':
            lista3.push(tela.innerText)
            tela.innerText = ''
            break
        case '=':
            lista.push(tela.innerText)
            lista2.push(tela.innerText)
            lista3.push(tela.innerText)
            for (var pos in lista){
                res += Number(lista[pos])
            }
            for (var pos in lista2){
                res2 = Number(lista2[0]) - Number(lista2[pos])
            }
            for (var pos in lista3){
                res3 = Number(lista3[0]) * Number(lista3[pos])
            }
            if (lista.length > 1){
                igual.innerText = res
            }else if (lista2.length > 1){
                igual.innerText = res2
            }else if (lista3.length > 1){
                igual.innerText = res3
            }
            tela.innerText = ''
            lista = []
            lista2 = []
            lista3 = []
            break
    }
}