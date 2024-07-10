var tela = document.getElementById('especial')
var bola = document.getElementById('circulo')

let img = document.querySelectorAll('img')
var tamC = `https://api.dicebear.com/9.x/pixel-art/svg?scale=150&translateY=45&ackgroundColor=ffffff`

var tamO = `https://api.dicebear.com/9.x/pixel-art/svg?scale=190&translateY=30&ackgroundColor=ffffff`

var tamB = `https://api.dicebear.com/9.x/pixel-art/svg?scale=200&translateY=-45&ackgroundColor=ffffff`

var tamR = `https://api.dicebear.com/9.x/pixel-art/svg?scale=160&translateY=-90&ackgroundColor=ffffff`

var tamA = `https://api.dicebear.com/9.x/pixel-art/svg?scale=120&translateY=40&ackgroundColor=ffffff`

var urlava;
var pele = `&skinColor=8d5524`
var cabelo = `&hair=short14`
var cc = `&hairColor=28150a`
var olho = `&eyes=variant10`
var corolho = `&eyesColor=000000`
var boca = `&mouth=happy09`
var corboca = `&mouthColor=be7054`
var roupa = `&clothing=variant03`
var corroupa = `&clothingColor=428bca`
var acess = ``
var fundo = `&backgroundColor=ffb162`

async function carregando(){
    if (localStorage.getItem('criou') == 'sim'){
        botao.style.display = 'none'
        inputs.style.display = 'none'
        personalizar.innerHTML = `
        <p>
        &#x2728 Prontinho &#x2728 
        <br>
        seu nome já está na lista...
        <br>
        <br>
        &#x1F447 compartilhe esta página com seus amigos &#x1F447
        <p style="color: blue;">link aqui</p>
        </p>`
    }else{
        botao.style.display = 'inline-block'
        inputs.style.display = 'block'
    }

    
    rodando = true
    tela.style.display = 'block'
    rodar()
    setTimeout(() => {
        rodando = false
        tela.style.display = 'none'
        nome.focus()
    }, 4000);


    urlava = `https://api.dicebear.com/9.x/pixel-art/svg?scale=90`

    custom.setAttribute('src', `${urlava}${cabelo}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}${acess}${fundo}`)

    await conectar(4000)
}

