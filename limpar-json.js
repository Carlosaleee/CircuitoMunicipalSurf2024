const fs = require('fs');

// Nome do arquivo JSON que você quer limpar
const inscricoes = 'inscricoes.json';

// Escreve um objeto vazio no arquivo JSON
fs.writeFile(inscricoes, '{}', err => {
  if (err) throw err;
  console.log(`Arquivo ${inscricoes} limpo.`);
});
