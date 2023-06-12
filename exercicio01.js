// EXERCICIO 1

const readline = require('readline');

// Cria uma interface para ler entrada do usuário no console
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// Pergunta ao usuário qual número deseja calcular a tabuada
rl.question('Digite um número para calcular a tabuada: ', (number) => {
  // Converte a entrada do usuário para um número inteiro
const num = parseInt(number);

  // Verifica se o valor fornecido é um número válido
if (isNaN(num)) {
    console.log('Valor inválido. Por favor, digite um número válido.');
    rl.close();
return;
}

console.log(`Tabuada de ${num}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

rl.close();
});

/*Neste script, usamos o módulo readline embutido no Node.js para criar uma interface para ler a entrada do usuário no console. 
Em seguida, perguntamos ao usuário qual número ele deseja calcular a tabuada.
Após receber a entrada do usuário, convertemos o valor fornecido para um número inteiro usando parseInt().
Se o valor não for um número válido, exibimos uma mensagem de erro e encerramos o script. Em seguida,
utilizamos um loop for para calcular e exibir a tabuada do número fornecido. O loop executa 10 vezes,
multiplicando o número pelo contador do loop para obter o resultado da multiplicação. 
Cada resultado é exibido no console. Por fim, fechamos a interface de leitura (rl.close()) para encerrar o script corretamente.
Para executar o script, salve-o com uma extensão .js (por exemplo, tabuada.js) e execute-o no Node.js usando o comando node tabuada.js. 
O script solicitará ao usuário que digite um número e, em seguida, exibirá a tabuada correspondente no console.*/ 