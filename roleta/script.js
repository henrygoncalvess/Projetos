var roda = document.getElementById('roleta')
var item = document.getElementById('out')
var velocidade = 0

function rodar(){
    roda.style.rotate = '0deg'
    var id;
    velocidade += 20
    roda.style.rotate = `${velocidade}deg`

    id = requestAnimationFrame(rodar)

    if (velocidade > 2000){
        cancelAnimationFrame(id)
        velocidade = 0
    }
}

function output(){
    item.innerHTML = dado.value
}