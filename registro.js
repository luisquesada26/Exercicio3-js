let nome = prompt("Qual é seu nombre?")
let sobrenome = prompt("Qual é seu sobrenome?")
let idade = Number(prompt("Quantos anos vocẽ tem?"))
let nacionalidade = prompt("Qual é sua nacionalidade?")


let dados = {
    nome : nome, 
    sobrenome:sobrenome,
    idade:idade, 
    nacionalidade:nacionalidade
}  




console.log (`Olá, ${nome} ${sobrenome}, voce tem ${idade} anos de idade, e é ${nacionalidade}`)

console.table(dados)