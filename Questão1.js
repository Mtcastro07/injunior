//Questão 1

let reais = parseFloat(prompt("Qual o seu valor em reais: "));
let euro = reais / 6.1;
let dolar = reais / 5.7;

alert(
  reais +
    "reais" +
    "\n" +
    euro.toFixed(2) +
    "euros" +
    "\n" +
    dolar.toFixed(2) +
    " dolares",
);

//Questão 2

let a = parseInt(prompt("Me fale o coeficiente a: "));
let b = parseInt(prompt("Me fale o coeficente b: "));
let c = parseInt(prompt("Me fale o coeficiente c: "));

discriminante = b ** 2 - 4 * a * c;

if (discriminante > 0) {
  let raiz1 = ((-1 * b + discriminante ** 0.5) / 2) * a;
  let raiz2 = ((-1 * b - discriminante ** 0.5) / 2) * a;

  console.log(raiz1, raiz2);
} else if ((discriminante = 0)) {
  let raiz = ((-1 * b) / 2) * a;
  console.log(raiz);
} else {
  console.log("Essa equação de segundo grau não possui raizes reais.");
}

//Questão 3

function fatorial(numero) {
  let fatorial = 1;
  let numeroAtual = numero;
  for (let i = 0; i < numero; i++) {
    fatorial *= numeroAtual;
    numeroAtual -= 1;
  }
  return fatorial;
}

function validacao(num) {
  if (num != parseInt(num)) {
    while (num != parseInt(num)) {
      num = parseFloat(prompt("Numero invalido! Me diga o novo numero: "));
    }
  }
  return num;
}

let numero = parseFloat(prompt("Me diga o numero para ter seu fatorial: "));

numero = validacao(numero);

console.log(fatorial(numero));

let Pergunta = prompt("Deseja continuar?: ");

while (Pergunta == "s" || Pergunta == "S") {
  numero = parseInt(
    prompt("Me fale o numero que deseja calcular seu fatorial: "),
  );
  numero = validacao(numero);
  console.log(fatorial(numero));
  Pergunta = prompt("Deseja continuar?: ");
}

//Questão 4

function palindromo(frase) {
  let palin = true;
  let novaFrase = frase.toLowerCase();
  let palindromo = novaFrase.split("");
  fraseInvertida = [];
  fraseDireta = [];

  palindromo.forEach(function (letra) {
    if (letra == " ") {
      fraseInvertida = fraseInvertida;
    } else {
      fraseInvertida.unshift(letra);
    }
  });
  palindromo.forEach(function (letra) {
    if (letra == " ") {
      fraseDireta = fraseDireta;
    } else {
      fraseDireta.push(letra);
    }
  });
  for (let i = 0; i < fraseDireta.length; i++) {
    if (fraseDireta[i] != fraseInvertida[i]) {
      palin = false;
      break;
    }
  }
  if (palin == true) {
    return "É palindromo";
  } else {
    return "Não é palindromo";
  }
}

const frase = prompt(
  "Me diga uma frase e falarei se ela é um palindromo ou não: ",
);
console.log(palindromo(frase));