async function avatar(pos){
    rodando = true
    tela.style.display = 'block'
    rodar()

    switch (pos){
        case 1:
            pele = `&skinColor=8d5524`
            break
            
        case 2:
            pele = `&skinColor=b68655`
            break

        case 3:
            pele = `&skinColor=ffdbac`
            break

        case 4:
            cabelo = `&hair=long01`
            break

        case 5:
            cabelo = `&hair=long04`
            break

        case 6:
            cabelo = `&hair=long05`
            break

        case 7:
            cabelo = `&hair=long07`
            break

        case 8:
            cabelo = `&hair=long08`
            break

        case 9:
            cabelo = `&hair=long10`
            break

        case 10:
            cabelo = `&hair=long11`
            break

        case 11:
            cabelo = `&hair=long12`
            break

        case 12:
            cabelo = `&hair=long13`
            break

        case 13:
            cabelo = `&hair=long14`
            break

        case 14:
            cabelo = `&hair=long15`
            break

        case 15:
            cabelo = `&hair=long16`
            break

        case 16:
            cabelo = `&hair=long17`
            break

        case 17:
            cabelo = `&hair=long18`
            break

        case 18:
            cabelo = `&hair=long19`
            break

        case 19:
            cabelo = `&hair=long20`
            break

        case 20:
            cabelo = `&hair=long21`
            break

        case 21:
            cabelo = `&hair=short01`
            break

        case 22:
            cabelo = `&hair=short02`
            break

        case 23:
            cabelo = `&hair=short03`
            break

        case 24:
            cabelo = `&hair=short04`
            break

        case 25:
            cabelo = `&hair=short06`
            break

        case 26:
            cabelo = `&hair=short07`
            break

        case 27:
            cabelo = `&hair=short08`
            break

        case 28:
            cabelo = `&hairColor=transparent`
            break

        case 29:
            cabelo = `&hair=short10`
            break

        case 30:
            cabelo = `&hair=short12`
            break

        case 31:
            cabelo = `&hair=short14`
            break

        case 32:
            cabelo = `&hair=short15`
            break

        case 33:
            cabelo = `&hair=short16`
            break

        case 34:
            cabelo = `&hair=short17`
            break

        case 35:
            cabelo = `&hair=short19`
            break

        case 36:
            cabelo = `&hair=short20`
            break

        case 37:
            cabelo = `&hair=short21`
            break

        case 38:
            cc = `&hairColor=28150a`
            break

        case 39:
            cc = `&hairColor=603015`
            break

        case 40:
            cc = `&hairColor=009bbd`
            break

        case 41:
            cc = `&hairColor=611c17`
            break

        case 42:
            cc = `&hairColor=bd1700`
            break

        case 43:
            cc = `&hairColor=eacc0b`
            break

        case 44:
            olho = `&eyes=variant10`
            break

        case 45:
            olho = `&eyes=variant05`
            break

        case 46:
            olho = `&eyes=variant08`
            break

        case 47:
            olho = `&eyes=variant09`
            break

        case 48:
            olho = `&eyes=variant02`
            break

        case 49:
            corolho = `&eyesColor=000000`
            break

        case 50:
            corolho = `&eyesColor=156b15`
            break

        case 51:
            corolho = `&eyesColor=73230b`
            break

        case 52:
            corolho = `&eyesColor=bd641b`
            break

        case 53:
            corolho = `&eyesColor=6293bd`
            break

        case 54:
            boca = `&mouth=happy09`
            break

        case 55:
            boca = `&mouth=happy06`
            break

        case 56:
            corboca = `&mouthColor=be7054`
            break

        case 57:
            corboca = `&mouthColor=de0f0d`
            break

        case 58:
            corboca = `&mouthColor=e35d6a`
            break

        case 59:
            roupa = `&clothing=variant03`
            break

        case 60:
            roupa = `&clothing=variant05`
            break

        case 61:
            roupa = `&clothing=variant07`
            break

        case 62:
            roupa = `&clothing=variant09`
            break

        case 63:
            roupa = `&clothing=variant10`
            break

        case 64:
            roupa = `&clothing=variant12`
            break

        case 65:
            roupa = `&clothing=variant15`
            break

        case 66:
            roupa = `&clothing=variant22`
            break

        case 67:
            corroupa = `&clothingColor=ae0001`
            break

        case 68:
            corroupa = `&clothingColor=ffc425`
            break

        case 69:
            corroupa = `&clothingColor=00b159`
            break

        case 70:
            corroupa = `&clothingColor=44c585`
            break

        case 71:
            corroupa = `&clothingColor=03396c`
            break

        case 72:
            corroupa = `&clothingColor=428bca`
            break

        case 73:
            corroupa = `&clothingColor=d11141`
            break

        case 74:
            corroupa = `&clothingColor=ff6f69`
            break

        case 75:
            corroupa = `&clothingColor=000000`
            break

        case 76:
            corroupa = `&clothingColor=808080`
            break

        case 77:
            acess = ``
            break

        case 78:
            acess = `&glasses=light07&glassesProbability=100&glassesColor=000000`
            break

        case 79:
            acess = `&hat=variant02&hatProbability=100&hatColor=101010`
            break

        case 80:
            acess = `&hat=variant10&hatProbability=100&hatColor=101010`
            break

        case 81:
            fundo = `&backgroundColor=ffb162`
            break

        case 82:
            fundo = `&backgroundColor=b6e3f4`
            break

        case 83:
            fundo = `&backgroundColor=d1d4f9`
            break

        case 84:
            fundo = `&backgroundColor=909090`
            break
    }

    custom.setAttribute('src', `${urlava}${pele}${cabelo}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}${acess}${fundo}`)

    await conectar(1600)
}

let id2;

