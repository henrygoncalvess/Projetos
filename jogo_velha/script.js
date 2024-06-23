var x = document.getElementsByTagName('label')[0]
var o = document.getElementsByTagName('label')[1]

var cima1 = document.getElementsByTagName('img')[0]
var cima2 = document.getElementsByTagName('img')[1]
var cima3 = document.getElementsByTagName('img')[2]

var meio1 = document.getElementsByTagName('img')[3]
var meio2 = document.getElementsByTagName('img')[4]
var meio3 = document.getElementsByTagName('img')[5]

var baixo1 = document.getElementsByTagName('img')[6]
var baixo2 = document.getElementsByTagName('img')[7]
var baixo3 = document.getElementsByTagName('img')[8]

function marcar(posicao){
    switch (posicao){
        case 1:
            cima1.style.opacity = '100'
            break

        case 2:
            cima2.style.opacity = '100'
            break
        
        case 3:
            cima3.style.opacity = '100'
            break

        case 4:
            meio1.style.opacity = '100'
            break

        case 5:
            meio2.style.opacity = '100'
            break

        case 6:
            meio3.style.opacity = '100'
            break
        
        case 7:
            baixo1.style.opacity = '100'
            break

        case 8:
            baixo2.style.opacity = '100'
            break

        case 9:
            baixo3.style.opacity = '100'
            break
    }
}

function checado(num){
    switch (num){
        case 1:
            x.style.color = 'blue'
            o.style.color = 'black'
            return num
            break
    
        case 2:
            o.style.color = 'red'
            x.style.color = 'black'
            return num
            break
    }
}