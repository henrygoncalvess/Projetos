var roda = document.getElementById('roleta')
var item = document.getElementById('out')
var velocidade = 0
var num = 0

function rodar(){
    num = parseInt(Math.random() * 61)

    while (num < 45){
        num = parseInt(Math.random() * 61)
    }

    roda.style.rotate = '0deg'
    var id;
    velocidade += 20
    roda.style.rotate = `${velocidade}deg`

    id = requestAnimationFrame(rodar)

    if (velocidade > num * 60){
        cancelAnimationFrame(id)
        velocidade = 0
    }
}

function output(){
    item.innerHTML = dado.value
}