var idade = 67
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log(`Indivíduo Menor de Idade, por isso, não pode votar`)
} else if (idade < 18 || idade > 65) {
    console.log('Voto Opcional') 
} else {
    console.log('Voto Obrigatório')
}