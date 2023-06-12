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

  // Calcula o perímetro da circunferência
  const perimeter = 2 * Math.PI * r;

  console.log(`O perímetro da circunferência com raio ${r} é: ${perimeter.toFixed(2)}`);

  rl.close();
});

/*Neste script, utilizamos o módulo readline do Node.js para criar uma interface de leitura no console. 
Após a execução do script, ele solicitará ao usuário que digite o raio da circunferência.
Após receber a entrada do usuário, convertemos o valor fornecido para um número em ponto flutuante usando parseFloat(). Se o valor não for um número válido, exibimos uma mensagem de erro e encerramos o script.
Em seguida, usamos a fórmula matemática do perímetro de uma circunferência, 2 * PI * raio, para calcular o perímetro. 
A constante Math.PI é usada para representar o valor de π (pi).Por fim, exibimos o resultado do perímetro da circunferência no console com duas casas decimais usando o método toFixed().
Após a exibição do resultado, fechamos a interface de leitura com rl.close() para encerrar o script corretamente. */