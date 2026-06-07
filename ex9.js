function compactarTexto(palavra) {
  let letras = palavra;
  letras = letras.split("");
  let quantidadeLetras = 0;
  let letraAtual = letras[0];
  let result = "";
  letras.forEach(function (letra) {
    if (letraAtual != letra) {
      result += `${letraAtual}${quantidadeLetras}`;
      letraAtual = letra;
      quantidadeLetras = 1;
    } else {
      quantidadeLetras += 1;
    }
  });
  result += `${letraAtual}${quantidadeLetras}`;
  return result;
}

let palavra = prompt("Me diga qualquer palavra que vou compactar seu texto");
alert(compactarTexto(palavra));
