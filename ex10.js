let Time = [];

function adicionarJogador(nome, idade, posicao, pontuacao) {
  Time.push({
    Nome: nome,
    Idade: idade,
    Posição: posicao,
    Pontuação: pontuacao,
  });
  return Time;
}

function buscarPorPosicao(position) {
  let jogadores = [];
  Time.forEach(function (ondeJoga) {
    if (ondeJoga.Posição.toLowerCase() == position.toLowerCase()) {
      jogadores.push(ondeJoga.Nome);
    }
  });
  if (jogadores.length == 0) {
    return "Não há jogadores nessa posição!";
  } else {
    return jogadores;
  }
}

function listarTime() {
  let jogadores = "";
  Time.forEach(function (nome) {
    jogadores += nome.Nome + "\n";
  });
  return jogadores;
}

function calcularPontuacaoMedia() {
  let pontuacoes = 0;
  let qntdJogadores = 0;
  Time.forEach(function (pontos) {
    pontuacoes += pontos.Pontuação;
    qntdJogadores += 1;
  });
  if (qntdJogadores == 0) {
    return 0;
  } else {
    let media = pontuacoes / qntdJogadores;
    return media;
  }
}

let funcionamento = true;
while (funcionamento) {
  let mensagem =
    "Bem vindo ao exercício 10! Escolha uma das opções abaixo:\n\n1 - Adicionar jogador\n\n2 - Buscar por posição\n\n3 - Listar time\n\n4 - Calcular pontuação média\n\n5 - Sair\n\n";
  let comando = parseInt(prompt(mensagem));
  switch (comando) {
    case 1:
      let nome = prompt("Me diga o nome do seu jogador");
      let posicao = prompt("Me diga qual a posição dele");
      let idade = parseInt(prompt("Me diga a idade dele"));
      let pontuacao = parseInt(prompt("Me diga a pontuação dele"));
      adicionarJogador(nome, idade, posicao, pontuacao);
      break;
    case 2:
      let position = prompt("Me diga a posicao do seu jogador");
      alert(buscarPorPosicao(position));
      break;
    case 3:
      alert(listarTime());
      break;
    case 4:
      alert(calcularPontuacaoMedia());
      break;
    case 5:
      funcionamento = false;
      break;
  }
}
