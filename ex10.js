//Leitura do array time, que servirá como meio para armazenar as chaves e valores
let Time = [];

//Criação da função para ser adicionado o jogador, onde cada parametro será requisitado para o usuário
function adicionarJogador(nome, idade, posicao, pontuacao) {
  //Adicionando cada jogador, com suas chaves e valores, dentro do nosso array Time
  Time.push({
    Nome: nome,
    Idade: idade,
    Posição: posicao,
    Pontuação: pontuacao,
  });
  return Time;
}

//Criação da função para ser buscado o jogador, pela sua determinada posicao
function buscarPorPosicao(position) {
  //Leitura do array que irá armazenar os jogadores com a determinada posição
  let jogadores = [];

  //Uso do loop forEach para acessar cada conjunto de valores de cada jogador
  Time.forEach(function (ondeJoga) {
    //Acesso da chave posição e retira seu valor, sempre transformando ambos em letra minuscula, tanto o valor da chave quanto o valor contido no parâmetro
    if (ondeJoga.Posição.toLowerCase() == position.toLowerCase()) {
      //Adiciona o jogador, caso seja verdadeiro, ao array jogadores
      jogadores.push(ondeJoga.Nome);
    }
  });

  //Se não houver nenhum jogador dentro do array, retorna a mensagem de erro, caso o contrario, retorna o array com todos os jogadores
  if (jogadores.length == 0) {
    return "Não há jogadores nessa posição!";
  } else {
    return jogadores;
  }
}

//Criação da função listarTime
function listarTime() {
  //Leitura da string jogadores, que será formada
  let jogadores = "";

  //Uso de um loop forEach para acessar o conjunto de chaves e seus valores, de cada jogador
  Time.forEach(function (nome) {
    //Adiciona a string o nome dos jogadores
    jogadores += nome.Nome + "\n";
  });
  return jogadores;
}

//Criação da função para calcular a pontuação média
function calcularPontuacaoMedia() {
  //Leitura da quantidade de jogadores e a variavel para acumular a soma das pontuações
  let pontuacoes = 0;
  let qntdJogadores = 0;

  //Uso do loop forEach para acessar o conjuntos de chaves e seus valores, de cada jogador
  Time.forEach(function (pontos) {
    //Acumula a quantidade de pontos dentro da variavel pontuacoes, e inclementando um jogador
    pontuacoes += pontos.Pontuação;
    qntdJogadores += 1;
  });

  //Condicional para caso não há jogadores, e para oferecer a media caso haja
  if (qntdJogadores == 0) {
    return 0;
  } else {
    let media = pontuacoes / qntdJogadores;
    return media;
  }
}

//Criação da variavel boleana para determinar o funcionamento do programa
let funcionamento = true;

//Criação do loop para manter o funcionamento continuo ate que seja mudado, com while
while (funcionamento) {
  //Criação da string mensagem para o menu do programa
  let mensagem =
    "Bem vindo ao exercício 10! Escolha uma das opções abaixo:\n\n1 - Adicionar jogador\n\n2 - Buscar por posição\n\n3 - Listar time\n\n4 - Calcular pontuação média\n\n5 - Sair\n\n";

  //Leitura do comando do usuário
  let comando = parseInt(prompt(mensagem));

  //Criação de um switch para executar uma ação de acordo com o comando do usuário
  switch (comando) {
    case 1:
      //Leitura de todos os valores das chaves, e essas aplicadas na função adicionarJogador
      let nome = prompt("Me diga o nome do seu jogador");
      let posicao = prompt("Me diga qual a posição dele");
      let idade = parseInt(prompt("Me diga a idade dele"));
      let pontuacao = parseInt(prompt("Me diga a pontuação dele"));
      adicionarJogador(nome, idade, posicao, pontuacao);
      break;
    case 2:
      //Leitura da posição e alerta o retorno da função buscarPorPosicao
      let position = prompt("Me diga a posicao do seu jogador");
      alert(buscarPorPosicao(position));
      break;
    case 3:
      //Alerta o retorno da função listarTime
      alert(listarTime());
      break;
    case 4:
      //Alerta a pontuação media dos jogadores
      alert(calcularPontuacaoMedia());
      break;
    case 5:
      //Finaliza o programa
      funcionamento = false;
      break;
    default:
      alert("Comando inválido! Tente novamente");
      break;
  }
}
