var titulo = document.getElementById('titulo')
var parag = document.getElementById('parag')
var seq = document.getElementById('seq')
var pseq = document.getElementById('pseq')
function trocar(){
    switch (titulo.style.translate){
        case '0px':
            titulo.style.translate = '-400px'
            parag.style.translate = '-500px'
        
            titulo.style.opacity = 0
            parag.style.opacity = 0
            break
        case '-400px':
            titulo.style.translate = '0px'
            parag.style.translate = '0px'

            titulo.style.opacity = 100
            parag.style.opacity = 100

            titulo.innerHTML = seq.innerHTML
            parag.innerHTML = pseq.innerHTML
            break
        default:
            titulo.style.translate = '0px'
            parag.style.translate = '0px'

            titulo.style.opacity = 100
            parag.style.opacity = 100
    }
}