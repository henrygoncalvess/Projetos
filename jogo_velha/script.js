var jogarM = document.getElementsByTagName('label')[0]
var jogarP = document.getElementsByTagName('label')[1]

var x = document.getElementsByTagName('label')[2]
var o = document.getElementsByTagName('label')[3]

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

var tempo_espera = false

var jogar_pessoa = false
var jogar_maquina = false

var c = 0
var msg = 'A máquina está escolhendo uma posição...'

function marcar(posicao){
    setTimeout(() => {
        tempo_espera = true
    }, 100);

    if (tempo_espera == true){
        window.alert('o computador está escolhendo uma posição...')
    }else{
        computador = parseInt(Math.random() * 9) + 1

        // se quando eu clicar, a minha posição já tiver sido removida da lista, msg de erro
        if (listaPos.indexOf(posicao) == -1){
            setTimeout(() => {
                tempo_espera = false
            }, 100);
            window.alert('Posição ocupada, escolha outra')
        }

        else{

            mensagem.innerHTML = ''
            escrever()

            ocupados.push(posicao)
            listaPos.splice(listaPos.indexOf(posicao), 1)
            azul.push(posicao)

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
                verificar(azul)

                if (verificar(azul)){
                    if (escolha == 1){
                        window.alert(`azul ganhou`)
                    }else{
                        window.alert(`vermelho ganhou`)
                    }


                    fim = true
                    limpar()
                }

                else{

                    // não deixa repetir as posições
                    while (ocupados.indexOf(computador) != -1){
                        computador = parseInt(Math.random() * 9) + 1
                        if (ocupados.length > 8){
                            break
                        }
                    }

                    // se todas as posições forem usadas, alerta de empate. Zera tudo
                    if (ocupados.length > 8){
                        fim = true
                        window.alert('EMPATE')
                        limpar()
                    }

                    else{
                        mensagem.innerHTML = '<br><br>'

                        ocupados.push(computador)
                        listaPos.splice(listaPos.indexOf(computador), 1)
                        vermelho.push(computador)

                        if (escolha == 1){
                            fotoJOG = fotoPC
                        }else{
                            fotoJOG = '<img src="imagens/x.png">'
                        }

                        if (fim == false){
                            mostrar(computador)
                            tempo_espera = false
                        }
                    }
                }
            }, 2000);
        }

        setTimeout(() => {
            verificar(vermelho)

            if(verificar(vermelho)){
                if (escolha == 1){
                        window.alert(`vermelho ganhou`)
                    }else{
                        window.alert(`azul ganhou`)
                }
                fim = true
                limpar()
            }
        }, 2300);
    }
}

function limpar(){

    computador = 0
    tempo_espera = false
    fim = false
    listaPos = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ocupados = []
    azul = []
    vermelho = []
    mensagem.opacity = '0'

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

        case 3:
            limpar()

            jogarM.style.color = 'rgb(54, 71, 223)'
            jogarM.style.fontSize = '1.2em'

            jogarP.style.color = 'rgba(0, 0, 0, 0.616)'
            jogarP.style.fontSize = '1em'
            break

        case 4:
            limpar()

            jogarP.style.color = 'rgb(54, 71, 223)'
            jogarP.style.fontSize = '1.2em'

            jogarM.style.color = 'rgba(0, 0, 0, 0.616)'
            jogarM.style.fontSize = '1em'
            break
    }
}


function verificar(lista){
    if (
        lista.length >= 3 && lista.indexOf(1) != -1 &&
        lista.indexOf(2) != -1 && lista.indexOf(3) != -1 ||
        lista.indexOf(4) != -1 && lista.indexOf(5) != -1 &&
        lista.indexOf(6) != -1 || lista.indexOf(7) != -1 &&
        lista.indexOf(8) != -1 && lista.indexOf(9) != -1 ||
        lista.indexOf(1) != -1 && lista.indexOf(4) != -1 &&
        lista.indexOf(7) != -1 || lista.indexOf(2) != -1 &&
        lista.indexOf(5) != -1 && lista.indexOf(8) != -1 ||
        lista.indexOf(3) != -1 && lista.indexOf(6) != -1 &&
        lista.indexOf(9) != -1 || lista.indexOf(1) != -1 &&
        lista.indexOf(5) != -1 && lista.indexOf(9) != -1 ||
        lista.indexOf(3) != -1 && lista.indexOf(5) != -1 &&
        lista.indexOf(7) != -1)
        {
            return true
    }else{
            return false
    }
}

function escrever(){
    mensagem.innerHTML += `${msg[c]}`
    c++

    setTimeout(() => {
        if (c == msg.length){
            cancelAnimationFrame(id)
            c = 0
        }else{
            id = requestAnimationFrame(escrever)
        }
    }, 20)
}