function conectar(tempo){
    return new Promise(() => {
        // COR DA PELE
        img[1].setAttribute('src', `${urlava}&skinColor=8d5524${cabelo}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}${acess}`)
        img[2].setAttribute('src', `${urlava}&skinColor=b68655${cabelo}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}${acess}`)
        img[3].setAttribute('src', `${urlava}&skinColor=ffdbac${cabelo}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}${acess}`)
        
        // CABELO
        img[4].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=long01`)
        img[5].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=long04`)
        img[6].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=long05`)
        img[7].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=long07`)
        img[8].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=long08`)
        img[9].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=long10`)
        img[10].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=long11`)
        img[11].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=long12`)
        img[12].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=long13`)
        img[13].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=long14`)
        img[14].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=long15`)
        img[15].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=long16`)
        img[16].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=long17`)
        img[17].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=long18`)
        img[18].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=long19`)
        img[19].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=long20`)
        img[20].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=long21`)
        img[21].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=short01`)
        img[22].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=short02`)
        img[23].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=short03`)
        img[24].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=short04`)
        img[25].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=short06`)
        img[26].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=short07`)
        img[27].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=short08`)
        img[28].setAttribute('src', `${urlava}${pele}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hairColor=transparent`)
        img[29].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=short10`)
        img[30].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=short12`)
        img[31].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=short14`)
        img[32].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=short15`)
        img[33].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=short16`)
        img[34].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=short17`)
        img[35].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=short19`)
        img[36].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=short20`)
        img[37].setAttribute('src', `${urlava}${pele}${cc}${boca}${corboca}${olho}${corolho}${roupa}${corroupa}&hair=short21`)

        // COR DO CABELO
        img[38].setAttribute('src', `${tamC}${pele}${cabelo}${olho}${corolho}&hairColor=28150a`)
        img[39].setAttribute('src', `${tamC}${pele}${cabelo}${olho}${corolho}&hairColor=603015`)
        img[40].setAttribute('src', `${tamC}${pele}${cabelo}${olho}${corolho}&hairColor=009bbd`)
        img[41].setAttribute('src', `${tamC}${pele}${cabelo}${olho}${corolho}&hairColor=611c17`)
        img[42].setAttribute('src', `${tamC}${pele}${cabelo}${olho}${corolho}&hairColor=bd1700`)
        img[43].setAttribute('src', `${tamC}${pele}${cabelo}${olho}${corolho}&hairColor=eacc0b`)

        // OLHO
        img[44].setAttribute('src', `${tamO}${pele}${cabelo}${cc}${corboca}${corolho}${acess}&eyes=variant10`)
        img[45].setAttribute('src', `${tamO}${pele}${cabelo}${cc}${corboca}${corolho}${acess}&eyes=variant05`)
        img[46].setAttribute('src', `${tamO}${pele}${cabelo}${cc}${corboca}${corolho}${acess}&eyes=variant08`)
        img[47].setAttribute('src', `${tamO}${pele}${cabelo}${cc}${corboca}${corolho}${acess}&eyes=variant09`)
        img[48].setAttribute('src', `${tamO}${pele}${cabelo}${cc}${corboca}${corolho}${acess}&eyes=variant02`)

        // COR DO OLHO
        img[49].setAttribute('src', `${tamO}${pele}${cabelo}${cc}${corboca}${olho}${acess}&eyesColor=000000`)
        img[50].setAttribute('src', `${tamO}${pele}${cabelo}${cc}${corboca}${olho}${acess}&eyesColor=156b15`)
        img[51].setAttribute('src', `${tamO}${pele}${cabelo}${cc}${corboca}${olho}${acess}&eyesColor=73230b`)
        img[52].setAttribute('src', `${tamO}${pele}${cabelo}${cc}${corboca}${olho}${acess}&eyesColor=bd641b`)
        img[53].setAttribute('src', `${tamO}${pele}${cabelo}${cc}${corboca}${olho}${acess}&eyesColor=6293bd`)

        // BOCA
        img[54].setAttribute('src', `${tamB}${pele}&mouth=happy09${corboca}${roupa}${corroupa}`)
        img[55].setAttribute('src', `${tamB}${pele}&mouth=happy06${corboca}${roupa}${corroupa}`)

        // COR DA BOCA
        img[56].setAttribute('src', `${tamB}${pele}${boca}&mouthColor=be7054${roupa}${corroupa}`)
        img[57].setAttribute('src', `${tamB}${pele}${boca}&mouthColor=de0f0d${roupa}${corroupa}`)
        img[58].setAttribute('src', `${tamB}${pele}${boca}&mouthColor=e35d6a${roupa}${corroupa}`)

        // ROUPAS
        img[59].setAttribute('src', `${tamR}${pele}${boca}&clothing=variant03${corroupa}`)
        img[60].setAttribute('src', `${tamR}${pele}${boca}&clothing=variant05${corroupa}`)
        img[61].setAttribute('src', `${tamR}${pele}${boca}&clothing=variant07${corroupa}`)
        img[62].setAttribute('src', `${tamR}${pele}${boca}&clothing=variant09${corroupa}`)
        img[63].setAttribute('src', `${tamR}${pele}${boca}&clothing=variant10${corroupa}`)
        img[64].setAttribute('src', `${tamR}${pele}${boca}&clothing=variant12${corroupa}`)
        img[65].setAttribute('src', `${tamR}${pele}${boca}&clothing=variant15${corroupa}`)
        img[66].setAttribute('src', `${tamR}${pele}${boca}&clothing=variant22${corroupa}`)

        // COR DAS ROUPAS
        img[67].setAttribute('src', `${tamR}${pele}${boca}${roupa}&clothingColor=ae0001`)
        img[68].setAttribute('src', `${tamR}${pele}${boca}${roupa}&clothingColor=ffc425`)
        img[69].setAttribute('src', `${tamR}${pele}${boca}${roupa}&clothingColor=00b159`)
        img[70].setAttribute('src', `${tamR}${pele}${boca}${roupa}&clothingColor=44c585`)
        img[71].setAttribute('src', `${tamR}${pele}${boca}${roupa}&clothingColor=03396c`)
        img[72].setAttribute('src', `${tamR}${pele}${boca}${roupa}&clothingColor=428bca`)
        img[73].setAttribute('src', `${tamR}${pele}${boca}${roupa}&clothingColor=d11141`)
        img[74].setAttribute('src', `${tamR}${pele}${boca}${roupa}&clothingColor=ff6f69`)
        img[75].setAttribute('src', `${tamR}${pele}${boca}${roupa}&clothingColor=000000`)
        img[76].setAttribute('src', `${tamR}${pele}${boca}${roupa}&clothingColor=808080`)

        // ACESSÓRIOS
        img[77].setAttribute('src', `${tamA}${pele}${cabelo}${cc}${olho}${corolho}`)
        img[78].setAttribute('src', `${tamA}${pele}${cabelo}${cc}${olho}${corolho}&glasses=light07&glassesProbability=100&glassesColor=000000`)
        img[79].setAttribute('src', `${tamA}${pele}${olho}${corolho}&hat=variant02&hatProbability=100&hatColor=101010`)
        img[80].setAttribute('src', `${tamA}${pele}${olho}${corolho}&hat=variant10&hatProbability=100&hatColor=101010`)

        img[81].setAttribute('height', '50px')
        img[82].setAttribute('height', '50px')
        img[83].setAttribute('height', '50px')
        img[84].setAttribute('height', '50px')

        img[81].style.background = `#ffb162`
        img[82].style.background = `#b6e3f4`
        img[83].style.background = `#d1d4f9`
        img[84].style.background = `#909090`

        setTimeout(() => {
            rodando = false
            tela.style.display = 'none'
        }, tempo);
    })
}

let rodando = true
let i = 0
let id;
function rodar(){
    i += 7
    bola.style.rotate = `${i}deg`

    if (rodando == false){
        cancelAnimationFrame(id)
        i = 0
    }else{
        id = requestAnimationFrame(rodar)
    }
}