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
var meio = parseInt((inicio + fim) / 2)
var fim = arr.length - 1
var contador = 0
while (true){
    middle = parseInt((start + end) / 2)
    if (arr[middle] == key){
        cont++
        console.log(`the key ${key} was found in position ${middle}\nattempts: ${cont}`)
        break
    }else{
        cont++
        if (arr[middle] < key){
            start = middle + 1
        }
        else{
            end = middle - 1
        }
    }
    if (start > end){
        console.log(`The key ${key} is not found`)
        break
    }
}