//Criação da função da verificação do palindromo
function palindromo(frase) {
  //Criação da variavel boleana
  let palin = true;
  //Transformando todas as letras para minusculo, facilitando a leitura da frase, sem diferenciar letras minusculas e maiusculas
  let novaFrase = frase.toLowerCase();
  //Criação do array palavra, dividindo cada letra individualmente
  let palavra = novaFrase.split("");
  //Criação dos arrays que vão armazenar as palavras
  let fraseInvertida = [];
  let fraseDireta = [];

  //Criando a frase direta e inversa, onde sera considerado apenas palavras fora dos espaços em branco, usando a função unshift, que adiciona na primeira posicao, e a push que adiciona na ultima posicao
  palavra.forEach(function (letra) {
    if (letra != " ") {
      fraseInvertida.unshift(letra);
      fraseDireta.push(letra);
    }
  });

  //Usando um loop for para comparar letra por letra em cada array, e caso uma das letras seja diferente, o loop é terminado, sendo a variavel boleana alterada caso necessario
  for (let i = 0; i < fraseDireta.length; i++) {
    if (fraseDireta[i] != fraseInvertida[i]) {
      palin = false;
      break;
    }
  }

  //Verificação da variavel booleana, para retornar se a frase é ou não, palindromo
  if (palin == true) {
    return "É palindromo";
  } else {
    return "Não é palindromo";
  }
}

//Leitura da frase em variavel, e apresenta o resultado tanto no alert, quanto no console
let frase = prompt(
  "Me diga uma frase e falarei se ela é um palindromo ou não: ",
);
console.log(palindromo(frase));
alert(palindromo(frase));
