const calculadora = require('./calculadora');
const minimist = require('minimist')

const args = minimist(process.args.slice(2))

console.log(argv={nome:"Nicolas", idade:16})

const nome = argv["nome"]
const idade = argv["idade"]

console.log(`Nome: ${nome} |Idade: ${idade}`);