// // draw without repeating and ordering the values

// var arr = []
// var pos = 0

// // draw without repetitions
// while (pos < 10){
//     let num = parseInt(Math.random() * 26)
//     if (arr.indexOf(num) == -1 && num >= 9){
//         arr[pos] = num
//         pos++
//     }else{

//     }
// }

// // order the Array (Bubble Sort)
// // ass = assistant
// var ass = 0
// for (var m = 0; m < arr.length - 1; m ++){
//     for (var s = m+1; s < arr.length; s ++){
//         //        SWAP
//         if (arr[m] > arr[s]){
//             //  m   s   ass
//             // [2] [1] [   ]

//             ass = arr[m]   //  m   s   ass
//                            // [ ] [1] [ 2 ]
        

//             arr[m] = arr[s]   //  m   s   ass
//                               // [1] [ ] [ 2 ]
            

//             arr[s] = ass   //  m   s   ass
//                            // [1] [2] [   ]
//         }
//     }
// }

// for (let item in arr){
//     console.log(arr[item])
// }

// var key = parseInt(Math.random() * 26)
// console.log(`Key = ${key}`)

// Binary Search
var inicio = 0
var meio = 0
var fim = vetor.length - 1
while (true){
    meio = parseInt((inicio + fim) / 2)
    if (vetor[meio] == chave){
        console.log(`Chave encontrada na posição ${meio}`)
        break
    }
}
else{
        if (vetor[meio] < chave){
            inicio = meio + 1
        }
        else{
            fim = meio - 1
        }
    }
    if (inicio > fim){
        console.log(`The chave ${chave} is not found`)
        break
    }
}