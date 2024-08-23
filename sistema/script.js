var ficha = document.getElementById('ficha')

var nome = document.getElementById('cliente')
var checkbox = document.querySelectorAll('input[type="checkbox"]')
var agend = document.getElementById('agendamento')
var horario = document.getElementById('horario')
var total = document.getElementById('atualizar')

var aviso = document.getElementById('aviso')
const regexNome = /^[a-zA-Zà-úÀ-Ú\s]{0,30}$/i

var circulo = document.getElementById('circulo')
var rodando = true

carregarClientes()

class DataClinica{
    constructor(novaData){
        this.novaData = novaData
    }

    adicionarZero(res){
        if (!(res < 10)){
            return res
        }

        return `0${res}`
    }

    ano(){
        if ((this.novaData.getMonth() + 2) > 12){
            return this.novaData.getFullYear() + 1
        }

        return this.novaData.getFullYear()
    }

    mes(quantMeses=1){
        if ((this.novaData.getMonth() + quantMeses) > 12){
            return '01'
        }

        return this.adicionarZero(this.novaData.getMonth() + quantMeses)
    }

    dia(){
        return this.adicionarZero(this.novaData.getDate())
    }

    hora(){
        if (this.adicionarZero(this.novaData.getHours() + 3) >= 24){
            return 0
        }
        
        return this.adicionarZero(this.novaData.getHours() + 3)
    }

    min(){ 
        return this.adicionarZero(this.novaData.getMinutes())
    }

    formatar(){
        return `${this.novaData.toLocaleDateString('pt-br')} -- ${this.hora()}h${this.min()}`
    }

    proximoMes(quantidadeMeses){
        let string = `${this.dia()}/${this.mes(quantidadeMeses + 1)}/${this.ano()} -- ${this.hora()}h${this.min()}`

        return string
    }
}



class Criar{
    static #nomeCliente(elemento){
        return `
        <strong id="nomeTabela">
            ${elemento.cliente.toUpperCase()}
        </strong>
        <span class="material-symbols-outlined" id="setaBaixo">
            keyboard_arrow_down
        </span>
        <span class="material-symbols-outlined" id="lapis">
            edit
        </span>
        <span class="material-symbols-outlined" id="lixo">
            delete
        </span>`
    }

    static #infoCliente(elemento, data){
        return `
        <div>
        <strong>Serviços:</strong>
            <span id="infoServico">
                ${elemento.servico}
            </span>
        <br>
        <strong>Data da Consulta:</strong>
            <span id="infoDataAtual">
                ${data.formatar()}
            </span>
        <br>
        <strong id="editarData">Próxima Consulta:
            <span id="infoProximaData">
                ${data.proximoMes(1)}
            </span>
        </strong>
        <br>
        <strong>Total:</strong>
            <mark id="tabelaTot">
            R$${elemento.total},00
            </mark>
        </div>`
    }

    static descricao(elemento){
        let data = new DataClinica(new Date(elemento.agendamento))

        let p = document.createElement('p')
        let divInfo = document.createElement('div')

        p.innerHTML = this.#nomeCliente(elemento)
        divInfo.innerHTML = this.#infoCliente(elemento, data)

        divInfo.style.display = 'none'

        p.appendChild(divInfo)
        ficha.appendChild(p)
    }



    static #estadoIcone(lapis, lixo, estado){
        switch(estado){
            case 'aberto':
                lapis.innerText = 'check'
                lapis.style.color = 'green'
                lixo.innerText = 'close'
                lixo.style.color = 'gray'
                break

            case 'fechado':
                lapis.innerText = 'edit'
                lapis.style.color = 'gray'
                lixo.innerText = 'delete'
                lixo.style.color = 'red'
                break
        }
    }

    static animacaoDoIcone(posicao){
        let div = document.querySelectorAll('div [style="display: none;"]')[posicao]

        let iconeSeta = document.querySelectorAll('#setaBaixo')[posicao]
        let iconeLapis = document.querySelectorAll('#lapis')[posicao]
        let iconeLixo = document.querySelectorAll('#lixo')[posicao]

        iconeSeta.addEventListener('click', () => {
            if (div.style.display == 'none'){
                div.style.display = 'block'
                iconeSeta.innerText = 'keyboard_arrow_up'
            }else if (iconeLapis.innerText == 'check'){
                div.style.display = 'block'
            }else{
                div.style.display = 'none'
                iconeSeta.innerText = 'keyboard_arrow_down'
                this.#estadoIcone(iconeLapis, iconeLixo, 'fechado')
            }
        })

        iconeLapis.addEventListener('click', () => {
            if (div.style.display == 'block'){
                if (iconeLapis.innerText == 'edit'){
                    this.#estadoIcone(iconeLapis, iconeLixo, 'aberto')
                }else{
                    this.#estadoIcone(iconeLapis, iconeLixo, 'fechado')
                }
            }
        })

        iconeLixo.addEventListener('click', () => {
            if (div.style.display == 'block'){
                if (iconeLixo.innerText == 'close'){
                    this.#estadoIcone(iconeLapis, iconeLixo, 'fechado')
                }else{
                    Requisicao.DELETE(posicao)
                }
            }
        })
    }
}



