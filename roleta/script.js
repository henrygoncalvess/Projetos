var roda = document.getElementById('roleta')
var item = document.getElementById('out')
var velocidade = 0
var num = parseInt(Math.random() * 71)
var mult = num


function rodar(){
    while (num < 60){
        num = parseInt(Math.random() * 71)
        mult = num
    }

    roda.style.rotate = '270deg'
    var id;
    velocidade += mult
    roda.style.rotate = `${velocidade}deg`

    id = requestAnimationFrame(rodar)

    if (mult <= 0){
        cancelAnimationFrame(id)
        velocidade = 0
        num = parseInt(Math.random() * 71)
    }else{
        mult -= 0.2
    }
}