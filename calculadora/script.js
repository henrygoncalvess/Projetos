var tela = document.getElementById('tela')
var memoria = []
function clicou(num){
    tela.innerHTML += num
    if (num == 11){
        tela.innerHTML = ''
    }
    if (num == 111){
        tela.innerHTML = memoria
    }else if (num != 11 & num != '+' & num != '-' & num != 'x'){
        memoria.push(num)
    }
}
function result(){
    if (num == 11){
        tela.innerHTML = ''
    }
    tela.innerHTML = memoria
}