class Atribuir_Icone{
    static edicaoDeData(elemento, posicao){
        let div = document.querySelectorAll('div [style="display: none;"]')[posicao]

        let dataOriginal = new DataClinica(new Date(elemento.agendamento))
        let iconeLapis = document.querySelectorAll('#lapis')[posicao]
        let iconeLixo = document.querySelectorAll('#lixo')[posicao]

        let proximaConsulta = document.querySelectorAll('#infoProximaData')[posicao]


        iconeLapis.addEventListener('click', () => {
            if (div.style.display == 'block'){
                if (iconeLapis.innerText == 'check'){
                    proximaConsulta.innerHTML = `
                    <input type="date" id="alterarData"
                    value="${dataOriginal.ano()}-${dataOriginal.mes(2)}-${dataOriginal.dia()}">

                    <input type="time" id="alterarHora"
                    value="${dataOriginal.hora()}:${dataOriginal.min()}">
                    `
                }
            }
        })

        iconeLixo.addEventListener('click', () => {
            if (div.style.display == 'block'){
                if (iconeLixo.innerText == 'delete'){
                    proximaConsulta.innerHTML = dataOriginal.proximoMes(1)
                }
            }
        })
    }

    static atualizacaoDeData(posicao){
        let div = document.querySelectorAll('div [style="display: none;"]')[posicao]
        
        let iconeLapis = document.querySelectorAll('#lapis')[posicao]
        let proximaConsulta = document.querySelectorAll('#infoProximaData')[posicao]
        let consultaAtual = document.querySelectorAll('#infoDataAtual')[posicao]
        let nomeCliente = document.querySelectorAll('#nomeTabela')[posicao].innerText
        
        iconeLapis.addEventListener('click', () => {
            if (div.style.display == 'block'){
                if (iconeLapis.innerText == 'edit'){
                    Requisicao.PUT(
                        `${document.getElementById('alterarData').value} ${document.getElementById('alterarHora').value}`, nomeCliente
                    )

                    let novaDataEditada = new DataClinica(new Date(`
                        ${document.getElementById('alterarData').value}
                        ${document.getElementById('alterarHora').value}
                    `))

                    proximaConsulta.innerHTML = novaDataEditada.proximoMes(1)

                    consultaAtual.innerHTML = novaDataEditada.formatar()
                }
            }
        })
    }
}



class Atualizar{
    static filtro(){
        let select = document.querySelectorAll('select')[0]

        select.addEventListener('change', async () => {
            const response = await fetch('https://primeiro-sistema.onrender.com/api/pessoa', {
                method: 'POST',

                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    filtro: select.value
                })
            })

            const listaFiltrada = await response.json()

            let quantidadeDeElemento = document.querySelectorAll('#nomeTabela').length

            for (let c = 0; c < quantidadeDeElemento; c++){
                let p = document.querySelectorAll('p')[c + 2]

                if (listaFiltrada[c] === undefined){
                    p.style.display = 'none'
                }else{
                    p.style.display = 'block'
                    
                    let data = new DataClinica(new Date(listaFiltrada[c].agendamento))
    
                    document.querySelectorAll('#nomeTabela')[c].innerText = listaFiltrada[c].cliente.toUpperCase()
    
                    document.querySelectorAll('#infoServico')[c].innerText = listaFiltrada[c].servico

                    document.querySelectorAll('#infoDataAtual')[c].innerText = data.formatar()

                    document.querySelectorAll('#infoProximaData')[c].innerText = data.proximoMes(1)

                    document.querySelectorAll('#tabelaTot')[c].innerText = `R$${listaFiltrada[c].total},00`

                    Atribuir_Icone.edicaoDeData(listaFiltrada[c], c)
                }
            }
        })
    }
}



