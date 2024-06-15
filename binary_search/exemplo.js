var vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
var chave = 10
var inicio = 0
var meio = 0
var fim = vetor.length - 1
while (true){
   meio = parseInt((inicio + fim) / 2)
   if (vetor[meio] == chave){
       console.log(`Chave encontrada na posição ${meio}`)
       break
   }else{
       if (vetor[meio] < chave){
           inicio = meio + 1
       }
       else{
           fim = meio - 1
       }
   }
   if (inicio > fim){
       console.log('A chave não foi encontrada')
       break
   }
}