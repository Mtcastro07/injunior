//Criação da função compactarTexto
function compactarTexto(palavra) {
  //formação do array letras pela palavra dada
  let letras = palavra;
  letras = letras.split("");

  //Leitura da quantidade de letras, a primeira letra da palavra e a string result
  let quantidadeLetras = 0;
  let letraAtual = letras[0];
  let result = "";

  //Criação do loop forEach para ler cada letra da palavra
  letras.forEach(function (letra) {
    //Caso a letra atual for diferente da letra, a variavel result irá adicionar a letra atual com a quantidade de suas aparições
    if (letraAtual != letra) {
      result += `${letraAtual}${quantidadeLetras}`;
      letraAtual = letra;

      //Já é definido que há a existencia de uma letra, que seria a atual lida
      quantidadeLetras = 1;

      //Caso a letra for a mesma, a quantidade de letras contabiliza sua aparição
    } else {
      quantidadeLetras += 1;
    }
  });
  //Adicionando o ultimo par de letra e sua quantidade de aparições
  result += `${letraAtual}${quantidadeLetras}`;
  return result;
}

//Leitura da palavra e seu alerta, chamando a função compactarTexto
let palavra = prompt("Me diga qualquer palavra que vou compactar seu texto");

if (compactarTexto(palavra) == "undefined0") {
  alert("Não há nenhuma palavra!");
} else {
  alert(compactarTexto(palavra));
}