class Requisicao{
    static async DELETE(posicao){
        let nomeCliente = document.querySelectorAll('#nomeTabela')[posicao].innerText

        try {
            const response = await fetch('https://primeiro-sistema.onrender.com/api/pessoa', {
                method: 'DELETE',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    nome: nomeCliente
                })
            })

            const dados = await response.json()
            console.log(dados)

            document.querySelectorAll('p')[posicao + 2].style.display = 'none'
        }
        
        catch (erro) {
            console.log(erro)
        }
    }

    static async PUT(data, nome){
        try {
            const response = await fetch('https://primeiro-sistema.onrender.com/api/pessoa', {
                method: 'PUT',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    agendamento: data,
                    nome: nome
                })
            })

            const dados = await response.json()
            console.log(dados)
        }

        catch (erro){
            console.log(erro)
        }
    }

    static POST(nome, escolhas, data, total){
        return {
            method: 'POST',

            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                cliente: nome,
                servico: escolhas,
                agendamento: data,
                total: total,
            })
        }
    }
}



class Validar{
    constructor(novoNome){
        this.novoNome = novoNome
    }

    caracteres(){
        if (!regexNome.test(this.novoNome)){
            aviso.style.opacity = 1
        }else{
            aviso.style.opacity = 0
        }
    }

    preenchimento(){
        if (!regexNome.test(this.novoNome) || this.novoNome.length <= 0){
            return true
        }
    }

    totalServicos(){
        let soma = 0

        if (document.getElementById('manu').checked) soma += 60
        if (document.getElementById('limp').checked) soma += 100
        if (document.getElementById('remo').checked) soma += 200

        total.innerHTML = `
        <mark>R$${soma},00</mark>`

        if (soma == 0) return false
        return soma
    }

    stringServicos(){
        let string = ''

        if (document.getElementById('manu').checked) string += 'Manutenção'

        if (document.getElementById('limp').checked) string += 'Limpeza'

        if (document.getElementById('remo').checked) string += 'Remoção'

        if (!/^Manutenção$/.test(string)){
            string = string.replace('Manutenção', 'Manutenção, ')
        }

        if (!/Limpeza$/.test(string)){
            string = string.replace('Limpeza', 'Limpeza, ')
        }

        return string
    }
}



async function carregarClientes(){
    try {
        const response = await fetch('https://primeiro-sistema.onrender.com/api/pessoa');
        const lista = await response.json()

        rodando = false
        circulo.style.display = 'none'

        Atualizar.filtro()

        lista.forEach((elemento, posicao) => {
            Criar.descricao(elemento)
            Criar.animacaoDoIcone(posicao)

            Atribuir_Icone.edicaoDeData(elemento, posicao)
            Atribuir_Icone.atualizacaoDeData(posicao)
        })
    }

    catch (erro) {
        console.error('Erro ao carregar os clientes:', erro);
    }
}



async function cadastrar() {
    const cadastrarCliente = new Validar(nome.value)
    
    if (cadastrarCliente.preenchimento()){
        window.alert('Nome com caracter inválido ou campo vazio, corrigir o campo antes de cadastrar')
        nome.focus()
    }
    
    else{
        let servicoString = cadastrarCliente.stringServicos()
        
        let total = cadastrarCliente.totalServicos()

        if (!total){
            window.alert('Selecione no mínimo 1 serviço')
        }
        
        else{
            const post = Requisicao.POST(
                nome.value,
                servicoString,
                `${agend.value} ${horario.value}`,
                total
            )

            const response = await fetch('https://primeiro-sistema.onrender.com/api/pessoa', post)
    
            const json = await response.json()
    
            let posicao = document.querySelectorAll('#nomeTabela').length

            Criar.descricao(json)
            Criar.animacaoDoIcone(posicao)

            Atribuir_Icone.edicaoDeData(json, posicao)
            Atribuir_Icone.atualizacaoDeData(posicao)
    
            nome.value = ''

            console.log(json)
        }
    }
}



let i = 0
let id;
function rodar(){
    i += 7
    circulo.style.rotate = `${i}deg`

    if (rodando == false){
        cancelAnimationFrame(id)
        i = 0
    }else{
        id = requestAnimationFrame(rodar)
    }
}

rodar()

function validacao(){
    let validarCliente = new Validar(nome.value)
    validarCliente.caracteres()
    validarCliente.totalServicos()
    validarCliente.stringServicos()

    let data = new DataClinica(new Date())
    agend.value = `${data.ano()}-${data.mes()}-${data.dia()}`
    horario.value = `${data.hora()}:${data.min()}`
}