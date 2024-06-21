var roda = document.getElementById('roleta')
var velocidade = 0

function rodar(){
    var id;
    velocidade += 20
    roda.style.rotate = `${velocidade}deg`

    id = requestAnimationFrame(rodar)

}