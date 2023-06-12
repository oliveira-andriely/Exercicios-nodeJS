//EXERCICIO 4

const readline = require('readline');

// Cria uma interface para ler entrada do usuário no console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta ao usuário qual número deseja calcular o fatorial
rl.question('Digite um número para calcular o fatorial: ', (number) => {
  // Converte a entrada do usuário para um número inteiro
  const num = parseInt(number);

  // Verifica se o valor fornecido é um número válido
  if (isNaN(num)) {
    console.log('Valor inválido. Por favor, digite um número válido.');
    rl.close();
    return;
  }

  // Calcula o fatorial do número
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }

  console.log(`O fatorial de ${num} é: ${factorial}`);

  rl.close();
});
