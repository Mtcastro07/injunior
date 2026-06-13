//Criação da função que calcula o fatorial
function fatorial(num) {
  let fatorial = 1;
  for (let i = 0; i < num - 1; i++) {
    fatorial *= num - i;
  }
  return fatorial;
}

//Criação da função validação, para caso o numero não respeite as condições, nele ser positivo ou ser inteiro, e apenas retornar um número valido
function validacao(num) {
  while (num < 0 || Number.isInteger(num) == false) {
    num = parseFloat(prompt("Numero inválido! insira outro numero: "));
  }
  return num;
}

//Definição da variavel de boleana, para finalização do loop
let funcionamento = true;
while (funcionamento == true) {
  //Leitura do numero em float, para o usuario não ter limitação de entrada dos numeros, podendo colocar qualquer um
  let num = parseFloat(
    prompt("Me diga um numero para calcular seu fatorial: "),
  );

  //Realização da validação do numero, e apos receber um numero valido, realizar seu fatorial
  num = validacao(num);
  num = fatorial(num);

  //Imprime na tela o numero em fatorial
  alert(`Seu número em fatorial é: ${num}`);

  //Leitura do comando e sua validação, sempre considerando seu minusculo, para facilitar a entrada
  let comando = prompt("Você deseja continuar? responda com S/s ou N/n");
  comando = comando.toLowerCase();
  if (comando != "s" && comando != "n") {
    while (comando != "s" && comando != "n") {
      comando = prompt("Comando inválido! responda com S/s ou N/n");
      comando = comando.toLowerCase();
    }
  }

  //Verificar a escolha do usuário, com o comando correto
  if (comando == "s") {
    funcionamento = true;
  } else {
    funcionamento = false;
  }
}
