var cima1 = document.getElementById('a1')
var cima2 = document.getElementById('a2')
var cima3 = document.getElementById('a3')

var meio1 = document.getElementById('b1')
var meio2 = document.getElementById('b2')
var meio3 = document.getElementById('b3')

var baixo1 = document.getElementById('c1')
var baixo2 = document.getElementById('c2')
var baixo3 = document.getElementById('c3')

function marcar(posicao){
    switch (posicao){
        case 1:
            cima1.style.background = 'black'
            break

        case 2:
            cima2.style.background = 'black'
            break
        
        case 3:
            cima3.style.background = 'black'
            break

        case 4:
            meio1.style.background = 'black'
            break

        case 5:
            meio2.style.background = 'black'
            break

        case 6:
            meio3.style.background = 'black'
            break
        
        case 7:
            baixo1.style.background = 'black'
            break

        case 8:
            baixo2.style.background = 'black'
            break

        case 9:
            baixo3.style.background = 'black'
            break
    }
}