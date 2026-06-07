let funcionamento = true;
let clientes = ["João", "Maria"];

while (funcionamento == true) {
  let mensagem =
    "Bem vindo ao exercicio 7! \n\nEsses são os clientes na fila: \n\n Clientes: \n\n";
  for (let i = 0; i < clientes.length; i++) {
    mensagem += `${i + 1}º ${clientes[i]} `;
  }
  mensagem +=
    "\n\n Escolha uma das opções abaixo: \n\n 1 - Novo Cliente, adicionaremos um novo cliente a fila \n\n 2 - Atender Cliente, atenderemos o primeiro cliente da fila \n\n 3 - Sair, iremos encerrar o programa";
  let escolha = parseInt(prompt(mensagem));

  switch (escolha) {
    case 1:
      clientes.push(prompt("Me diga o nome do novo cliente: "));
      break;
    case 2:
      if (clientes.length == 0) {
        alert("Não há clientes para serem removidos da fila!");
      } else {
        alert(`Atendendo o cliente ${clientes[0]}`);
        clientes.splice(0, 1);
      }
      break;
    case 3:
      funcionamento = false;
      break;
    default:
      funcionamento = true;
      alert("Opção inválida! Tente novamente");
      break;
  }
}
