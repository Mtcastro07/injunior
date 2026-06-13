//Criação da variavel boleana e leitura dos primeiros elementos do array
let funcionamento = true;
let clientes = ["João", "Maria"];

//Criação do loop para manter o programa funcionando até que a variavel bolena tenha seu valor alterado
while (funcionamento == true) {
  //Criação da string do inicio da mensagem do menu do programa
  let mensagem =
    "Bem vindo ao exercicio 7! \n\nEsses são os clientes na fila: \n\n Clientes: \n\n";

  //Uso de um loop for para incrementar a string de mensagem com a posição de cada cliente com "º"
  for (let i = 0; i < clientes.length; i++) {
    mensagem += `${i + 1}º ${clientes[i]} `;
  }
  //Diciona as opções no menu interativo, incrementando a string mensangem
  mensagem +=
    "\n\n Escolha uma das opções abaixo: \n\n 1 - Novo Cliente, adicionaremos um novo cliente a fila \n\n 2 - Atender Cliente, atenderemos o primeiro cliente da fila \n\n 3 - Sair, iremos encerrar o programa";
  //Leitura da escolha do usuário, adicionando um prompt junto com a string mensagem construida
  let escolha = parseInt(prompt(mensagem));

  //Uso de um switch para categorizar cada tipo de escolha de opção feita pelo usuário
  switch (escolha) {
    //Caso ele escolha 1, irá ser incrementado o novo cliente a fila
    case 1:
      clientes.push(prompt("Me diga o nome do novo cliente: "));
      break;

    //Caso ele escolha 2, irá verificar se há clientes na fila, a parti do tamanho do array, caso seja 0, irá dizer que não há clientes, caso o contrario, irá retirar o primeiro cliente da fila, com o uso da função splice, da posicao 0, retirando apenas 1
    case 2:
      if (clientes.length == 0) {
        alert("Não há clientes para serem removidos da fila!");
      } else {
        alert(`Atendendo o cliente ${clientes[0]}`);
        clientes.splice(0, 1);
      }
      break;
    //Caso ele escolha 3, irá terminar o programa
    case 3:
      funcionamento = false;
      break;
    //Em qualquer outro caso, ele irá reiniciar o programa, mantendo a mesma fila, alertando que a opção foi invalida
    default:
      funcionamento = true;
      alert("Opção inválida! Tente novamente");
      break;
  }
}
