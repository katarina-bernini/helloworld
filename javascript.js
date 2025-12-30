const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// let nome = "Katarina";


// console.log(nome);
// nome = "Matheus";
// console.log(nome);
// let idade = 29;
// console.log(nome + " " + idade);
// idade = 30;
// console.log(idade);

console.log("descubra quantos anos você tem");

let anoAtual = 2025;

rl.question("Qual o seu ano de nascimento? ", function(anoNascimento) {
  const idade = anoAtual - parseInt(anoNascimento);
  console.log(`Você tem ${idade} anos.`);
  rl.close();
});
 