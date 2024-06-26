var x = document.getElementsByTagName('label')[0]
var o = document.getElementsByTagName('label')[1]

var escolha = 1

var fotoJOG = '<img src="imagens/x.png">'

var fotoPC = '<img src="imagens/o.png">'

var cima1 = document.getElementsByTagName('td')[0]
var cima2 = document.getElementsByTagName('td')[1]
var cima3 = document.getElementsByTagName('td')[2]

var meio1 = document.getElementsByTagName('td')[3]
var meio2 = document.getElementsByTagName('td')[4]
var meio3 = document.getElementsByTagName('td')[5]

var baixo1 = document.getElementsByTagName('td')[6]
var baixo2 = document.getElementsByTagName('td')[7]
var baixo3 = document.getElementsByTagName('td')[8]

var mensagem = document.getElementById('msg')

var computador = 0

var listaPos = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var ocupados = []
var fim = false
var azul = []
var vermelho = []

function marcar(posicao){
    computador = parseInt(Math.random() * 9) + 1

    // se quando eu clicar, a minha posição já tiver sido removida da lista, msg de erro
    if (listaPos.indexOf(posicao) == -1){
        window.alert('Posição ocupada, escolha outra')
    }
    
    else{

        mensagem.style.opacity = '100'

        ocupados.push(posicao)
        listaPos.splice(listaPos.indexOf(posicao), 1)

        if (escolha == 2){
            fotoJOG = '<img src="imagens/o.png">'
        }else{
            fotoJOG = '<img src="imagens/x.png">'
        }
    
    
        function mostrar(pos){
            switch (pos){
                case 1:
                    cima1.style.opacity = '100'
                    cima1.innerHTML = fotoJOG
                    break
        
                case 2:
                    cima2.style.opacity = '100'
                    cima2.innerHTML = fotoJOG
                    break
        
                case 3:
                    cima3.style.opacity = '100'
                    cima3.innerHTML = fotoJOG
                    break
        
                case 4:
                    meio1.style.opacity = '100'
                    meio1.innerHTML = fotoJOG
                    break
        
                case 5:
                    meio2.style.opacity = '100'
                    meio2.innerHTML = fotoJOG
                    break
        
                case 6:
                    meio3.style.opacity = '100'
                    meio3.innerHTML = fotoJOG
                    break
        
                case 7:
                    baixo1.style.opacity = '100'
                    baixo1.innerHTML = fotoJOG
                    break
        
                case 8:
                    baixo2.style.opacity = '100'
                    baixo2.innerHTML = fotoJOG
                    break
        
                case 9:
                    baixo3.style.opacity = '100'
                    baixo3.innerHTML = fotoJOG
                    break
            }
        }

        mostrar(posicao)
        
        setTimeout(() => {
            // não deixa repetir as posições
            while (ocupados.indexOf(computador) != -1){
                computador = parseInt(Math.random() * 9) + 1
                if (ocupados.length > 8){
                    break
                }
            }

            // se todas as posições forem usadas, alerta de empate. Zera tudo
            if (ocupados.length > 8){
                window.alert('EMPATE')
                limpar()
            }
            
            else{
                mensagem.style.opacity = '0'

                ocupados.push(computador)
                listaPos.splice(listaPos.indexOf(computador), 1)

                if (escolha == 1){
                    fotoJOG = fotoPC
                }else{
                    fotoJOG = '<img src="imagens/x.png">'
                }
                
                mostrar(computador)
            }
        }, 2000);
    }

}

function limpar(){
    listaPos = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ocupados = []
    
    cima1.style.opacity = '0'
    cima2.style.opacity = '0'
    cima3.style.opacity = '0'
    meio1.style.opacity = '0'
    meio2.style.opacity = '0'
    meio3.style.opacity = '0'
    baixo1.style.opacity = '0'
    baixo2.style.opacity = '0'
    baixo3.style.opacity = '0'
}

function checado(num){

    switch (num){
        case 1:
            escolha = 1

            limpar()

            x.style.color = '#3030ff'
            o.style.color = 'rgba(0, 0, 0, 0.616)'
            break
    
        case 2:
            escolha = 2
            
            limpar()

            o.style.color = '#FF4C4C'
            x.style.color = 'rgba(0, 0, 0, 0.616)'
            break
    }
}