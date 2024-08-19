var ficha = document.getElementById('ficha')

var nome = document.getElementById('cliente')
var checkbox = document.querySelectorAll('input[type="checkbox"]')
var textoServ = document.querySelectorAll('label')
var agend = document.getElementById('agendamento')
var horario = document.getElementById('horario')
var total = document.getElementById('atualizar')
var selecionados = []
var servTotal = 60

const regexNome = /^[a-zA-Zà-úÀ-Ú\s]{0,30}$/i
var aviso = document.getElementById('aviso')

carregarClientes()

class RequisicaoGET{
    static nomeCliente(elemento){
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

    static infoCliente(elemento, data){
        return `
        <div>
        <strong>Serviços:</strong> <span id="filtroSV">${elemento.servico}</span>
        <br>
        <strong>Data da Consulta:</strong> <span id="filtroDT">${data.formatar()}</span>
        <br>
        <strong id="editarData">Próxima Consulta: <span id="filtroCS">${data.proximoMes(1)}</span></strong>
        <br>
        <strong>Total:</strong>
            <mark id="tabelaTot">
            R$${elemento.total},00
            </mark>
        </div>`
    }

    static estadoIcon(lapis, lixo, estado){
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

    static async removerCliente(nome, pos){
        try {
            const response = await fetch('https://primeiro-sistema.onrender.com/api/pessoa', {
                method: 'DELETE',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    nome: nome
                })
            })

            const dados = await response.json()
            console.log(dados)

            document.querySelectorAll('p')[pos + 2].style.display = 'none'
        }
        
        catch (erro) {
            console.log(erro)
        }
    }

    static async atualizarDataAtual(data, nome){
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

    static editarDataAtual(elementoData, dataOriginal, estado, consultaAtual, nome){
        switch(estado){
            case 'editar':
                elementoData.innerHTML = `
                <input type="date" id="alterarData"
                value="${dataOriginal.ano()}-${dataOriginal.mes(2)}-${dataOriginal.dia()}">

                <input type="time" id="alterarHora"
                value="${dataOriginal.hora()}:${dataOriginal.min()}">
                `
                break

            case 'salvar':
                this.atualizarDataAtual(
                    `${document.getElementById('alterarData').value} ${document.getElementById('alterarHora').value}`, nome.innerText
                )

                let novaDataEditada = new DataClinica(new Date(`
                    ${document.getElementById('alterarData').value}
                    ${document.getElementById('alterarHora').value}
                `))

                elementoData.innerHTML = novaDataEditada.proximoMes(1)

                // dados que serão enviador para a requisição de atualização
                // this.atualizarDataAtual(novaDataEditada)
                consultaAtual.innerHTML = novaDataEditada.formatar()

                return novaDataEditada

            case 'fechar':
                // data no estado anterior
                elementoData.innerHTML = dataOriginal.proximoMes(1)
                break
        }
    }


    static icon(seta, lapis, lixo, elementoData, div, formatoData, consultaAtual, nome, pos){
        let dataOriginal = new DataClinica(new Date(formatoData))

        seta.addEventListener('click', () => {
            if (div.style.display == 'none'){
                div.style.display = 'block'
                seta.innerText = 'keyboard_arrow_up'
            }else if (lapis.innerText == 'check'){
                div.style.display = 'block'
            }else{
                div.style.display = 'none'
                seta.innerText = 'keyboard_arrow_down'
                this.estadoIcon(lapis, lixo, 'fechado')
            }
        })

        lapis.addEventListener('click', () => {
            if (div.style.display == 'block'){
                if (lapis.innerText == 'edit'){
                    this.estadoIcon(lapis, lixo, 'aberto')

                    this.editarDataAtual(elementoData, dataOriginal, 'editar', consultaAtual)
                }else{
                    this.estadoIcon(lapis, lixo, 'fechado')

                    dataOriginal = this.editarDataAtual(elementoData, dataOriginal, 'salvar', consultaAtual, nome)
                }
            }
        })

        lixo.addEventListener('click', () => {
            if (div.style.display == 'block'){
                if (lixo.innerText == 'close'){
                    this.estadoIcon(lapis, lixo, 'fechado')

                    this.editarDataAtual(elementoData, dataOriginal, 'fechar', consultaAtual)
                }else{
                    this.removerCliente(nome.innerText, pos)
                }
            }
        })
    }

    static criarDescricao(elemento, pos='cadastro'){
        if (pos == 'cadastro'){
            pos = (document.querySelectorAll('#nomeTabela').length)
        }

        let data = new DataClinica(new Date(elemento.agendamento))

        let p = document.createElement('p')
        let divInfo = document.createElement('div')

        p.innerHTML = this.nomeCliente(elemento)
        divInfo.innerHTML = this.infoCliente(elemento, data)

        divInfo.style.display = 'none'

        p.appendChild(divInfo)
        ficha.appendChild(p)

        let iconSeta = document.querySelectorAll('#setaBaixo')[pos]
        let lapis = document.querySelectorAll('#lapis')[pos]
        let lixo = document.querySelectorAll('#lixo')[pos]

        // elemento para editar a data da próxima consulta
        let proximaConsulta = document.querySelectorAll('#filtroCS')[pos]
        let consultaAtual = document.querySelectorAll('#filtroDT')[pos]

        // elemento com nome do cliente para deletar
        let deletarCliente = document.querySelectorAll('#nomeTabela')[pos]

        this.icon(iconSeta, lapis, lixo, proximaConsulta, divInfo, elemento.agendamento, consultaAtual, deletarCliente, pos)
    }
}



class Atualizar{
    constructor(nome='', escolhas='', data='', total=0){
        this.nome = nome
        this.escolhas = escolhas
        this.data = data
        this.total = total
    }

