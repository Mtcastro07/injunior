//Leitura da variavel real, recebendo o numero.
let reais = parseFloat(prompt("Qual o seu valor em reais: "));
//Realização das operações e salvando seus resultados em variaveis específicas
let euro = reais / 6.1;
let dolar = reais / 5.7;

//Criação do alerta, que imprime o resultado da conversão, utilizando a função toFixed(2) para aproximar as casas decimais.
alert(
  `${reais} reais\n\n${euro.toFixed(2)} euros\n\n${dolar.toFixed(2)} dolares`,
);
