let valores = [8,1,7,4,2,9]

console.log(valores) // forma padrão

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} // forma simplificada 

/* 
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
*/
// forma mais simplificada ainda 
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)