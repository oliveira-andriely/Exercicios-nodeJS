//EXERCICIO 3

const readline = require('readline');

// Cria uma interface para ler entrada do usuário no console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta ao usuário o raio da circunferência
rl.question('Digite o raio da circunferência: ', (radius) => {
  // Converte a entrada do usuário para um número em ponto flutuante
  const r = parseFloat(radius);

  // Verifica se o valor fornecido é um número válido
  if (isNaN(r)) {
    console.log('Valor inválido. Por favor, digite um número válido para o raio.');
    rl.close();
    return;
  }

  // Calcula a área da circunferência
  const area = Math.PI * Math.pow(r, 2);

  console.log(`A área da circunferência com raio ${r} é: ${area.toFixed(2)}`);

  rl.close();
});

/*Neste script, também utilizamos o módulo readline do Node.js para criar uma interface de leitura no console. 
Após a execução do script, ele solicitará ao usuário que digite o raio da circunferência. Assim como no exemplo anterior, 
convertemos o valor fornecido pelo usuário para um número em ponto flutuante usando parseFloat(). 
Em seguida, verificamos se o valor fornecido é um número válido. Se não for, 
exibimos uma mensagem de erro e encerramos o script.
Em seguida, utilizamos a fórmula matemática da área de uma circunferência, π * raio^2, para calcular a área.
A constante Math.PI representa o valor de π (pi), e a função Math.pow() é usada para calcular o raio elevado ao quadrado.
Por fim, exibimos o resultado da área da circunferência no console com duas casas decimais usando o método toFixed().
Após a exibição do resultado, fechamos a interface de leitura com rl.close() para encerrar o script corretamente. */