// array with drawn values
// var arr = []
// for(let cont = 0; cont <= 10; cont++){
//     arr[cont] = Math.round(Math.random() * 10)
// }
// console.log(arr)

// // simple sequential search
// var key = 7
// var c = 0
// for(let pos in arr){
//     if (arr[pos] == key){
//         c++
//         console.log(`value found in position ${pos} \n`)
//     }else{c += 0}
// }
// if (c == 0){
//     console.log('value not found \n')
// }

// // usando  " indexOf() "
// if (arr.indexOf(key) == -1){
//     console.log('value not found')
// }else{
//     console.log(`value found in position ${arr.indexOf(key)}`)
// }

var chave = 6
var vetor = [2, 4 , 1, 6, 3, 8]
var contador = 0
while (contador < vetor.length - 1){
    if (vetor[contador] == chave){
        console.log(`Chave encontrada na posição ${contador}`)
        break
    }
    else{
        contador += 1
    }
}