var x = document.getElementsByTagName('label')[0]
var o = document.getElementsByTagName('label')[1]

var escolha = 1

var foto = '<img src="imagens/x.png">'

var cima1 = document.getElementsByTagName('td')[0]
var cima2 = document.getElementsByTagName('td')[1]
var cima3 = document.getElementsByTagName('td')[2]

var meio1 = document.getElementsByTagName('td')[3]
var meio2 = document.getElementsByTagName('td')[4]
var meio3 = document.getElementsByTagName('td')[5]

var baixo1 = document.getElementsByTagName('td')[6]
var baixo2 = document.getElementsByTagName('td')[7]
var baixo3 = document.getElementsByTagName('td')[8]

function marcar(posicao){
    if (escolha == 2){
        foto = '<img src="imagens/o.png">'
    }else{
        foto = '<img src="imagens/x.png">'
    }

    switch (posicao){
        case 1:
            cima1.style.opacity = '100'
            cima1.innerHTML = foto
            break

        case 2:
            cima2.style.opacity = '100'
            cima2.innerHTML = foto
            break
        
        case 3:
            cima3.style.opacity = '100'
            cima3.innerHTML = foto
            break

        case 4:
            meio1.style.opacity = '100'
            meio1.innerHTML = foto
            break

        case 5:
            meio2.style.opacity = '100'
            meio2.innerHTML = foto
            break

        case 6:
            meio3.style.opacity = '100'
            meio3.innerHTML = foto
            break
        
        case 7:
            baixo1.style.opacity = '100'
            baixo1.innerHTML = foto
            break

        case 8:
            baixo2.style.opacity = '100'
            baixo2.innerHTML = foto
            break

        case 9:
            baixo3.style.opacity = '100'
            baixo3.innerHTML = foto
            break
    }
}

function checado(num){
    switch (num){
        case 1:
            escolha = 1
            x.style.color = 'blue'
            o.style.color = 'black'
            break
    
        case 2:
            escolha = 2
            o.style.color = 'red'
            x.style.color = 'black'
            break
    }
}