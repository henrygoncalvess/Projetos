var tela = document.getElementById('tela')
var memoria = []
var show = document.getElementsByTagName('td')[14]
function clicou(num){
    tela.innerHTML += num
    if (num == 11){
        tela.innerHTML = ''
    }
}