    metodoPOST(){
        return {
            method: 'POST',

            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                cliente: this.nome,
                servico: this.escolhas,
                agendamento: this.data,
                total: this.total,
            })
        }
    }

    static filtrarLista(){
        let select = document.querySelectorAll('select')[0]
        let filtroNome = document.querySelectorAll('#nomeTabela')
        let filtroServico = document.querySelectorAll('#filtroSV')
        let filtroData = document.querySelectorAll('#filtroDT')
        let filtroConsulta = document.querySelectorAll('#filtroCS')
        let filtroTotal = document.querySelectorAll('#tabelaTot')
        let p = document.querySelectorAll('p')

        let div = document.querySelectorAll('div [style]')
        let lapis = document.querySelectorAll('#lapis')
        let lixo = document.querySelectorAll('#lixo')

        
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

            const json = await response.json()

            for (let c = 0; c < filtroNome.length; c++){
                if (json[c] === undefined){
                    p[c + 2].style.display = 'none'
                }else{
                    let data = new DataClinica(new Date(json[c].agendamento))
                    p[c + 2].style.display = 'block'

                    filtroNome[c].innerHTML = json[c].cliente.toUpperCase()
                    filtroServico[c].innerHTML = json[c].servico
                    filtroData[c].innerHTML = data.formatar()
                    filtroConsulta[c].innerHTML = data.proximoMes(1)
                    filtroTotal[c].innerHTML = `R$${json[c].total},00`
                    
                    lapis[c].addEventListener('click', () => {
                        if (div[c].style.display == 'block'){
                            if (lapis[c].innerText == 'check'){
                                RequisicaoGET.editarDataAtual(filtroConsulta[c], data, 'editar', filtroData[c])
                            }
                        }
                    })

                    lixo[c].addEventListener('click', () => {
                        if (div[c].style.display == 'block'){
                            if (lixo[c].innerText == 'delete'){
                                RequisicaoGET.editarDataAtual(filtroConsulta[c], data, 'fechar', filtroData[c])
                            }else{
                                data = RequisicaoGET.removerCliente(filtroNome[c].innerText, c)
                            }
                        }
                    })
                }
            }
        })
    }
}



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
        return this.adicionarZero(this.novaData.getHours())
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



