var tela = document.getElementById('tela')
var memoria = []
function clicou(num){
    while (num != 111){
        tela.innerHTML += num
        if (num != 111 & num != 11 & num != '+' & num != '-' & num != 'x'){
            memoria.push(tela.innerText)
            break
        }
        break
    }
    if (num == 111){
        tela.innerHTML = memoria
    }
    if (num == 11){
        tela.innerHTML = ''
        memoria = []
    }
}