class Validar{
    constructor(novoNome, checkbox, posicao){
        this.novoNome = novoNome
        this.checkbox = checkbox
        this.posicao = posicao
    }

    RegExp(){
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

    servicos(checkbox, posicao){
        let soma = 0

        if (checkbox === false){
            selecionados.splice(posicao, 1, false)
        }else{
            selecionados.splice(posicao, 1, true)
        }

        selecionados.forEach((v, pos) => {
            if (v === true){
                switch (pos){
                    case 0:
                        soma += 60
                        break
                    case 1:
                        soma += 100
                        break
                    case 2:
                        soma += 200
                        break
                }
            }
        })

        total.innerHTML = `
        <mark>R$${soma},00</mark>`
        servTotal = soma
    }

    validarServicos(){
        selecionados.forEach((valor, pos) => {
            if (valor){
                for (let c = 0; c < selecionados.length; c++){
                    selecionados[pos] = pos
                }
            }
        })
    
        for (let c = 0; c < 2; c++){
            selecionados.forEach((valor, pos) => {
                if (valor === false){
                    selecionados.splice(pos, 1)
                }
            })
        }
    }

    validarStringServico(){
        let string = ''
        
        selecionados.forEach(v => {
            switch(v){
                case 0:
                    string += `${textoServ[v].innerText.replace(" ", "")}`
                    break

                case 1:
                    if (selecionados.length == 2 && selecionados.indexOf(2) != -1 || selecionados.length == 1){
                        string += `${textoServ[v].innerText.replace(" ", "")}`
                    }else{
                        string += `, ${textoServ[v].innerText}`
                    }
                    break

                case 2:
                    if (selecionados.length > 1){
                        string += `, ${textoServ[v].innerText}`
                    }else{
                        string += `${textoServ[v].innerText.replace(" ", "")}`
                    }
                    break
            }
        })

        return string
    }
}



async function cadastrar() {
    const cadastrarCliente = new Validar(nome.value)
    
    if (selecionados[0] === false && selecionados[1] === false && selecionados[2] === false){
        window.alert('ERRO selecione no mínimo 1 serviço')
    }

    else{
        if (cadastrarCliente.preenchimento()){
            window.alert('Nome com caracter inválido ou campo vazio, corrigir o campo antes de cadastrar')
            nome.focus()
        }
        
        else{
            cadastrarCliente.validarServicos()

            // dados que serão enviados ao banco
            let servicos_string = cadastrarCliente.validarStringServico()

            const novoCliente = new Atualizar(
                nome.value,
                servicos_string,
                `${agend.value} ${horario.value}`,
                servTotal,
            )

            const response = await fetch('https://primeiro-sistema.onrender.com/api/pessoa', novoCliente.metodoPOST())

            const json = await response.json()

            console.log(json)
            RequisicaoGET.criarDescricao(json, 'cadastro')
        }
    }
}



async function carregarClientes(){
    try {
        const response = await fetch('https://primeiro-sistema.onrender.com/api/pessoa');
        const lista = await response.json()

        lista.forEach((elemento, pos) => {
            RequisicaoGET.criarDescricao(elemento, pos)
        })
    }

    catch (erro) {
        console.error('Erro ao carregar os clientes:', erro);
    }
}



function inicializar(check, posicao){
    selecionados.push(checkbox[0].checked, checkbox[1].checked, checkbox[2].checked)

    // validação de nome e serviços
    let validarCliente = new Validar(nome.value)
    validarCliente.RegExp()
    validarCliente.servicos(check, posicao)

    // validação de data
    let data = new DataClinica(new Date())
    agend.value = `${data.ano()}-${data.mes()}-${data.dia()}`
    horario.value = `${data.hora()}:${data.min()}`

    // validar o filtro de clientes
    setTimeout(() => {
        Atualizar.filtrarLista()
    }, 2000);
}